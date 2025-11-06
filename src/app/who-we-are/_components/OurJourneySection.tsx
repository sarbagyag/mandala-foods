"use client";

import React from "react";
import { Container } from "@/components/ui/Container";

export function OurJourneySection() {
  return (
    <>
      {/* CEO Foreword-Style Journey Section */}
      <section
        id="our-journey"
        className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50/30 to-white py-16 md:py-20"
      >
        {/* Subtle Background Elements */}
        <div
          className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.015]"
          aria-hidden="true"
        />
        <div
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#e5790e]/5 to-transparent rounded-full blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#00a54f]/5 to-transparent rounded-full blur-3xl"
          aria-hidden="true"
        />

        <Container>
          <div className="relative mx-auto w-[90%] max-w-7xl">
            {/* Section Header */}
            <div className="mb-12 text-center">
              <div className="mb-6 inline-block">
                <div className="rounded-full border border-[#e5790e]/20 bg-white px-5 py-2 shadow-sm">
                  <span
                    className="text-xs font-bold uppercase tracking-[0.2em] text-[#e5790e]"
                    style={{ fontFamily: "Gilroy, sans-serif" }}
                  >
                    Our Journey
                  </span>
                </div>
              </div>
            </div>

            {/* CEO Message Card */}
            <div className="relative">
              {/* Main Content Card */}
              <div className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-lg md:p-12 lg:p-20">
                {/* Decorative Quote Mark */}
                <div className="absolute -top-6 left-8 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#e5790e] to-[#c85a00] shadow-lg">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Letter Content */}
                <div
                  className="space-y-6 text-base leading-relaxed text-gray-700 md:text-lg md:leading-loose"
                  style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
                >
                  <p>
                    In Nepal, half of all fruits and vegetables never reach a
                    plate because they lose their quality and freshness on their
                    long journey from farm to fork. Perfectly good food is lost
                    — in fields, on the road, in markets, and even in kitchens.
                    Farmers lose income. Families lose nutrition.
                  </p>

                  <p className="font-medium text-gray-900">
                    That&rsquo;s where our story began.
                  </p>

                  <p>
                    Though Mandala{" "}
                    <span className="font-medium text-[#00a54f]">
                      Agrifresh
                    </span>
                    , we helped farmers reduce post-harvest loss with simple,
                    affordable technologies that could keep fruits and
                    vegetables fresh for longer. But we realized that even when
                    fruits reached markets, many were still rejected, not for
                    their quality, but for their looks. Perfectly edible fruits
                    were being discarded while children went without nutritious
                    food.
                  </p>

                  <p className="font-medium text-gray-900 italic">
                    Then came a personal moment of truth.
                  </p>

                  <p>
                    While traveling with my six-month-old daughter, I searched
                    for safe, fruit-based purees, something easily available
                    abroad but not in Nepal. It struck me: the very fruits being
                    wasted here could become the nourishing food I wanted for
                    her.
                  </p>

                  <p className="text-lg font-bold text-[#e5790e] md:text-xl">
                    That spark became Mandala Foods.
                  </p>

                  <p>
                    In 2025, we founded Mandala Foods with a clear belief:{" "}
                    <span className="font-semibold text-gray-900">
                      Good nutrition should be accessible to all — and no
                      nourishing food should ever go to waste.
                    </span>
                  </p>

                  <p>
                    Today, we upcycle surplus and market-rejected fruits — good
                    harvests overlooked due to cosmetic standards — into safe,
                    affordable, and nutrient-rich fruit-based foods crafted for
                    schools and families across Nepal.
                  </p>

                  <p className="font-medium text-gray-900">
                    Our products are more than food. Every jar and pouch we
                    create is a proof that food loss and waste can become
                    nourishment, and that circularity can restore dignity.
                  </p>

                  {/* Tagline */}
                  <div className="pt-6 border-t border-gray-200">
                    <p className="text-center text-xl font-black text-gray-900 md:text-2xl">
                      <span className="text-[#00a54f]">Preserve.</span>{" "}
                      <span className="text-[#e5790e]">Upcycle.</span>{" "}
                      <span className="text-[#1acf1b]">Nourish.</span>
                    </p>
                  </div>
                </div>

                {/* Signature */}
                <div className="mt-10 flex items-end justify-end">
                  <div className="text-right">
                    <div className="mb-2 h-px w-24 bg-gradient-to-l from-[#e5790e] to-transparent ml-auto" />
                    <p
                      className="mb-1 text-lg font-bold text-gray-900"
                      style={{ fontFamily: "Gilroy, sans-serif" }}
                    >
                      Sophiya Tamang
                    </p>
                    <p
                      className="text-sm font-medium text-gray-700"
                      style={{ fontFamily: "Gilroy, sans-serif" }}
                    >
                      Co-Founder & CEO, Mandala Foods
                    </p>
                    <p
                      className="text-xs text-gray-600"
                      style={{ fontFamily: "Gilroy, sans-serif" }}
                    >
                      Co-Founder, Mandala Agrifresh
                    </p>
                  </div>
                </div>
              </div>

              {/* Subtle Shadow Effect */}
              <div className="absolute -bottom-4 left-1/2 h-4 w-3/4 -translate-x-1/2 rounded-full bg-gray-300 opacity-20 blur-xl" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
