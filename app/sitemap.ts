import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/estate-planning",
    "/estate-planning-software",
    "/estate-planning-software-florida",
    "/legal-workflow-software",
    "/matter-tracking-software-estate-planning",
    "/platform",
    "/intelligence",
    "/insights",
    "/insights/estate-planning-workflow-bottlenecks",
    "/insights/why-most-legal-software-does-not-create-visibility",
    "/insights/how-estate-planning-firms-grow-without-losing-control",
    "/fit",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
