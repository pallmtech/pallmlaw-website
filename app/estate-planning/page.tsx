import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import ScheduleCallButton from "@/components/site/ScheduleCallButton";

export const metadata: Metadata = {
  title: "Estate Planning Software for Florida Firms",
  description:
    "LawOps helps Estate Planning firms track matters, automate workflows, automate client communication, surface firm intelligence, and connect approved AI agents.",
  alternates: {
    canonical: "/estate-planning",
  },
};

const metrics = [
  "Retained-rate visibility across consults and matters",
  "Critical-date timing from retained through binder",
  "Firm-branded client communication for repeatable updates",
  "Automation flows for stage-aware messages and milestone follow-up",
  "Stale matter detection after 5 idle days",
  "Open-task, notes, and team reliability visibility",
];

const sequence = [
  {
    phase: "01",
    title: "Retained",
    body: "Track who has converted, who is pending, and where follow-up or next-step discipline is breaking down.",
  },
  {
    phase: "02",
    title: "Design",
    body: "See when matters move from retained status into actual design work and where the handoff slows.",
  },
  {
    phase: "03",
    title: "Drafting",
    body: "Keep drafting from disappearing into invisible queue time and trigger the right client communication as work moves.",
  },
  {
    phase: "04",
    title: "Signing To Binder",
    body: "Measure the final stretch and keep client updates tied to signing, binder, and completion milestones.",
  },
];

export default function EstatePlanningPage() {
  return (
    <div className="site-shell">
      <SiteHeader current="estate-planning" />
      <main>
        <section className="section estate-hero">
          <div className="container estate-hero-grid">
            <div className="estate-hero-copy">
              <p className="section-tag">Estate Planning</p>
              <h1 className="page-title">The operating system for Estate Planning delivery.</h1>
              <p>
                In Estate Planning, LawOps helps firms track every matter,
                automate repeatable workflow, keep clients informed from the
                matter lifecycle, and give leadership the operational truth
                needed to scale without losing control.
              </p>
              <div className="inline-cta-row">
                <ScheduleCallButton
                  className="button button-primary"
                  label="Book Fit Conversation"
                />
              </div>
            </div>
            <div className="estate-sequence-board">
              {sequence.map((item) => (
                <article className="estate-sequence-step" key={item.phase}>
                  <span>{item.phase}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section surface-grid">
          <div className="container estate-ribbon">
            <div className="frame">
              <div className="frame-meta">
                <span>Estate Planning Matter</span>
                <span>Record Surface</span>
              </div>
              <Image
                src="/app-images/matter_record_surface.png"
                alt="Matter record surface"
                width={1025}
                height={792}
                className="screenshot"
              />
            </div>
            <div className="stack-card estate-explain-card">
              <p className="section-tag">Why This Wedge Works</p>
              <h2>Estate Planning has enough structure to become a repeatable operating system.</h2>
              <p>
                The biggest drag is usually not one dramatic failure. It is the
                slow leakage across transitions. LawOps is built to show where
                matters slow down, where handoffs fail, where notes are missing,
                and where firm-branded client communication should follow a
                stage, deadline, task, or milestone.
              </p>
              <h3>The transitions that matter</h3>
              <ul className="detail-list">
                <li>Retained {"->"} Design</li>
                <li>Design {"->"} Drafting</li>
                <li>Drafting {"->"} Signing</li>
                <li>Signing {"->"} Binder</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section estate-metrics-band">
          <div className="container estate-metrics-layout">
            <div className="estate-metric-list">
              <p className="section-tag">Operational Proof</p>
              <h2>What an owner can actually use to run a more profitable firm.</h2>
              {metrics.map((metric) => (
                <div className="estate-metric-item" key={metric}>
                  {metric}
                </div>
              ))}
            </div>
            <div className="visual-column">
              <div className="frame">
                <div className="frame-meta">
                  <span>Client Communication</span>
                  <span>Email Preview</span>
                </div>
                <Image
                  src="/app-images/email_client_facing_email_preview.png"
                  alt="Client-facing email preview"
                  width={1824}
                  height={896}
                  className="screenshot"
                />
              </div>
              <div className="mini-visual-grid">
                <div className="frame mini">
                  <Image
                    src="/app-images/automation_flow_node_editor.png"
                    alt="Automation flow node editor"
                    width={795}
                    height={767}
                    className="screenshot"
                  />
                </div>
                <div className="frame mini">
                  <Image
                    src="/app-images/automation_flow_runs_log.png"
                    alt="Automation flow runs log"
                    width={876}
                    height={886}
                    className="screenshot"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
