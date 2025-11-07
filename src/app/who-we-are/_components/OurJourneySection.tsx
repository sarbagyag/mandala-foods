"use client";

import React from "react";
import { Container } from "@/components/ui/Container";

export function OurJourneySection() {
  return (
    <>
      {/* CEO Foreword-Style Journey Section */}
      <section id="our-journey" className="bg-gray-50 py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-4xl ">
            {/* Section Header */}
            <div className="mb-12 text-center ">
              <span
                className="text-xs font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-[#e5790e] to-[#00a54f] bg-clip-text text-transparent"
                style={{ fontFamily: "Gilroy, sans-serif" }}
              >
                Our Journey
              </span>
            </div>

            {/* CEO Message Card */}
            <div>
              {/* Main Content Card */}
              <div
                style={{ width: "100%" }}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg md:p-12 lg:p-20 w-max-full mx-auto "
              >
                {/* Letter Content */}
                <div
                  className="space-y-6 text-base text-gray-700 md:text-lg"
                  style={{
                    fontFamily: "Gilroy, sans-serif",
                  }}
                >
                  <p>
                    In Nepal, half of all fruits and vegetables never reach a
                    plate because they lose their quality and freshness on their
                    long journey from farm to fork. Perfectly good food is lost
                    — in fields, on the road, in markets, and even in kitchens.
                    Farmers lose income. Families lose nutrition.
                  </p>

                  <p>That&rsquo;s where our story began.</p>

                  <p>
                    Though Mandala Agrifresh, we helped farmers reduce
                    post-harvest loss with simple, affordable technologies that
                    could keep fruits and vegetables fresh for longer. But we
                    realized that even when fruits reached markets, many were
                    still rejected, not for their quality, but for their looks.
                    Perfectly edible fruits were being discarded while children
                    went without nutritious food.
                  </p>

                  <p style={{ fontWeight: "bold" }}>
                    Then came a personal moment of truth.
                  </p>

                  <p>
                    While traveling with my six-month-old daughter, I searched
                    for safe, fruit-based purees, something easily available
                    abroad but not in Nepal. It struck me: the very fruits being
                    wasted here could become the nourishing food I wanted for
                    her.
                  </p>

                  <p>That spark became Mandala Foods.</p>

                  <p>
                    In 2025, we founded Mandala Foods with a clear belief:
                    <span style={{ fontStyle: "italic" }}>
                      {" "}
                      Good nutrition should be accessible to all — and no
                      nourishing food should ever go to waste.{" "}
                    </span>
                  </p>

                  <p>
                    Today, we upcycle surplus and market-rejected fruits — good
                    harvests overlooked due to cosmetic standards — into safe,
                    affordable, and nutrient-rich fruit-based foods crafted for
                    schools and families across Nepal.
                  </p>

                  <p>
                    Our products are more than food. Every jar and pouch we
                    create is a proof that food loss and waste can become
                    nourishment, and that circularity can restore dignity.
                  </p>

                  {/* <p>Preserve. Upcycle. Nourish.</p> */}
                </div>

                {/* Signature */}
                <div className="mt-10 text-right">
                  <p
                    className="text-base text-gray-900"
                    style={{ fontFamily: "Gilroy, sans-serif" }}
                  >
                    Sophiya Tamang
                  </p>
                  <p
                    className="text-sm text-gray-600"
                    style={{ fontFamily: "Gilroy, sans-serif" }}
                  >
                    Co-Founder & CEO, Mandala Foods
                  </p>
                  <p
                    className="text-sm text-gray-600"
                    style={{ fontFamily: "Gilroy, sans-serif" }}
                  >
                    Co-Founder, Mandala Agrifresh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
