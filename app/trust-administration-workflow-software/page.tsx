import type { Metadata } from "next";
import PracticeAreaLandingPage from "@/components/site/PracticeAreaLandingPage";
import { siteUrl } from "@/lib/seo";

const description =
  "PallmLaw helps law firms control Trust Administration matters across stages, critical dates, recurring tasks, ownership, communication, automation, and reporting.";

export const metadata: Metadata = {
  title: "Trust Administration Workflow Software for Law Firms",
  description,
  alternates: { canonical: "/trust-administration-workflow-software" },
  openGraph: {
    title: "Trust Administration Workflow Software for Law Firms | PallmLaw",
    description,
    url: `${siteUrl}/trust-administration-workflow-software`,
  },
};

export default function TrustAdministrationWorkflowSoftwarePage() {
  return (
    <PracticeAreaLandingPage
      current="trust-administration"
      canonicalPath="/trust-administration-workflow-software"
      schemaName="PallmLaw Trust Administration Workflow Software"
      schemaDescription={description}
      eyebrow="Trust Administration Workflow Software"
      headline="Turn Trust Administration into a visible, repeatable operating workflow."
      introduction="PallmLaw gives law firms structured control across Trust Administration matters, critical dates, recurring tasks, ownership, automation, client communication, and operational reporting. It complements rather than replaces fiduciary accounting, tax, drafting, and practice-management systems."
      primaryCta="Book Trust Administration Conversation"
      sectionEyebrow="Trust Administration Operations"
      sectionHeadline="Long-running administration work needs more than a matter name and a checklist."
      sectionBody="Trust Administration creates recurring dates, reviews, requests, communication, and team handoffs. PallmLaw makes that operating structure visible so the team can see what is next, who owns it, and where a matter has stopped moving."
      capabilities={[
        "Configured Trust Administration stages and critical dates",
        "Task templates, ownership, handoffs, and deadline-aware work",
        "Matter notes, parties, activity, and communication context",
        "Workflow automation with conditions, waits, and traceable run history",
        "Firm-controlled client communication tied to operational milestones",
        "Operational reporting for stalled work, timing, workload, and team reliability",
      ]}
      workflowEyebrow="Administration Discipline"
      workflowHeadline="Keep recurring work, communication, and exceptions visible."
      workflow={[
        { title: "Model the firm's administration process", body: "Configure stages, critical dates, task templates, ownership, and communication rules around the firm's approved workflow." },
        { title: "Make recurring work assignable", body: "Turn follow-up, information gathering, reviews, and handoffs into visible work with an owner and matter context." },
        { title: "Keep communication connected", body: "Use firm-controlled templates and workflow actions to connect appropriate client updates to operational milestones." },
        { title: "Manage by exceptions and workload", body: "See stalled matters, open tasks, timing, workload, and attention-needed automation without reconstructing status from separate systems." },
      ]}
      heroImage={{ src: "/app-images/pallmlaw_trust_administration_workflow.png", alt: "PallmLaw Trust Administration workflow model connecting setup, recurring work, communication, and operational controls", width: 1672, height: 941, label: "Trust Administration", detail: "Workflow + Ownership" }}
      secondaryImages={[
        { src: "/app-images/pallmlaw_matter_automation_view.png", alt: "PallmLaw Trust Administration matter automation view", width: 833, height: 823, label: "Matter Automation", detail: "Upcoming + Run History" },
        { src: "/app-images/pallmlaw_client_email_preview.png", alt: "PallmLaw client communication preview", width: 1789, height: 869, label: "Client Communication", detail: "Firm-Controlled Preview" },
      ]}
      faqHeading="Workflow software with clear product boundaries."
      faqs={[
        { question: "Is PallmLaw trust accounting software?", answer: "No. PallmLaw is workflow-control and firm-intelligence software for law firms. It does not replace fiduciary accounting, tax, asset-management, or document-drafting systems." },
        { question: "Can the workflow match our firm's Trust Administration process?", answer: "Yes. PallmLaw supports configurable stages, critical dates, task templates, automation, ownership, and communication rules around the firm's approved process." },
        { question: "Can leadership see where matters are slowing down?", answer: "PallmLaw provides operational visibility into matter stages, open and stale work, timing, workload, assigned tasks, and automation requiring attention." },
      ]}
      relatedHref="/probate-case-management-software"
      relatedLabel="See Probate Management"
    />
  );
}
