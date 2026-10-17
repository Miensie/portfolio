import type { MetadataRoute } from "next";
import { site, navigation } from "@/content/site";
import { projects } from "@/content/projects";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = navigation.map((n) => ({ url: `${site.url}${n.href}`, priority: n.href === "/" ? 1 : 0.7 }));
  const caseStudies = projects.map((p) => ({ url: `${site.url}/projets/${p.slug}/`, priority: 0.6 }));
  return [...pages, ...caseStudies];
}
