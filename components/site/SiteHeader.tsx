"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ScheduleCallButton from "@/components/site/ScheduleCallButton";

type SiteHeaderProps = {
  current?: "home" | "platform" | "intelligence" | "estate-planning" | "probate" | "trust-administration" | "fit" | "insights";
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
  {
    href: "/dedicated-firm-infrastructure",
    label: "Dedicated Infrastructure",
    description: "Firm separation, governance, and access",
  },
];

const practiceAreaLinks = [
  {
    href: "/estate-planning",
    label: "Estate Planning",
    description: "Retained-to-completion workflow control",
  },
  {
    href: "/probate-workflow-automation",
    label: "Probate Automation",
    description: "Stage, deadline, task, and handoff automation",
  },
  {
    href: "/probate-case-management-software",
    label: "Probate Management",
    description: "Matter visibility, ownership, and workload",
  },
  {
    href: "/trust-administration-workflow-software",
    label: "Trust Administration",
    description: "Repeatable administration workflow and visibility",
  },
];

export default function SiteHeader({ current }: SiteHeaderProps) {
  const [openMenu, setOpenMenu] = useState<"product" | "practice" | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenMenu(null);
    };

    document.addEventListener("mousedown", closeOnOutsideClick);
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <header className="topbar" ref={headerRef}>
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
          <div className={`nav-dropdown ${openMenu === "product" ? "is-open" : ""}`}>
            <button
              type="button"
              className={`nav-dropdown-trigger ${current === "platform" || current === "intelligence" ? "nav-active" : ""}`}
              aria-expanded={openMenu === "product"}
              onClick={() => setOpenMenu((value) => value === "product" ? null : "product")}
            >
              Product
            </button>
            <div className="nav-dropdown-panel" hidden={openMenu !== "product"}>
              {productLinks.map((link) => (
                <Link className="nav-dropdown-link" key={link.href} href={link.href} onClick={() => setOpenMenu(null)}>
                  <span>{link.label}</span>
                  <small>{link.description}</small>
                </Link>
              ))}
            </div>
          </div>

          <div className={`nav-dropdown ${openMenu === "practice" ? "is-open" : ""}`}>
            <button
              type="button"
              className={`nav-dropdown-trigger ${
                current === "estate-planning" ||
                current === "probate" ||
                current === "trust-administration"
                  ? "nav-active"
                  : ""
              }`}
              aria-expanded={openMenu === "practice"}
              onClick={() => setOpenMenu((value) => value === "practice" ? null : "practice")}
            >
              Practice Areas
            </button>
            <div className="nav-dropdown-panel" hidden={openMenu !== "practice"}>
              {practiceAreaLinks.map((link) => (
                <Link className="nav-dropdown-link" key={link.href} href={link.href} onClick={() => setOpenMenu(null)}>
                  <span>{link.label}</span>
                  <small>{link.description}</small>
                </Link>
              ))}
            </div>
          </div>

          <Link href="/insights" className={current === "insights" ? "nav-active" : undefined}>
            Insights
          </Link>
        </nav>
        <ScheduleCallButton className="cta-chip" label="Book Fit Conversation" />
      </div>
    </header>
  );
}
