import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";

export const metadata: Metadata = {
  title: "Insights for Estate Planning Firms",
  description:
    "Insights from LawOps on Estate Planning workflow, visibility, profitability, and how firms can keep work moving with more control.",
  alternates: {
    canonical: "/insights",
  },
};

const articles = [
  {
    href: "/insights/estate-planning-workflow-bottlenecks",
    title: "Why Estate Planning firms lose time between retained and drafting",
    body: "A practical look at where work slows down, how margin leaks out of the workflow, and why owners lose visibility early.",
  },
  {
    href: "/insights/why-most-legal-software-does-not-create-visibility",
    title: "Why most legal software does not create real visibility",
    body: "Most legal software stores information. That does not mean the owner can actually see what is happening across the firm.",
  },
  {
    href: "/insights/how-estate-planning-firms-grow-without-losing-control",
    title: "How Estate Planning firms grow without losing control",
    body: "Growth gets harder when the owner becomes the bottleneck. This piece explains what has to change operationally.",
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
              <h1 className="page-title">Ideas for Estate Planning firms that want more visibility and control.</h1>
              <p>
                These articles are built for Estate Planning owners and operators
                trying to understand where work slows down, why growth gets hard,
                and what better visibility actually looks like in practice.
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
