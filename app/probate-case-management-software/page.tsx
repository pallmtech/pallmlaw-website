import type { Metadata } from "next";
import PracticeAreaLandingPage from "@/components/site/PracticeAreaLandingPage";
import { siteUrl } from "@/lib/seo";

const description =
  "PallmLaw gives probate law firms operational visibility across matters, stages, critical dates, tasks, ownership, workload, communication, and stalled work.";

export const metadata: Metadata = {
  title: "Probate Case Management and Matter Tracking Software",
  description,
  alternates: { canonical: "/probate-case-management-software" },
  openGraph: {
    title: "Probate Case Management and Matter Tracking | PallmLaw",
    description,
    url: `${siteUrl}/probate-case-management-software`,
  },
};

export default function ProbateCaseManagementSoftwarePage() {
  return (
    <PracticeAreaLandingPage
      current="probate"
      canonicalPath="/probate-case-management-software"
      schemaName="PallmLaw Probate Case Management"
      schemaDescription={description}
      eyebrow="Probate Case Management"
      headline="Know where every probate matter stands and what it needs next."
      introduction="PallmLaw gives probate teams one operational view across matter stage, subtype, critical dates, assigned tasks, notes, parties, communication context, automation activity, and ownership. It complements the firm's existing drafting, accounting, and practice-management tools."
      primaryCta="Book Probate Management Conversation"
      sectionEyebrow="Probate Matter Visibility"
      sectionHeadline="Manage the administration from operational truth, not reconstructed status."
      sectionBody="Probate matters become difficult to manage when dates, assignments, notes, and next actions live in separate places. PallmLaw structures the workflow so staff can run the file and leadership can see where work is open, stalled, overdue, or waiting."
      capabilities={[
        "Matter records connecting stage, subtype, parties, tasks, notes, dates, and ownership",
        "Configured workflows for Probate and Probate Release",
        "Critical-date calendar and deadline visibility across active matters",
        "Open-task, stale-matter, workload, and team-reliability context",
        "Matter communication history scoped to relevant Client and Spouse parties",
        "Recoverable operational controls and guarded workflow reconciliation",
      ]}
      workflowEyebrow="Probate Operations"
      workflowHeadline="Give every matter a visible path through the administration."
      workflow={[
        { title: "Open the right workflow", body: "Use the probate practice area and matter subtype to apply the appropriate stages, dates, and task structure." },
        { title: "Keep ownership explicit", body: "Make assigned work, notes, next actions, and handoffs visible without relying on hallway updates or private task lists." },
        { title: "Manage dates as operational records", body: "Connect critical dates to the matter, calendar, reporting, workflow deadlines, and automation." },
        { title: "Intervene before the file goes quiet", body: "Use stalled-work, workload, timing, and attention views to identify matters that require management action." },
      ]}
      heroImage={{ src: "/app-images/pallmlaw_probate_matter_management.png", alt: "PallmLaw probate matter management model connecting stage, dates, ownership, communication, and workload", width: 1672, height: 941, label: "Probate Management", detail: "Visibility + Ownership" }}
      secondaryImages={[
        { src: "/app-images/pallmlaw_matter_record.png", alt: "PallmLaw matter record for probate case management", width: 848, height: 825, label: "Probate Matter", detail: "Context + Dates + Tasks" },
        { src: "/app-images/pallmlaw_firm_intelligence.png", alt: "PallmLaw Firm Intelligence dashboard", width: 1864, height: 844, label: "Firm Intelligence", detail: "Workload + Timing" },
      ]}
      faqHeading="What probate teams should expect from PallmLaw."
      faqs={[
        { question: "Does PallmLaw replace probate accounting or drafting software?", answer: "No. PallmLaw is the workflow-control and firm-intelligence layer. It works alongside probate accounting, drafting, document-generation, and general practice-management systems." },
        { question: "Can different probate matters follow different workflows?", answer: "Yes. Practice-area subtype configuration allows the firm to apply distinct stages, critical dates, and task templates to supported probate paths." },
        { question: "Is Probate a live PallmLaw workflow?", answer: "Yes. Probate and Probate Release are delivered, configured workflow capabilities. Implementation still requires alignment to the adopting firm's approved process." },
      ]}
      relatedHref="/probate-workflow-automation"
      relatedLabel="See Probate Automation"
    />
  );
}
