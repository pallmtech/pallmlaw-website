import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import ScheduleCallButton from "@/components/site/ScheduleCallButton";

export const metadata: Metadata = {
  title: "Book a Fit Conversation",
  description:
    "Book a fit conversation to see whether PallmLaw is a strong match for your Estate Planning firm's workflow, visibility, and growth needs.",
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

const conversationTopics = [
  "How retained matters move through the firm today",
  "Where ownership, deadlines, or client follow-up become unclear",
  "Which systems PallmLaw would work alongside",
  "Whether the firm's volume and workflow complexity justify implementation",
];

const frequentlyAskedQuestions = [
  {
    question: "Does PallmLaw replace our practice-management or drafting system?",
    answer:
      "No. PallmLaw is the workflow-control and firm-intelligence layer. It is designed to work alongside the firm's practice-management, drafting, and intake tools.",
  },
  {
    question: "Which firms are the strongest fit?",
    answer:
      "The strongest fit is an Estate Planning firm with meaningful matter volume, repeatable work, multiple team handoffs, and an operational need for clearer ownership, deadline control, and leadership visibility.",
  },
  {
    question: "Is PallmLaw an AI product?",
    answer:
      "AI is a governed access layer, not the primary product category. Approved AI clients can use scoped, read-only MCP tools. They cannot directly change firm records or send email through PallmLaw.",
  },
  {
    question: "How is PallmLaw configured for a firm?",
    answer:
      "PallmLaw is configured around the firm's practice areas, matter subtypes, stages, critical dates, task templates, automation, and communication rules. The fit conversation determines whether that implementation model matches the firm's needs.",
  },
];

export default function FitPage() {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: frequentlyAskedQuestions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="site-shell">
      <SiteHeader current="fit" />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
        />
        <section className="section fit-page-shell">
          <div className="container fit-page-layout">
            <div className="fit-intro">
              <p className="section-tag">Fit Conversation</p>
              <h1 className="page-title">Let's find out if PallmLaw is a fit.</h1>
              <p>
                PallmLaw is the operating and intelligence system for Estate
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
            <div className="fit-panel">
              <p className="comparison-label">What We Will Cover</p>
              <h2>A working-session conversation, not a generic product demo.</h2>
              <p>
                We will map the operational problem first, then determine
                whether PallmLaw is appropriate for the firm. You should leave
                with a clear fit assessment even if the answer is no.
              </p>
              <ul className="detail-list">
                {conversationTopics.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="fit-panel fit-contact-panel">
              <h2>Book the conversation.</h2>
              <p>
                Pick a time to talk through how matters move today, where
                follow-up breaks down, and whether PallmLaw fits the way your firm
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
            <div className="section-stack">
              <div className="section-head compact">
                <p className="section-tag">Common Questions</p>
                <h2>What firms usually need to establish before moving forward.</h2>
              </div>
              <div className="pillar-grid">
                {frequentlyAskedQuestions.map((item) => (
                  <article className="pillar-card" key={item.question}>
                    <h3>{item.question}</h3>
                    <p>{item.answer}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
