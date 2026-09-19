# Current Product Truth For Website Positioning

Last consolidated: 2026-09-18
Source repo: `P:\Pallm Tech Local Dev\PallmLaw`
Source handoff: `.agents/marketing/handoffs/2026-09-18_pallmlaw_product_update.md`

This is the canonical product inbox for website positioning and marketing claims. It supersedes the June 5 product snapshot and the July 25 v1.4 handoff.

## Brand And Release Posture

- The current product name is **PallmLaw**. Use PallmLaw for new product-facing work.
- "Formerly LawOps" may be used temporarily where continuity matters.
- The technical rebrand is still in progress. Some routes, API identifiers, headers, migrations, storage keys, and historical records retain the LawOps name for compatibility.
- Version 1.5, Matter Operations and Workflow Control, is shipped.
- Version 1.6, Workflow Revision Control, is a beta release candidate. Production deployment and final acceptance remain pending.
- Estate Planning remains the strongest market wedge, but configured Probate, Probate Release, and Trust Administration workflow capabilities are now delivered product facts.

## Current Product Position

PallmLaw is a dedicated legal operating system that connects matter workflows, critical dates, tasks, communications, reporting, automation, integrations, and governed AI access in one firm-controlled platform.

The strongest positioning remains operational control rather than generic AI:

- structured matter execution
- workflow consistency and ownership
- deadline and critical-date visibility
- accountable task and communication operations
- firm intelligence and operational reporting
- governed application and AI access
- dedicated per-firm infrastructure and data posture

## Shipped Product Capabilities

### Matter operations

- Matter records connect parties, tasks, notes, stages, dates, ownership, workflow context, communication history, and activity.
- Practice-area and subtype workflows support stages, critical dates, task templates, lifecycle rules, and operational reporting.
- Estate Planning Type is implemented through reusable practice-area subtype infrastructure across matter operations, filtering, reporting, exports, automation metadata, REST, and MCP.
- Probate and Trust Administration are active configured workflows. Probate Release is delivered as a Probate subtype and workflow.
- PallmLaw includes a Manager role for operational ownership without granting developer-only authority.
- User profiles support professional titles across approved administration and metadata surfaces.
- Task deletion and supported matter operations use recoverable Trash behavior with guarded restoration rules.

### Critical dates and calendars

- Critical dates are normalized first-class operational records rather than only embedded matter metadata.
- Critical-date operations are connected to matter workflows, calendars, reporting, workflow deadlines, automation projections, and reconciliation controls.
- The Critical Dates Calendar preserves complete cross-month weeks, displays adjacent-month dates, and uses category colors with reduced emphasis outside the current month.
- Historical task and critical-date reconciliation controls help administrators align existing matters with current workflow configuration.
- Practice-area dependency checks account for historical tasks, critical dates, trashed matters, and related workflow dependencies before destructive changes proceed.
- Internal storage verification and recovery controls exist for administrators, but these are platform-integrity tools rather than headline customer features.

### Client communication visibility

- Authorized users can review relevant client communication history from the Matter Parties card.
- Communication summaries load only when requested, and message bodies load only when a specific message is opened.
- Visibility is deliberately scoped to communications involving linked Client and Spouse parties.
- Internal task-assignment notices and communications belonging to other matters remain excluded.
- PallmLaw supports firm-branded communication templates, merge fields, test sends, workflow email actions, delivery records, and communication traceability.
- Do not position PallmLaw as a general email-marketing or campaign platform.

### Workflow automation

- PallmLaw supports versioned automation flows with triggers, conditions, actions, wait behavior, resource references, simulations, run history, and guarded publication.
- Matter activity includes an Automation view for upcoming automation and matter-associated run history.
- The Automation Monitor surfaces upcoming date-driven automation and items requiring attention.
- Automation field availability, writeability, option values, subtype references, and template tokens follow governed metadata rules across authoring and runtime behavior.
- Communication templates and automation use stable field and resource identity to improve portability and reject stale dependencies.
- Published flow dependencies are checked before activation, including templates, users, practice areas, stages, critical dates, task templates, subtypes, and supported metadata.
- Automation changes and communication-template changes guard against silent stale overwrites and unsaved navigation loss.

