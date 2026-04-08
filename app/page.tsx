import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import ScheduleCallButton from "@/components/site/ScheduleCallButton";

const pillars = [
  {
    title: "Do More With The Same Team",
    body:
      "Give your firm a clearer operating system so more matters move forward without extra status-chasing, dropped handoffs, or hidden queue time.",
  },
  {
    title: "See The Firm At A Glance",
    body:
      "See open work, stalled matters, overdue tasks, and team reliability in one place instead of piecing the story together by memory.",
  },
  {
    title: "Improve Profitability",
    body:
      "Protect margin by reducing drag between retained, drafting, signing, and binder while giving leadership clearer visibility into throughput and performance.",
  },
];

const proofCards = [
  "Open matters and related task load",
  "Average pipeline completion across the firm",
  "Percent of active tasks not overdue",
  "Stale matter detection after 5 idle days",
  "Estate Planning retained-rate reporting",
  "RTD, DTD, DTS, and STB timing metrics",
];

const roadmap = [
  {
    phase: "Phase 1",
    title: "Visibility And Profit Discipline",
    body:
      "Clear workflow control, stale-matter detection, team scorecards, retained-rate reporting, and the management visibility that helps firms operate more profitably.",
  },
  {
    phase: "Phase 2",
    title: "AI-Native Direction",
    body:
      "LawOps is being built toward AI-assisted execution inside a structured workflow, where automation and assistance can safely help the firm move more work forward.",
  },
  {
    phase: "Phase 3",
    title: "Intake + Secure Delivery",
    body:
      "A stronger intake-to-delivery operating spine with deeper integrations, safer storage, and security maturity serious firms can trust.",
  },
];

