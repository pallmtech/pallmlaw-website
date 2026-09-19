import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import ScheduleCallButton from "@/components/site/ScheduleCallButton";

export const metadata: Metadata = {
  title: "Client Communication Automation for Estate Planning Firms",
  description:
    "PallmLaw helps trusts and estates firms automate firm-branded, stage-aware client communication with controlled templates, workflow triggers, and communication traceability.",
  alternates: {
    canonical: "/client-communication-automation",
  },
};

const communicationPoints = [
  "Firm-controlled email templates and client-facing message copy",
  "Firm-branded client communication that still feels personal",
  "Stage-aware and workflow-triggered client updates",
  "Matter-aware reminders and next-step messages",
  "Communication history tied to clients, prospects, matters, tasks, and automations",
  "Delivery and communication event traceability",
];

export default function ClientCommunicationAutomationPage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <section className="section platform-hero">
          <div className="container platform-hero-grid">
            <div className="frame">
              <div className="frame-meta">
                <span>Email Template</span>
                <span>Firm-Controlled Copy</span>
              </div>
              <Image
                src="/app-images/email_template_full_editor_surface.png"
                alt="PallmLaw email template editor"
                width={859}
                height={889}
                className="screenshot"
                priority
              />
            </div>
            <div className="section-head compact">
              <p className="section-tag">Automated Client Communication</p>
              <h1 className="page-title">Client communication that runs with the matter.</h1>
              <p>
                PallmLaw turns client communication from a manual follow-up burden
                into a structured, firm-controlled system. Trusts and estates firms
                can standardize what clients receive, when they receive it, and
                why, while keeping the tone personal and firm-branded.
              </p>
              <div className="inline-cta-row">
                <ScheduleCallButton
                  className="button button-primary"
                  label="Book Fit Conversation"
                />
                <Link className="button button-secondary" href="/workflow-automation">
                  See Workflow Automation
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section surface-grid">
          <div className="container estate-metrics-layout">
            <div className="estate-metric-list">
              <p className="section-tag">What It Controls</p>
              <h2>Automated touchpoints without losing the human feel.</h2>
              {communicationPoints.map((point) => (
                <div className="estate-metric-item" key={point}>
                  {point}
                </div>
              ))}
            </div>
            <div className="visual-column">
              <div className="frame">
                <div className="frame-meta">
                  <span>Client Preview</span>
                  <span>Branded Message</span>
                </div>
                <Image
                  src="/app-images/pallmlaw_client_email_preview.png"
                  alt="Client-facing PallmLaw email preview"
                  width={1789}
                  height={869}
                  className="screenshot"
                />
              </div>
              <div className="mini-visual-grid">
                <div className="frame mini">
                  <Image
                    src="/app-images/email_preview_control_surface.png"
                    alt="Email preview controls"
                    width={1075}
                    height={492}
                    className="screenshot"
                  />
                </div>
                <div className="frame mini">
                  <Image
                    src="/app-images/email_template_list.png"
                    alt="PallmLaw email template list"
                    width={1484}
                    height={719}
                    className="screenshot"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section home-manifesto">
          <div className="container section-stack">
            <div className="section-head">
              <p className="section-tag">Why It Matters</p>
              <h2>Every client should know what happens next.</h2>
              <p>
                Staff should not need spreadsheets, memory, and one-off emails
                to keep clients informed. PallmLaw helps trusts and estates firms
                create a consistent client experience while communication
                history remains part of the same operational record.
              </p>
            </div>
            <div className="pillar-grid">
              <article className="pillar-card">
                <h3>Less chasing</h3>
                <p>Automate repeatable reminders, next-step emails, and milestone updates.</p>
              </article>
              <article className="pillar-card">
                <h3>More consistency</h3>
                <p>Keep messaging professional, timely, and firm-branded across the team.</p>
              </article>
              <article className="pillar-card">
                <h3>Clearer history</h3>
                <p>See what was sent, when it was sent, who received it, and what triggered it.</p>
              </article>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
