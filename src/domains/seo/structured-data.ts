import { siteConfig } from "@/config/site";
import {
  OrganizationSchema,
  WebPageSchema,
  BreadcrumbListSchema,
  BreadcrumbItem,
  ArticleSchema,
} from "./types";

export function generateOrganizationSchema(): OrganizationSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    sameAs: Object.values(siteConfig.links),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phone,
      contactType: "customer service",
      email: siteConfig.contact.email,
    },
  };
}

export function generateWebPageSchema(
  pageName: string,
  pageDescription: string,
  pageUrl: string,
  breadcrumbs?: BreadcrumbItem[]
): WebPageSchema {
  const schema: WebPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: pageName,
    description: pageDescription,
    url: pageUrl,
  };

  if (breadcrumbs && breadcrumbs.length > 0) {
    schema.breadcrumb = generateBreadcrumbSchema(breadcrumbs);
  }

  return schema;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]): BreadcrumbListSchema {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
}

export function generateArticleSchema(params: {
  title: string;
  description: string;
  image: string | null;
  author?: string;
  publishedDate: string;
  updatedDate: string;
}): ArticleSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: params.title,
    description: params.description,
    image: params.image,
    author: {
      "@type": "Person",
      name: params.author || siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    // PocketBase returns dates as "YYYY-MM-DD HH:MM:SS.sssZ" (space, not "T"),
    // which isn't strict ISO 8601 — normalize for schema.org validators.
    datePublished: toISOStringSafe(params.publishedDate),
    dateModified: toISOStringSafe(params.updatedDate),
  };
}

function toISOStringSafe(value: string): string {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? value : date.toISOString();
}

export function renderStructuredData(data: any): string {
  return JSON.stringify(data);
}
