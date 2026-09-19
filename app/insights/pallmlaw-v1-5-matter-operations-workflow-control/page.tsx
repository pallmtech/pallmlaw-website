import type { Metadata } from "next";
import Link from "next/link";
import { siteName, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "PallmLaw v1.5: Matter Operations and Workflow Control",
  description:
    "See what shipped in PallmLaw v1.5, including critical-date operations, matter-level automation visibility, communication history, operational ownership, and dashboard improvements.",
  alternates: {
    canonical: "/insights/pallmlaw-v1-5-matter-operations-workflow-control",
  },
};

export default function PallmLawV15ProductUpdatePage() {
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "PallmLaw v1.5 strengthens matter operations and workflow control",
    description:
      "A product update covering critical dates, matter-level automation visibility, communication history, operational ownership, and dashboard reliability.",
    datePublished: "2026-09-18",
    dateModified: "2026-09-18",
    mainEntityOfPage: `${siteUrl}/insights/pallmlaw-v1-5-matter-operations-workflow-control`,
    author: {
      "@type": "Organization",
      name: "Pallm Tech LLC",
      url: "https://www.pallmtech.com",
    },
    publisher: {
      "@type": "Organization",
      name: siteName,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/pallmlaw-fc-logo-large.png`,
      },
    },
  };

  return (
    <main className="article-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />
      <article className="article-card">
        <p className="section-tag">Product Update</p>
        <h1>PallmLaw v1.5 strengthens matter operations and workflow control</h1>
        <p className="article-lede">
          Version 1.5 gives firms a clearer operating view of critical dates,
          automation, communication history, ownership, and the work that needs
          attention next.
        </p>
        <p>
          PallmLaw is built to control the work that happens after a matter is
          retained. This release strengthens that operating layer. It connects
          more of the matter lifecycle to structured records, makes automation
          activity easier to inspect, and gives administrators safer controls
          for keeping configured workflows aligned with active matters.
        </p>

        <h2>Critical dates become first-class operational records</h2>
        <p>
          Critical dates now connect across matter workflows, calendars,
          reporting, automation projections, and administrative reconciliation.
          The calendar preserves complete cross-month weeks and distinguishes
          date categories while keeping adjacent-month dates visible. The goal
          is straightforward: deadlines should be part of the operating model,
          not buried in an isolated field or spreadsheet.
        </p>

        <h2>Automation is visible at the matter and firm level</h2>
        <p>
          A matter-level Automation view shows upcoming automation and the run
          history associated with that matter. The Automation Monitor gives
          administrators a broader view of date-driven work that is coming up
          and items that require attention. Teams can inspect what the system is
          expected to do without treating automation as an invisible background
          process.
        </p>

        <h2>Relevant client communication stays connected to the matter</h2>
        <p>
          Authorized users can review communication history involving linked
          Client and Spouse parties from the matter. Summaries load when
          requested and message bodies load when opened. Internal notices and
          communications from unrelated matters remain outside that view.
        </p>

        <h2>Operational ownership is clearer</h2>
        <p>
          The Manager role supports day-to-day operational ownership without
          granting developer authority. Professional titles are available on
          approved profile and administration surfaces, and supported matter and
          task deletion uses recoverable Trash behavior with guarded restoration
          rules.
        </p>

        <h2>The dashboard is more dependable for daily work</h2>
        <p>
          Tasks, critical dates, notes, and whiteboard data load independently
          from deeper Firm Intelligence analytics. That separation keeps routine
          operational work from depending on a heavier analytics request while
          preserving leadership reporting for retained rate, cycle time, stalled
          matters, workload, and team reliability.
        </p>

        <h2>Built around configurable legal workflows</h2>
        <p>
          Estate Planning remains PallmLaw&apos;s primary commercial focus. The
          underlying practice-area and subtype workflow foundation also supports
          configured Probate, Probate Release, and Trust Administration
          workflows. Firms still need a deliberate implementation around their
          process; PallmLaw is not positioned as a generic template library.
        </p>

        <div className="inline-cta-row">
          <Link className="button button-primary" href="/fit">
            Book A Fit Conversation
          </Link>
          <Link className="button button-secondary" href="/platform">
            Explore The Platform
          </Link>
        </div>
      </article>
    </main>
  );
}
