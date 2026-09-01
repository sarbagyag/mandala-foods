import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Digital ID pages (src/app/[slug]) are intentionally NOT disallowed
      // here: they're single-segment dynamic routes (e.g. /robin) at the
      // same path depth as real static pages (/who-we-are, /products, …),
      // so a robots.txt wildcard can't target them without also blocking
      // legitimate content. They're excluded from indexing instead via a
      // per-page `robots: { index: false, follow: false }` in their
      // generateMetadata — see src/app/[slug]/page.tsx.
      disallow: ["/api/", "/admin/"],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
