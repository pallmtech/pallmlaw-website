import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import ScheduleCallButton from "@/components/site/ScheduleCallButton";

export const metadata: Metadata = {
  title: "Legal Workflow Automation Software",
  description:
    "LawOps helps Estate Planning firms automate legal workflow with matter-stage automation, deadline-aware tasks, client communication automation, and firm intelligence.",
  alternates: {
    canonical: "/legal-workflow-software",
  },
};

const workflowPoints = [
  "Matter lifecycle automation built around practice area, stage, critical date, task, and matter context",
  "Visibility across every matter and the next step it needs",
  "Firm-branded client communication tied to workflow milestones",
  "Run history and traceability for automation activity",
  "Firm intelligence for stalled work, timing, workload, and team reliability",
  "AI agent connected through governed read-only operational visibility",
];

export default function LegalWorkflowSoftwarePage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <section className="section fit-page-shell">
          <div className="container fit-page-layout">
            <div className="fit-intro">
              <p className="section-tag">Legal Workflow Software</p>
              <h1 className="page-title">
                Track, automate, and optimize Estate Planning workflow.
              </h1>
              <p>
                Most legal software stores information. LawOps gives Estate
                Planning firms an operating system for moving work: matter
                visibility, workflow rules built around legal execution,
                automated client communication, firm intelligence, and connected
                AI visibility.
              </p>
            </div>

            <div className="proof-grid single-column-grid">
              {workflowPoints.map((item) => (
                <div className="proof-card" key={item}>
                  {item}
                </div>
              ))}
            </div>

            <div className="fit-panel fit-contact-panel">
              <h2>Start with Estate Planning, where workflow can be measured and improved.</h2>
              <p>
                Retained, drafting, signing, and binder work create repeatable
                stages, handoffs, deadlines, reminders, and communication
                moments. LawOps turns those patterns into repeatable workflow
                automation the firm can actually run.
              </p>
              <div className="inline-cta-row">
                <ScheduleCallButton
                  className="button button-primary"
                  label="Book Fit Conversation"
                />
                <Link className="button button-secondary" href="/intelligence">
                  See Intelligence
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
