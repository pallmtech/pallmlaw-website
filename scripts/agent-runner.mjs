import { promises as fs } from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";

const ROOT = process.cwd();
const AGENTS_DIR = path.join(ROOT, ".agents");
const TASKS_DIR = path.join(AGENTS_DIR, "tasks");
const INBOX_DIR = path.join(TASKS_DIR, "inbox");
const CLAIMED_DIR = path.join(TASKS_DIR, "claimed");
const DONE_DIR = path.join(TASKS_DIR, "done");
const BLOCKED_DIR = path.join(TASKS_DIR, "blocked");
const GENERATED_DRAFTS_DIR = path.join(AGENTS_DIR, "drafts", "generated");
const PRODUCT_INBOX_DIR = path.join(AGENTS_DIR, "product", "inbox");
const REPORTS_DIR = path.join(AGENTS_DIR, "reports");
const RUNTIME_DIR = path.join(AGENTS_DIR, "runtime");
const PID_FILE = path.join(RUNTIME_DIR, "agent-runner.pid");
const LOG_FILE = path.join(RUNTIME_DIR, "agent-runner.log");
const PRODUCT_INBOX_STATE_FILE = path.join(RUNTIME_DIR, "product-inbox-state.json");

const OWNER_CHARTERS = {
  "marketing-director": ".agents/marketing-director.md",
  "research-icp": ".agents/research-icp.md",
  messaging: ".agents/messaging.md",
  "brand-strategy": ".agents/brand-strategy.md",
  "website-conversion": ".agents/website-conversion.md",
  "content-editorial": ".agents/content-editorial.md",
  "social-media": ".agents/social-media.md",
  "outbound-growth": ".agents/outbound-growth.md",
};

const OWNER_DISPLAY_NAMES = {
  "marketing-director": "Marketing CMO",
  "research-icp": "Research / ICP",
  messaging: "Messaging",
  "brand-strategy": "Brand Strategy",
  "website-conversion": "Website Conversion",
  "content-editorial": "Content Editorial",
  "social-media": "Social Media",
  "outbound-growth": "Outbound Growth",
};

const BANNED_PATTERNS = [
  /\ball-in-one\b/i,
  /\brevolutionary\b/i,
  /\bgeneric AI software\b/i,
  /\bAI-first\b/i,
  /\bConstant Contact\b/i,
  /\bSalesforce-grade\b/i,
];

const DEFAULT_POLL_INTERVAL_MS = 30000;

async function main() {
  const command = process.argv[2] ?? "run";

  await ensureDirectories();

  if (command === "start") {
    const started = await startDaemon();
    console.log(started);
    return;
  }

  if (command === "stop") {
    const stopped = await stopDaemon();
    console.log(stopped);
    return;
  }

  if (command === "run") {
    const result = await runUntilInboxEmpty();
    await writeLatestReport(result);
    console.log(formatRunSummary(result));
    return;
  }

  if (command === "watch") {
    const intervalMs = Number(process.argv[3] ?? DEFAULT_POLL_INTERVAL_MS);
    console.log(`Watching ${relativeToRoot(INBOX_DIR)} every ${intervalMs}ms`);
    await writeLatestReport({ processed: 0, blocked: 0, generated: [] });
    while (true) {
      const result = await runUntilInboxEmpty();
      await writeLatestReport(result);
      if (result.processed > 0 || result.blocked > 0) {
        console.log(formatRunSummary(result));
      }
      await sleep(intervalMs);
    }
  }

  if (command === "status") {
    const [inbox, claimed, done, blocked] = await Promise.all([
      countJsonFiles(INBOX_DIR),
      countJsonFiles(CLAIMED_DIR),
      countJsonFiles(DONE_DIR),
      countJsonFiles(BLOCKED_DIR),
    ]);

    console.log(`inbox: ${inbox}`);
    console.log(`claimed: ${claimed}`);
    console.log(`done: ${done}`);
    console.log(`blocked: ${blocked}`);
    console.log(`daemon: ${await daemonStatus()}`);
    return;
  }

  throw new Error(`Unknown command "${command}"`);
}