### Dashboards, reporting, and Firm Intelligence

- The operational dashboard loads tasks, critical dates, notes, and whiteboard data independently from Firm Intelligence analytics.
- Routine dashboard use no longer depends on the premium Firm Intelligence metrics request.
- Firm Intelligence supports operational scorecards, Estate Planning retained-rate reporting, critical-date timing, period comparisons, team context, and workflow visibility.
- Date classification and loading were corrected to use firm-calendar behavior, stronger completion evidence, and more targeted activity loading.
- Saved custom report building remains active planned work and must not be presented as shipped.

### REST API

- PallmLaw provides a versioned, read-only REST API for approved operational and reporting resources.
- API access is instance-local, scoped, audited, documented through OpenAPI, and controlled by firm administrators.
- OAuth resource metadata, token validation, request auditing, and bounded diagnostics support governed application access.
- The current REST foundation does not provide public developer self-service, unrestricted table access, or broad write APIs.

### MCP and governed AI access

- Secure read-only MCP access is deployed and supports approved external AI clients, including ChatGPT and Claude, through PallmLaw-owned OAuth.
- MCP tools support bounded operational questions such as matter search, practice-area subtype discovery, reporting questions, workload context, and approved contact lookup.
- Tool contracts use explicit scopes, input schemas, row limits, rate controls, reporting policy, and durable audit history.
- MCP access is read-only. It does not provide arbitrary SQL, direct database access, unrestricted fields, cross-firm access, legal advice, document drafting, or general AI mutation authority.
- AI should be positioned as a governed connected layer, not PallmLaw's primary category.

### Integrations and portability

- PallmLaw has a provider-oriented integration framework with encrypted connection credentials, discovery, sync state, event history, object links, webhook subscriptions, and audit controls.
- Clio and DecisionVault integration paths support approved discovery and matter workflow use cases.
- Practice-area configuration can be exported and imported through bounded portable formats.
- Do not claim universal support for every provider or unrestricted bidirectional synchronization.

### Administration, diagnostics, and security

- Firm administrators have controlled profile, branding, API, user, workflow, and configuration surfaces.
- OAuth consent includes origin validation, content-security-policy protections, and duplicate-submission resistance.
- Developer diagnostics include recent API-call visibility and bounded full-value inspection in Database Studio.
- The application runtime baseline uses supported Node.js 24 images.
- Current local dependency audits for the v1.6 release candidate report zero known vulnerabilities.
- Developer Core includes architecture visualization and a read-only architecture assistant. These are internal developer-administration capabilities, not firm-wide legal AI features.

## Strong Claims Supported

- PallmLaw is a dedicated operating system for legal workflow and matter operations.
- PallmLaw gives firms structured control across matters, workflows, stages, critical dates, tasks, communications, reporting, automation, and integrations.
- PallmLaw supports configurable practice-area and subtype workflows, including delivered Estate Planning, Probate, Probate Release, and Trust Administration configurations.
- PallmLaw provides normalized critical-date operations across matters, calendars, workflows, reporting, and automation.
- PallmLaw gives authorized users matter-level visibility into relevant client communication history.
- PallmLaw includes recoverable operational controls and guarded reconciliation for safer workflow administration.
- PallmLaw separates routine operational dashboard loading from deeper Firm Intelligence analytics.
- PallmLaw provides governed, read-only REST API and MCP access with instance-local authorization, scopes, rate controls, and audit history.
- Approved external AI clients such as ChatGPT and Claude can securely ask bounded operational questions through read-only MCP tools.
- PallmLaw provides matter-level automation visibility and administrative monitoring for upcoming and attention-needed automation.
- Each firm operates on dedicated application infrastructure and a dedicated PostgreSQL database rather than a shared product-data database.

