import Image from "next/image";
import Link from "next/link";
import ScheduleCallButton from "@/components/site/ScheduleCallButton";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import { siteUrl } from "@/lib/seo";

type WorkflowStep = {
  title: string;
  body: string;
};

type Faq = {
  question: string;
  answer: string;
};

type ProofImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  label: string;
  detail: string;
};

type PracticeAreaLandingPageProps = {
  variant: "automation" | "management" | "trust";
  current: "probate" | "trust-administration";
  canonicalPath: string;
  schemaName: string;
  schemaDescription: string;
  eyebrow: string;
  headline: string;
  introduction: string;
  primaryCta: string;
  sectionEyebrow: string;
  sectionHeadline: string;
  sectionBody: string;
  capabilities: string[];
  workflowEyebrow: string;
  workflowHeadline: string;
  workflow: WorkflowStep[];
  heroImage: ProofImage;
  secondaryImages: ProofImage[];
  faqHeading: string;
  faqs: Faq[];
  relatedHref: string;
  relatedLabel: string;
};

export default function PracticeAreaLandingPage({
  variant,
  current,
  canonicalPath,
  schemaName,
  schemaDescription,
  eyebrow,
  headline,
  introduction,
  primaryCta,
  sectionEyebrow,
  sectionHeadline,
  sectionBody,
  capabilities,
  workflowEyebrow,
  workflowHeadline,
  workflow,
  heroImage,
  secondaryImages,
  faqHeading,
  faqs,
  relatedHref,
  relatedLabel,
}: PracticeAreaLandingPageProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: schemaName,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: `${siteUrl}${canonicalPath}`,
        description: schemaDescription,
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className={`site-shell practice-page practice-variant-${variant}`}>
      <SiteHeader current={current} />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <section className="section estate-hero practice-hero">
          <div className="container estate-hero-grid practice-hero-grid">
            <div className="estate-hero-copy practice-hero-copy">
              <p className="section-tag">{eyebrow}</p>
              <h1 className="page-title">{headline}</h1>
              <p>{introduction}</p>
              <div className="inline-cta-row">
                <ScheduleCallButton className="button button-primary" label={primaryCta} />
                <Link className="button button-secondary" href={relatedHref}>
                  {relatedLabel}
                </Link>
              </div>
            </div>
            <div className="frame frame-dark practice-collateral-frame">
              <div className="frame-meta">
                <span>{heroImage.label}</span>
                <span>{heroImage.detail}</span>
              </div>
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                width={heroImage.width}
                height={heroImage.height}
                className="screenshot"
                priority
              />
            </div>
          </div>
        </section>

        <section className="section surface-grid">
          <div className="container section-stack">
            <div className="section-head">
              <p className="section-tag">{sectionEyebrow}</p>
              <h2>{sectionHeadline}</h2>
              <p>{sectionBody}</p>
            </div>
            <div className="proof-grid single-column-grid">
              {capabilities.map((item) => (
                <div className="proof-card" key={item}>{item}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="section home-dashboard-band">
          <div className="container estate-grid">
            <div className="estate-copy">
              <p className="section-tag">{workflowEyebrow}</p>
              <h2>{workflowHeadline}</h2>
              <div className="platform-layer-stack">
                {workflow.map((item, index) => (
                  <article className="platform-layer-card" key={item.title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.body}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="visual-column">
              {secondaryImages.map((image) => (
                <div className="frame" key={image.src}>
                  <div className="frame-meta"><span>{image.label}</span><span>{image.detail}</span></div>
                  <Image src={image.src} alt={image.alt} width={image.width} height={image.height} className="screenshot" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section surface-plain">
          <div className="container section-stack">
            <div className="section-head">
              <p className="section-tag">Questions Before Implementation</p>
              <h2>{faqHeading}</h2>
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
              <ScheduleCallButton className="button button-primary" label={primaryCta} />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