export default function Home() {
  return (
    <div className="site-shell">
      <SiteHeader current="home" />

      <main id="top">
        <section className="hero-band hero-wide">
          <div className="container hero-wide-copy-wrap">
            <div className="hero-wide-copy">
              <p className="eyebrow">Estate Planning Operating System</p>
              <h1>
                Help your Estate Planning firm do more, see more, and operate more profitably.
              </h1>
              <p className="lede">
                LawOps gives Estate Planning firms an AI-forward operating system
                for workflow visibility, bottleneck control, firm-wide insight,
                and stronger profitability across the work already in motion.
              </p>
              <p className="hero-proof-line">
                See what is happening across the firm at a glance and where margin is leaking out of the workflow.
              </p>
              <div className="hero-actions">
                <ScheduleCallButton
                  className="button button-primary"
                  label="Book Fit Conversation"
                />
                <Link className="button button-secondary" href="/estate-planning">
                  Explore Estate Planning
                </Link>
              </div>
            </div>
          </div>

          <div className="hero-command-board">
            <div className="hero-stage">
              <div className="hero-command-main frame frame-dark">
                <div className="frame-meta">
                  <span>LawOps Command Center</span>
                  <span>Estate Planning Live</span>
                </div>
                <Image
                  src="/app-images/lawops_dashboard.png"
                  alt="LawOps dashboard"
                  width={1695}
                  height={960}
                  className="screenshot"
                  priority
                />
              </div>

              <div className="hero-command-secondary hero-secondary-left frame">
                <div className="frame-meta">
                  <span>Whiteboard</span>
                  <span>Production Tracking</span>
                </div>
                <Image
                  src="/app-images/estate_planning_whiteboard.png"
                  alt="Estate planning whiteboard"
                  width={1600}
                  height={1031}
                  className="screenshot"
                />
              </div>

              <div className="hero-command-secondary hero-secondary-right frame">
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

              <div className="hero-annotation hero-annotation-left">
                <span className="stat-kicker">Workflow Model</span>
                <strong>Practice Area {"->"} Stage {"->"} Critical Date {"->"} Task</strong>
              </div>
              <div className="hero-annotation hero-annotation-right">
                <span className="stat-kicker">Management Benefit</span>
                <strong>See what is open, stale, overdue, and drifting.</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="section home-manifesto">
          <div className="container section-stack">
            <div className="section-head">
              <p className="section-tag">Category</p>
              <h2>This is not just software to store records. It helps the firm perform better.</h2>
              <p>
                Most firms already have systems of record. What they still lack is
                a clear way to see what is moving, what is stuck, and what is
                costing the firm time and profit. LawOps is built to make that visible.
              </p>
            </div>

            <div className="pillar-grid">
              {pillars.map((pillar) => (
                <article className="pillar-card" key={pillar.title}>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section home-dashboard-band">
          <div className="container intelligence-layout">
            <div className="section-head compact">
              <p className="section-tag">Firm Intelligence</p>
              <h2>Know what is open, what is stuck, and where profitability is slipping.</h2>
              <p>
                LawOps gives leadership a live view of the firm so you can spot
                stalled work, overloaded teams, and weak handoffs before they
                turn into slower delivery and lower margin.
              </p>
              <div className="proof-grid">
                {proofCards.map((item) => (
                  <div className="proof-card" key={item}>
                    {item}
                  </div>
                ))}
              </div>
              <div className="inline-cta-row">
                <Link className="button button-secondary" href="/intelligence">
                  See Intelligence
                </Link>
              </div>
            </div>

            <div className="visual-column">
              <div className="frame">
                <div className="frame-meta">
                  <span>Firm Intelligence</span>
                  <span>Operational Truth</span>
                </div>
                <Image
                  src="/app-images/firm_intelligence.png"
                  alt="Firm intelligence view"
                  width={1600}
                  height={1038}
                  className="screenshot"
                />
              </div>
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
          </div>
        </section>

        <section className="section home-estate-band">
          <div className="container estate-grid">
            <div className="estate-copy">
              <p className="section-tag">Estate Planning Wedge</p>
              <h2>Start where the economics are structured enough to improve.</h2>
              <p>
                Estate Planning is where LawOps is currently most mature. The
                workflow is clear enough to see where time gets lost, where
                matters stall, and where better visibility can help the firm
                handle more work with better control.
              </p>
              <ul className="detail-list">
                <li>Retained {"->"} Design</li>
                <li>Design {"->"} Drafting</li>
                <li>Drafting {"->"} Signing</li>
                <li>Signing {"->"} Binder</li>
              </ul>
              <div className="inline-cta-row">
                <Link className="button button-primary" href="/estate-planning">
                  View Estate Planning Page
                </Link>
              </div>
            </div>

            <div className="estate-visuals">
              <div className="frame">
                <div className="frame-meta">
                  <span>Estate Planning Whiteboard</span>
                  <span>Stage Visibility</span>
                </div>
                <Image
                  src="/app-images/estate_planning_whiteboard.png"
                  alt="Estate planning whiteboard"
                  width={1600}
                  height={1031}
                  className="screenshot"
                />
              </div>
              <div className="mini-visual-grid">
                <div className="frame mini">
                  <Image
                    src="/app-images/stages_tasks_roadmap.png"
                    alt="Stages and tasks roadmap"
                    width={1200}
                    height={776}
                    className="screenshot"
                  />
                </div>
                <div className="frame mini">
                  <Image
                    src="/app-images/critical_dates_calendar.png"
                    alt="Critical dates calendar"
                    width={241}
                    height={187}
                    className="screenshot"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section surface-plain">
          <div className="container section-stack">
            <div className="section-head">
              <p className="section-tag">Strategic Direction</p>
              <h2>LawOps is moving from visibility into AI-assisted execution.</h2>
              <p>
                The current value is visibility and control. The longer-term
                direction is an AI-assisted operating system that can help firms
                move work forward faster while keeping human judgment where it matters.
              </p>
            </div>

            <div className="roadmap-grid">
              {roadmap.map((item) => (
                <article className="roadmap-card" key={item.phase}>
                  <p className="roadmap-phase">{item.phase}</p>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
