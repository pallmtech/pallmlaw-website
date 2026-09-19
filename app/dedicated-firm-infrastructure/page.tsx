import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScheduleCallButton from "@/components/site/ScheduleCallButton";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import { siteName, siteUrl } from "@/lib/seo";

const description =
  "Learn how PallmLaw uses dedicated firm application infrastructure, a dedicated PostgreSQL database, firm-level administration, audit history, and governed operational access.";

export const metadata: Metadata = {
  title: "Dedicated Firm Infrastructure and Governed Data Access",
  description,
  alternates: { canonical: "/dedicated-firm-infrastructure" },
  openGraph: {
    title: "Dedicated Firm Infrastructure and Governed Data Access | PallmLaw",
    description,
    url: `${siteUrl}/dedicated-firm-infrastructure`,
  },
};

const infrastructurePoints = [
  {
    title: "Dedicated application infrastructure",
    body: "Each firm operates on application infrastructure provisioned for that firm rather than sharing one general product runtime across customer operations.",
  },
  {
    title: "Dedicated PostgreSQL database",
    body: "Each firm operates with a dedicated PostgreSQL database rather than storing operational records in a shared product-data database.",
  },
  {
    title: "Firm-level administration",
    body: "Approved administrators control firm profile, branding, users, workflow configuration, API access, and other supported operational settings.",
  },
  {
    title: "Governed integration access",
    body: "Versioned read-only REST access is instance-local, scoped, rate-controlled, documented, and audited for approved application use.",
  },
  {
    title: "Governed AI access",
    body: "Approved AI clients use scoped, read-only MCP tools through PallmLaw-owned authorization. They do not receive arbitrary SQL or direct database access.",
  },
  {
    title: "Durable access history",
    body: "Supported API and AI activity remains attributable through audit records covering the external client, authorizing user, tool or request, status, and timing.",
  },
];

const boundaries = [
  "Dedicated does not mean that PallmLaw is installed on an office server.",
  "Dedicated does not imply that the firm owns or directly administers the underlying cloud account.",
  "Read-only API and MCP access does not permit arbitrary database access or unrestricted fields.",
  "Connected AI clients cannot edit records, send email, execute workflows, or perform autonomous legal work through PallmLaw MCP tools.",
  "This page does not make unverified certification, uptime, backup, encryption, or regulatory-compliance claims.",
];

const faqs = [
  {
    question: "Is PallmLaw a shared multi-tenant product database?",
    answer:
      "No. Each firm operates with a dedicated PostgreSQL database and dedicated application infrastructure rather than sharing one product-data database across firms.",
  },
  {
    question: "Does dedicated infrastructure mean the firm self-hosts PallmLaw?",
    answer:
      "Not by default. Dedicated describes the separation of the firm's application and database environment. It does not mean the firm owns or directly operates the underlying cloud account.",
  },
  {
    question: "Can connected AI tools access the database directly?",
    answer:
      "No. Approved AI clients use explicit, scoped, read-only MCP tools. PallmLaw does not expose arbitrary SQL, unrestricted database access, or cross-firm data access.",
  },
  {
    question: "Does PallmLaw replace the firm's existing legal systems?",
    answer:
      "No. PallmLaw is designed as the workflow-control and firm-intelligence layer alongside supported practice-management, drafting, intake, and integration systems.",
  },
];

export default function DedicatedFirmInfrastructurePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "Dedicated Firm Infrastructure and Governed Data Access",
        url: `${siteUrl}/dedicated-firm-infrastructure`,
        description,
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#softwareapplication` },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return (
    <div className="site-shell">
      <SiteHeader current="platform" />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <section className="section platform-hero">
          <div className="container platform-hero-grid">
            <div className="frame frame-dark">
              <div className="frame-meta">
                <span>Dedicated Firm Infrastructure</span>
                <span>Separation + Governance + Audit</span>
              </div>
              <Image
                src="/app-images/pallmlaw_dedicated_firm_infrastructure.png"
                alt="PallmLaw dedicated firm application and database infrastructure with governed access, administration, audit history, and read-only AI access"
                width={1672}
                height={941}
                className="screenshot"
                priority
              />
            </div>
            <div className="section-head compact">
              <p className="section-tag">Dedicated Firm Infrastructure</p>
              <h1 className="page-title">Your firm&apos;s operational environment is separated by design.</h1>
              <p>
                {siteName} gives each firm dedicated application infrastructure
                and a dedicated PostgreSQL database, with firm-level
                administration and governed paths for approved application and
                AI access. Dedicated describes infrastructure separation. It
                does not imply unmanaged database access or firm-operated cloud
                hosting.
              </p>
              <div className="inline-cta-row">
                <ScheduleCallButton className="button button-primary" label="Book Infrastructure Conversation" />
                <Link className="button button-secondary" href="/platform">See The Platform</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section surface-grid">
          <div className="container section-stack">
            <div className="section-head">
              <p className="section-tag">What Dedicated Means</p>
              <h2>Separation, firm-level control, and bounded access.</h2>
              <p>
                The architecture supports a firm-specific operating environment
                while keeping integrations and external intelligence access
                explicit, scoped, and attributable.
              </p>
            </div>
            <div className="pillar-grid">
              {infrastructurePoints.map((point) => (
                <article className="pillar-card" key={point.title}>
                  <h3>{point.title}</h3>
                  <p>{point.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section home-dashboard-band">
          <div className="container estate-grid">
            <div className="estate-copy">
              <p className="section-tag">Product Boundaries</p>
              <h2>Clear architecture language without inflated security claims.</h2>
              <p>
                Buyers should understand both the value and the limits of the
                deployment model. These boundaries prevent “dedicated” from
                being interpreted as on-premises hosting, unrestricted access,
                or an unsupported certification claim.
              </p>
              <ul className="detail-list">
                {boundaries.map((boundary) => <li key={boundary}>{boundary}</li>)}
              </ul>
            </div>
            <div className="frame">
              <div className="frame-meta"><span>Governed AI Access</span><span>Scoped + Read-Only + Audited</span></div>
              <Image
                src="/app-images/mcp_read_only_governance_diagram.png"
                alt="PallmLaw read-only MCP governance model"
                width={1376}
                height={768}
                className="screenshot"
              />
            </div>
          </div>
        </section>

        <section className="section surface-plain">
          <div className="container section-stack">
            <div className="section-head">
              <p className="section-tag">Infrastructure Questions</p>
              <h2>What firms and technical reviewers usually need clarified.</h2>
            </div>
            <div className="pillar-grid">
              {faqs.map((item) => (
                <article className="pillar-card" key={item.question}>
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </article>
              ))}
            </div>
            <div className="inline-cta-row">
              <ScheduleCallButton className="button button-primary" label="Book Infrastructure Conversation" />
              <Link className="button button-secondary" href="/ai-agent-connected">See Governed AI Access</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
