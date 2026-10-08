import { MetadataRoute } from "next";
import { getAllMdxMetadata } from "@/lib/mdx";
import { RELEASE, SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE.url;
  const releaseDate = new Date(RELEASE.published);

  // Static routes
  const staticRoutes = [
    "",
    "/docs",
    "/tutorials",
    "/resources",
    "/datasets",
    "/papers",
    "/news",
    "/about",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: releaseDate,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Dynamic docs routes
  const docs = getAllMdxMetadata("docs")
    .filter((doc) => doc.slug !== "index")
    .map((doc) => ({
      url: `${baseUrl}${doc.href}`,
      lastModified: new Date(String(doc.frontmatter.lastUpdated ?? RELEASE.published)),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  // Dynamic tutorial routes
  const tutorials = getAllMdxMetadata("tutorials")
    .filter((tutorial) => tutorial.slug !== "index")
    .map((tutorial) => ({
      url: `${baseUrl}${tutorial.href}`,
      lastModified: new Date(String(tutorial.frontmatter.lastUpdated ?? tutorial.frontmatter.date ?? RELEASE.published)),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  // Dynamic news routes
  const news = getAllMdxMetadata("news")
    .filter((post) => post.slug !== "index")
    .map((post) => ({
      url: `${baseUrl}${post.href}`,
      lastModified: new Date(String(post.frontmatter.lastUpdated ?? post.frontmatter.date ?? RELEASE.published)),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

  return [...staticRoutes, ...docs, ...tutorials, ...news];
}
