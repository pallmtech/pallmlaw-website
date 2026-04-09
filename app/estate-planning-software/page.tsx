import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import ScheduleCallButton from "@/components/site/ScheduleCallButton";

export const metadata: Metadata = {
  title: "Estate Planning Software",
  description:
    "LawOps is estate planning software built to help firms see every matter, keep work moving, and improve profitability with better workflow visibility.",
  alternates: {
    canonical: "/estate-planning-software",
  },
};

const outcomes = [
  "See where every matter stands without chasing for updates",
  "Catch stalled work before it turns into unhappy clients and lost time",
  "Keep drafting, signing, and binder work moving across multiple staff handoffs",
  "Give leadership a clearer view of workload, bottlenecks, and profitability",
];

export default function EstatePlanningSoftwarePage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <section className="section fit-page-shell">
          <div className="container fit-page-layout">
            <div className="fit-intro">
              <p className="section-tag">Estate Planning Software</p>
              <h1 className="page-title">
                Estate Planning software for firms that need visibility, not more chaos.
              </h1>
              <p>
                LawOps helps Estate Planning firms see what is happening across the
                firm, keep work moving through every handoff, and improve
                profitability without relying on memory or hallway updates.
              </p>
            </div>

            <div className="proof-grid single-column-grid">
              {outcomes.map((item) => (
                <div className="proof-card" key={item}>
                  {item}
                </div>
              ))}
            </div>

            <div className="fit-panel fit-contact-panel">
              <h2>Built for real Estate Planning delivery work.</h2>
              <p>
                If your firm moves matters through retained, drafting, signing,
                and binder with multiple staff handoffs, LawOps gives you a better
                way to see the pipeline and keep work moving.
              </p>
              <div className="inline-cta-row">
                <ScheduleCallButton
                  className="button button-primary"
                  label="Book Fit Conversation"
                />
                <Link className="button button-secondary" href="/estate-planning">
                  See Estate Planning Page
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
