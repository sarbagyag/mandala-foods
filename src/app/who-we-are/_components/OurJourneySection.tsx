"use client";

import React from "react";
import { Container } from "@/components/ui/Container";

export function OurJourneySection() {
  return (
    <>
      {/* Hero Section with Elegant Typography */}
      <section
        id="our-journey"
        className="relative overflow-hidden py-16 md:py-20 lg:py-24"
      >
        {/* Elegant Brand Gradient Background */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-green-50"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#e5790e]/10 via-transparent to-transparent"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#00a54f]/8 via-transparent to-transparent"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.02]"
          aria-hidden="true"
        />

        <Container>
          <div className="relative mx-auto max-w-6xl">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="mb-6 inline-block">
                <div className="rounded-full border-2 border-[#e5790e]/20 bg-white/80 backdrop-blur-sm px-6 py-2.5 shadow-sm">
                  <span
                    className="text-sm font-bold uppercase tracking-[0.2em] text-[#e5790e]"
                    style={{ fontFamily: "Gilroy, sans-serif" }}
                  >
                    Our Journey
                  </span>
                </div>
              </div>
              <h2
                className="mb-6 max-w-5xl text-4xl font-black leading-[1.1] tracking-tight text-gray-900 md:text-5xl lg:text-6xl"
                style={{
                  fontFamily: "Gilroy, sans-serif",
                  letterSpacing: "-0.02em",
                }}
              >
                From Overlooked Harvests to{" "}
                <span className="inline-block bg-gradient-to-r from-[#e5790e] via-[#ff8c1a] to-[#00a54f] bg-clip-text text-transparent">
                  Reimagined Nutrition
                </span>
              </h2>
              <p
                className="mx-auto max-w-3xl text-lg font-light leading-relaxed text-gray-600 md:text-xl lg:text-2xl"
                style={{
                  fontFamily: "Gilroy, sans-serif",
                  letterSpacing: "-0.01em",
                }}
              >
                A story of second chances. We turn waste into worth — giving
                fruits, farmers, and families the second chance they deserve.
              </p>
            </div>
          </div>
        </Container>

        {/* Bottom Divider */}
        <div className="absolute bottom-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#e5790e]/30 to-transparent" />
      </section>

      {/* The Problem Section */}
      <section className="bg-white py-12">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2">
              <div className="h-2 w-2 rounded-full bg-[#e5790e] animate-pulse" />
              <span
                className="text-xs font-bold tracking-wide text-gray-700"
                style={{ fontFamily: "Gilroy, sans-serif" }}
              >
                The Challenge
              </span>
            </div>
            <h3
              className="mb-4 text-3xl font-black leading-tight text-gray-900 md:text-4xl"
              style={{ fontFamily: "Gilroy, sans-serif" }}
            >
              Half of all food never reaches a plate
            </h3>
            <div
              className="space-y-4 text-base leading-relaxed text-gray-700"
              style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
            >
              <p>
                In Nepal, nearly{" "}
                <span className="font-bold text-gray-900">
                  half of all fruits and vegetables
                </span>{" "}
                never reach a plate because they lose their quality and
                freshness on their long journey from farm to fork. Perfectly
                good food is lost — in fields, on the road, in markets, and even
                in kitchens. Farmers lose income. Families lose nutrition.
              </p>
              <div className="mt-4 border-l-4 border-[#e5790e] bg-[#e5790e]/5 pl-4 py-3">
                <p className="font-semibold text-gray-900">
                  That's where our story began.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mandala Agrifresh Journey */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#00a54f]/5 via-[#00a54f]/3 to-transparent py-12">
        <div
          className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#00a54f]/10 blur-3xl"
          aria-hidden="true"
        />
        <Container>
          <div className="relative mx-auto max-w-4xl">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-1 w-16 rounded-full bg-gradient-to-r from-[#00a54f] to-[#1acf1b]" />
              <span
                className="text-xs font-bold uppercase tracking-widest text-[#00a54f]"
                style={{ fontFamily: "Gilroy, sans-serif" }}
              >
                Our First Step
              </span>
            </div>
            <div
              className="space-y-4 text-base leading-relaxed"
              style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
            >
              <p className="text-gray-700">
                Through{" "}
                <span className="font-bold text-[#00a54f]">
                  Mandala Agrifresh
                </span>
                , we helped farmers reduce post-harvest loss with simple,
                affordable technologies that could keep fruits and vegetables
                fresh for longer. Over the years, we worked with thousands of
                farmers across Nepal, making real progress in preserving
                harvests and connecting them to markets.
              </p>
              <div className="mt-4 rounded-xl bg-white p-6 shadow-lg">
                <p className="text-lg font-bold text-gray-900">
                  It was progress — but not the full solution.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* The Turning Point */}
      <section className="bg-white py-12">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#e5790e]/10 px-4 py-2">
              <svg
                className="h-4 w-4 text-[#e5790e]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span
                className="text-xs font-bold tracking-wide text-[#e5790e]"
                style={{ fontFamily: "Gilroy, sans-serif" }}
              >
                The Turning Point
              </span>
            </div>
            <h3
              className="mb-4 text-3xl font-black leading-tight text-gray-900 md:text-4xl"
              style={{ fontFamily: "Gilroy, sans-serif" }}
            >
              Good food wasted for looking "imperfect"
            </h3>
            <div
              className="space-y-4 text-base leading-relaxed text-gray-700"
              style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
            >
              <p>
                Even when fruits reached markets, many were still rejected — not
                for their quality, but for their looks. Perfectly edible fruits
                were being discarded while children went without nutritious
                food. Meanwhile, a deeper crisis persisted:{" "}
                <span className="font-bold text-gray-900">malnutrition</span> in
                both urban and rural areas. Daily diets lacked the diversity and
                vital nutrition needed to thrive.
              </p>
              <div className="mt-4 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 p-6">
                <p className="font-bold text-gray-900">
                  Millions were going without nourishment — even as edible
                  produce was being discarded.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Personal Story - The Spark */}
      {/* <section className="relative overflow-hidden bg-gradient-to-br from-orange-50/50 via-white to-orange-50/30 py-12">
        <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-[#e5790e]/5 blur-3xl" aria-hidden="true" />
        <Container>
          <div className="relative mx-auto max-w-4xl">
            <div className="mb-6 text-center">
              <svg className="mx-auto h-10 w-10 text-[#e5790e]/20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <div className="space-y-4 text-center" style={{ fontFamily: 'Gilroy, sans-serif' }}>
              <p className="text-lg font-light text-gray-700" style={{ letterSpacing: '-0.01em' }}>
                While traveling with my six-month-old daughter, I searched for safe, fruit-based purees — something easily available abroad but not in Nepal.
              </p>
              <div className="my-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
                <p className="text-lg font-bold leading-tight text-gray-900 md:text-xl" style={{ fontFamily: 'Gilroy, sans-serif', letterSpacing: '-0.02em' }}>
                  It struck me: the very fruits being wasted here could become the nourishing food I wanted for her.
                </p>
              </div>
              <div className="pt-4">
                <p className="text-2xl font-black text-[#e5790e] md:text-3xl" style={{ fontFamily: 'Gilroy, sans-serif', letterSpacing: '-0.02em' }}>
                  That was the spark for Mandala Foods.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section> */}

      {/* Birth of Mandala Foods */}
      <section className="bg-white py-12">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#00a54f]/10 to-[#1acf1b]/10 px-4 py-2">
              <svg
                className="h-4 w-4 text-[#00a54f]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span
                className="text-xs font-bold tracking-wide text-[#00a54f]"
                style={{ fontFamily: "Gilroy, sans-serif" }}
              >
                2025 — Our Beginning
              </span>
            </div>
            <h3
              className="mb-4 text-3xl font-black leading-tight text-gray-900 md:text-4xl"
              style={{ fontFamily: "Gilroy, sans-serif" }}
            >
              The Birth of{" "}
              <span className="bg-gradient-to-r from-[#e5790e] to-[#00a54f] bg-clip-text text-transparent">
                Mandala Foods
              </span>
            </h3>
            <div
              className="space-y-4 text-base leading-relaxed text-gray-700"
              style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
            >
              <div className="rounded-xl bg-gradient-to-br from-[#00a54f]/10 to-[#1acf1b]/5 p-6">
                <p className="font-bold text-[#00a54f]">
                  "Good nutrition should be accessible to all — and no
                  nourishing food should ever go to waste."
                </p>
              </div>
              <p>
                In 2025, we founded Mandala Foods with this clear belief. Today,
                we upcycle surplus and market-rejected fruits — good harvests
                overlooked due to cosmetic standards — into safe, affordable,
                and nutrient-rich fruit-based foods crafted for schools and
                families across Nepal.
              </p>
              <div className="mt-4 border-l-4 border-[#00a54f] pl-4">
                <p className="font-semibold text-gray-900">
                  Our products are more than food. Every jar and pouch we create
                  is proof that food loss and waste can become nourishment, and
                  that circularity can restore dignity.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Circular Food Model */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 py-16">
        <div
          className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.02]"
          aria-hidden="true"
        />
        <Container>
          <div className="relative mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <div className="mb-4 inline-block">
                <div className="rounded-full bg-gradient-to-r from-[#00a54f]/10 to-[#e5790e]/10 px-5 py-2">
                  <span
                    className="text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-[#00a54f] to-[#e5790e] bg-clip-text text-transparent"
                    style={{ fontFamily: "Gilroy, sans-serif" }}
                  >
                    Our Model
                  </span>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h3
                  className="mb-3 text-3xl font-black text-gray-900 md:text-4xl"
                  style={{ fontFamily: "Gilroy, sans-serif" }}
                >
                  The Circular Food Model
                </h3>
                <p
                  className="mx-auto max-w-2xl text-base text-gray-600"
                  style={{
                    fontFamily: "Gilroy, sans-serif",
                    alignItems: "center",
                  }}
                >
                  A regenerative system that transforms waste into nourishment
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-10">
              {/* Step 1: Preserve */}
              <div className="group relative flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="absolute inset-0 rounded-full bg-[#00a54f]/20 blur-xl transition-all duration-500 group-hover:bg-[#00a54f]/30" />
                  <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-xl transition-all duration-500 group-hover:scale-105">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#00a54f"
                      strokeWidth="2.5"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M9 3v18M15 3v18" />
                    </svg>
                  </div>
                </div>
                <h4
                  className="mb-1 text-xl font-black text-gray-900"
                  style={{ fontFamily: "Gilroy, sans-serif" }}
                >
                  Preserve
                </h4>
                <p
                  className="max-w-xs text-xs text-gray-600"
                  style={{ fontFamily: "Gilroy, sans-serif" }}
                >
                  Keep harvests fresh longer
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden text-gray-300 md:block">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>

              {/* Step 2: Upcycle */}
              <div className="group relative flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="absolute inset-0 rounded-full bg-[#e5790e]/20 blur-xl transition-all duration-500 group-hover:bg-[#e5790e]/30" />
                  <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-xl transition-all duration-500 group-hover:scale-105">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#e5790e"
                      strokeWidth="2.5"
                    >
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                      <line x1="12" y1="22.08" x2="12" y2="12" />
                    </svg>
                  </div>
                </div>
                <h4
                  className="mb-1 text-xl font-black text-gray-900"
                  style={{ fontFamily: "Gilroy, sans-serif" }}
                >
                  Upcycle
                </h4>
                <p
                  className="max-w-xs text-xs text-gray-600"
                  style={{ fontFamily: "Gilroy, sans-serif" }}
                >
                  Transform surplus into products
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden text-gray-300 md:block">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>

              {/* Step 3: Nourish */}
              <div className="group relative flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="absolute inset-0 rounded-full bg-[#1acf1b]/20 blur-xl transition-all duration-500 group-hover:bg-[#1acf1b]/30" />
                  <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-xl transition-all duration-500 group-hover:scale-105">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#1acf1b"
                      strokeWidth="2.5"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                </div>
                <h4
                  className="mb-1 text-xl font-black text-gray-900"
                  style={{ fontFamily: "Gilroy, sans-serif" }}
                >
                  Nourish
                </h4>
                <p
                  className="max-w-xs text-xs text-gray-600"
                  style={{ fontFamily: "Gilroy, sans-serif" }}
                >
                  Provide accessible nutrition
                </p>
              </div>
            </div>

            <div className="mt-10 text-center">
              <p
                className="text-xl font-black text-gray-900 md:text-2xl"
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
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16">
        <div
          className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"
          aria-hidden="true"
        />
        <div
          className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#e5790e]/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#00a54f]/10 blur-3xl"
          aria-hidden="true"
        />
        <Container>
          <div className="relative mx-auto max-w-4xl text-center">
            <div className="mb-6">
              <svg
                className="mx-auto h-10 w-10 text-[#e5790e]/30"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <blockquote
              className="mb-8 text-lg font-light leading-relaxed text-white md:text-xl"
              style={{
                fontFamily: "Gilroy, sans-serif",
                letterSpacing: "-0.01em",
              }}
            >
              Our products are more than food. Every jar and pouch we create is
              proof that food loss and waste can become nourishment, and that
              circularity can restore dignity.
            </blockquote>
            <div className="mx-auto inline-block">
              <div className="mb-3 h-px w-12 bg-gradient-to-r from-transparent via-[#e5790e] to-transparent mx-auto" />
              <p
                className="mb-2 text-lg font-bold text-white"
                style={{ fontFamily: "Gilroy, sans-serif", color: "white" }}
              >
                Sophiya Tamang
              </p>
              <p
                className="mb-1 text-sm font-medium text-gray-300"
                style={{ fontFamily: "Gilroy, sans-serif", color: "white" }}
              >
                Co-Founder & CEO, Mandala Foods
              </p>
              <p
                className="text-xs font-light text-gray-400"
                style={{ fontFamily: "Gilroy, sans-serif", color: "white" }}
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
