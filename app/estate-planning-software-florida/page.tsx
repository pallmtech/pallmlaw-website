import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import ScheduleCallButton from "@/components/site/ScheduleCallButton";

export const metadata: Metadata = {
  title: "Estate Planning Software Florida",
  description:
    "LawOps helps Florida Estate Planning firms track matters, improve workflow visibility, and keep work moving across drafting, signing, and binder delivery.",
  alternates: {
    canonical: "/estate-planning-software-florida",
  },
};

const floridaPoints = [
  "Matter visibility across the full Estate Planning workflow",
  "Clearer handoffs between owner, attorneys, and staff",
  "Stale matter detection and overdue work visibility",
  "Better reporting on retained rate, timing, and team reliability",
];

export default function EstatePlanningSoftwareFloridaPage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <section className="section fit-page-shell">
          <div className="container fit-page-layout">
            <div className="fit-intro">
              <p className="section-tag">Florida Estate Planning Software</p>
              <h1 className="page-title">
                Estate Planning software for Florida firms that want to grow with more control.
              </h1>
              <p>
                LawOps is built for Estate Planning firms that need a clearer way
                to see matters, manage handoffs, and understand what is happening
                across the firm at any given moment.
              </p>
            </div>

            <div className="proof-grid single-column-grid">
              {floridaPoints.map((item) => (
                <div className="proof-card" key={item}>
                  {item}
                </div>
              ))}
            </div>

            <div className="fit-panel fit-contact-panel">
              <h2>For Florida firms that cannot grow on memory alone.</h2>
              <p>
                If your Estate Planning firm is busy, team-driven, and trying to
                scale without losing visibility into the work, LawOps is worth a
                serious look.
              </p>
              <div className="inline-cta-row">
                <ScheduleCallButton
                  className="button button-primary"
                  label="Book Fit Conversation"
                />
                <Link className="button button-secondary" href="/platform">
                  Explore Platform
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
