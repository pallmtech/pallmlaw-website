import type { Metadata } from "next";
import Image from "next/image";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";

export const metadata: Metadata = {
  title: "Firm Intelligence for Estate Planning Firms",
  description:
    "PallmLaw derives retention, cycle time, stalled retained matters, workload, and team performance from two core objects: Matters and Tasks.",
  alternates: {
    canonical: "/intelligence",
  },
};

const intelligenceAreas = [
  "Retained-rate visibility by Estate Planning matter subtype",
  "Stage-to-stage cycle time against firm-defined targets",
  "Stalled retained matters with no recent activity, flagged for action",
  "Team scorecards for open task load, on-time completion, and throughput",
];

export default function IntelligencePage() {
  return (
    <div className="site-shell">
      <SiteHeader current="intelligence" />
      <main>
        <section className="section intelligence-hero">
          <div className="container intelligence-hero-grid">
            <div className="section-head compact intelligence-head">
              <p className="section-tag">Intelligence</p>
              <h1 className="page-title">Two simple objects. Real firm intelligence.</h1>
              <p>
                PallmLaw runs on Matters and Tasks. A workflow engine generates
                the work, the team completes it, and PallmLaw derives retention,
                cycle time, stalled-matter, workload, and performance answers
                automatically instead of treating every report as a separate
                configuration project.
              </p>
            </div>
            <div className="intelligence-kpi-strip">
              <div className="intelligence-kpi-card">
                <span>Open Matters</span>
                <strong>Pipeline visibility</strong>
              </div>
              <div className="intelligence-kpi-card">
                <span>Stale Work</span>
                <strong>Idle matters surfaced fast</strong>
              </div>
              <div className="intelligence-kpi-card">
                <span>Reliability</span>
                <strong>Team scorecards over time</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="section intelligence-dark-band">
          <div className="container intelligence-dark-grid">
            <div className="frame intelligence-frame">
              <div className="frame-meta">
                <span>Firm Intelligence</span>
                <span>Owner View</span>
              </div>
              <Image
                src="/app-images/firm_intelligence.png"
                alt="Firm intelligence"
                width={1600}
                height={1038}
                className="screenshot"
              />
            </div>
            <div className="intelligence-track-panel">
              <p className="section-tag">What It Tracks</p>
              {intelligenceAreas.map((area) => (
                <div className="intelligence-track-item" key={area}>
                  {area}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section surface-plain">
          <div className="container intelligence-gallery">
            <div className="visual-column">
              <div className="mini-visual-grid">
                <div className="frame mini">
                  <Image
                    src="/app-images/stale_matters_audit.png"
                    alt="Stale matters audit"
                    width={639}
                    height={408}
                    className="screenshot"
                  />
                </div>
                <div className="frame mini">
                  <Image
                    src="/app-images/monthly_scorecard.png"
                    alt="Monthly scorecard"
                    width={1598}
                    height={932}
                    className="screenshot"
                  />
                </div>
              </div>
            </div>
            <div className="section-head compact">
              <p className="section-tag">Management View</p>
              <h2>Firm intelligence should change what leadership does next.</h2>
              <p>
                See which retained matters have stopped moving, how long each
                stage takes against the firm's targets, which subtypes retain,
                and where task load or reliability needs intervention before
                delays become client-service or revenue problems.
              </p>
            </div>
          </div>
        </section>

        <section className="section intelligence-proof-band">
          <div className="container intelligence-proof-grid">
            <div className="frame mini">
              <div className="frame-meta">
                <span>Critical Date Metrics</span>
                <span>Cycle Time</span>
              </div>
              <Image
                src="/app-images/KPI_measurement.png"
                alt="Critical date KPI measurements"
                width={583}
                height={439}
                className="screenshot"
              />
            </div>
            <div className="frame mini">
              <div className="frame-meta">
                <span>Scorecard Matrix</span>
                <span>Team Reliability</span>
              </div>
              <Image
                src="/app-images/staff_scorecard_amatrix.png"
                alt="Staff scorecard matrix"
                width={816}
                height={584}
                className="screenshot"
              />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
