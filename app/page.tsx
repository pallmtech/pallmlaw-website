import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import ScheduleCallButton from "@/components/site/ScheduleCallButton";
import { siteName, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Estate Planning Workflow Software & Firm Intelligence | PallmLaw",
  description:
    "PallmLaw helps Estate Planning firms track matters, automate workflows and client communication, identify bottlenecks, and improve operational visibility.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Estate Planning Workflow Software & Firm Intelligence | PallmLaw",
    description:
      "PallmLaw helps Estate Planning firms turn retained matters into a visible, enforced, measurable pipeline and identify stalled work and broken handoffs.",
    url: siteUrl,
  },
};

const pillars = [
  {
    title: "Operational Visibility",
    body:
      "Know where every retained matter stands across tasks, notes, deadlines, stages, and team workload without chasing updates.",
  },
  {
    title: "Firm Intelligence",
    body:
      "See retention, cycle time, stale matters, workload, and team reliability derived from the work already happening in PallmLaw.",
  },
  {
    title: "Automated Execution",
    body:
      "Turn the firm's best process into repeatable tasks, deadlines, handoffs, and firm-branded client communication.",
  },
];

const proofCards = [
  "Know where every matter stands",
  "Automate repeatable legal workflows",
  "Keep clients informed automatically",
  "Spot bottlenecks before they become problems",
  "Connect firm data to approved AI agents",
  "Build around your actual process",
];

const salesProofs = [
  {
    eyebrow: "Track",
    title: "Every matter has a visible path forward.",
    body:
      "PallmLaw gives the team one operating view of matter context, notes, deadlines, tasks, stages, and workload so owners do not have to manage by hallway updates.",
    bullets: [
      "Matter, task, note, stage, and deadline visibility",
      "Stale work and bottleneck detection",
      "Owner-level intelligence from live operational data",
    ],
    image: "/app-images/matter_record_surface.png",
    alt: "Estate Planning matter record in PallmLaw",
    width: 1025,
    height: 792,
    metaLeft: "Matter Record",
    metaRight: "Context + Tasks + Notes",
    href: "/matter-tracking-software-estate-planning",
    cta: "See Matter Tracking",
  },
  {
    eyebrow: "Automate",
    title: "Repeatable legal work becomes a workflow engine.",
    body:
      "Tasks, deadlines, reminders, waits, notes, and handoffs can be triggered from where a matter is and what needs to happen next.",
    bullets: [
      "Matter-stage and deadline-aware automation",
      "Conditional workflow logic built around legal work",
      "Run history and error visibility for operational control",
    ],
    image: "/app-images/automation_flow_canvas.png",
    alt: "Workflow automation flow in PallmLaw",
    width: 1673,
    height: 608,
    metaLeft: "Automation Flow",
    metaRight: "Matter Lifecycle Rules",
    href: "/workflow-automation",
    cta: "See Workflow Automation",
  },
  {
    eyebrow: "Optimize",
    title: "Client updates run with the matter, not someone's memory.",
    body:
      "Firm-branded templates and stage-aware communication help every client understand what happens next while the firm keeps messaging controlled and traceable.",
    bullets: [
      "Firm-controlled email templates and client-facing copy",
      "Stage-aware updates and matter-aware reminders",
      "Delivery and communication event traceability",
    ],
    image: "/app-images/email_client_facing_email_preview.png",
    alt: "Client-facing email preview in PallmLaw",
    width: 1824,
    height: 896,
    metaLeft: "Client Communication",
    metaRight: "Preview + Send Control",
    href: "/client-communication-automation",
    cta: "See Client Communication",
  },
];

const roadmap = [
  {
    phase: "Track",
    title: "Visibility Across Every Matter",
    body:
      "Practice-area workflow, matter records, task ownership, notes, deadlines, scorecards, and stale-work visibility.",
  },
  {
    phase: "Automate",
    title: "Automated Workflows + Communication",
    body:
      "Matter-stage automation, deadline-aware tasks, wait steps, and firm-branded client communication that runs with the matter.",
  },
  {
    phase: "Connect",
    title: "AI Agent Connected",
    body:
      "Read-only AI connector access that exposes approved operational tools, records client and user activity, and does not permit AI record changes.",
  },
];

const seoPages = [
  {
    href: "/client-communication-automation",
    title: "Automate Client Communication",
    body: "Firm-branded, stage-aware messages keep clients informed without manual follow-up spreadsheets.",
  },
  {
    href: "/workflow-automation",
    title: "Automate The Workflow",
    body: "Turn matter stages, tasks, deadlines, handoffs, waits, and reminders into a repeatable operating and intelligence system.",
  },
  {
    href: "/ai-agent-connected",
    title: "Connect Approved AI Agents",
    body: "Give approved AI assistants governed, read-only MCP tools for operational intelligence without write access.",
  },
  {
    href: "/estate-planning-software",
    title: "See How PallmLaw Works",
    body: "Control matters, handoffs, client communication, and delivery intelligence in one connected system.",
  },
  {
    href: "/estate-planning-software-florida",
    title: "Built For Serious Florida Firms",
    body: "For firms that need more matter visibility, workflow automation, client communication control, and firm intelligence.",
  },
  {
    href: "/legal-workflow-software",
    title: "Control The Workflow",
    body: "Connect stages, dates, tasks, notes, automation, and reporting around legal matter execution.",
  },
  {
    href: "/matter-tracking-software-estate-planning",
    title: "Know Where Every Matter Stands",
    body: "Stop relying on memory and status meetings to understand what is open, stalled, overdue, or waiting.",
  },
];

