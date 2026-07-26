import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import ScheduleCallButton from "@/components/site/ScheduleCallButton";

export const metadata: Metadata = {
  title: "AI Agent Connected Intelligence for Estate Planning Firms",
  description:
    "Ask Estate Planning operational questions in plain English through LawOps, with approved AI access that stays read-only, scoped, consent-based, and audited.",
  alternates: {
    canonical: "/ai-agent-connected",
  },
};

const aiQuestions = [
  "Which retained matters have had no recent activity?",
  "Which team member has the most overdue tasks?",
  "What matters are blocked before signing?",
  "What automation runs failed or are waiting?",
  "Which matters need leadership attention today?",
];

const aiGuardrails = [
  "Scoped, read-only MCP-compatible tools for approved AI clients",
  "Tool-based answers instead of unrestricted database access",
  "User-attributed authorization and audit visibility",
  "Matter, task, deadline, note, communication, and Firm Intelligence context",
  "No AI record changes, email sending, workflow execution, or legal advice",
];

const aiIconCards = [
  {
    label: "AI Agent Connected",
    mark: "AI",
    body: "Approved assistants can ask operational questions through governed tools.",
  },
  {
    label: "MCP Tools",
    mark: "MCP",
    body: "Tool schemas define what context an agent can request.",
  },
  {
    label: "Read-Only Access",
    mark: "RO",
    body: "Agents retrieve operational context without record-change permission.",
  },
  {
    label: "Audit Log",
    mark: "LOG",
    body: "Tool calls, users, clients, status, timing, and errors stay visible.",
  },
  {
    label: "Firm Intelligence",
    mark: "FI",
    body: "Matter, workload, deadline, bottleneck, and performance context.",
  },
  {
    label: "No Write Access",
    mark: "NO",
    body: "No AI editing, deleting, emailing, or workflow execution.",
  },
];

export default function AiAgentConnectedPage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <section className="section platform-hero">
          <div className="container platform-hero-grid">
            <div className="frame frame-dark">
              <div className="frame-meta">
                <span>MCP Access</span>
                <span>Read-Only Operational Intelligence</span>
              </div>
              <Image
                src="/app-images/ai_agent_connected_mcp_hero.png"
                alt="LawOps AI Agent Connected MCP operational intelligence graphic"
                width={1376}
                height={768}
                className="screenshot"
                priority
              />
            </div>
            <div className="section-head compact">
              <p className="section-tag">AI Agent Connected</p>
              <h1 className="page-title">Ask your firm's data a real question. Get a real answer.</h1>
              <p>
                Approved AI assistants can answer practical questions about
                retained matters, workload, deadlines, bottlenecks,
                communication history, and firm performance in plain English.
                LawOps provides the trust layer: read-only, scoped,
                consent-based tools with audited activity and no direct
                database access.
              </p>
              <div className="inline-cta-row">
                <ScheduleCallButton
                  className="button button-primary"
                  label="Book Fit Conversation"
                />
                <Link className="button button-secondary" href="/intelligence">
                  See Firm Intelligence
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section surface-grid">
          <div className="container estate-grid">
            <div className="estate-copy">
              <p className="section-tag">Operational Intelligence</p>
              <h2>Operational answers, not generic AI chat.</h2>
              <p>
                Approved agents use structured LawOps tools to retrieve current
                operational context and answer what needs attention. They
                cannot change records, send emails, execute workflows, or
                perform autonomous legal work.
              </p>
              <ul className="detail-list">
                {aiQuestions.map((question) => (
                  <li key={question}>{question}</li>
                ))}
              </ul>
            </div>
            <div className="visual-column">
              <div className="frame">
                <div className="frame-meta">
                  <span>Agent Activity</span>
                  <span>Client + User + Tool</span>
                </div>
                <Image
                  src="/app-images/MCP_agent_activity.png"
                  alt="LawOps MCP agent activity"
                  width={1443}
                  height={324}
                  className="screenshot"
                />
              </div>
              <div className="frame">
                <div className="frame-meta">
                  <span>Admin Controls</span>
                  <span>Advanced Options</span>
                </div>
                <Image
                  src="/app-images/MCP_advanced_options_admin.png"
                  alt="LawOps MCP advanced options"
                  width={1419}
                  height={908}
                  className="screenshot"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section home-manifesto">
          <div className="container section-stack">
            <div className="section-head">
              <p className="section-tag">Guardrails</p>
              <h2>Scoped tools, not database access.</h2>
              <p>
                The strongest AI story is operational: workload, deadlines,
                bottlenecks, status, communication context, and performance
                visibility. LawOps keeps that access controlled and auditable.
              </p>
            </div>
            <div className="proof-grid">
              {aiGuardrails.map((guardrail) => (
                <div className="proof-card" key={guardrail}>
                  {guardrail}
                </div>
              ))}
            </div>
            <div className="platform-story-grid">
              <div className="frame brand-collateral-frame">
                <div className="frame-meta">
                  <span>MCP Governance</span>
                  <span>Scoped + Read-Only + Audited</span>
                </div>
                <Image
                  src="/app-images/mcp_read_only_governance_diagram.png"
                  alt="Read-only MCP governance diagram for LawOps"
                  width={1376}
                  height={768}
                  className="screenshot"
                />
              </div>
              <div className="ai-icon-panel">
                <div className="frame-meta">
                  <span>AI Tool Model</span>
                  <span>Operational Guardrails</span>
                </div>
                <div className="ai-icon-grid">
                  {aiIconCards.map((item) => (
                    <article className="ai-icon-card" key={item.label}>
                      <span className="ai-icon-mark">{item.mark}</span>
                      <h3>{item.label}</h3>
                      <p>{item.body}</p>
                    </article>
                  ))}
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
