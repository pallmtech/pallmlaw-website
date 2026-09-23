import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-23T00:00:00.000Z");
  const routes = [
    "",
    "/estate-planning",
    "/probate-workflow-automation",
    "/probate-case-management-software",
    "/trust-administration-workflow-software",
    "/estate-planning-software",
    "/estate-planning-software-florida",
    "/client-communication-automation",
    "/workflow-automation",
    "/ai-agent-connected",
    "/legal-workflow-software",
    "/matter-tracking-software-estate-planning",
    "/platform",
    "/dedicated-firm-infrastructure",
    "/intelligence",
    "/insights",
    "/insights/pallmlaw-v1-5-matter-operations-workflow-control",
    "/insights/estate-planning-workflow-bottlenecks",
    "/insights/why-most-legal-software-does-not-create-visibility",
    "/insights/how-estate-planning-firms-grow-without-losing-control",
    "/fit",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
