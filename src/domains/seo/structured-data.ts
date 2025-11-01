import { siteConfig } from "@/config/site";
import {
  OrganizationSchema,
  WebPageSchema,
  BreadcrumbListSchema,
  BreadcrumbItem,
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

export function renderStructuredData(data: any): string {
  return JSON.stringify(data);
}
