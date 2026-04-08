# Messaging Output

- Task id: `product-inbox-2026-03-15-communications-update-messaging`
- Task type: `product-inbox-intake`
- Owner: `messaging`
- Priority: `high`
- Generated: `2026-03-22T18:20:36.767Z`
- Title: Product inbox intake: 2026-03-15-communications-update

## Task Intent

Review this product handoff, extract only safe public-facing implications, and produce role-specific draft guidance under the LawOps marketing rules. Focus on positioning and claim tightening. Treat internal communication foundations conservatively and do not present them as polished public product capabilities.

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

- `.agents/product/inbox/2026-03-15-product-clarification-communications-claims.md`
- `.agents/product/inbox/2026-03-22-dev-handoff-test-automation.md`
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

## Specialist Draft

This draft was prepared by the Messaging worker.
It is not publishable output until the Marketing CMO reviews it.

### Recommended Direction

- Lead with operational clarity, ownership, and visibility instead of generic automation language.
- Translate raw product detail into buyer-readable business language with explicit ICP fit.

### Draft Structure

- Objective
- Guardrails
- Recommended draft outline
- Next step

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
    "Translate raw product detail into buyer-readable business language with explicit ICP fit."
  ],
  "draftStructure": [
    "Objective",
    "Guardrails",
    "Recommended draft outline",
    "Next step"
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
