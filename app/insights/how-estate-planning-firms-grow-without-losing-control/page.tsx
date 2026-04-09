import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Estate Planning Firms Grow Without Losing Control",
  description:
    "Estate Planning firms grow more safely when the owner no longer has to personally carry visibility for every matter and staff handoff.",
  alternates: {
    canonical: "/insights/how-estate-planning-firms-grow-without-losing-control",
  },
};

export default function HowEstatePlanningFirmsGrowWithoutLosingControlPage() {
  return (
    <main className="article-shell">
      <article className="article-card">
        <p className="section-tag">Insights</p>
        <h1>How Estate Planning firms grow without losing control</h1>
        <p className="article-lede">
          Growth gets harder when the owner becomes the system holding the firm together.
        </p>
        <p>
          Many Estate Planning firms hit the same wall. The owner is still doing
          consults, signings, and client-facing work while also acting as the
          final source of truth on what is happening in the firm. That works for
          a while. Then growth starts creating more confusion instead of more profit.
        </p>
        <p>
          The answer is not simply adding more people. If the workflow remains
          unclear, new volume only increases the number of places where work can
          disappear between stages.
        </p>
        <h2>What has to change</h2>
        <p>
          The owner needs a better operating view of the firm. That means seeing
          matter status, stalled work, task ownership, and bottlenecks without
          having to constantly ask for updates. Once that visibility improves,
          the owner can lead growth instead of manually carrying it.
        </p>
        <h2>Control is not the same as micromanagement</h2>
        <p>
          Better control does not mean the owner touches every matter. It means
          the owner can see enough to know when intervention is needed and when
          the team is moving well on its own.
        </p>
        <div className="inline-cta-row">
          <Link
            className="button button-primary"
            href="/estate-planning-software-florida"
          >
            See Florida Estate Planning Software
          </Link>
          <Link className="button button-secondary" href="/insights">
            Back To Insights
          </Link>
        </div>
      </article>
    </main>
  );
}
