import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import ScheduleCallButton from "@/components/site/ScheduleCallButton";

const metrics = [
  "Retained-rate visibility across consults and matters",
  "Critical-date timing from retained through binder",
  "Stale matter detection after 5 idle days",
  "Open-task and team reliability scorecards",
];

const sequence = [
  {
    phase: "01",
    title: "Retained",
    body: "Track who has converted, who is pending, and where follow-up discipline is breaking down.",
  },
  {
    phase: "02",
    title: "Design",
    body: "See when matters move from retained status into actual design work and where the handoff slows.",
  },
  {
    phase: "03",
    title: "Drafting",
    body: "Keep drafting from disappearing into invisible queue time.",
  },
  {
    phase: "04",
    title: "Signing To Binder",
    body: "Measure the final stretch so client experience does not degrade right before completion.",
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
              <h1 className="page-title">Help your Estate Planning firm produce more with better visibility.</h1>
              <p>
                In Estate Planning, LawOps helps leadership see the firm at a
                glance, tighten handoffs across the workflow, and improve the
                economics of delivery through better visibility and control.
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
                <span>Estate Planning Workflow</span>
                <span>Control Layer</span>
              </div>
              <Image
                src="/app-images/estate_planning_whiteboard.png"
                alt="Estate planning workflow whiteboard"
                width={1600}
                height={1031}
                className="screenshot"
              />
            </div>
            <div className="stack-card estate-explain-card">
              <p className="section-tag">Why This Wedge Works</p>
              <h2>Estate Planning has enough structure to produce real business value.</h2>
              <p>
                The biggest drag is usually not one dramatic failure. It is the
                slow leakage across transitions. LawOps is built to show where
                matters slow down, where handoffs fail, and where margin gets
                lost in the delivery process.
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
                  <span>Firm Intelligence</span>
                  <span>Estate Planning Metrics</span>
                </div>
                <Image
                  src="/app-images/firm_intel_dashboard.png"
                  alt="Firm intelligence dashboard"
                  width={838}
                  height={582}
                  className="screenshot"
                />
              </div>
              <div className="mini-visual-grid">
                <div className="frame mini">
                  <Image
                    src="/app-images/KPI_measurement.png"
                    alt="KPI measurements"
                    width={583}
                    height={439}
                    className="screenshot"
                  />
                </div>
                <div className="frame mini">
                  <Image
                    src="/app-images/staff_scorecard_amatrix.png"
                    alt="Staff scorecard matrix"
                    width={816}
                    height={584}
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
