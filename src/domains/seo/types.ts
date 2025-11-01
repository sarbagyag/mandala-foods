import { Metadata } from "next";

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

export interface BreadcrumbItem {
  name: string;
  item: string;
}

export interface OrganizationSchema {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  url: string;
  logo: string;
  sameAs: string[];
  contactPoint?: {
    "@type": string;
    telephone: string;
    contactType: string;
    email: string;
  };
}

export interface WebPageSchema {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  url: string;
  breadcrumb?: BreadcrumbListSchema;
}

export interface BreadcrumbListSchema {
  "@context": string;
  "@type": string;
  itemListElement: Array<{
    "@type": string;
    position: number;
    name: string;
    item: string;
  }>;
}

export type StructuredData = OrganizationSchema | WebPageSchema | BreadcrumbListSchema;
