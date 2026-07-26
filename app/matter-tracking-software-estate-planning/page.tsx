import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import ScheduleCallButton from "@/components/site/ScheduleCallButton";

export const metadata: Metadata = {
  title: "Estate Planning Matter Tracking Software",
  description:
    "LawOps gives Estate Planning firms matter tracking inside an operating and intelligence system for workflow automation, client communication, and firm performance.",
  alternates: {
    canonical: "/matter-tracking-software-estate-planning",
  },
};

const matterPoints = [
  "Visibility across every matter, task, note, deadline, stage, and workload",
  "Automated workflows for repeatable next steps, deadlines, reminders, and handoffs",
  "Firm-branded client communication when matters hit key milestones",
  "Firm intelligence that shows stalled work, timing, workload, and team reliability",
  "AI agent connected through governed read-only operational visibility",
];

export default function MatterTrackingSoftwareEstatePlanningPage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <section className="section fit-page-shell">
          <div className="container fit-page-layout">
            <div className="fit-intro">
              <p className="section-tag">Estate Planning Matter Tracking Software</p>
              <h1 className="page-title">
                Matter tracking is the foundation. LawOps turns it into workflow control and firm intelligence.
              </h1>
              <p>
                LawOps helps Estate Planning firms track every matter, automate
                the work around it, keep clients informed, and give leadership a
                live view of which retained matters are open, stalled, overdue,
                overloaded, or ready to move.
              </p>
            </div>

            <div className="proof-grid single-column-grid">
              {matterPoints.map((item) => (
                <div className="proof-card" key={item}>
                  {item}
                </div>
              ))}
            </div>

            <div className="fit-panel fit-contact-panel">
              <h2>Know where every matter stands without walking the office.</h2>
              <p>
                For firms with physical files, fragmented systems, or too much
                status-chasing, LawOps creates a connected operating and
                intelligence system: track the matter, automate the workflow,
                communicate from the matter lifecycle, and optimize the firm
                from real data.
              </p>
              <div className="inline-cta-row">
                <ScheduleCallButton
                  className="button button-primary"
                  label="Book Fit Conversation"
                />
                <Link className="button button-secondary" href="/estate-planning-software">
                  See Estate Planning Software
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
