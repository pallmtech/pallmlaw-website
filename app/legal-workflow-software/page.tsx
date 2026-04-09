import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import ScheduleCallButton from "@/components/site/ScheduleCallButton";

export const metadata: Metadata = {
  title: "Legal Workflow Software",
  description:
    "LawOps is legal workflow software that helps Estate Planning firms manage stages, critical dates, task ownership, and matter visibility in one system.",
  alternates: {
    canonical: "/legal-workflow-software",
  },
};

const workflowPoints = [
  "Practice area, stage, critical date, and task structure",
  "Shared visibility into open matters and task load",
  "A clearer system for keeping work moving across the team",
  "Owner-level visibility into bottlenecks and execution risk",
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
                Legal workflow software built for firms that need to see the work clearly.
              </h1>
              <p>
                Most legal software stores information. LawOps is built to help
                firms understand what is open, what is stuck, and what needs
                action next across the workflow.
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
              <h2>Start with Estate Planning, where the workflow is real.</h2>
              <p>
                LawOps is currently strongest for Estate Planning firms, where
                repeatable handoffs and stage-based work create real visibility
                and profitability gains.
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
