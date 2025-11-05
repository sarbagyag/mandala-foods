'use client'

import React from "react";
import { Container } from "@/components/ui/Container";

export function MissionVisionSection() {
  return (
    <>
      {/* Section Header */}
      <section id="mission-vision" className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white py-16">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.02]" aria-hidden="true" />
        <Container>
          <div className="relative mx-auto max-w-6xl">
            {/* Belief Section */}
            <div className="mb-16 text-center">
              <div className="mb-4 inline-block">
                <div className="rounded-full border-2 border-[#e5790e]/20 bg-gradient-to-r from-[#e5790e]/5 to-[#00a54f]/5 px-6 py-2">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-[#e5790e] to-[#00a54f] bg-clip-text text-transparent" style={{ fontFamily: 'Gilroy, sans-serif' }}>
                    Our Belief
                  </span>
                </div>
              </div>
              <h2 className="mx-auto mb-4 max-w-4xl text-3xl font-black leading-[1.1] tracking-tight text-gray-900 md:text-4xl lg:text-5xl" style={{ fontFamily: 'Gilroy, sans-serif', letterSpacing: '-0.02em' }}>
                Good nutrition should be within{" "}
                <span className="bg-gradient-to-r from-[#e5790e] to-[#00a54f] bg-clip-text text-transparent">
                  everyone's reach
                </span>
              </h2>
              <p className="mx-auto max-w-3xl text-lg font-light leading-relaxed text-gray-600 md:text-xl" style={{ fontFamily: 'Gilroy, sans-serif', letterSpacing: '-0.01em' }}>
                And no nourishing food should ever go to waste.
              </p>
              <div className="mx-auto mt-6 max-w-3xl">
                <p className="text-base leading-relaxed text-gray-700" style={{ fontFamily: 'Gilroy, sans-serif', fontWeight: 300, letterSpacing: '-0.01em' }}>
                  This belief is the foundation of who we are. We see food not just as a commodity, but as a force for dignity, livelihood, and health.
                </p>
              </div>
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Mission Card */}
              <div className="group relative">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#e5790e]/20 to-[#e5790e]/5 opacity-0 blur-lg transition-all duration-500 group-hover:opacity-100" />
                <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-500 group-hover:shadow-xl lg:p-8">
                  {/* Icon */}
                  <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-[#e5790e] to-[#c85a00] p-3 shadow-md">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-2xl font-black text-gray-900 md:text-3xl" style={{ fontFamily: 'Gilroy, sans-serif' }}>
                    Our Mission
                  </h3>

                  {/* Content */}
                  <p className="text-base leading-relaxed text-gray-700" style={{ fontFamily: 'Gilroy, sans-serif', fontWeight: 400 }}>
                    To build a circular food economy that transforms waste into worth — upcycling local harvests into nutritious products that nourish people and empower those who grow our food.
                  </p>

                  {/* Decorative Element */}
                  <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-gradient-to-br from-[#e5790e]/10 to-transparent blur-xl" />
                </div>
              </div>

              {/* Vision Card */}
              <div className="group relative">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#00a54f]/20 to-[#1acf1b]/5 opacity-0 blur-lg transition-all duration-500 group-hover:opacity-100" />
                <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-500 group-hover:shadow-xl lg:p-8">
                  {/* Icon */}
                  <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-[#00a54f] to-[#1acf1b] p-3 shadow-md">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-2xl font-black text-gray-900 md:text-3xl" style={{ fontFamily: 'Gilroy, sans-serif' }}>
                    Our Vision
                  </h3>

                  {/* Content */}
                  <p className="text-base leading-relaxed text-gray-700" style={{ fontFamily: 'Gilroy, sans-serif', fontWeight: 400 }}>
                    A world where every harvest — and every person — gets the chance they deserve. Where no good is wasted, and healthy food choices are never a luxury.
                  </p>

                  {/* Decorative Element */}
                  <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-gradient-to-br from-[#00a54f]/10 to-transparent blur-xl" />
                </div>
              </div>
            </div>

            {/* Three Pillars */}
            <div className="mt-12">
              <div className="mb-8 text-center">
                <h3 className="mb-2 text-2xl font-black text-gray-900 md:text-3xl" style={{ fontFamily: 'Gilroy, sans-serif' }}>
                  Built on Three Pillars
                </h3>
                <p className="mx-auto max-w-2xl text-sm text-gray-600" style={{ fontFamily: 'Gilroy, sans-serif' }}>
                  Our approach is grounded in dignity, livelihood, and health
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {/* Dignity */}
                <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#e5790e]/5 to-transparent p-6 transition-all duration-500 hover:shadow-lg">
                  <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-[#e5790e]/10 blur-2xl transition-all duration-500 group-hover:bg-[#e5790e]/20" />
                  <div className="relative">
                    <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-[#e5790e]/10 p-2.5">
                      <svg className="h-5 w-5 text-[#e5790e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h4 className="mb-2 text-xl font-black text-gray-900" style={{ fontFamily: 'Gilroy, sans-serif' }}>
                      Dignity
                    </h4>
                    <p className="text-sm leading-relaxed text-gray-700" style={{ fontFamily: 'Gilroy, sans-serif', fontWeight: 400 }}>
                      Every fruit and every person deserves respect and value, regardless of appearance or circumstance.
                    </p>
                  </div>
                </div>

                {/* Livelihood */}
                <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#00a54f]/5 to-transparent p-6 transition-all duration-500 hover:shadow-lg">
                  <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-[#00a54f]/10 blur-2xl transition-all duration-500 group-hover:bg-[#00a54f]/20" />
                  <div className="relative">
                    <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-[#00a54f]/10 p-2.5">
                      <svg className="h-5 w-5 text-[#00a54f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h4 className="mb-2 text-xl font-black text-gray-900" style={{ fontFamily: 'Gilroy, sans-serif' }}>
                      Livelihood
                    </h4>
                    <p className="text-sm leading-relaxed text-gray-700" style={{ fontFamily: 'Gilroy, sans-serif', fontWeight: 400 }}>
                      Supporting farmers and communities with sustainable income and economic empowerment.
                    </p>
                  </div>
                </div>

                {/* Health */}
                <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#1acf1b]/5 to-transparent p-6 transition-all duration-500 hover:shadow-lg">
                  <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-[#1acf1b]/10 blur-2xl transition-all duration-500 group-hover:bg-[#1acf1b]/20" />
                  <div className="relative">
                    <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-[#1acf1b]/10 p-2.5">
                      <svg className="h-5 w-5 text-[#1acf1b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="mb-2 text-xl font-black text-gray-900" style={{ fontFamily: 'Gilroy, sans-serif' }}>
                      Health
                    </h4>
                    <p className="text-sm leading-relaxed text-gray-700" style={{ fontFamily: 'Gilroy, sans-serif', fontWeight: 400 }}>
                      Providing accessible, nutritious food that nourishes bodies and builds healthier communities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
