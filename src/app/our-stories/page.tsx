import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { getOurStoriesMetadata } from "@/domains/seo/metadata";

export const metadata: Metadata = getOurStoriesMetadata();

export default function OurStoryPage() {
  return (
    <section className="min-h-screen bg-linear-to-br from-gray-50 to-white py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-4xl">
          {/* Badge */}
          <div className="mb-6 text-center">
            <span
              className="inline-block rounded-full bg-[#00a54f] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white"
              style={{
                fontFamily: "Gilroy, sans-serif",
                letterSpacing: "0.1em",
              }}
            >
              Latest News
            </span>
          </div>

          {/* Main Card */}
          <article className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-gray-100">
            {/* Image */}
            <div className="relative aspect-video">
              <Image
                src="/images/news/sophiya-bicester.png"
                alt="South Asian finalists - Sophiya Tamang, bottom right"
                fill
                className="object-cover"
                sizes="(max-width: 800px) 100vw, 1000px"
                priority
              />
            </div>

            {/* Content */}
            <div className="px-8 py-10 md:px-12 md:py-12 mb-8">
              <h4
                className="mb-5 text-2xl font-bold leading-tight text-gray-900 md:text-3xl lg:text-4xl"
                style={{
                  fontFamily: "Gilroy, sans-serif",
                  letterSpacing: "-0.015em",
                }}
              >
                Turning Ideas Into Impact: Our Women-Led Innovation Making Waves
                at the Bicester Unlocking Women Awards
              </h4>

              <p
                className="mb-8 text-base leading-relaxed text-gray-600 md:text-lg"
                style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
              >
                Our CEO and Co-Founder Sophiya Tamang has been selected as a
                finalist for The Bicester Collection&rsquo;s Unlock Her Future
                Prize — spotlighting South Asian women-led innovation from
                nearly 3,000 applicants. Featured in Vogue Business.
              </p>

              {/* CTA */}
              <Link
                href="https://www.vogue.com/article/meet-the-south-asian-finalists-of-bicesters-unlock-her-future-prize"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-[#00a54f] to-[#1acf1b] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:shadow-lg"
                style={{ fontFamily: "Gilroy, sans-serif" }}
              >
                Read Full Article
                <svg
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>

              <p
                className="mt-5 text-xs tracking-wide text-gray-400"
                style={{
                  fontFamily: "Gilroy, sans-serif",
                  letterSpacing: "0.05em",
                }}
              >
                Vogue Business • September 9, 2025
              </p>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
