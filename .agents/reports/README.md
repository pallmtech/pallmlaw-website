# Agent Reports

This folder contains the latest background-agent summaries for the LawOps workspace.

Primary file:

- `latest.md` -> current watcher status, recent task outputs, and recent product inbox visibility

Behavior:

- the watcher rewrites `latest.md` on every pass
- VS Code can auto-start the watcher on folder open through `.vscode/tasks.json`
- new product handoffs in `.agents/product/inbox/` are routed into agent tasks automatically
