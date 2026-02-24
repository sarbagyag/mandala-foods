import type { Metadata } from "next";
import Script from "next/script";
import "../styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ChatBot } from "@/components/layout/ChatBot";
import { getHomePageMetadata } from "@/domains/seo/metadata";
import {
  generateOrganizationSchema,
  renderStructuredData,
} from "@/domains/seo/structured-data";

export const metadata: Metadata = getHomePageMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: renderStructuredData(organizationSchema),
          }}
        />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <ChatBot />
      </body>
    </html>
  );
}
