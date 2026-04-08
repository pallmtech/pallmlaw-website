# Messaging Output

- Task id: `task-2026-03-22-homepage-messaging`
- Task type: `homepage-copy-update`
- Owner: `messaging`
- Priority: `high`
- Generated: `2026-03-22T18:12:35.949Z`
- Title: Homepage messaging brief from current product handoffs

## Task Intent

Prepare a conservative homepage messaging draft that reflects the latest product handoffs without overclaiming communications capabilities.

Required consults: website-conversion

## Guardrails

Use the repo's marketing governance before making public-facing recommendations.
Treat product inbox handoffs as source of truth for capability claims.
Do not invent testimonials, ROI, customer counts, or broad multi-practice maturity.
Keep workflow control and Estate Planning specificity ahead of AI language.

### Charter Excerpt

# Messaging Agent Charter

Purpose:

- own positioning, category language, offer framing, proof structure, and objection handling

Owns:

- homepage narrative
- category definition
- value propositions
- objection handling copy
- offer stack language

Must do:

- turn product detail into buyer-readable business language
- keep LawOps grounded in workflow control, visibility, ownership, and accountability
- reserve AI language for truthful secondary framing only when it helps

Stop conditions:

- messaging depends on features the product does not support
- the copy targets everyone instead of a specific buyer
- the headline can describe ten other legal tech tools

### Recent Product Inbox Files

- `.agents/product/inbox/2026-03-15-communications-update.md`
- `.agents/product/inbox/2026-03-15-product-clarification-communications-claims.md`
- `.agents/product/inbox/README.md`

## Input Digest

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

### .agents/product/inbox/2026-03-15-product-clarification-communications-claims.md

# Product Clarification: Communications Claim Tightening

Date: 2026-03-15
Source Repo: `LawOps`
Audience: Marketing CMO
Related To: `.agents/product/handoffs/2026-03-15-cmo-response-communications-update-intake.md`

Your intake was directionally correct.

One claim needs to be tightened:

## Claim To Revise

- `LawOps includes reusable email templates and automation rules in the admin layer`

## Revised Wording

- `LawOps has internal admin foundations for reusable email templates and workflow automation rules`

## Reason

- the communications admin surfaces exist in the app repo
- they are still internal/dev-admin and not ready to be treated as a standard customer-facing capability

Everything else in your intake was aligned to current product truth.

### .agents/synopsis/messaging.md

# Messaging Synopsis

Category framing:

- LawOps is an operating system for law firms
- more specifically, it is workflow infrastructure plus firm intelligence
- it should not be framed as a generic case management platform

Core promise:

- bring ownership, consistency, and visibility to legal work

Primary differentiators:

- workflow control is structured around practice area, stage, critical date, and task
- firm intelligence surfaces operational truth, not just record storage
- LawOps is designed as firm-owned infrastructure, not rented generic SaaS
- the system is configurable to the firm's workflow instead of forcing the firm into a template

Messaging pillars:

- ownership: your workflow logic should become a firm asset
- visibility: stop asking for status updates and see the actual pipeline
- accountability: every stage, date, and task has an owner
- consistency: delivery should not depend on memory or heroics
- intelligence: measure throughput, stale work, retained rate, and team reliability

AI stance:

- do not lead with AI
- if AI is mentioned, position it as an optional layer that becomes useful after operational structure exists
- workflow discipline and clean operational data come first

Phrases to favor:

- operating system for legal workflow
- workflow control
- matter visibility
- critical date discipline
- team accountability
- firm intelligence
- own your operational infrastructure

Phrases to avoid:

- AI-native platform
- revolutionize your practice
- seamless all-in-one solution
- smarter law firm growth
- next-generation legal transformation

## Specialist Draft

This draft was prepared by the Messaging worker.
It is not publishable output until the Marketing CMO reviews it.

### Recommended Direction

- Lead with operational clarity, ownership, and visibility instead of generic automation language.
- Translate raw product detail into buyer-readable business language with explicit ICP fit.
- Structure the draft around hero, problem, operational proof, and a low-friction fit CTA.

### Draft Structure

- Hero headline and subhead
- Operational problem statement
- Differentiation block grounded in workflow control
- Proof or capability section using only sourced claims
- Fit-oriented CTA

### Safe Claim Notes

- LawOps supports workflow-driven communication infrastructure
- LawOps supports reusable email templates and automation rules in the product admin layer
- LawOps supports internal task assignment email notifications
- LawOps supports task-level execution notes
- do not say communication automation is generally available to clients yet
- do not say the communication builder is polished/public-ready
- do not say AI-generated templates are available
- do not say image upload/media library is available

### Review Payload

```json
{
  "recommendations": [
    "Lead with operational clarity, ownership, and visibility instead of generic automation language.",
    "Translate raw product detail into buyer-readable business language with explicit ICP fit.",
    "Structure the draft around hero, problem, operational proof, and a low-friction fit CTA."
  ],
  "draftStructure": [
    "Hero headline and subhead",
    "Operational problem statement",
    "Differentiation block grounded in workflow control",
    "Proof or capability section using only sourced claims",
    "Fit-oriented CTA"
  ],
  "safeClaimNotes": [
    "LawOps supports workflow-driven communication infrastructure",
    "LawOps supports reusable email templates and automation rules in the product admin layer",
    "LawOps supports internal task assignment email notifications",
    "LawOps supports task-level execution notes",
    "do not say communication automation is generally available to clients yet",
    "do not say the communication builder is polished/public-ready",
    "do not say AI-generated templates are available",
    "do not say image upload/media library is available"
  ]
}
```


### Next Step

- Queue Marketing CMO review before editing website copy or publishing channel output.
