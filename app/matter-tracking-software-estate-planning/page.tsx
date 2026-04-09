import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import ScheduleCallButton from "@/components/site/ScheduleCallButton";

export const metadata: Metadata = {
  title: "Matter Tracking Software for Estate Planning Firms",
  description:
    "LawOps gives Estate Planning firms matter tracking software that shows where matters stand, what is stalled, and what needs action next.",
  alternates: {
    canonical: "/matter-tracking-software-estate-planning",
  },
};

const matterPoints = [
  "Track where each matter stands across retained, drafting, signing, and binder",
  "See stale matters and overdue work without relying on staff memory",
  "Understand who owns the next step and where the workflow is slowing down",
  "Give the owner a faster way to understand what is happening across the firm",
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
                Matter tracking software for Estate Planning firms that need answers fast.
              </h1>
              <p>
                LawOps helps you see where every matter stands, what is moving,
                and where work is getting stuck so the owner does not have to
                chase the team just to understand the day.
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
              <h2>Know where the matters are without walking the office.</h2>
              <p>
                For firms with physical files, fragmented systems, or too much
                status-chasing, LawOps creates a better operational view of the work.
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