async function ensureDirectories() {
  await Promise.all(
    [TASKS_DIR, INBOX_DIR, CLAIMED_DIR, DONE_DIR, BLOCKED_DIR, GENERATED_DRAFTS_DIR, REPORTS_DIR, RUNTIME_DIR].map((dir) =>
      fs.mkdir(dir, { recursive: true }),
    ),
  );
}

async function startDaemon() {
  const existingPid = await readPid();
  if (existingPid && (await isProcessRunning(existingPid))) {
    return `agent watcher already running (pid ${existingPid})`;
  }

  const outFd = await fs.open(LOG_FILE, "a");
  const child = spawn(process.execPath, [path.join(ROOT, "scripts", "agent-runner.mjs"), "watch", "15000"], {
    cwd: ROOT,
    detached: true,
    stdio: ["ignore", outFd.fd, outFd.fd],
  });

  child.unref();
  await writePid(child.pid);
  await outFd.close();
  return `started agent watcher (pid ${child.pid})`;
}

async function stopDaemon() {
  const pid = await readPid();
  if (!pid) {
    return "agent watcher is not running";
  }

  if (!(await isProcessRunning(pid))) {
    await removePid();
    return "agent watcher pid was stale and has been cleared";
  }

  process.kill(pid);
  await removePid();
  return `stopped agent watcher (pid ${pid})`;
}

async function daemonStatus() {
  const pid = await readPid();
  if (!pid) {
    return "stopped";
  }

  if (!(await isProcessRunning(pid))) {
    await removePid();
    return "stale";
  }

  return `running (pid ${pid})`;
}

async function runUntilInboxEmpty() {
  const summary = { processed: 0, blocked: 0, generated: [] };
  await autoEnqueueProductInboxTasks();

  while (true) {
    const pendingTasks = await listJsonFiles(INBOX_DIR);
    if (pendingTasks.length === 0) {
      return summary;
    }

    let handledInPass = false;
    for (const taskPath of pendingTasks) {
      const outcome = await processTask(taskPath);
      handledInPass = true;

      if (outcome.status === "done") {
        summary.processed += 1;
        summary.generated.push(outcome.artifactPath);
      } else if (outcome.status === "blocked") {
        summary.blocked += 1;
      }
    }

    if (!handledInPass) {
      return summary;
    }
  }
}

async function processTask(inboxTaskPath) {
  const task = await readTask(inboxTaskPath);
  validateTask(task);

  const claimedTaskPath = path.join(CLAIMED_DIR, path.basename(inboxTaskPath));
  await fs.rename(inboxTaskPath, claimedTaskPath);

  const missingInputs = await findMissingInputs(task.inputs ?? []);
  if (missingInputs.length > 0) {
    const blockedTask = {
      ...task,
      status: "blocked",
      blockedAt: new Date().toISOString(),
      blockedReason: `Missing inputs: ${missingInputs.join(", ")}`,
    };
    await writeJson(path.join(BLOCKED_DIR, path.basename(claimedTaskPath)), blockedTask);
    await fs.rm(claimedTaskPath, { force: true });
    return { status: "blocked" };
  }

  const context = await buildTaskContext(task);
  const artifactPath = await writeArtifact(task, context);
  const doneTask = {
    ...task,
    status: "done",
    processedAt: new Date().toISOString(),
    output: {
      artifact: relativeToRoot(artifactPath),
    },
  };

  await maybeQueueMarketingReview(task, doneTask.output.artifact);
  await writeJson(path.join(DONE_DIR, path.basename(claimedTaskPath)), doneTask);
  await fs.rm(claimedTaskPath, { force: true });

  return { status: "done", artifactPath: doneTask.output.artifact };
}

async function autoEnqueueProductInboxTasks() {
  const state = await readProductInboxState();
  const inboxFiles = (await listJsonAndMarkdown(PRODUCT_INBOX_DIR))
    .filter((filePath) => filePath.toLowerCase().endsWith(".md"))
    .filter((filePath) => path.basename(filePath).toLowerCase() !== "readme.md");

  for (const absolutePath of inboxFiles) {
    const relativePath = relativeToRoot(absolutePath);
    if (state.seen[relativePath]) {
      continue;
    }

    const content = await safeReadText(absolutePath);
    const routes = determineRoutesForProductInbox(relativePath, content);

    for (const route of routes) {
      const task = buildProductInboxTask(relativePath, content, route);
      await writeTaskIfMissing(task);
    }

    state.seen[relativePath] = {
      firstSeenAt: new Date().toISOString(),
      routes,
    };
  }

  await writeJson(PRODUCT_INBOX_STATE_FILE, state);
}

