# Agent Task Queue

This directory is the execution layer for the LawOps marketing agent stack.

Queue folders:

- `inbox/` -> new work waiting to be claimed
- `claimed/` -> work currently being processed
- `done/` -> completed task records
- `blocked/` -> tasks that could not run safely

Core rule:

- specialist agents create drafts and analysis
- `marketing-director` is the only approval gate for repo-ready output

Task schema:

```json
{
  "id": "task-2026-03-22-001",
  "type": "homepage-copy-update",
  "owner": "messaging",
  "priority": "high",
  "title": "Homepage messaging brief",
  "brief": "Rewrite the homepage narrative conservatively from current product truth.",
  "inputs": [
    ".agents/product/inbox/2026-03-15-communications-update.md",
    ".agents/synopsis/messaging.md"
  ],
  "requires": ["website-conversion"],
  "status": "new",
  "createdAt": "2026-03-22T00:00:00.000Z"
}
```

Operational flow:

1. Drop a task file into `inbox/`.
2. Run `npm run agents:run` for one scheduler pass or `npm run agents:watch` for a polling worker.
3. The assigned specialist writes a draft into `.agents/drafts/generated/`.
4. The runner automatically enqueues a `marketing-director` review task.
5. The CMO review writes an approval or revision artifact and moves the task record into `done/`.

Product inbox flow:

1. Product or dev team drops a markdown handoff into `.agents/product/inbox/`.
2. The watcher detects the new handoff automatically.
3. The watcher creates specialist tasks based on the handoff content.
4. Specialist drafts are generated and then reviewed by `marketing-director`.
5. The latest swarm state is written to `.agents/reports/latest.md`.

Current behavior:

- this runner is deterministic and file-based
- it does not call an external model
- it is intended to prove routing, approval, and artifact flow before adding LLM execution

Safe extension point:

- replace the draft-generation section in `scripts/agent-runner.mjs` with an LLM call after the queue workflow is stable
