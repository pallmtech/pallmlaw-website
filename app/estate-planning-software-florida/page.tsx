import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import ScheduleCallButton from "@/components/site/ScheduleCallButton";

export const metadata: Metadata = {
  title: "Florida Estate Planning Operating and Intelligence System",
  description:
    "PallmLaw helps Florida Estate Planning firms track matters, automate workflows, automate client communication, surface firm intelligence, and connect approved AI agents.",
  alternates: {
    canonical: "/estate-planning-software-florida",
  },
};

const floridaPoints = [
  "Visibility across every Florida Estate Planning matter",
  "Automated workflows for retained, drafting, signing, and binder handoffs",
  "Firm-branded, stage-aware client communication for repeatable updates and milestones",
  "Firm intelligence for retained rate, cycle timing, workload, and team reliability",
  "AI agent connected through governed read-only operational visibility",
  "Dedicated per-firm infrastructure with a separate instance and database",
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
                The operating and intelligence system for Florida Estate Planning firms.
              </h1>
              <p className="hero-tagline">Track. Automate. Optimize.</p>
              <p>
                PallmLaw helps Florida estate planning firms handle more matters
                with the team they already have. It gives busy firms one place to
                track every matter, automate repeatable legal workflow, keep
                clients informed with firm-branded communication, and see the
                numbers behind firm performance. PallmLaw works alongside the
                firm's existing practice management, drafting, and intake
                tools rather than replacing them.
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
              <h2>For Florida firms serving serious Estate Planning demand.</h2>
              <p>
                Florida Estate Planning work is often high-volume, deadline-aware,
                and client-service sensitive. PallmLaw gives Florida firms
                controlled matter visibility, stage-aware client updates,
                deadline-aware workflow automation, and the intelligence to grow
                without losing operational control.
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
