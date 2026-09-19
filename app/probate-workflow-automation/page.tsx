import type { Metadata } from "next";
import PracticeAreaLandingPage from "@/components/site/PracticeAreaLandingPage";
import { siteUrl } from "@/lib/seo";

const description =
  "PallmLaw automates probate workflow across matter stages, critical dates, tasks, ownership, handoffs, client communication, and attention-needed work.";

export const metadata: Metadata = {
  title: "Probate Workflow Automation Software for Law Firms",
  description,
  alternates: { canonical: "/probate-workflow-automation" },
  openGraph: {
    title: "Probate Workflow Automation Software for Law Firms | PallmLaw",
    description,
    url: `${siteUrl}/probate-workflow-automation`,
  },
};

export default function ProbateWorkflowAutomationPage() {
  return (
    <PracticeAreaLandingPage
      current="probate"
      canonicalPath="/probate-workflow-automation"
      schemaName="PallmLaw Probate Workflow Automation"
      schemaDescription={description}
      eyebrow="Probate Workflow Automation"
      headline="Automate repeatable probate work without losing operational control."
      introduction="PallmLaw turns the firm's approved probate process into visible, stage-based automation across critical dates, tasks, ownership, handoffs, waits, reminders, and firm-controlled client communication. Attorneys and staff retain responsibility for legal judgment."
      primaryCta="Book Probate Automation Conversation"
      sectionEyebrow="Probate Automation"
      sectionHeadline="The workflow should advance the matter and show the team what happens next."
      sectionBody="PallmLaw connects automation to structured matter context rather than treating every reminder or task as an isolated rule. Upcoming activity, run history, and attention-needed work remain visible to the people responsible for delivery."
      capabilities={[
        "Configured triggers tied to probate matter stages and critical dates",
        "Task creation, assignment, handoffs, conditions, waits, and reminders",
        "Deadline-aware work driven by normalized critical-date records",
        "Firm-controlled client messages connected to workflow milestones",
        "Matter-level upcoming automation and associated run history",
        "Administrative monitoring for upcoming and attention-needed automation",
      ]}
      workflowEyebrow="Controlled Automation"
      workflowHeadline="Automate the repeatable work while keeping exceptions visible."
      workflow={[
        { title: "Use the matter stage as operational context", body: "Trigger the appropriate work from where the probate matter is, its subtype, and the conditions the firm has configured." },
        { title: "Connect deadlines to assigned work", body: "Use critical dates and offsets to create visible, owned work rather than leaving deadline follow-up in individual calendars." },
        { title: "Coordinate handoffs and communication", body: "Assign tasks, wait for the correct point in the process, and use approved templates for appropriate client updates." },
        { title: "Monitor what needs attention", body: "Inspect upcoming automation, run history, failures, and attention states instead of treating automation as an invisible background process." },
      ]}
      heroImage={{ src: "/app-images/pallmlaw_probate_workflow_automation.png", alt: "PallmLaw model for probate workflow automation from matter opening through administration completion", width: 1672, height: 941, label: "Probate Workflow", detail: "Triggers + Tasks + Handoffs" }}
      secondaryImages={[
        { src: "/app-images/pallmlaw_matter_automation_view.png", alt: "PallmLaw matter automation view", width: 833, height: 823, label: "Matter Automation", detail: "Upcoming Actions + Run History" },
        { src: "/app-images/pallmlaw_automation_monitor.png", alt: "PallmLaw Automation Monitor", width: 779, height: 688, label: "Automation Monitor", detail: "Upcoming + Needs Attention" },
      ]}
      faqHeading="Probate automation with clear boundaries."
      faqs={[
        { question: "Does PallmLaw automate legal judgment?", answer: "No. PallmLaw automates configured operational work. Attorneys and staff remain responsible for legal analysis, decisions, filings, and professional judgment." },
        { question: "Can probate automation vary by subtype?", answer: "Yes. PallmLaw supports configurable practice-area and subtype workflows so stages, critical dates, task templates, and rules can follow different probate paths." },
        { question: "Is this probate document-generation software?", answer: "No. PallmLaw controls workflow and matter operations. It works alongside the firm's drafting, document-generation, accounting, and practice-management systems." },
      ]}
      relatedHref="/probate-case-management-software"
      relatedLabel="See Probate Management"
    />
  );
}
