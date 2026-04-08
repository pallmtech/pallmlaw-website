import { promises as fs } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const INBOX_DIR = path.join(ROOT, ".agents", "tasks", "inbox");

async function main() {
  await fs.mkdir(INBOX_DIR, { recursive: true });

  const id = `task-${new Date().toISOString().slice(0, 10)}-homepage-messaging`;
  const task = {
    id,
    type: "homepage-copy-update",
    owner: "messaging",
    priority: "high",
    title: "Homepage messaging brief from current product handoffs",
    brief:
      "Prepare a conservative homepage messaging draft that reflects the latest product handoffs without overclaiming communications capabilities.",
    inputs: [
      ".agents/product/inbox/2026-03-15-communications-update.md",
      ".agents/product/inbox/2026-03-15-product-clarification-communications-claims.md",
      ".agents/synopsis/messaging.md",
    ],
    requires: ["website-conversion"],
    status: "new",
    createdAt: new Date().toISOString(),
  };

  const taskPath = path.join(INBOX_DIR, `${id}.json`);
  await fs.writeFile(taskPath, `${JSON.stringify(task, null, 2)}\n`, "utf8");

  console.log(`Seeded ${path.relative(ROOT, taskPath).replace(/\\/g, "/")}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
