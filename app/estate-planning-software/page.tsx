import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import ScheduleCallButton from "@/components/site/ScheduleCallButton";

export const metadata: Metadata = {
  title: "Estate Planning Operating and Intelligence System",
  description:
    "LawOps is the operating and intelligence system for Estate Planning firms, combining workflow control, client communication, and measurable firm performance.",
  alternates: {
    canonical: "/estate-planning-software",
  },
};

const outcomes = [
  "Visibility across every matter",
  "Automated workflows for repeatable matter stages, tasks, deadlines, and handoffs",
  "Firm-branded client communication tied to workflow events",
  "Firm intelligence for bottlenecks, retained rate, timing, and team reliability",
  "AI agent connected through governed read-only operational visibility",
  "A scalable operating and intelligence system around the firm's actual process",
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
                The operating and intelligence system for Estate Planning firms.
              </h1>
              <p className="hero-tagline">Track. Automate. Optimize.</p>
              <p>
                LawOps helps estate planning firms replace manual follow-up,
                scattered spreadsheets, and invisible bottlenecks with a
                structured operating and intelligence system for matters,
                workflows, client communication, and firm performance. It works
                alongside Clio, LEAP, WealthCounsel, and similar tools without
                replacing practice management, drafting, or intake systems.
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
              <h2>Built for firms that need capacity without adding chaos.</h2>
              <p>
                If your firm moves matters through intake, retained, drafting,
                signing, and binder with multiple staff handoffs, LawOps helps
                turn that process into a repeatable system. Tasks, deadlines,
                reminders, notes, and client communications can be triggered
                from where a matter is and what needs to happen next.
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