async function buildTaskContext(task) {
  const charterPath = path.join(ROOT, OWNER_CHARTERS[task.owner]);
  const charter = await safeReadText(charterPath);
  const inputFiles = [];

  for (const input of task.inputs ?? []) {
    const absolutePath = path.join(ROOT, input);
    const content = await readInputContent(absolutePath);
    inputFiles.push({
      path: input,
      content,
    });
  }

  const recentProductInboxItems = await listJsonAndMarkdown(PRODUCT_INBOX_DIR);
  const recentProductInputs = recentProductInboxItems.slice(-3).map(relativeToRoot);

  return {
    charter,
    inputFiles,
    recentProductInputs,
  };
}

async function writeArtifact(task, context) {
  const fileName = `${sanitizeSegment(task.id)}-${sanitizeSegment(task.owner)}.md`;
  const artifactPath = path.join(GENERATED_DRAFTS_DIR, fileName);
  const artifact = buildArtifact(task, context);
  await fs.writeFile(artifactPath, artifact, "utf8");
  return artifactPath;
}

function buildArtifact(task, context) {
  const timestamp = new Date().toISOString();
  const header = [
    `# ${OWNER_DISPLAY_NAMES[task.owner]} Output`,
    "",
    `- Task id: \`${task.id}\``,
    `- Task type: \`${task.type}\``,
    `- Owner: \`${task.owner}\``,
    `- Priority: \`${task.priority ?? "normal"}\``,
    `- Generated: \`${timestamp}\``,
  ];

  if (task.title) {
    header.push(`- Title: ${task.title}`);
  }

  const sections = [
    buildTaskIntentSection(task),
    buildGuardrailsSection(task, context),
    buildInputDigestSection(context),
    buildWorkerOutputSection(task, context),
  ];

  return [...header, "", ...sections].join("\n");
}

function buildTaskIntentSection(task) {
  const lines = ["## Task Intent", ""];

  if (task.brief) {
    lines.push(task.brief, "");
  } else {
    lines.push("No explicit brief provided. Use task type and inputs as the execution brief.", "");
  }

  if ((task.requires ?? []).length > 0) {
    lines.push(`Required consults: ${(task.requires ?? []).join(", ")}`, "");
  }

  return lines.join("\n");
}

function buildGuardrailsSection(task, context) {
  const lines = [
    "## Guardrails",
    "",
    "Use the repo's marketing governance before making public-facing recommendations.",
    "Treat product inbox handoffs as source of truth for capability claims.",
    "Do not invent testimonials, ROI, customer counts, or broad multi-practice maturity.",
    "Keep workflow control and Estate Planning specificity ahead of AI language.",
    "",
    "### Charter Excerpt",
    "",
    trimBlock(context.charter, 1400),
    "",
  ];

  if (context.recentProductInputs.length > 0) {
    lines.push("### Recent Product Inbox Files", "");
    for (const input of context.recentProductInputs) {
      lines.push(`- \`${input}\``);
    }
    lines.push("");
  }

  if (task.owner === "marketing-director") {
    lines.push("### Approval Rule", "");
    lines.push("Marketing CMO is the only automated approval gate in this runner.", "");
  }

  return lines.join("\n");
}

function buildInputDigestSection(context) {
  const lines = ["## Input Digest", ""];

  if (context.inputFiles.length === 0) {
    lines.push("No task inputs were attached.", "");
    return lines.join("\n");
  }

  for (const inputFile of context.inputFiles) {
    lines.push(`### ${inputFile.path}`, "");
    lines.push(trimBlock(inputFile.content, 1800), "");
  }

  return lines.join("\n");
}

