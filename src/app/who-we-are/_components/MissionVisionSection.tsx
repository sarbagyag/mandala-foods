"use client";

import React from "react";
import { Container } from "@/components/ui/Container";

export function MissionVisionSection() {
  return (
    <>
      {/* Section Header */}
      <section
        id="mission-vision"
        className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white py-16"
      >
        <div
          className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.02]"
          aria-hidden="true"
        />
        <Container>
          <div className="relative mx-auto max-w-6xl">
            {/* Belief Section */}
            <div className="mb-16 text-center">
              <div className="mb-4 inline-block">
                <div className="rounded-full border-2 border-[#e5790e]/20 bg-gradient-to-r from-[#e5790e]/5 to-[#00a54f]/5 px-6 py-2">
                  <span
                    className="text-xs font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-[#e5790e] to-[#00a54f] bg-clip-text text-transparent"
                    style={{ fontFamily: "Gilroy, sans-serif" }}
                  >
                    Our Belief
                  </span>
                </div>
              </div>
              <div>
                <span
                  style={{
                    fontFamily: "Gilroy, sans-serif",
                    fontSize: "1.25rem",
                    lineHeight: "1.75rem",
                    color: "#4B5563",
                    fontWeight: 400,
                  }}
                >
                  <span style={{ fontWeight: "bold" }}>
                    {" "}
                    Good nutrition should be within everyone’s reach — and no
                    nourishing food should ever go to waste.{" "}
                  </span>{" "}
                  This belief is the foundation of who we are. We see food not
                  just as a commodity, but as a force for dignity, livelihood,
                  and health.
                </span>
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
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>

                  {/* Title */}
                  <h3
                    className="mb-3 text-2xl font-black text-gray-900 md:text-3xl"
                    style={{ fontFamily: "Gilroy, sans-serif" }}
                  >
                    Our Mission
                  </h3>

                  {/* Content */}
                  <p
                    className="text-base leading-relaxed text-gray-700"
                    style={{
                      fontFamily: "Gilroy, sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    To build a circular food economy that transforms waste into
                    worth — upcycling local harvests into nutritious products
                    that nourish people and empower those who grow our food.
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
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>

                  {/* Title */}
                  <h3
                    className="mb-3 text-2xl font-black text-gray-900 md:text-3xl"
                    style={{ fontFamily: "Gilroy, sans-serif" }}
                  >
                    Our Vision
                  </h3>

                  {/* Content */}
                  <p
                    className="text-base leading-relaxed text-gray-700"
                    style={{
                      fontFamily: "Gilroy, sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    A world where every harvest — and every person — gets the
                    chance they deserve. Where no good is wasted, and healthy
                    food choices are never a luxury.
                  </p>

                  {/* Decorative Element */}
                  <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-gradient-to-br from-[#00a54f]/10 to-transparent blur-xl" />
                </div>
              </div>
            </div>

            {/* Three Pillars */}
          </div>
        </Container>
      </section>
    </>
  );
}
