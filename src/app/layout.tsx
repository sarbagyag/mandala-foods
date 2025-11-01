import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { getHomePageMetadata } from "@/domains/seo/metadata";
import {
  generateOrganizationSchema,
  renderStructuredData,
} from "@/domains/seo/structured-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = getHomePageMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang="en" className={inter.variable}>
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
      </body>
    </html>
  );
}