function buildWorkerOutputSection(task, context) {
  if (task.owner === "marketing-director") {
    return buildMarketingDirectorSection(task, context);
  }

  return buildSpecialistSection(task, context);
}

function buildSpecialistSection(task, context) {
  const recommendations = buildRecommendations(task, context);
  const draftStructure = buildDraftStructure(task);
  const safeClaimNotes = extractClaimNotes(context);
  const lines = [
    "## Specialist Draft",
    "",
    `This draft was prepared by the ${OWNER_DISPLAY_NAMES[task.owner]} worker.`,
    "It is not publishable output until the Marketing CMO reviews it.",
    "",
    "### Recommended Direction",
    "",
  ];

  for (const line of recommendations) {
    lines.push(`- ${line}`);
  }

  lines.push("", "### Draft Structure", "");
  for (const line of draftStructure) {
    lines.push(`- ${line}`);
  }

  lines.push("", "### Safe Claim Notes", "");
  for (const line of safeClaimNotes) {
    lines.push(`- ${line}`);
  }

  lines.push("", "### Review Payload", "");
  lines.push("```json");
  lines.push(
    JSON.stringify(
      {
        recommendations,
        draftStructure,
        safeClaimNotes,
      },
      null,
      2,
    ),
  );
  lines.push("```", "");
  lines.push("", "### Next Step", "", "- Queue Marketing CMO review before editing website copy or publishing channel output.", "");

  return lines.join("\n");
}

function buildMarketingDirectorSection(task, context) {
  const reviewPayload = extractReviewPayload(context.inputFiles[0]?.content ?? "");
  const draftText = reviewPayload ? JSON.stringify(reviewPayload) : context.inputFiles[0]?.content ?? "";
  const flaggedPatterns = BANNED_PATTERNS.filter((pattern) => pattern.test(draftText)).map(String);
  const communicationsOverclaim =
    /reusable email templates and automation rules in the admin layer/i.test(draftText) &&
    !/internal admin foundations for reusable email templates and workflow automation rules/i.test(draftText);

  const verdict = flaggedPatterns.length === 0 && !communicationsOverclaim ? "approve" : "revise";
  const lines = [
    "## CMO Review",
    "",
    `Verdict: \`${verdict}\``,
    "",
    "### Review Notes",
    "",
  ];

  const reviewNotes = [
    verdict === "approve"
      ? "Draft is directionally aligned to repo guardrails and can move into implementation."
      : "Draft needs revision before it should be applied to the website or reused downstream.",
    "Keep Estate Planning specificity and workflow-control language clear.",
    "Avoid upgrading internal communications foundations into a polished public capability claim.",
  ];

  for (const note of reviewNotes) {
    lines.push(`- ${note}`);
  }

  if (flaggedPatterns.length > 0 || communicationsOverclaim) {
    lines.push("", "### Blocking Issues", "");
  }

  for (const pattern of flaggedPatterns) {
    lines.push(`- Banned pattern detected: \`${pattern}\``);
  }

  if (communicationsOverclaim) {
    lines.push(
      "- Communications wording is too strong. Use `internal admin foundations for reusable email templates and workflow automation rules` instead.",
    );
  }

  lines.push("", "### Approval Boundary", "");
  lines.push(
    verdict === "approve"
      ? "- Approved by Marketing CMO for repo editing, not as a broad product-market claim beyond the attached inputs."
      : "- Hold implementation until the specialist draft is revised and re-reviewed.",
    "",
  );

  return lines.join("\n");
}

