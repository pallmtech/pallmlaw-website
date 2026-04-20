import Link from "next/link";
import Image from "next/image";
import ScheduleCallButton from "@/components/site/ScheduleCallButton";

type SiteHeaderProps = {
  current?: "home" | "platform" | "intelligence" | "estate-planning" | "fit" | "insights";
};

const links = [
  { href: "/platform", label: "Platform", key: "platform" },
  { href: "/intelligence", label: "Intelligence", key: "intelligence" },
  { href: "/estate-planning", label: "Estate Planning", key: "estate-planning" },
  { href: "/insights", label: "Insights", key: "insights" },
];

export default function SiteHeader({ current }: SiteHeaderProps) {
  return (
    <header className="topbar">
      <div className="container topbar-inner">
        <Link href="/" className="brand-mark" aria-label="LawOps home">
          <Image
            src="/lawops-fc-logo.png"
            alt="LawOps"
            width={212}
            height={55}
            priority
          />
        </Link>
        <nav className="topnav" aria-label="Primary">
          {links.map((link) => (
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
