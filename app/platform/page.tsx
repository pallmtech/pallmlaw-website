import Image from "next/image";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";

const layers = [
  {
    id: "01",
    title: "Practice Area Configuration",
    body: "Model the workflow around the practice, not a generic record type.",
  },
  {
    id: "02",
    title: "Stage Control",
    body: "Define the actual handoff points the team works through every day.",
  },
  {
    id: "03",
    title: "Critical Date Discipline",
    body: "Make dates operational instead of passive information fields.",
  },
  {
    id: "04",
    title: "Task Ownership",
    body: "Tie execution to actual owners, due dates, and task progress.",
  },
  {
    id: "05",
    title: "Whiteboards And Dashboards",
    body: "Give leadership and operators shared visibility into the pipeline.",
  },
  {
    id: "06",
    title: "AI-Assisted Direction",
    body: "Create the structured workflow foundation that makes safer automation and AI assistance useful over time.",
  },
];

export default function PlatformPage() {
  return (
    <div className="site-shell">
      <SiteHeader current="platform" />
      <main>
        <section className="section platform-hero">
          <div className="container platform-hero-grid">
            <div className="platform-blueprint">
              <span className="platform-blueprint-label">Operating Model</span>
              <div className="platform-blueprint-line">Practice Area</div>
              <div className="platform-blueprint-line">Stage</div>
              <div className="platform-blueprint-line">Critical Date</div>
              <div className="platform-blueprint-line">Task</div>
            </div>
            <div className="section-head compact">
              <p className="section-tag">Platform</p>
              <h1 className="page-title">One system to see the firm clearly and move more work forward.</h1>
              <p>
                LawOps is built around a disciplined model of practice area,
                stage, critical date, and task so the firm can stop managing by
                feel and start running with clearer visibility and better output.
              </p>
            </div>
          </div>
        </section>

        <section className="section surface-grid">
          <div className="container platform-map-layout">
            <div className="frame">
              <div className="frame-meta">
                <span>Workflow Architecture</span>
                <span>Practice Area to Task</span>
              </div>
              <Image
                src="/app-images/stages_tasks_roadmap.png"
                alt="Stage and task roadmap"
                width={1200}
                height={776}
                className="screenshot"
              />
            </div>
            <div className="platform-layer-stack">
              {layers.map((layer) => (
                <article className="platform-layer-card" key={layer.id}>
                  <span>{layer.id}</span>
                  <div>
                    <h3>{layer.title}</h3>
                    <p>{layer.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section surface-plain">
          <div className="container platform-story-grid">
            <div className="frame">
              <div className="frame-meta">
                <span>Execution Detail</span>
                <span>Stage Locked Work</span>
              </div>
              <Image
                src="/app-images/stages_tasks_roadmap.png"
                alt="Stages and tasks detail"
                width={1200}
                height={776}
                className="screenshot"
              />
            </div>
            <div className="frame">
              <div className="frame-meta">
                <span>Matter View</span>
                <span>Operator Surface</span>
              </div>
              <Image
                src="/app-images/matter_view.png"
                alt="Matter view"
                width={1375}
                height={987}
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
