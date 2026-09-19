# P0 PallmLaw Screenshot Refresh

Purpose: replace visible LawOps-era product imagery and add proof for shipped v1.5 capabilities.

## Capture standards

- Use the current PallmLaw brand in the application header and page chrome.
- Use a desktop viewport between 1440 and 1600 pixels wide at 100% browser zoom.
- Export PNG files at native resolution; do not compress screenshots into JPEG.
- Use realistic but synthetic firm, staff, client, and matter data.
- Remove browser chrome, developer tools, secrets, tokens, email addresses, phone numbers, and real client information.
- Keep one clear capability as the focal point. Avoid full-screen captures where the important proof is unreadably small.
- Preserve enough application navigation and matter context to establish that the screen is part of PallmLaw.

## Required replacement captures

1. `pallmlaw_operational_dashboard.png`
   - Current main dashboard with PallmLaw branding.
   - Show useful tasks, critical dates, notes, and whiteboard or operational-priority context.
   - Intended placement: homepage hero.

2. `pallmlaw_matter_record.png`
   - One Estate Planning matter with subtype, current stage, tasks, notes, critical dates, and assigned ownership visible.
   - Intended placement: homepage Track proof and Estate Planning page.

3. `pallmlaw_critical_dates_calendar.png`
   - Current calendar showing a complete cross-month week, adjacent-month dates, and category colors.
   - Intended placement: homepage operational proof, Estate Planning page, and Firm Intelligence context.

4. `pallmlaw_matter_communication_history.png`
   - Matter Parties card with relevant client/spouse communication history open.
   - Show the summary list and one selected message body if both remain readable.
   - Intended placement: client communication page and Estate Planning page.

5. `pallmlaw_matter_automation_view.png`
   - Matter Activity Automation view showing upcoming automation and matter-associated run history.
   - Intended placement: workflow automation page and homepage Automate proof.

6. `pallmlaw_automation_monitor.png`
   - Automation Monitor showing upcoming date-driven items and an attention-needed state.
   - Intended placement: workflow automation page and platform page.

7. `pallmlaw_firm_intelligence.png`
   - Current Firm Intelligence dashboard with Estate Planning retained-rate, cycle-time, stalled-matter, workload, or team-reliability evidence.
   - Intended placement: homepage and Firm Intelligence page.

8. `pallmlaw_mcp_agent_activity.png`
   - Current audited AI access showing external client, authorizing PallmLaw user, tool, status, and timing.
   - Use sanitized ChatGPT or Claude examples if available.
   - Intended placement: AI Agent Connected page and homepage supporting proof.

## Useful secondary replacements

9. `pallmlaw_automation_flow_canvas.png`
   - Current branded flow canvas with a legible Estate Planning workflow.

10. `pallmlaw_automation_node_editor.png`
    - Current node configuration showing human-readable conditions or deadline-aware behavior.

11. `pallmlaw_email_template_editor.png`
    - Firm-branded client email template editor with safe merge fields.

12. `pallmlaw_client_email_preview.png`
    - Clean client-facing preview with synthetic recipient data.

13. `pallmlaw_email_template_list.png`
    - Current list of firm-controlled communication templates.

14. `pallmlaw_manager_role.png`
    - User or role administration showing the Manager role without exposing developer authority.

15. `pallmlaw_api_access_audit.png`
    - Governed REST API administration or recent API-call audit surface.

## Release-candidate capture, not general product proof

16. `pallmlaw_workflow_publication_preview_v16_rc.png`
    - Consequence preview for a workflow publication, including affected matters, conflicts, failures, or deferred dates.
    - Must be labeled `v1.6 release candidate` wherever published until production acceptance is recorded.
