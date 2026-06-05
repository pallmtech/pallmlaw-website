import type { Metadata } from "next";
import Image from "next/image";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";

export const metadata: Metadata = {
  title: "Legal Workflow Software Platform",
  description:
    "See how LawOps helps Estate Planning firms track matters, automate workflows, automate client communication, surface firm intelligence, and connect approved AI agents.",
  alternates: {
    canonical: "/platform",
  },
};

const layers = [
  {
    id: "01",
    title: "Visibility Across Every Matter",
    body: "Keep matters, stages, tasks, notes, deadlines, workload, and operational context visible in one system.",
  },
  {
    id: "02",
    title: "Automated Workflows",
    body: "Trigger matter-stage tasks, deadline-aware reminders, wait steps, and operational handoffs from the firm's actual process.",
  },
  {
    id: "03",
    title: "Client Communication Automation",
    body: "Use firm-branded email templates and automation flows to send stage-aware updates and matter-aware reminders.",
  },
  {
    id: "04",
    title: "Firm Intelligence",
    body: "Track retained rate, timing, stale matters, team reliability, workload, and practice-area reporting.",
  },
  {
    id: "05",
    title: "Per-Firm Administration",
    body: "Manage firm settings, branding, workflow configuration, and operational controls at the instance level.",
  },
  {
    id: "06",
    title: "AI Agent Connected",
    body: "Expose approved operational tools to connected AI clients without permitting record changes or email sending.",
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
              <div className="platform-blueprint-line">Notes + Deadlines</div>
              <div className="platform-blueprint-line">Communication + Reporting</div>
            </div>
            <div className="section-head compact">
              <p className="section-tag">Platform</p>
              <h1 className="page-title">One operating system for Estate Planning work, communication, and firm intelligence.</h1>
              <p>
                LawOps is built around how legal work actually moves: matters,
                stages, tasks, deadlines, notes, parties, client status,
                communication, and reporting. The firm runs from operational
                truth instead of memory and status chasing.
              </p>
            </div>
          </div>
        </section>

        <section className="section surface-grid">
          <div className="container platform-map-layout">
            <div className="frame">
              <div className="frame-meta">
                <span>Automation Flow</span>
                <span>Workflow to Email</span>
              </div>
              <Image
                src="/app-images/automation_flow_canvas.png"
                alt="Automation flow canvas"
                width={1673}
                height={608}
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
                <span>Email Templates</span>
                <span>Client-Facing Content</span>
              </div>
              <Image
                src="/app-images/email_template_list.png"
                alt="Email template list"
                width={1484}
                height={719}
                className="screenshot"
              />
            </div>
            <div className="frame">
              <div className="frame-meta">
                <span>Firm Admin</span>
                <span>Brand Controls</span>
              </div>
              <Image
                src="/app-images/firm_brand_control_admin.png"
                alt="Firm brand control admin"
                width={1426}
                height={749}
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
