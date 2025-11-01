import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { SEOMetadata } from "./types";

export function generateMetadata(seo: SEOMetadata): Metadata {
  const { title, description, keywords, ogImage, canonical, noindex, nofollow } = seo;

  const metadata: Metadata = {
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    keywords: keywords?.join(", "),
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    robots: {
      index: !noindex,
      follow: !nofollow,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: canonical || siteConfig.url,
      title,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage || siteConfig.ogImage],
      creator: "@mandalafoods",
    },
    alternates: {
      canonical: canonical || siteConfig.url,
    },
  };

  return metadata;
}

export function getHomePageMetadata(): Metadata {
  return generateMetadata({
    title: "Mandala Foods - Nepal's Circular Food Solution",
    description:
      "Mandala Foods pioneers sustainable food systems in Nepal, connecting farmers, processors, and consumers through innovative circular economy practices.",
    keywords: [
      "sustainable food",
      "circular economy",
      "Nepal agriculture",
      "farm to table",
      "food sustainability",
      "Mandala Foods",
    ],
    canonical: siteConfig.url,
  });
}

export function getWhoWeAreMetadata(): Metadata {
  return generateMetadata({
    title: "Who We Are",
    description:
      "Learn about Mandala Foods' mission, values, and the team behind Nepal's circular food revolution.",
    keywords: ["about us", "mission", "values", "team", "sustainable food Nepal"],
    canonical: `${siteConfig.url}/who-we-are`,
  });
}

export function getOurApproachMetadata(): Metadata {
  return generateMetadata({
    title: "Our Approach",
    description:
      "Discover Mandala Foods' unique circular economy approach to sustainable food systems and our impact on communities.",
    keywords: [
      "circular economy",
      "sustainable approach",
      "food systems",
      "impact",
      "partnerships",
    ],
    canonical: `${siteConfig.url}/our-approach`,
  });
}

export function getOurStoriesMetadata(): Metadata {
  return generateMetadata({
    title: "Our Stories",
    description:
      "Real stories from farmers, restaurants, and cafes partnering with Mandala Foods to create sustainable food systems.",
    keywords: ["farmer stories", "HORECA", "case studies", "impact stories", "success stories"],
    canonical: `${siteConfig.url}/our-stories`,
  });
}

export function getRecipeCornerMetadata(): Metadata {
  return generateMetadata({
    title: "Recipe Corner",
    description:
      "Explore delicious recipes for home cooking and professional foodservice using sustainable, locally-sourced ingredients.",
    keywords: [
      "recipes",
      "sustainable cooking",
      "home recipes",
      "foodservice recipes",
      "Nepal cuisine",
    ],
    canonical: `${siteConfig.url}/recipe-corner`,
  });
}
