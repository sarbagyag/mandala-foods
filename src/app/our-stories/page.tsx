import { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { getOurStoriesMetadata } from "@/domains/seo/metadata";

export const metadata: Metadata = getOurStoriesMetadata();

export default function OurStoryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-24 md:py-32">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h1
              className="mb-6 text-6xl font-black tracking-tight text-gray-900 md:text-7xl lg:text-8xl"
              style={{
                fontFamily: "Gilroy, sans-serif",
                letterSpacing: "-0.03em",
              }}
            >
              Our Stories
            </h1>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <p
                className="mx-auto max-w-3xl text-xl font-light leading-relaxed text-gray-600 md:text-2xl"
                style={{
                  fontFamily: "Gilroy, sans-serif",
                  letterSpacing: "-0.01em",
                }}
              >
                What began as a mission to help farmers reduce food loss has
                grown into something more, a circular food model that transforms
                waste into nourishment.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* A Broken System - 2020-2024 */}
      <section className="bg-white py-20">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
            <div className="order-2 lg:order-1">
              <div className="mb-4 inline-block">
                <span
                  className="text-sm font-bold uppercase tracking-wider text-[#e5790e]"
                  style={{ fontFamily: "Gilroy, sans-serif" }}
                >
                  2020—2024
                </span>
              </div>
              <h2
                className="mb-6 text-4xl font-black leading-tight text-gray-900 md:text-5xl lg:text-6xl"
                style={{
                  fontFamily: "Gilroy, sans-serif",
                  letterSpacing: "-0.02em",
                }}
              >
                A Broken System
              </h2>
              <div
                className="space-y-4 text-lg leading-relaxed text-gray-700"
                style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
              >
                <p>
                  In Nepal, nearly half of all fruits and vegetables never reach
                  a plate. Not because they lack nutrition, but because farmers
                  cannot preserve freshness as their harvests travel from remote
                  hills to urban markets.
                </p>
                <p>
                  Perfectly good food is lost — in fields, on the road, in
                  markets, and even in kitchens. Farmers lose income. Families
                  lose nutrition.
                </p>
                <p className="font-semibold text-gray-900">
                  That is where our journey began.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/images/our-story/nepal_food_waste.png"
                  alt="Food waste in Nepal - fruits and vegetables in fields"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mandala Agrifresh Journey */}
      <section className="bg-gradient-to-br from-[#00a54f]/5 to-[#1acf1b]/5 py-20">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div
              className="space-y-5 text-lg leading-relaxed text-gray-700"
              style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
            >
              <p>
                By introducing simple, affordable technologies, we enabled
                farmers to keep produce fresh for longer, reducing spoilage and
                connecting farmers to markets. Over the years,{" "}
                <span className="font-bold text-[#00a54f]">
                  Mandala Agrifresh
                </span>{" "}
                worked with thousands of farmers across Nepal.
              </p>
              <p className="text-2xl font-bold text-gray-900">
                It was progress — but not the full solution.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* The Turning Point - 2024 */}
      <section className="bg-white py-20">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
            <div className="order-1">
              <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 shadow-lg">
                <Image
                  src="/images/our-story/rejecting-imperfect.jpeg"
                  alt="Food waste in Nepal - fruits and vegetables in fields"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                  priority
                />
                <div className="flex h-full items-center justify-center border-2 border-dashed border-orange-300">
                  <div className="text-center">
                    <svg
                      className="mx-auto mb-4 h-20 w-20 text-orange-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                    <p
                      className="text-sm font-semibold text-orange-600"
                      style={{ fontFamily: "Gilroy, sans-serif" }}
                    >
                      Image: Rejected imperfect fruits
                    </p>
                    <p
                      className="mt-1 text-xs text-orange-500"
                      style={{ fontFamily: "Gilroy, sans-serif" }}
                    >
                      Add to: /public/images/our-story/
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-2">
              <div className="mb-4 inline-block">
                <span
                  className="text-sm font-bold uppercase tracking-wider text-[#e5790e]"
                  style={{ fontFamily: "Gilroy, sans-serif" }}
                >
                  2024
                </span>
              </div>
              <h2
                className="mb-6 text-4xl font-black leading-tight text-gray-900 md:text-5xl lg:text-6xl"
                style={{
                  fontFamily: "Gilroy, sans-serif",
                  letterSpacing: "-0.02em",
                }}
              >
                The Turning Point
              </h2>
              <div
                className="space-y-4 text-lg leading-relaxed text-gray-700"
                style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
              >
                <p>
                  Even when fruit reached the market, much of it was rejected
                  for not looking &ldquo;perfect.&rdquo; Safe and nutritious
                  fruit was being discarded in the name of aesthetics.
                </p>
                <p>
                  Meanwhile, a deeper crisis persisted:{" "}
                  <span className="font-bold text-gray-900">malnutrition</span>{" "}
                  in both urban and rural areas. Daily diets lacked the
                  diversity and vital nutrition needed to thrive. Families
                  struggled to afford nutritious options.
                </p>
                <p className="font-semibold text-gray-900">
                  Millions were going without the nourishment they needed to
                  thrive — even as edible produce was being discarded.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Personal Story - The Spark */}
      <section className="bg-gradient-to-br from-orange-50/50 via-white to-orange-50/30 py-20">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div
              className="space-y-5 text-lg leading-relaxed text-gray-700"
              style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
            >
              <p>
                For me, this problem became deeply personal while traveling with
                my six-month-old daughter. Abroad, I discovered safe, portable,
                fruit-based purees. Back home, they were either unavailable or
                unaffordable.
              </p>
              <p className="text-2xl font-bold text-gray-900">
                It struck me: the very fruit being wasted in Nepal could have
                been the nourishing food I wanted for my child.
              </p>
              <p className="text-3xl font-black text-[#e5790e]">
                That was the spark for Mandala Foods.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* The Birth of Mandala Foods - 2025 */}
      <section className="bg-white py-20">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
            <div className="order-2 lg:order-1">
              <div className="mb-4 inline-block">
                <span
                  className="text-sm font-bold uppercase tracking-wider text-[#00a54f]"
                  style={{ fontFamily: "Gilroy, sans-serif" }}
                >
                  2025
                </span>
              </div>
              <h2
                className="mb-6 text-4xl font-black leading-tight text-gray-900 md:text-5xl lg:text-6xl"
                style={{
                  fontFamily: "Gilroy, sans-serif",
                  letterSpacing: "-0.02em",
                }}
              >
                The Birth of Mandala Foods
              </h2>
              <div
                className="space-y-4 text-lg leading-relaxed text-gray-700"
                style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
              >
                <p>
                  In 2025, we founded Mandala Foods with a clear belief:{" "}
                  <span className="font-bold text-[#00a54f]">
                    Good nutrition should be accessible to all — and no
                    nourishing food should ever go to waste.
                  </span>
                </p>
                <p>
                  Today, we upcycle surplus and cosmetically imperfect fruits
                  into safe, affordable, and nutrient-rich fruit-based products—
                  crafted for schools and families across Nepal.
                </p>
                <p className="font-semibold text-gray-900">
                  Our products are more than food. They are proof that waste can
                  become nourishment, that circularity can restore dignity, and
                  that every fruit — and every person who depends on them —
                  deserves a second chance.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-green-50 to-orange-50 shadow-lg">
                <Image
                  src="/images/our-story/mandala_foods_birth.png"
                  alt="Food waste in Nepal - fruits and vegetables in fields"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                  priority
                />
                <div className="flex h-full items-center justify-center border-2 border-dashed border-green-400">
                  <div className="text-center">
                    <svg
                      className="mx-auto mb-4 h-20 w-20 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                    <p
                      className="text-sm font-semibold text-green-600"
                      style={{ fontFamily: "Gilroy, sans-serif" }}
                    >
                      Image: Mandala Foods products
                    </p>
                    <p
                      className="mt-1 text-xs text-green-500"
                      style={{ fontFamily: "Gilroy, sans-serif" }}
                    >
                      Add to: /public/images/our-story/
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Circular Food Model */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-28">
        <Container>
          <div className="mx-auto max-w-6xl">
            <h2
              className="mb-20 text-center text-5xl font-black text-gray-900 md:text-6xl lg:text-7xl"
              style={{
                fontFamily: "Gilroy, sans-serif",
                letterSpacing: "-0.02em",
              }}
            >
              The Circular Food Model
            </h2>

            <div className="flex flex-col items-center justify-center gap-12 md:flex-row md:gap-16">
              {/* Step 1: Preserve */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-8 flex h-48 w-48 items-center justify-center rounded-full bg-white shadow-2xl">
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#00a54f"
                    strokeWidth="2"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M9 3v18M15 3v18" />
                  </svg>
                </div>
                <h3
                  className="text-3xl font-black text-gray-900"
                  style={{ fontFamily: "Gilroy, sans-serif" }}
                >
                  Preserve
                </h3>
              </div>

              {/* Arrow */}
              <div className="hidden rotate-0 text-gray-400 md:block">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>

              {/* Step 2: Upcycle */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-8 flex h-48 w-48 items-center justify-center rounded-full bg-white shadow-2xl">
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#e5790e"
                    strokeWidth="2"
                  >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
                    <polyline points="7.5 19.79 7.5 14.6 3 12" />
                    <polyline points="21 12 16.5 14.6 16.5 19.79" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                  </svg>
                </div>
                <h3
                  className="text-3xl font-black text-gray-900"
                  style={{ fontFamily: "Gilroy, sans-serif" }}
                >
                  Upcycle
                </h3>
              </div>

              {/* Arrow */}
              <div className="hidden rotate-0 text-gray-400 md:block">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>

              {/* Step 3: Nourish */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-8 flex h-48 w-48 items-center justify-center rounded-full bg-white shadow-2xl">
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1acf1b"
                    strokeWidth="2"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <h3
                  className="text-3xl font-black text-gray-900"
                  style={{ fontFamily: "Gilroy, sans-serif" }}
                >
                  Nourish
                </h3>
              </div>
            </div>

            <div className="mt-20 text-center">
              <p
                className="text-4xl font-black text-gray-900"
                style={{ fontFamily: "Gilroy, sans-serif" }}
              >
                <span className="text-[#00a54f]">Preserve.</span>{" "}
                <span className="text-[#e5790e]">Upcycle.</span>{" "}
                <span className="text-[#1acf1b]">Nourish.</span>
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Founder Quote */}
      <section className="bg-gradient-to-br from-[#00a54f] to-[#1acf1b] py-24 text-white">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-12">
              <svg
                className="mx-auto h-16 w-16 text-white/20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <blockquote
              className="mb-12 text-center text-2xl font-light leading-relaxed md:text-3xl"
              style={{ fontFamily: "Gilroy, sans-serif" }}
            >
              Our products are more than food. They are proof that waste can
              become nourishment, that circularity can restore dignity, and that
              every fruit — and every person who depends on them — deserves a
              second chance.
            </blockquote>
            <div className="border-t border-white/20 pt-8 text-center">
              <p
                className="mb-2 text-2xl font-bold"
                style={{ fontFamily: "Gilroy, sans-serif" }}
              >
                — Sophiya Tamang
              </p>
              <p
                className="text-base font-medium text-white/90"
                style={{ fontFamily: "Gilroy, sans-serif" }}
              >
                Co-Founder & CEO, Mandala Foods
              </p>
              <p
                className="text-sm font-light text-white/80"
                style={{ fontFamily: "Gilroy, sans-serif" }}
              >
                Co-Founder, Mandala Agrifresh
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
