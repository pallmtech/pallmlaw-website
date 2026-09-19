import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";

export const metadata: Metadata = {
  title: "Estate Planning Firm Operations Insights",
  description:
    "Operational guidance for Estate Planning firms that need clearer matter visibility, tighter workflow control, automated follow-up, and better firm intelligence.",
  alternates: {
    canonical: "/insights",
  },
};

const articles = [
  {
    href: "/insights/pallmlaw-v1-5-matter-operations-workflow-control",
    title: "PallmLaw v1.5: matter operations and workflow control",
    body: "A product update covering critical dates, matter-level automation visibility, communication history, operational ownership, and a more reliable dashboard.",
  },
  {
    href: "/insights/estate-planning-workflow-bottlenecks",
    title: "Where Estate Planning work slows down after retained",
    body: "The cost is not just delay. It is unclear ownership, missed handoffs, and matters sitting too long before the next step happens.",
  },
  {
    href: "/insights/why-most-legal-software-does-not-create-visibility",
    title: "Why most legal software does not create real visibility",
    body: "Record storage does not tell leadership what is open, stuck, overdue, overloaded, or ready to move.",
  },
  {
    href: "/insights/how-estate-planning-firms-grow-without-losing-control",
    title: "How Estate Planning firms grow without losing control",
    body: "More matters should not mean more owner intervention. The firm needs a system for visibility, ownership, and repeatable follow-through.",
  },
];

export default function InsightsPage() {
  return (
    <div className="site-shell">
      <SiteHeader current="insights" />
      <main>
        <section className="section fit-page-shell">
          <div className="container section-stack">
            <div className="fit-intro">
              <p className="section-tag">Insights</p>
              <h1 className="page-title">Run the firm from operational truth.</h1>
              <p>
                Estate Planning firms do not scale on memory, status meetings,
                and scattered follow-up. They scale when matters, tasks,
                deadlines, communication, and bottlenecks are visible enough to
                manage.
              </p>
            </div>

            <div className="pillar-grid">
              {articles.map((article) => (
                <article className="pillar-card" key={article.href}>
                  <h3>{article.title}</h3>
                  <p>{article.body}</p>
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
