'use client'

import React from "react";
import { Container } from "@/components/ui/Container";

export function OurJourneySection() {
  return (
    <>
      {/* Hero Section with Elegant Typography */}
      <section id="our-journey" className="relative overflow-hidden py-28 md:py-36 lg:py-44">
        {/* Elegant Brand Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-green-50" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#e5790e]/10 via-transparent to-transparent" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#00a54f]/8 via-transparent to-transparent" aria-hidden="true" />
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.02]" aria-hidden="true" />

        <Container>
          <div className="relative mx-auto max-w-6xl">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="mb-10 inline-block">
                <div className="rounded-full border-2 border-[#e5790e]/20 bg-white/80 backdrop-blur-sm px-8 py-3.5 shadow-sm">
                  <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#e5790e]" style={{ fontFamily: 'Gilroy, sans-serif' }}>
                    Our Journey
                  </span>
                </div>
              </div>
              <h2 className="mb-10 max-w-5xl text-5xl font-black leading-[1.1] tracking-tight text-gray-900 md:text-6xl lg:text-7xl xl:text-8xl" style={{ fontFamily: 'Gilroy, sans-serif', letterSpacing: '-0.02em' }}>
                From Overlooked Harvests to{" "}
                <span className="inline-block bg-gradient-to-r from-[#e5790e] via-[#ff8c1a] to-[#00a54f] bg-clip-text text-transparent">
                  Reimagined Nutrition
                </span>
              </h2>
              <p className="mx-auto max-w-4xl text-2xl font-light leading-relaxed text-gray-600 md:text-3xl lg:text-4xl" style={{ fontFamily: 'Gilroy, sans-serif', letterSpacing: '-0.01em' }}>
                A story of second chances. We turn waste into worth — giving fruits, farmers, and families the second chance they deserve.
              </p>
            </div>
          </div>
        </Container>

        {/* Bottom Divider */}
        <div className="absolute bottom-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#e5790e]/30 to-transparent" />
      </section>

      {/* The Problem Section */}
      <section className="bg-white py-24">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
            <div className="order-2 lg:order-1">
              <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-gray-100 px-5 py-2.5">
                <div className="h-2 w-2 rounded-full bg-[#e5790e] animate-pulse" />
                <span className="text-sm font-bold tracking-wide text-gray-700" style={{ fontFamily: 'Gilroy, sans-serif' }}>
                  The Challenge
                </span>
              </div>
              <h3 className="mb-8 text-4xl font-black leading-tight text-gray-900 md:text-5xl lg:text-6xl" style={{ fontFamily: 'Gilroy, sans-serif' }}>
                Half of all food never reaches a plate
              </h3>
              <div className="space-y-6 text-lg leading-relaxed text-gray-700" style={{ fontFamily: 'Gilroy, sans-serif', fontWeight: 400 }}>
                <p className="text-xl">
                  In Nepal, nearly <span className="font-bold text-gray-900">half of all fruits and vegetables</span> never reach a plate because they lose their quality and freshness on their long journey from farm to fork.
                </p>
                <p>
                  Perfectly good food is lost — in fields, on the road, in markets, and even in kitchens. Farmers lose income. Families lose nutrition.
                </p>
                <div className="mt-8 border-l-4 border-[#e5790e] bg-[#e5790e]/5 pl-6 py-4">
                  <p className="text-xl font-semibold text-gray-900">
                    That's where our story began.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-gray-200 to-gray-300 shadow-2xl">
                  {/* Placeholder for image */}
                </div>
                <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-[#e5790e]/20 blur-3xl" aria-hidden="true" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mandala Agrifresh Journey */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#00a54f]/5 via-[#00a54f]/3 to-transparent py-24">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#00a54f]/10 blur-3xl" aria-hidden="true" />
        <Container>
          <div className="relative mx-auto max-w-4xl">
            <div className="mb-8 flex items-center gap-4">
              <div className="h-1 w-20 rounded-full bg-gradient-to-r from-[#00a54f] to-[#1acf1b]" />
              <span className="text-sm font-bold uppercase tracking-widest text-[#00a54f]" style={{ fontFamily: 'Gilroy, sans-serif' }}>
                Our First Step
              </span>
            </div>
            <div className="space-y-6 text-lg leading-relaxed" style={{ fontFamily: 'Gilroy, sans-serif', fontWeight: 400 }}>
              <p className="text-xl text-gray-700">
                Through <span className="font-bold text-[#00a54f]">Mandala Agrifresh</span>, we helped farmers reduce post-harvest loss with simple, affordable technologies that could keep fruits and vegetables fresh for longer.
              </p>
              <p className="text-gray-700">
                Over the years, we worked with thousands of farmers across Nepal, making real progress in preserving harvests and connecting them to markets.
              </p>
              <div className="mt-10 rounded-2xl bg-white p-8 shadow-lg">
                <p className="text-2xl font-bold text-gray-900">
                  It was progress — but not the full solution.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* The Turning Point */}
      <section className="bg-white py-24">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
            <div className="order-1">
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-orange-100 to-orange-200 shadow-2xl">
                  {/* Placeholder for image */}
                </div>
                <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-[#e5790e]/20 blur-3xl" aria-hidden="true" />
              </div>
            </div>
            <div className="order-2">
              <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-[#e5790e]/10 px-5 py-2.5">
                <svg className="h-5 w-5 text-[#e5790e]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-bold tracking-wide text-[#e5790e]" style={{ fontFamily: 'Gilroy, sans-serif' }}>
                  The Turning Point
                </span>
              </div>
              <h3 className="mb-8 text-4xl font-black leading-tight text-gray-900 md:text-5xl" style={{ fontFamily: 'Gilroy, sans-serif' }}>
                Good food wasted for looking "imperfect"
              </h3>
              <div className="space-y-6 text-lg leading-relaxed text-gray-700" style={{ fontFamily: 'Gilroy, sans-serif', fontWeight: 400 }}>
                <p>
                  Even when fruits reached markets, many were still rejected — not for their quality, but for their looks. Perfectly edible fruits were being discarded while children went without nutritious food.
                </p>
                <p>
                  Meanwhile, a deeper crisis persisted: <span className="font-bold text-gray-900">malnutrition</span> in both urban and rural areas. Daily diets lacked the diversity and vital nutrition needed to thrive.
                </p>
                <div className="mt-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 p-8">
                  <p className="text-xl font-bold text-gray-900">
                    Millions were going without nourishment — even as edible produce was being discarded.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Personal Story - The Spark */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50/50 via-white to-orange-50/30 py-24 md:py-32">
        <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-[#e5790e]/5 blur-3xl" aria-hidden="true" />
        <Container>
          <div className="relative mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <svg className="mx-auto h-16 w-16 text-[#e5790e]/20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <div className="space-y-8 text-center" style={{ fontFamily: 'Gilroy, sans-serif' }}>
              <p className="text-2xl font-light text-gray-700 md:text-3xl" style={{ letterSpacing: '-0.01em' }}>
                Then came a personal moment of truth.
              </p>
              <p className="mx-auto max-w-4xl text-xl font-light leading-relaxed text-gray-600 md:text-2xl" style={{ letterSpacing: '-0.01em' }}>
                While traveling with my six-month-old daughter, I searched for safe, fruit-based purees — something easily available abroad but not in Nepal.
              </p>
              <div className="my-12 rounded-3xl border border-gray-200 bg-white p-10 shadow-xl md:p-14">
                <p className="text-2xl font-bold leading-tight text-gray-900 md:text-3xl lg:text-4xl" style={{ fontFamily: 'Gilroy, sans-serif', letterSpacing: '-0.02em' }}>
                  It struck me: the very fruits being wasted here could become the nourishing food I wanted for her.
                </p>
              </div>
              <div className="pt-8">
                <p className="text-3xl font-black text-[#e5790e] md:text-4xl lg:text-5xl" style={{ fontFamily: 'Gilroy, sans-serif', letterSpacing: '-0.02em' }}>
                  That was the spark for Mandala Foods.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Birth of Mandala Foods */}
      <section className="bg-white py-24">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
            <div className="order-2 lg:order-1">
              <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#00a54f]/10 to-[#1acf1b]/10 px-5 py-2.5">
                <svg className="h-5 w-5 text-[#00a54f]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm font-bold tracking-wide text-[#00a54f]" style={{ fontFamily: 'Gilroy, sans-serif' }}>
                  2025 — Our Beginning
                </span>
              </div>
              <h3 className="mb-8 text-4xl font-black leading-tight text-gray-900 md:text-5xl lg:text-6xl" style={{ fontFamily: 'Gilroy, sans-serif' }}>
                The Birth of{" "}
                <span className="bg-gradient-to-r from-[#e5790e] to-[#00a54f] bg-clip-text text-transparent">
                  Mandala Foods
                </span>
              </h3>
              <div className="space-y-6 text-lg leading-relaxed text-gray-700" style={{ fontFamily: 'Gilroy, sans-serif', fontWeight: 400 }}>
                <div className="rounded-2xl bg-gradient-to-br from-[#00a54f]/10 to-[#1acf1b]/5 p-8">
                  <p className="text-xl font-bold text-[#00a54f]">
                    "Good nutrition should be accessible to all — and no nourishing food should ever go to waste."
                  </p>
                </div>
                <p className="text-xl">
                  In 2025, we founded Mandala Foods with this clear belief.
                </p>
                <p>
                  Today, we upcycle surplus and market-rejected fruits — good harvests overlooked due to cosmetic standards — into safe, affordable, and nutrient-rich fruit-based foods crafted for schools and families across Nepal.
                </p>
                <div className="mt-8 border-l-4 border-[#00a54f] pl-6">
                  <p className="text-xl font-semibold text-gray-900">
                    Our products are more than food. Every jar and pouch we create is proof that food loss and waste can become nourishment, and that circularity can restore dignity.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-green-100 to-orange-100 shadow-2xl">
                  {/* Placeholder for image */}
                </div>
                <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-gradient-to-br from-[#00a54f]/20 to-[#e5790e]/20 blur-3xl" aria-hidden="true" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Circular Food Model */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 py-32">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.02]" aria-hidden="true" />
        <Container>
          <div className="relative mx-auto max-w-6xl">
            <div className="mb-20 text-center">
              <div className="mb-8 inline-block">
                <div className="rounded-full bg-gradient-to-r from-[#00a54f]/10 to-[#e5790e]/10 px-6 py-3">
                  <span className="text-sm font-bold uppercase tracking-widest bg-gradient-to-r from-[#00a54f] to-[#e5790e] bg-clip-text text-transparent" style={{ fontFamily: 'Gilroy, sans-serif' }}>
                    Our Model
                  </span>
                </div>
              </div>
              <h3 className="mb-6 text-4xl font-black text-gray-900 md:text-5xl lg:text-6xl" style={{ fontFamily: 'Gilroy, sans-serif' }}>
                The Circular Food Model
              </h3>
              <p className="mx-auto max-w-2xl text-xl text-gray-600" style={{ fontFamily: 'Gilroy, sans-serif' }}>
                A regenerative system that transforms waste into nourishment
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-12 md:flex-row md:gap-16">
              {/* Step 1: Preserve */}
              <div className="group relative flex flex-col items-center text-center">
                <div className="relative mb-8">
                  <div className="absolute inset-0 rounded-full bg-[#00a54f]/20 blur-2xl transition-all duration-500 group-hover:bg-[#00a54f]/30" />
                  <div className="relative flex h-40 w-40 items-center justify-center rounded-full bg-white shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:shadow-[#00a54f]/20">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#00a54f" strokeWidth="2.5">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M9 3v18M15 3v18" />
                    </svg>
                  </div>
                </div>
                <h4 className="mb-3 text-2xl font-black text-gray-900" style={{ fontFamily: 'Gilroy, sans-serif' }}>
                  Preserve
                </h4>
                <p className="max-w-xs text-sm text-gray-600" style={{ fontFamily: 'Gilroy, sans-serif' }}>
                  Keep harvests fresh longer
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden text-gray-300 transition-colors duration-500 hover:text-[#e5790e] md:block">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>

              {/* Step 2: Upcycle */}
              <div className="group relative flex flex-col items-center text-center">
                <div className="relative mb-8">
                  <div className="absolute inset-0 rounded-full bg-[#e5790e]/20 blur-2xl transition-all duration-500 group-hover:bg-[#e5790e]/30" />
                  <div className="relative flex h-40 w-40 items-center justify-center rounded-full bg-white shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:shadow-[#e5790e]/20">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#e5790e" strokeWidth="2.5">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                      <line x1="12" y1="22.08" x2="12" y2="12" />
                    </svg>
                  </div>
                </div>
                <h4 className="mb-3 text-2xl font-black text-gray-900" style={{ fontFamily: 'Gilroy, sans-serif' }}>
                  Upcycle
                </h4>
                <p className="max-w-xs text-sm text-gray-600" style={{ fontFamily: 'Gilroy, sans-serif' }}>
                  Transform surplus into products
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden text-gray-300 transition-colors duration-500 hover:text-[#1acf1b] md:block">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>

              {/* Step 3: Nourish */}
              <div className="group relative flex flex-col items-center text-center">
                <div className="relative mb-8">
                  <div className="absolute inset-0 rounded-full bg-[#1acf1b]/20 blur-2xl transition-all duration-500 group-hover:bg-[#1acf1b]/30" />
                  <div className="relative flex h-40 w-40 items-center justify-center rounded-full bg-white shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:shadow-[#1acf1b]/20">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#1acf1b" strokeWidth="2.5">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                </div>
                <h4 className="mb-3 text-2xl font-black text-gray-900" style={{ fontFamily: 'Gilroy, sans-serif' }}>
                  Nourish
                </h4>
                <p className="max-w-xs text-sm text-gray-600" style={{ fontFamily: 'Gilroy, sans-serif' }}>
                  Provide accessible nutrition
                </p>
              </div>
            </div>

            <div className="mt-20 text-center">
              <p className="text-3xl font-black text-gray-900" style={{ fontFamily: 'Gilroy, sans-serif' }}>
                <span className="text-[#00a54f]">Preserve.</span>{" "}
                <span className="text-[#e5790e]">Upcycle.</span>{" "}
                <span className="text-[#1acf1b]">Nourish.</span>
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Founder Quote */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-24 md:py-32 lg:py-40">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" aria-hidden="true" />
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#e5790e]/10 blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#00a54f]/10 blur-3xl" aria-hidden="true" />
        <Container>
          <div className="relative mx-auto max-w-5xl text-center">
            <div className="mb-12">
              <svg className="mx-auto h-16 w-16 text-[#e5790e]/30 md:h-20 md:w-20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <blockquote className="mb-16 text-2xl font-light leading-relaxed text-white md:text-3xl lg:text-4xl" style={{ fontFamily: 'Gilroy, sans-serif', letterSpacing: '-0.01em' }}>
              Our products are more than food. Every jar and pouch we create is proof that food loss and waste can become nourishment, and that circularity can restore dignity.
            </blockquote>
            <div className="mx-auto inline-block">
              <div className="mb-4 h-px w-16 bg-gradient-to-r from-transparent via-[#e5790e] to-transparent mx-auto" />
              <p className="mb-3 text-2xl font-bold text-white" style={{ fontFamily: 'Gilroy, sans-serif' }}>
                Sophiya Tamang
              </p>
              <p className="mb-1 text-base font-medium text-gray-300" style={{ fontFamily: 'Gilroy, sans-serif' }}>
                Co-Founder & CEO, Mandala Foods
              </p>
              <p className="text-sm font-light text-gray-400" style={{ fontFamily: 'Gilroy, sans-serif' }}>
                Co-Founder, Mandala Agrifresh
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
