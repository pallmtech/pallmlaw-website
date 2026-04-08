# Marketing CMO Output

- Task id: `product-inbox-2026-03-15-communications-update-social-media--marketing-review`
- Task type: `review`
- Owner: `marketing-director`
- Priority: `high`
- Generated: `2026-03-22T18:20:36.830Z`
- Title: Review product-inbox-2026-03-15-communications-update-social-media

## Task Intent

Review the attached specialist draft before any repo edits are made.

## Guardrails

Use the repo's marketing governance before making public-facing recommendations.
Treat product inbox handoffs as source of truth for capability claims.
Do not invent testimonials, ROI, customer counts, or broad multi-practice maturity.
Keep workflow control and Estate Planning specificity ahead of AI language.

### Charter Excerpt

# Marketing Director Agent Charter

Purpose:

- translate Adam's direction into coherent marketing execution
- decide which specialist marketing agents must be consulted
- keep brand, messaging, and demand generation aligned
- own final campaign quality before Adam reviews it

Role status:

- this agent is the standing Marketing CMO role for the LawOps website repo
- future AI agents should assume this CMO role is active by default unless Adam explicitly changes it

Owns:

- marketing synthesis
- campaign sequencing
- final copy direction
- priority decisions across brand, content, social, and outbound

Must consult:

- `research-icp` before major positioning or campaign changes
- `messaging` before homepage, offer, or outbound rewrites
- `brand-strategy` before visual or tonal changes
- `website-conversion` before landing page or CTA changes
- `content-editorial` before publishing schedules or blog strategy
- `social-media` before social campaign planning
- `outbound-growth` before cold outreach systems or templates

Cannot:

- approve invented proof points
- use vague AI-first positioning that obscures the product
- let channel-specific copy drift away from the core LawOps narrative

Default questions answered:

- what should LawOps say now
- which audience matters first
- which channels deserve effort next
- what should be tightened before publishing

### Recent Product Inbox Files

- `.agents/product/inbox/2026-03-15-product-clarification-communications-claims.md`
- `.agents/product/inbox/2026-03-22-dev-handoff-test-automation.md`
- `.agents/product/inbox/README.md`

### Approval Rule

Marketing CMO is the only automated approval gate in this runner.

## Input Digest

### .agents/drafts/generated/product-inbox-2026-03-15-communications-update-social-media-social-media.md

# Social Media Output

- Task id: `product-inbox-2026-03-15-communications-update-social-media`
- Task type: `product-inbox-intake`
- Owner: `social-media`
- Priority: `high`
- Generated: `2026-03-22T18:20:36.778Z`
- Title: Product inbox intake: 2026-03-15-communications-update

## Task Intent

Review this product handoff, extract only safe public-facing implications, and produce role-specific draft guidance under the LawOps marketing rules. Focus on founder-led social angles and repurposable post ideas. Treat internal communication foundations conservatively and do not present them as polished public product capabilities.

## Guardrails

Use the repo's marketing governance before making public-facing recommendations.
Treat product inbox handoffs as source of truth for capability claims.
Do not invent testimonials, ROI, customer counts, or broad multi-practice maturity.
Keep workflow control and Estate Planning specificity ahead of AI language.

### Charter Excerpt

# Social Media Agent Charter

Purpose:

- convert LawOps strategy into founder-led social content that is credible, sharp, and repeatable

Owns:

- post formats
- hooks
- content series
- repurposing cadence

Must do:

- write for operators, owners, and practice leaders
- keep posts short, opinionated, and grounded in real workflow pain
- turn product insights into educational authority

Stop conditions:

- posts sound like engagement bait
- tone becomes loud without substance
- content leans on motivational fluff or AI clichés

### Recent Product Inbox Files

- `.agents/product/inbox/2026-03-15-product-clarification-communications-claims.md`
- `.agents/product/inbox/2026-03-22-dev-handoff-test-automation.md`
- `.agents/product/inbox/README.md`

## Input Digest

### .agents/product/inbox/2026-03-15-communica...
[truncated]

### .agents/product/inbox/2026-03-15-communications-update.md

# Product Handoff: Communications Admin And Phase 09 Progress

Date: 2026-03-15
Source Repo: `LawOps`
Approved By: Adam

## 1. What shipped

- communication engine database foundation is in place
- communication admin UI foundation is in place
- the communications area is now split into:
  - `Email Templates`
  - `Automation Rules`
- task assignment emails are working in app runtime
- task notes now exist on the task record page

## 2. Status

- communication engine foundation: `internal-only`
- communications admin UI: `internal-only`
- task assignment email capability: `shipped`
- task notes on task record: `shipped`

Relevant date:

- communication engine foundation and admin surfaces were implemented during the March 2026 Phase 09 prep/build cycle

## 3. Who it matters for

- Estate Planning firms using LawOps operationally
- firm admins and dev admins configuring workflow-driven communication
- internal legal ops users receiving task assignment notifications

## 4. Why it matters

- LawOps can now support the operational backbone for workflow-driven client communication, not just internal work tracking
- internal users can receive assignment notifications that link directly into the task record
- task-level notes improve execution tracking without cluttering matter-wide notes

## 5. Strong claims now supported

- LawOps supports workflow-driven communication infrastructure
- LawOps supports reusable email templates and automation rules in the product admin layer
- LawOps supports internal task assignment email notifications
- LawOps supports task-level execution notes

## 6. Claims to avoid

- do not say communication automation is generally available to clients yet
- do not say the communication builder is polished/public-ready
- do not say AI-generated templates...
[truncated]

## CMO Review

Verdict: `approve`

### Review Notes

- Draft is directionally aligned to repo guardrails and can move into implementation.
- Keep Estate Planning specificity and workflow-control language clear.
- Avoid upgrading internal communications foundations into a polished public capability claim.

### Approval Boundary

- Approved by Marketing CMO for repo editing, not as a broad product-market claim beyond the attached inputs.