## Version 1.6 Release Candidate

The following capabilities are implemented and locally verified, but production deployment and final acceptance remain pending. Marketing may describe them as **in beta**, **release candidate**, or **coming in v1.6**, but not as generally available:

- workflow changes saved as drafts before consequence review and confirmed publication
- immutable published workflow revisions
- durable per-matter workflow application status
- publication previews covering affected matters, conflicts, failures, deferred dates, and retries
- controlled task-deadline recalculation when workflow date associations or offsets change
- guarded taxonomy retirement and subtype or parent-workflow transfer administration
- broader PallmLaw branding across package metadata, authentication, password recovery, email defaults, OAuth consent, MCP discovery, and API display identity

Workflow revision restoration as a new draft or version is not implemented.

## Internal Or In-Progress Work

Do not market these as shipped capabilities:

- final retirement of the legacy critical-date JSON storage column under Plan 44
- completion of the technical PallmLaw rebrand across every compatibility identifier
- saved custom report building
- pre-retained conversion workflow
- email engagement tracking
- signing appointment cutover
- broader integration-link convergence
- prepared reminder mappings or automation packages as proof that communications were queued or delivered
- Developer Core maintenance and architecture-assistant tools as ordinary firm-user features

## Claims To Avoid

- Do not claim autonomous legal advice, legal analysis, document drafting, or unrestricted AI actions.
- Do not claim write-enabled MCP, arbitrary SQL, or direct database access.
- Do not claim shared multi-tenant operational data infrastructure.
- Do not claim v1.6 workflow revision controls are generally available before production acceptance.
- Do not claim the PallmLaw technical rebrand is complete across every route and identifier.
- Do not present internal reconciliation, maintenance, diagnostic, or architecture tools as ordinary client-facing capabilities.
- Do not infer sent-message counts from automation projections or eligibility inventories.
- Do not claim universal provider, workflow, report, or third-party integration support.
- Do not invent testimonials, customer counts, ROI figures, adoption statistics, or customer logos.

## Product Capabilities To Show Visually

- operational dashboard and whiteboard views
- matter record with workflow, parties, tasks, notes, dates, and context
- Critical Dates Calendar
- Matter Parties communication-history modal
- practice-area and subtype workflow configuration
- automation canvas, simulation, and dependency feedback
- matter-level Automation view
- Automation Monitor upcoming and needs-attention views
- Firm Intelligence scorecards and timing metrics
- scoped API administration and documentation
- MCP consent, approved tool activity, and audit history
- firm profile and branding controls
- v1.6 workflow draft and publication preview, clearly labeled beta until accepted

## Positioning Guidance

- Lead with the operating system for legal workflow and matter operations.
- Keep Estate Planning as the strongest commercial wedge while accurately showing the broader configured workflow foundation.
- Explain the product as one connected system rather than a collection of isolated features.
- Emphasize operational clarity, accountability, deadline control, workflow consistency, and firm-owned infrastructure.
- Describe REST as governed application access and MCP as governed read-only AI access.
- Use "governed operational access" instead of broad generic AI language.
- Treat AI as a supporting access layer. Workflow control, matter execution, and firm intelligence are stronger primary claims.
- Use PallmLaw in all new copy and retain "formerly LawOps" only where continuity is useful.

## Recommended Marketing Work

1. Update website and sales materials to PallmLaw, with a temporary "formerly LawOps" reference where needed.
2. Publish a v1.5 product update centered on matter operations, critical dates, communication visibility, Manager ownership, and dashboard reliability.
3. Prepare a separate v1.6 beta preview for workflow revision control, explicitly pending production verification.
4. Refresh API and AI messaging to distinguish application REST access from read-only MCP access for approved AI clients.
5. Capture current screenshots of the Critical Dates Calendar, matter communication history, Automation view, Automation Monitor, Firm Intelligence, and workflow publication preview.
6. Do not promote Plan 44 as a feature. Its value is data integrity and migration safety.