function extractReviewPayload(markdown) {
  const match = markdown.match(/### Review Payload\s+```json\s*([\s\S]*?)\s*```/i);
  if (!match) {
    return null;
  }

  try {
    return JSON.parse(match[1]);
  } catch {
    return null;
  }
}

function buildRecommendations(task, context) {
  const recommendations = [];
  const type = task.type.toLowerCase();

  if (task.owner === "messaging") {
    recommendations.push("Lead with operational clarity, ownership, and visibility instead of generic automation language.");
    recommendations.push("Translate raw product detail into buyer-readable business language with explicit ICP fit.");
  }

  if (task.owner === "website-conversion") {
    recommendations.push("Tighten the page sequence so fit, difference, and CTA are obvious within the first screenfuls.");
    recommendations.push("Keep proof blocks concrete and avoid turning the page into a feature inventory.");
  }

  if (task.owner === "brand-strategy") {
    recommendations.push("Protect a premium, disciplined posture and avoid generic startup styling or inflated claims.");
  }

  if (task.owner === "research-icp") {
    recommendations.push("Keep the current Estate Planning wedge unless the inputs justify a narrower or different buyer segment.");
  }

  if (type.includes("homepage")) {
    recommendations.push("Structure the draft around hero, problem, operational proof, and a low-friction fit CTA.");
  }

  if (type.includes("landing")) {
    recommendations.push("Keep the landing page specific to one buyer problem and one conversion ask.");
  }

  if (type.includes("outbound")) {
    recommendations.push("Keep outreach short, role-specific, and focused on a fit conversation rather than a hard sell.");
  }

  if (recommendations.length === 0) {
    recommendations.push("Use the attached inputs to produce a narrow, role-aligned draft with conservative product claims.");
  }

  return unique(recommendations);
}

function buildDraftStructure(task) {
  const type = task.type.toLowerCase();

  if (type.includes("homepage")) {
    return [
      "Hero headline and subhead",
      "Operational problem statement",
      "Differentiation block grounded in workflow control",
      "Proof or capability section using only sourced claims",
      "Fit-oriented CTA",
    ];
  }

  if (type.includes("landing")) {
    return [
      "Audience-specific headline",
      "Pain and cost of current-state operations",
      "How PallmLaw changes the workflow",
      "Credibility block",
      "Single CTA",
    ];
  }

  if (type.includes("review")) {
    return ["Verdict", "Blocking issues", "Approval boundary"];
  }

  return ["Objective", "Guardrails", "Recommended draft outline", "Next step"];
}

function extractClaimNotes(context) {
  const notes = [];

  for (const input of context.inputFiles) {
    const lines = input.content.split(/\r?\n/);
    for (const line of lines) {
      const normalized = line.trim();
      if (
        normalized.startsWith("- ") &&
        (/supports/i.test(normalized) ||
          /do not say/i.test(normalized) ||
          /do not add/i.test(normalized) ||
          /revised wording/i.test(normalized) ||
          /strong claims/i.test(normalized))
      ) {
        notes.push(normalized.replace(/^- /, ""));
      }
    }
  }

  if (notes.length === 0) {
    notes.push("No explicit claim bullets were found in the task inputs.");
  }

  return unique(notes).slice(0, 8);
}

async function maybeQueueMarketingReview(task, artifactRelativePath) {
  if (task.owner === "marketing-director" || task.autoReview === false) {
    return;
  }

  const reviewTaskId = `${task.id}--marketing-review`;
  const reviewFileName = `${reviewTaskId}.json`;
  const reviewTaskPath = path.join(INBOX_DIR, reviewFileName);

  if (await exists(reviewTaskPath)) {
    return;
  }

  const reviewTask = {
    id: reviewTaskId,
    type: "review",
    owner: "marketing-director",
    priority: task.priority ?? "normal",
    title: `Review ${task.id}`,
    brief: `Review the attached specialist draft before any repo edits are made.`,
    inputs: [artifactRelativePath, ...(task.inputs ?? [])],
    status: "new",
    createdAt: new Date().toISOString(),
    sourceTask: task.id,
  };

  await writeJson(reviewTaskPath, reviewTask);
}

function determineRoutesForProductInbox(relativePath, content) {
  const lowered = content.toLowerCase();
  const routes = ["messaging"];

  if (
    /recommended website\/content updates|homepage:|landing pages:|website|cta|landing page|homepage/i.test(content)
  ) {
    routes.push("website-conversion");
  }

  if (/blog\/social ideas|blog|editorial|content/i.test(content)) {
    routes.push("content-editorial");
    routes.push("social-media");
  }

  if (/outbound\/email implications|cold outreach|outbound|sequence|email/i.test(content)) {
    routes.push("outbound-growth");
  }

  if (/icp implications|who it matters for|audience|buyer/i.test(content)) {
    routes.push("research-icp");
  }

  if (/brand|voice|tone|visual/i.test(content) && !lowered.includes("task assignment email")) {
    routes.push("brand-strategy");
  }

  return unique(routes);
}

function buildProductInboxTask(relativePath, content, owner) {
  const fileStem = path.basename(relativePath, path.extname(relativePath));
  const id = `product-inbox-${sanitizeSegment(fileStem)}-${sanitizeSegment(owner)}`;
  const title = `Product inbox intake: ${fileStem}`;
  const routeRequires = owner === "messaging" ? ["website-conversion"] : [];

  return {
    id,
    type: "product-inbox-intake",
    owner,
    priority: "high",
    title,
    brief: buildProductInboxBrief(owner, content),
    inputs: [relativePath],
    requires: routeRequires,
    status: "new",
    createdAt: new Date().toISOString(),
    source: {
      kind: "product-inbox",
      file: relativePath,
    },
  };
}

function buildProductInboxBrief(owner, content) {
  const base =
    "Review this product handoff, extract only safe public-facing implications, and produce role-specific draft guidance under the PallmLaw marketing rules.";

  const ownerSpecific = {
    messaging: "Focus on positioning and claim tightening.",
    "website-conversion": "Focus on page structure, section implications, and CTA-safe website changes.",
    "content-editorial": "Focus on blog and long-form editorial opportunities worth drafting.",
    "social-media": "Focus on founder-led social angles and repurposable post ideas.",
    "outbound-growth": "Focus on safe outbound phrasing and sequence implications.",
    "research-icp": "Focus on target-buyer implications and whether the current Estate Planning wedge is strengthened or narrowed.",
    "brand-strategy": "Focus on whether the handoff changes tone, posture, or visual-story implications.",
  };

  const communicationsNote = /communication/i.test(content)
    ? " Treat internal communication foundations conservatively and do not present them as polished public product capabilities."
    : "";

  return `${base} ${ownerSpecific[owner] ?? ""}${communicationsNote}`.trim();
}

async function writeTaskIfMissing(task) {
  const fileName = `${task.id}.json`;
  const candidatePaths = [
    path.join(INBOX_DIR, fileName),
    path.join(CLAIMED_DIR, fileName),
    path.join(DONE_DIR, fileName),
    path.join(BLOCKED_DIR, fileName),
  ];

  for (const candidatePath of candidatePaths) {
    if (await exists(candidatePath)) {
      return;
    }
  }

  await writeJson(path.join(INBOX_DIR, fileName), task);
}

async function readTask(taskPath) {
  const raw = await fs.readFile(taskPath, "utf8");
  return JSON.parse(raw);
}

function validateTask(task) {
  if (!task.id || !task.type || !task.owner) {
    throw new Error("Task must include id, type, and owner.");
  }

  if (!OWNER_CHARTERS[task.owner]) {
    throw new Error(`Unknown task owner "${task.owner}"`);
  }
}

async function readInputContent(absolutePath) {
  const extension = path.extname(absolutePath).toLowerCase();

  if ([".md", ".txt", ".json", ".ts", ".tsx", ".js", ".jsx", ".css"].includes(extension)) {
    return safeReadText(absolutePath);
  }

  const stat = await fs.stat(absolutePath);
  return `Binary or non-text input.\nPath: ${relativeToRoot(absolutePath)}\nSize: ${stat.size} bytes`;
}

async function findMissingInputs(inputs) {
  const missing = [];

  for (const input of inputs) {
    const absolutePath = path.join(ROOT, input);
    if (!(await exists(absolutePath))) {
      missing.push(input);
    }
  }

  return missing;
}

async function listJsonFiles(dir) {
  const files = await fs.readdir(dir, { withFileTypes: true });
  return files
    .filter((entry) => entry.isFile() && entry.name.endsWith(".json"))
    .map((entry) => path.join(dir, entry.name))
    .sort();
}

async function listJsonAndMarkdown(dir) {
  const files = await fs.readdir(dir, { withFileTypes: true });
  return files
    .filter((entry) => entry.isFile() && (entry.name.endsWith(".json") || entry.name.endsWith(".md")))
    .map((entry) => path.join(dir, entry.name))
    .sort();
}

async function countJsonFiles(dir) {
  return (await listJsonFiles(dir)).length;
}

async function writeJson(filePath, data) {
  await fs.writeFile(filePath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
}

async function safeReadText(filePath) {
  return fs.readFile(filePath, "utf8");
}

async function exists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

function trimBlock(value, maxLength) {
  const normalized = value.trim();
  if (normalized.length <= maxLength) {
    return normalized;
  }

  return `${normalized.slice(0, maxLength).trimEnd()}...\n[truncated]`;
}

function sanitizeSegment(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function relativeToRoot(filePath) {
  return path.relative(ROOT, filePath).replace(/\\/g, "/");
}

function unique(values) {
  return [...new Set(values)];
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function formatRunSummary(summary) {
  const generated = summary.generated.length > 0 ? `\nartifacts:\n- ${summary.generated.join("\n- ")}` : "";
  return `processed: ${summary.processed}\nblocked: ${summary.blocked}${generated}`;
}

async function writeLatestReport(summary) {
  const queue = await getQueueCounts();
  const productInboxItems = await listJsonAndMarkdown(PRODUCT_INBOX_DIR);
  const recentDone = await listJsonFiles(DONE_DIR);
  const recentDrafts = await listMarkdownFiles(GENERATED_DRAFTS_DIR);
  const reportPath = path.join(REPORTS_DIR, "latest.md");
  const report = [
    "# Agent Swarm Report",
    "",
    `- Updated: \`${new Date().toISOString()}\``,
    `- Daemon: \`${await daemonStatus()}\``,
    `- Inbox: \`${queue.inbox}\``,
    `- Claimed: \`${queue.claimed}\``,
    `- Done: \`${queue.done}\``,
    `- Blocked: \`${queue.blocked}\``,
    `- Last pass processed: \`${summary.processed}\``,
    `- Last pass blocked: \`${summary.blocked}\``,
    "",
    "## Recent Product Inbox",
    "",
    ...toBulletList(productInboxItems.slice(-5).map(relativeToRoot), "No product inbox files found."),
    "",
    "## Recent Draft Artifacts",
    "",
    ...toBulletList(recentDrafts.slice(-5).map(relativeToRoot), "No generated drafts yet."),
    "",
    "## Recent Completed Tasks",
    "",
    ...toBulletList(recentDone.slice(-5).map(relativeToRoot), "No completed tasks yet."),
    "",
    "## Watcher Log",
    "",
    `- \`${relativeToRoot(LOG_FILE)}\``,
    "",
  ].join("\n");

  await fs.writeFile(reportPath, report, "utf8");
}

async function getQueueCounts() {
  const [inbox, claimed, done, blocked] = await Promise.all([
    countJsonFiles(INBOX_DIR),
    countJsonFiles(CLAIMED_DIR),
    countJsonFiles(DONE_DIR),
    countJsonFiles(BLOCKED_DIR),
  ]);

  return { inbox, claimed, done, blocked };
}

async function listMarkdownFiles(dir) {
  const files = await fs.readdir(dir, { withFileTypes: true });
  return files
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) => path.join(dir, entry.name))
    .sort();
}

function toBulletList(items, emptyLine) {
  if (items.length === 0) {
    return [emptyLine];
  }

  return items.map((item) => `- \`${item}\``);
}

async function writePid(pid) {
  await fs.writeFile(PID_FILE, `${pid}\n`, "utf8");
}

async function readPid() {
  try {
    const raw = await fs.readFile(PID_FILE, "utf8");
    const pid = Number(raw.trim());
    return Number.isFinite(pid) ? pid : null;
  } catch {
    return null;
  }
}

async function removePid() {
  await fs.rm(PID_FILE, { force: true });
}

async function readProductInboxState() {
  try {
    const raw = await fs.readFile(PRODUCT_INBOX_STATE_FILE, "utf8");
    const parsed = JSON.parse(raw);
    return typeof parsed === "object" && parsed ? { seen: parsed.seen ?? {} } : { seen: {} };
  } catch {
    return { seen: {} };
  }
}

async function isProcessRunning(pid) {
  try {
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
