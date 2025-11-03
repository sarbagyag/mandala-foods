'use client'

import React from "react";
import { Container } from "@/components/ui/Container";

export function OurStorySection() {
  return (
    <>
      {/* Hero Section */}
      <section id="our-story" className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-5xl font-black tracking-tight text-gray-900 md:text-6xl lg:text-7xl" style={{ fontFamily: 'Gilroy, sans-serif' }}>
              Our Story
            </h2>
            <p className="mx-auto max-w-3xl text-xl font-light leading-relaxed text-gray-700 md:text-2xl" style={{ fontFamily: 'Gilroy, sans-serif' }}>
              What began as a mission to help farmers reduce food loss has grown into something more, a circular food model that transforms waste into nourishment.
            </p>
          </div>
        </Container>
      </section>

      {/* Timeline Section 1: A Broken System */}
      <section className="bg-white py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="order-2 lg:order-1">
              <div className="mb-4 inline-block rounded-full bg-[#e5790e]/10 px-4 py-2">
                <span className="text-sm font-bold tracking-wide text-[#e5790e]" style={{ fontFamily: 'Gilroy, sans-serif' }}>
                  2020—2024
                </span>
              </div>
              <h3 className="mb-6 text-4xl font-black text-gray-900 md:text-5xl" style={{ fontFamily: 'Gilroy, sans-serif' }}>
                A Broken System
              </h3>
              <div className="space-y-4 text-lg leading-relaxed text-gray-700" style={{ fontFamily: 'Gilroy, sans-serif', fontWeight: 400 }}>
                <p>
                  In Nepal, nearly half of all fruits and vegetables never reach a plate. Not because they lack nutrition, but because farmers cannot preserve freshness as their harvests travel from remote hills to urban markets.
                </p>
                <p>
                  Perfectly good food is lost — in fields, on the road, in markets, and even in kitchens. Farmers lose income. Families lose nutrition.
                </p>
                <p className="font-medium text-gray-900">
                  That is where our journey began.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 shadow-xl"></div>
            </div>
          </div>
        </Container>
      </section>

      {/* Agrifresh Journey */}
      <section className="bg-gradient-to-br from-[#00a54f]/5 to-[#1acf1b]/5 py-20">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="space-y-6 text-lg leading-relaxed text-gray-700" style={{ fontFamily: 'Gilroy, sans-serif', fontWeight: 400 }}>
              <p>
                By introducing simple, affordable technologies, we enabled farmers to keep produce fresh for longer, reducing spoilage and connecting farmers to markets. Over the years, <span className="font-semibold text-[#00a54f]">Mandala Agrifresh</span> worked with thousands of farmers across Nepal.
              </p>
              <p className="text-xl font-bold text-gray-900">
                It was progress — but not the full solution.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Timeline Section 2: The Turning Point */}
      <section className="bg-white py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="order-1">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 shadow-xl"></div>
            </div>
            <div className="order-2">
              <div className="mb-4 inline-block rounded-full bg-[#e5790e]/10 px-4 py-2">
                <span className="text-sm font-bold tracking-wide text-[#e5790e]" style={{ fontFamily: 'Gilroy, sans-serif' }}>
                  2024
                </span>
              </div>
              <h3 className="mb-6 text-4xl font-black text-gray-900 md:text-5xl" style={{ fontFamily: 'Gilroy, sans-serif' }}>
                The Turning Point
              </h3>
              <div className="space-y-4 text-lg leading-relaxed text-gray-700" style={{ fontFamily: 'Gilroy, sans-serif', fontWeight: 400 }}>
                <p>
                  Even when fruit reached the market, much of it was rejected for not looking "perfect." Safe and nutritious fruit was being discarded in the name of aesthetics.
                </p>
                <p>
                  Meanwhile, a deeper crisis persisted: <span className="font-semibold text-gray-900">malnutrition</span> in both urban and rural areas. Daily diets lacked the diversity and vital nutrition needed to thrive. Families struggled to afford nutritious options.
                </p>
                <p className="font-medium text-gray-900">
                  Millions were going without the nourishment they needed to thrive — even as edible produce was being discarded.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Personal Story */}
      <section className="bg-gradient-to-br from-[#e5790e]/5 to-[#e5790e]/10 py-20">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="space-y-6 text-lg leading-relaxed text-gray-700" style={{ fontFamily: 'Gilroy, sans-serif', fontWeight: 400 }}>
              <p>
                For me, this problem became deeply personal while traveling with my six-month-old daughter. Abroad, I discovered safe, portable, fruit-based purees. Back home, they were either unavailable or unaffordable.
              </p>
              <p className="text-xl font-bold text-gray-900">
                It struck me: the very fruit being wasted in Nepal could have been the nourishing food I wanted for my child.
              </p>
              <p className="text-2xl font-black text-[#e5790e]">
                That was the spark for Mandala Foods.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Timeline Section 3: The Birth of Mandala Foods */}
      <section className="bg-white py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="order-2 lg:order-1">
              <div className="mb-4 inline-block rounded-full bg-[#00a54f]/10 px-4 py-2">
                <span className="text-sm font-bold tracking-wide text-[#00a54f]" style={{ fontFamily: 'Gilroy, sans-serif' }}>
                  2025
                </span>
              </div>
              <h3 className="mb-6 text-4xl font-black text-gray-900 md:text-5xl" style={{ fontFamily: 'Gilroy, sans-serif' }}>
                The Birth of Mandala Foods
              </h3>
              <div className="space-y-4 text-lg leading-relaxed text-gray-700" style={{ fontFamily: 'Gilroy, sans-serif', fontWeight: 400 }}>
                <p>
                  In 2025, we founded Mandala Foods with a clear belief:{" "}
                  <span className="font-bold text-[#00a54f]">Good nutrition should be accessible to all — and no nourishing food should ever go to waste.</span>
                </p>
                <p>
                  Today, we upcycle surplus and cosmetically imperfect fruits into safe, affordable, and nutrient-rich fruit-based products— crafted for schools and families across Nepal.
                </p>
                <p className="font-medium text-gray-900">
                  Our products are more than food. They are proof that waste can become nourishment, that circularity can restore dignity, and that every fruit — and every person who depends on them — deserves a second chance.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 shadow-xl"></div>
            </div>
          </div>
        </Container>
      </section>

      {/* Circular Food Model */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-24">
        <Container>
          <div className="mx-auto max-w-5xl">
            <h3 className="mb-16 text-center text-4xl font-black text-gray-900 md:text-5xl" style={{ fontFamily: 'Gilroy, sans-serif' }}>
              The Circular Food Model
            </h3>

            <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-12">
              {/* Step 1: Preserve */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-lg">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#00a54f" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                  </svg>
                </div>
                <h4 className="mb-2 text-2xl font-black text-gray-900" style={{ fontFamily: 'Gilroy, sans-serif' }}>
                  Preserve
                </h4>
              </div>

              {/* Arrow */}
              <div className="hidden text-gray-400 md:block">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>

              {/* Step 2: Upcycle */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-lg">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#e5790e" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
                    <polyline points="7.5 19.79 7.5 14.6 3 12" />
                    <polyline points="21 12 16.5 14.6 16.5 19.79" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                  </svg>
                </div>
                <h4 className="mb-2 text-2xl font-black text-gray-900" style={{ fontFamily: 'Gilroy, sans-serif' }}>
                  Upcycle
                </h4>
              </div>

              {/* Arrow */}
              <div className="hidden text-gray-400 md:block">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>

              {/* Step 3: Nourish */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-lg">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#1acf1b" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <h4 className="mb-2 text-2xl font-black text-gray-900" style={{ fontFamily: 'Gilroy, sans-serif' }}>
                  Nourish
                </h4>
              </div>
            </div>

            <div className="mt-16 text-center">
              <p className="text-xl font-semibold text-gray-900" style={{ fontFamily: 'Gilroy, sans-serif' }}>
                Preserve. Upcycle. Nourish.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Founder Quote */}
      <section className="bg-gradient-to-br from-[#00a54f] to-[#1acf1b] py-20 text-white">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8">
              <svg className="mx-auto h-12 w-12 text-white/30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <blockquote className="mb-8 text-2xl font-light leading-relaxed md:text-3xl" style={{ fontFamily: 'Gilroy, sans-serif' }}>
              Our products are more than food. They are proof that waste can become nourishment, that circularity can restore dignity, and that every fruit — and every person who depends on them — deserves a second chance.
            </blockquote>
            <div className="border-t border-white/20 pt-8">
              <p className="mb-1 text-xl font-bold" style={{ fontFamily: 'Gilroy, sans-serif' }}>
                Sophiya Tamang
              </p>
              <p className="text-sm font-light text-white/80" style={{ fontFamily: 'Gilroy, sans-serif' }}>
                Co-Founder & CEO, Mandala Foods
              </p>
              <p className="text-sm font-light text-white/80" style={{ fontFamily: 'Gilroy, sans-serif' }}>
                Co-Founder, Mandala Agrifresh
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
