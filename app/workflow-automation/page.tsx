import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import ScheduleCallButton from "@/components/site/ScheduleCallButton";

export const metadata: Metadata = {
  title: "Workflow Automation for Estate Planning Firms",
  description:
    "PallmLaw automates Estate Planning matter stages, tasks, deadlines, handoffs, waits, and client communication while producing structured data for firm intelligence.",
  alternates: {
    canonical: "/workflow-automation",
  },
};

const workflowPoints = [
  "Matter lifecycle automation",
  "Practice-area-specific workflow rules",
  "Stage-based task templates and handoffs",
  "Critical date and deadline-aware reminders",
  "Conditional logic based on matter, task, stage, assignee, and retained status",
  "Automation run history, waiting runs, failures, and traceability",
];

export default function WorkflowAutomationPage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <section className="section platform-hero">
          <div className="container platform-hero-grid">
            <div className="platform-blueprint">
              <span className="platform-blueprint-label">Workflow Model</span>
              <div className="platform-blueprint-line">Matter Stage</div>
              <div className="platform-blueprint-line">Task + Deadline</div>
              <div className="platform-blueprint-line">Condition + Wait</div>
              <div className="platform-blueprint-line">Follow-Up + Traceability</div>
            </div>
            <div className="section-head compact">
              <p className="section-tag">Workflow Automation</p>
              <h1 className="page-title">Turn your firm's process into a repeatable system.</h1>
              <p>
                PallmLaw gives Estate Planning firms a configurable workflow engine
                built around how legal work actually moves: matters, stages,
                tasks, deadlines, notes, parties, client status, and
                practice-area-specific processes. Completed work also feeds the
                intelligence layer for cycle time, stalled matters, workload,
                and team reliability.
              </p>
              <div className="inline-cta-row">
                <ScheduleCallButton
                  className="button button-primary"
                  label="Book Fit Conversation"
                />
                <Link className="button button-secondary" href="/client-communication-automation">
                  See Client Communication
                </Link>
                <Link
                  className="button button-secondary"
                  href="/insights/pallmlaw-v1-5-matter-operations-workflow-control"
                >
                  Read The v1.5 Update
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section surface-grid">
          <div className="container platform-map-layout">
            <div className="frame">
              <div className="frame-meta">
                <span>Automation Canvas</span>
                <span>Matter Lifecycle Rules</span>
              </div>
              <Image
                src="/app-images/automation_flow_canvas.png"
                alt="PallmLaw automation flow canvas"
                width={1673}
                height={608}
                className="screenshot"
                priority
              />
            </div>
            <div className="platform-layer-stack">
              {workflowPoints.map((point, index) => (
                <article className="platform-layer-card" key={point}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{point}</h3>
                    <p>
                      Built around legal matter execution, not generic CRM deal
                      stages or disconnected task lists.
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section home-dashboard-band">
          <div className="container estate-grid">
            <div className="estate-copy">
              <p className="section-tag">Operational Control</p>
              <h2>Less manual coordination, more matter throughput.</h2>
              <p>
                Tasks, deadlines, reminders, notes, and client communications
                can be triggered automatically based on where a matter is and
                what needs to happen next.
              </p>
              <ul className="detail-list">
                <li>Matter-stage automation</li>
                <li>Deadline-aware task automation</li>
                <li>Delayed actions and wait steps</li>
                <li>Run history and operational traceability</li>
              </ul>
            </div>
            <div className="visual-column">
              <div className="frame">
                <div className="frame-meta">
                  <span>Matter Automation</span>
                  <span>Upcoming Actions + Run History</span>
                </div>
                <Image
                  src="/app-images/pallmlaw_matter_automation_view.png"
                  alt="PallmLaw matter automation view with upcoming actions and run history"
                  width={833}
                  height={823}
                  className="screenshot"
                />
              </div>
              <div className="frame">
                <div className="frame-meta">
                  <span>Automation Monitor</span>
                  <span>Upcoming + Needs Attention</span>
                </div>
                <Image
                  src="/app-images/pallmlaw_automation_monitor.png"
                  alt="PallmLaw automation monitor showing upcoming and attention-needed work"
                  width={779}
                  height={688}
                  className="screenshot"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