const insightArticles = [
  {
    href: "/insights/estate-planning-workflow-bottlenecks",
    title: "Why Estate Planning firms lose time between retained and drafting",
  },
  {
    href: "/insights/why-most-legal-software-does-not-create-visibility",
    title: "Why most legal software does not create real visibility",
  },
  {
    href: "/insights/how-estate-planning-firms-grow-without-losing-control",
    title: "How Estate Planning firms grow without losing control",
  },
];

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.pallmtech.com/#organization",
        name: "Pallm Tech LLC",
        url: "https://www.pallmtech.com",
        logo: `${siteUrl}/pallmlaw-fc-logo-large.png`,
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: siteName,
        alternateName: "LawOps",
        url: siteUrl,
        publisher: {
          "@id": "https://www.pallmtech.com/#organization",
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${siteUrl}/#softwareapplication`,
        name: siteName,
        alternateName: "LawOps",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: siteUrl,
        creator: {
          "@id": "https://www.pallmtech.com/#organization",
        },
        brand: {
          "@type": "Brand",
          name: siteName,
          logo: `${siteUrl}/pallmlaw-fc-logo-large.png`,
        },
        audience: {
          "@type": "Audience",
          audienceType: "Estate Planning firms",
        },
        areaServed: ["Florida", "United States"],
        description:
          "PallmLaw is the operating and intelligence system for Estate Planning firms, combining matter visibility, workflow automation, client communication, and firm intelligence.",
      },
    ],
  };

  return (
    <div className="site-shell">
      <SiteHeader current="home" />

      <main id="top">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <section className="hero-band hero-wide">
          <div className="container hero-split">
            <div className="hero-wide-copy">
              <p className="eyebrow">Estate Planning Operations + Intelligence</p>
              <h1>
                Operations and Intelligence for Estate Planning Firms
              </h1>
              <p className="hero-tagline">Track. Automate. Optimize.</p>
              <p className="lede">
                PallmLaw turns retained matters into a visible, enforced,
                measurable pipeline and gives owners real answers about where
                work is stuck and handoffs are breaking down, without replacing the
                tools the firm already uses.
              </p>
              <ul className="hero-feature-list">
                <li>Visibility Across Every Matter</li>
                <li>Automated Workflows</li>
                <li>Automated Client Communication</li>
                <li>Firm Intelligence</li>
                <li>AI Agent Connected</li>
              </ul>
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

            <div className="hero-product-visual">
              <div className="frame frame-dark">
                <div className="frame-meta">
                  <span>PallmLaw Command Center</span>
                  <span>Notes + Matters + Tasks</span>
                </div>
                <Image
                  src="/app-images/main_dashboard_with_new_notes_menu_item.png"
                  alt="PallmLaw dashboard with notes navigation"
                  width={956}
                  height={453}
                  className="screenshot"
                  priority
                />
              </div>
              <div className="hero-proof-badges" aria-label="Product proof points">
                <span>Matter visibility</span>
                <span>Workflow automation</span>
                <span>Client communication</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section home-manifesto">
          <div className="container section-stack">
            <div className="section-head">
              <p className="section-tag">Category</p>
              <h2>Operational control and firm intelligence from the same work.</h2>
              <p>
                PallmLaw replaces manual follow-up, scattered spreadsheets, and
                invisible bottlenecks with one operating and intelligence
                system for retained matters, workflows, client communication,
                and leadership decisions.
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

            <div className="frame brand-collateral-frame">
              <div className="frame-meta">
                <span>Track + Automate + Optimize</span>
                <span>Operating + Intelligence Model</span>
              </div>
              <Image
                src="/app-images/track_automate_optimize_triptych.png"
                alt="Track Automate Optimize PallmLaw operating system graphic"
                width={1376}
                height={768}
                className="screenshot"
              />
            </div>
          </div>
        </section>

        <section className="section sales-proof-band">
          <div className="container section-stack">
            <div className="section-head">
              <p className="section-tag">Inside PallmLaw</p>
              <h2>The product shows how the operating and intelligence system works.</h2>
              <p>
                See how PallmLaw tracks matters, automates work, and keeps
                client communication connected to the matter lifecycle.
              </p>
            </div>

            <div className="sales-proof-stack">
              {salesProofs.map((proof, index) => (
                <article
                  className={`sales-proof-row ${
                    index % 2 === 1 ? "sales-proof-row-reverse" : ""
                  }`}
                  key={proof.title}
                >
                  <div className="sales-proof-copy">
                    <p className="sales-proof-kicker">{proof.eyebrow}</p>
                    <h3>{proof.title}</h3>
                    <p>{proof.body}</p>
                    <ul className="detail-list">
                      {proof.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                    <div className="inline-cta-row">
                      <Link className="button button-secondary" href={proof.href}>
                        {proof.cta}
                      </Link>
                    </div>
                  </div>
                  <div className="frame sales-proof-frame">
                    <div className="frame-meta">
                      <span>{proof.metaLeft}</span>
                      <span>{proof.metaRight}</span>
                    </div>
                    <Image
                      src={proof.image}
                      alt={proof.alt}
                      width={proof.width}
                      height={proof.height}
                      className="screenshot"
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section home-dashboard-band">
          <div className="container intelligence-layout">
            <div className="section-head compact">
              <p className="section-tag">Firm Intelligence</p>
              <h2>See the work, the workload, and the bottlenecks before they slow delivery.</h2>
              <p>
                PallmLaw runs on two core objects: Matters and Tasks. As the team
                completes the work, PallmLaw automatically derives retention
                rates, cycle times, stalled retained matters, workload, and team
                reliability without building each report as a separate system.
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
                  src="/app-images/matter_record_surface.png"
                  alt="Matter record surface"
                  width={1025}
                  height={792}
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
              <p className="section-tag">Client Communication</p>
              <h2>Client communication that runs with the matter.</h2>
              <p>
                PallmLaw turns client communication from a manual follow-up burden
                into a firm-controlled system. Send branded, stage-aware messages
                and reminders while keeping the tone personal and professional.
              </p>
              <ul className="detail-list">
                <li>Firm-controlled email templates and client-facing copy</li>
                <li>Stage-aware and workflow-triggered client updates</li>
                <li>Matter-aware reminders and next-step messages</li>
                <li>Delivery and communication event traceability</li>
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
                  <span>Email Template</span>
                  <span>Client Preview</span>
                </div>
                <Image
                  src="/app-images/email_template_full_editor_surface.png"
                  alt="Email template editor"
                  width={859}
                  height={889}
                  className="screenshot"
                />
              </div>
              <div className="mini-visual-grid">
                <div className="frame mini">
                  <Image
                    src="/app-images/email_preview_control_surface.png"
                    alt="Email preview control surface"
                    width={1075}
                    height={492}
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

        <section className="section surface-plain">
          <div className="container section-stack">
            <div className="section-head">
              <p className="section-tag">AI Agent Connected</p>
              <h2>Ask your firm's data a real question and get a real answer.</h2>
              <p>
                Approved AI assistants can answer practical questions about
                retained matters, workload, deadlines, bottlenecks, and
                performance in plain English. Access stays read-only, scoped,
                consent-governed, and audited.
              </p>
              <div className="inline-cta-row">
                <Link className="button button-secondary" href="/ai-agent-connected">
                  See AI Agent Connected
                </Link>
              </div>
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
            <div className="platform-story-grid">
              <div className="frame">
                <div className="frame-meta">
                  <span>MCP Access</span>
                  <span>Client Admin Managed</span>
                </div>
                <Image
                  src="/app-images/MCP_enablement_options_admin.png"
                  alt="MCP enablement options"
                  width={1433}
                  height={581}
                  className="screenshot"
                />
              </div>
              <div className="frame">
                <div className="frame-meta">
                  <span>Agent Activity</span>
                  <span>Client + User + Tool</span>
                </div>
                <Image
                  src="/app-images/MCP_agent_activity.png"
                  alt="MCP agent activity"
                  width={1443}
                  height={324}
                  className="screenshot"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section home-manifesto">
          <div className="container section-stack">
            <div className="section-head">
              <p className="section-tag">Choose Your Starting Point</p>
              <h2>Start with the capability your firm needs first.</h2>
              <p>
                Some firms start with communication. Others need workflow
                automation, matter visibility, or governed AI access. PallmLaw is
                built to connect those problems into one operating and
                intelligence system.
              </p>
            </div>

            <div className="pillar-grid">
              {seoPages.map((page) => (
                <article className="pillar-card" key={page.href}>
                  <h3>{page.title}</h3>
                  <p>{page.body}</p>
                  <div className="inline-cta-row">
                    <Link className="button button-secondary" href={page.href}>
                      Explore
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        {/* TESTIMONIAL PLACEHOLDER: pending Pierce Legal Group written permission, do not populate without explicit approved language from Adam */}

        <section className="section surface-plain">
          <div className="container section-stack">
            <div className="section-head">
              <p className="section-tag">Insights</p>
              <h2>Sharper operating models for Estate Planning firms.</h2>
              <p>
                Better growth starts with clearer ownership, repeatable
                workflows, consistent client follow-up, and leadership visibility
                into the work that needs attention.
              </p>
            </div>

            <div className="pillar-grid">
              {insightArticles.map((article) => (
                <article className="pillar-card" key={article.href}>
                  <h3>{article.title}</h3>
                  <div className="inline-cta-row">
                    <Link className="button button-secondary" href={article.href}>
                      Read Article
                    </Link>
                  </div>
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
