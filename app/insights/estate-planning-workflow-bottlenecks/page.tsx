import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Estate Planning Firms Lose Time Between Retained and Drafting",
  description:
    "Why Estate Planning matters stall between retained, drafting, signing, and binder, and what firms need to control the handoffs.",
  alternates: {
    canonical: "/insights/estate-planning-workflow-bottlenecks",
  },
};

export default function EstatePlanningWorkflowBottlenecksPage() {
  return (
    <main className="article-shell">
      <article className="article-card">
        <p className="section-tag">Insights</p>
        <h1>Why Estate Planning firms lose time between retained and drafting</h1>
        <p className="article-lede">
          Most Estate Planning firms do not lose time because one person failed
          badly. They lose time because work sits quietly between handoffs.
        </p>
        <p>
          A consult is retained. Notes are taken. A plan needs to move into
          drafting. But that movement is not always visible. The owner assumes
          the team has it. The team assumes someone else has already touched it.
          The result is not dramatic. It is slow leakage.
        </p>
        <p>
          This is where many firms lose margin. Not because the legal work is
          weak, but because the workflow between stages is hard to see in real
          time. If the owner cannot tell what is still sitting in retained, what
          has moved to drafting, and what is drifting, the firm starts operating
          on updates, memory, and hallway checks.
        </p>
        <h2>Where the drag usually appears</h2>
        <p>
          The heaviest drag often shows up right after retained, before drafting
          has really started. It can also show up between drafting and signing,
          and again before binder completion. In each case, the real problem is
          not just delay. It is low visibility into who owns the next move.
        </p>
        <h2>What better firms do differently</h2>
        <p>
          Better-run firms create a clearer system for stage ownership, task
          visibility, and matter status. That gives the owner a faster answer to
          a simple question: where is the work right now?
        </p>
        <p>
          When that answer becomes obvious, growth gets easier. The owner spends
          less time reconstructing the day and more time leading the firm.
        </p>
        <div className="inline-cta-row">
          <Link className="button button-primary" href="/estate-planning-software">
            See Estate Planning Software
          </Link>
          <Link className="button button-secondary" href="/insights">
            Back To Insights
          </Link>
        </div>
      </article>
    </main>
  );
}
