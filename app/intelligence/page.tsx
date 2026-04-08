import Image from "next/image";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";

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
              <h1 className="page-title">See the firm at a glance and manage for better performance.</h1>
              <p>
                LawOps helps leadership see what is open, what is stalled, how
                reliably the team is executing, and where hidden drag is hurting
                capacity, delivery, and profitability.
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
              <h2>Visibility should help the firm make more money, not just look informed.</h2>
              <p>
                The value is not in having charts. The value is knowing where
                work is stalling, where the team is carrying too much risk, and
                where delays are quietly eroding capacity and margin.
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
