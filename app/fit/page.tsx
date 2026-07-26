import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import ScheduleCallButton from "@/components/site/ScheduleCallButton";

export const metadata: Metadata = {
  title: "Book a LawOps Fit Conversation",
  description:
    "Book a fit conversation to see whether LawOps is a strong match for your Estate Planning firm's workflow, visibility, and growth needs.",
  alternates: {
    canonical: "/fit",
  },
};

const fitSignals = [
  "You run an Estate Planning workflow with multiple handoffs",
  "Leadership lacks clean visibility into open work and bottlenecks",
  "Critical dates and status updates still depend too much on memory",
  "You want workflow control, communication consistency, and firm intelligence",
];

const nonFitSignals = [
  "You want the cheapest possible task tool",
  "You have little workflow complexity and do not feel operational drag",
  "You need an immediate replacement for every legal system the firm uses",
];

export default function FitPage() {
  return (
    <div className="site-shell">
      <SiteHeader current="fit" />
      <main>
        <section className="section fit-page-shell">
          <div className="container fit-page-layout">
            <div className="fit-intro">
              <p className="section-tag">Fit Conversation</p>
              <h1 className="page-title">Let's find out if LawOps is a fit.</h1>
              <p>
                LawOps is the operating and intelligence system for Estate
                Planning firms that need clearer matter visibility, repeatable
                workflows, automated client follow-up, and leadership-level
                answers before adding more headcount.
              </p>
            </div>
            <div className="fit-panels">
              <article className="fit-checklist positive">
                <p className="comparison-label">Good Fit</p>
                <ul>
                  {fitSignals.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
              <article className="fit-checklist negative">
                <p className="comparison-label">Probably Not A Fit</p>
                <ul>
                  {nonFitSignals.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </div>
            <div className="fit-panel fit-contact-panel">
              <h2>Book the conversation.</h2>
              <p>
                Pick a time to talk through how matters move today, where
                follow-up breaks down, and whether LawOps fits the way your firm
                wants to track, automate, and optimize the work.
              </p>
              <div className="inline-cta-row">
                <ScheduleCallButton
                  className="button button-primary"
                  label="Book Fit Conversation"
                />
                <Link className="button button-secondary" href="/estate-planning">
                  See Estate Planning Page
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
