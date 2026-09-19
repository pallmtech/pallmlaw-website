import type { Metadata } from "next";
import Image from "next/image";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";

export const metadata: Metadata = {
  title: "Legal Operations Platform for Estate Planning Firms",
  description:
    "See the PallmLaw operating and intelligence system for Estate Planning firms, built on configurable workflows and intelligence derived from Matters and Tasks.",
  alternates: {
    canonical: "/platform",
  },
};

const layers = [
  {
    id: "01",
    title: "Configurable Practice-Area Engine",
    body: "Configure stages, critical dates, and task templates independently by practice area and matter subtype, with Estate Planning as the current market focus.",
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
    body: "Derive retention, cycle time, stalled retained matters, workload, and team reliability from structured Matters and Tasks.",
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
              <h1 className="page-title">One operating and intelligence system for Estate Planning delivery.</h1>
              <p>
                PallmLaw combines execution and intelligence in the same model:
                Matters move through configured stages, critical dates, and
                task templates, while the work itself produces the answers
                leadership needs. It works alongside the firm's existing
                practice management, drafting, and intake tools.
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
