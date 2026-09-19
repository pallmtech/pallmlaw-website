import Link from "next/link";
import Image from "next/image";
import ScheduleCallButton from "@/components/site/ScheduleCallButton";

type SiteHeaderProps = {
  current?: "home" | "platform" | "intelligence" | "estate-planning" | "fit" | "insights";
};

const productLinks = [
  {
    href: "/platform",
    label: "Platform Overview",
    description: "The operating and intelligence model",
  },
  {
    href: "/workflow-automation",
    label: "Workflow Automation",
    description: "Matter-stage tasks, deadlines, waits",
  },
  {
    href: "/client-communication-automation",
    label: "Client Communication",
    description: "Firm-branded stage-aware updates",
  },
  {
    href: "/ai-agent-connected",
    label: "AI Agent Connected",
    description: "Governed read-only MCP tools",
  },
  {
    href: "/intelligence",
    label: "Firm Intelligence",
    description: "Bottlenecks, workload, performance",
  },
];

const primaryLinks = [
  { href: "/estate-planning", label: "Estate Planning", key: "estate-planning" },
  { href: "/insights", label: "Insights", key: "insights" },
];

export default function SiteHeader({ current }: SiteHeaderProps) {
  return (
    <header className="topbar">
      <div className="container topbar-inner">
        <Link href="/" className="brand-mark" aria-label="PallmLaw home">
          <Image
            src="/pallmlaw-fc-logo.png"
            alt=""
            width={235}
            height={55}
            priority
          />
        </Link>
        <nav className="topnav" aria-label="Primary">
          <details className="nav-dropdown">
            <summary className={current === "platform" || current === "intelligence" ? "nav-active" : undefined}>
              Product
            </summary>
            <div className="nav-dropdown-panel">
              {productLinks.map((link) => (
                <Link className="nav-dropdown-link" key={link.href} href={link.href}>
                  <span>{link.label}</span>
                  <small>{link.description}</small>
                </Link>
              ))}
            </div>
          </details>

          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={current === link.key ? "nav-active" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <ScheduleCallButton className="cta-chip" label="Book Fit Conversation" />
      </div>
    </header>
  );
}
