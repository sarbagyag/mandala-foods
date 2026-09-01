import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getAllStorySlugs } from "@/services/stories";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url;
  const currentDate = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/who-we-are`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/our-approach`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/publications`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/recipe-corner`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/reimagining-nutrition`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/idea2impact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Dynamic story pages, sourced from the PocketBase `stories` collection.
  const stories = await getAllStorySlugs();
  const storyRoutes: MetadataRoute.Sitemap = stories
    .filter((story) => Boolean(story.slug))
    .map((story) => ({
      url: `${baseUrl}/publications/${story.slug}`,
      lastModified: story.published_date ? new Date(story.published_date) : currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    }));

  // Recipe pages have no dynamic [slug] route or PocketBase collection yet
  // (recipe-corner currently renders static "coming soon" content). Add a
  // fetch here, mirroring storyRoutes above, once recipes get their own
  // slug-addressable records.

  return [...staticRoutes, ...storyRoutes];
}
