import type { Metadata } from "next";
import Image from "next/image";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";

export const metadata: Metadata = {
  title: "Estate Planning Firm Visibility and Reporting",
  description:
    "LawOps gives Estate Planning firms intelligence across open matters, stale work, critical dates, retained rate, workload, bottlenecks, and team performance.",
  alternates: {
    canonical: "/intelligence",
  },
};

const intelligenceAreas = [
  "Open matters and related open tasks",
  "Average pipeline completion across active matters",
  "Percent of tasks not overdue",
  "Stale matters idle five days or more",
  "Retained-rate visibility for Estate Planning",
  "Team performance scorecards by person and period",
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
              <h1 className="page-title">See what needs attention before it slows the firm down.</h1>
              <p>
                LawOps helps leadership see open work, stale matters, overdue
                tasks, workload pressure, retained-rate signals, and team
                reliability in time to act.
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
                The value is not the chart. The value is knowing where work is
                stalling, where capacity is getting tight, and where the firm
                needs intervention before delays become client-service problems.
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
