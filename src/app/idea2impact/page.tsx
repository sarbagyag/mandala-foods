import { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Idea to Impact (I2I) | Mandala Foods",
  description:
    "A governance and systems platform uniting circular, women-led food enterprises to turn post-harvest loss into prosperity through market-driven, nutrition-sensitive, climate-smart business models.",
};

export default function Idea2ImpactPage() {
  return (
    <>
      {/* Hero Section with Logo and Governance Model Side by Side */}
      <section className="relative overflow-hidden bg-linear-to-br from-[#1d6f8f]/10 via-[#1d6f8f]/5 to-white py-32 md:py-40 lg:py-48">
        {/* Subtle background pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231d6f8f' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        {/* Background decorations */}
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-linear-to-br from-[#1d6f8f]/5 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-linear-to-tr from-[#00a54f]/5 to-transparent blur-3xl"></div>

        <Container>
          <div className="relative z-10 mx-auto max-w-7xl">
            {/* Tagline Section - Full Width */}
            <div className="mb-20 text-center">
              <div className="mx-auto max-w-5xl space-y-8">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p
                    className="text-center text-2xl font-light leading-relaxed text-gray-800 md:text-3xl lg:text-4xl"
                    style={{
                      fontFamily: "Gilroy, sans-serif",
                      letterSpacing: "-0.02em",
                      textShadow: "0 1px 2px rgba(0,0,0,0.05)",
                    }}
                  >
                    A governance and systems platform uniting circular,
                    women‑led food enterprises to turn post‑harvest loss into
                    prosperity.
                  </p>
                </div>
              </div>
            </div>

            {/* Flex Container: Logo and Governance Model Side by Side */}
            <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
              {/* Left Side: Logo */}
              <div className="flex w-full flex-col items-center justify-center lg:w-5/12">
                <div className="relative h-64 w-full max-w-lg md:h-72 lg:h-80">
                  <Image
                    src="/images/idea2impact/logo.jpg"
                    alt="Idea to Impact (I2I) - Ideas, Innovations, Implementation, Influence, Impact"
                    fill
                    className="relative z-10 object-contain drop-shadow-2xl transition-transform duration-700 hover:scale-105"
                    priority
                  />
                </div>
                <div>
                  <div className="relative">
                    <div className="absolute -inset-4 rounded-2xl bg-linear-to-r from-transparent via-[#1d6f8f]/5 to-transparent blur-xl"></div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <p
                        className="relative mx-auto max-w-4xl text-center text-lg font-normal leading-relaxed text-gray-600 md:text-xl lg:text-2xl"
                        style={{
                          fontFamily: "Gilroy, sans-serif",
                          fontWeight: 400,
                          textAlign: "center",
                          marginTop: "25px",
                        }}
                      >
                        We integrate research & development, shared operations,
                        and impact tracking under one structure to drive
                        scalable, investable food‑systems transformation through
                        market‑driven, nutrition‑sensitive, climate‑smart
                        business models.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Governance Model */}
              <div className="w-full lg:w-7/12">
                <div className="mb-12">
                  <div className="mb-6 inline-block rounded-full bg-linear-to-r from-[#1d6f8f]/10 to-[#00a54f]/10 px-6 py-2 backdrop-blur-sm">
                    <span
                      className="text-xs font-bold uppercase tracking-wider text-[#1d6f8f]"
                      style={{ fontFamily: "Gilroy, sans-serif" }}
                    >
                      Our Framework
                    </span>
                  </div>
                  <h2
                    className="mb-4 text-4xl font-black text-gray-900 md:text-5xl lg:text-6xl"
                    style={{
                      fontFamily: "Gilroy, sans-serif",
                      letterSpacing: "-0.03em",
                      background:
                        "linear-gradient(135deg, #1d6f8f 0%, #00a54f 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Governance Model
                  </h2>
                  <p
                    className="max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg"
                    style={{
                      fontFamily: "Gilroy, sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    I2I operates under a joint governance framework designed for
                    scale and accountability.
                  </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-1">
                  {/* Central Leadership Council */}
                  <div className="group relative overflow-hidden rounded-3xl border border-gray-200/50 bg-white/80 p-8 shadow-xl backdrop-blur-xl transition-all duration-700 hover:-translate-x-1 hover:border-[#1d6f8f]/40 hover:shadow-2xl">
                    <div className="absolute inset-0 bg-linear-to-br from-[#1d6f8f]/[0.07] via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"></div>
                    <div className="relative z-10 flex items-start gap-6">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-[#1d6f8f] via-[#1d6f8f] to-[#1d6f8f]/90 shadow-xl transition-all duration-700 group-hover:scale-110 group-hover:shadow-2xl">
                        <svg
                          className="h-8 w-8 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3
                          className="mb-3 text-lg font-bold text-gray-900 transition-colors duration-500 group-hover:text-[#1d6f8f]"
                          style={{ fontFamily: "Gilroy, sans-serif" }}
                        >
                          Central Leadership Council
                        </h3>
                        <p
                          className="text-sm leading-relaxed text-gray-600"
                          style={{
                            fontFamily: "Gilroy, sans-serif",
                            fontWeight: 400,
                          }}
                        >
                          Sets strategic direction, mobilizes capital, and
                          champions joint fundraising.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Shared Operations & Finance */}
                  <div className="group relative overflow-hidden rounded-3xl border border-gray-200/50 bg-white/80 p-8 shadow-xl backdrop-blur-xl transition-all duration-700 hover:-translate-x-1 hover:border-[#00a54f]/40 hover:shadow-2xl">
                    <div className="absolute inset-0 bg-linear-to-br from-[#00a54f]/[0.07] via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"></div>
                    <div className="relative z-10 flex items-start gap-6">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-[#00a54f] via-[#00a54f] to-[#00a54f]/90 shadow-xl transition-all duration-700 group-hover:scale-110 group-hover:shadow-2xl">
                        <svg
                          className="h-8 w-8 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3
                          className="mb-3 text-lg font-bold text-gray-900 transition-colors duration-500 group-hover:text-[#00a54f]"
                          style={{ fontFamily: "Gilroy, sans-serif" }}
                        >
                          Shared Operations & Finance
                        </h3>
                        <p
                          className="text-sm leading-relaxed text-gray-600"
                          style={{
                            fontFamily: "Gilroy, sans-serif",
                            fontWeight: 400,
                          }}
                        >
                          Streamlines procurement, marketing, compliance, and
                          working‑capital discipline—reducing overhead for
                          member ventures.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Unified Impact Measurement */}
                  <div className="group relative overflow-hidden rounded-3xl border border-gray-200/50 bg-white/80 p-8 shadow-xl backdrop-blur-xl transition-all duration-700 hover:-translate-x-1 hover:border-[#e5790e]/40 hover:shadow-2xl">
                    <div className="absolute inset-0 bg-linear-to-br from-[#e5790e]/[0.07] via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"></div>
                    <div className="relative z-10 flex items-start gap-6">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-[#e5790e] via-[#e5790e] to-[#e5790e]/90 shadow-xl transition-all duration-700 group-hover:scale-110 group-hover:shadow-2xl">
                        <svg
                          className="h-8 w-8 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3
                          className="mb-3 text-lg font-bold text-gray-900 transition-colors duration-500 group-hover:text-[#e5790e]"
                          style={{ fontFamily: "Gilroy, sans-serif" }}
                        >
                          Unified Impact Measurement
                        </h3>
                        <p
                          className="text-sm leading-relaxed text-gray-600"
                          style={{
                            fontFamily: "Gilroy, sans-serif",
                            fontWeight: 400,
                          }}
                        >
                          Tracks results across the portfolio—loss reduction,
                          diet quality, affordability, women&apos;s agency, and
                          climate co‑benefits—enabling data‑driven decisions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary Statement - Full Width Below */}
            <div className="mt-20 text-center">
              <div className="relative">
                <div className="absolute inset-0 z-0 rounded-3xl bg-linear-to-r from-[#1d6f8f]/5 via-transparent to-[#00a54f]/5 blur-2xl"></div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <p
                    className="relative mx-auto max-w-4xl rounded-2xl bg-white/60 px-10 py-8 text-center text-xl font-medium leading-relaxed text-gray-800 shadow-lg backdrop-blur-sm md:text-2xl"
                    style={{ fontFamily: "Gilroy, sans-serif" }}
                  >
                    By uniting circular enterprises under one governance, I2I
                    turns food loss and waste into nutrition, livelihoods, and
                    climate action.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="relative overflow-hidden bg-white py-32 md:py-40">
        <Container>
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Mission */}
              <div className="group relative overflow-hidden rounded-3xl border border-gray-200/50 bg-gradient-to-br from-[#00a54f]/5 via-white to-white p-14 shadow-xl transition-all duration-700 hover:shadow-2xl">
                <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-gradient-to-br from-[#00a54f]/10 to-transparent blur-3xl transition-opacity duration-700 group-hover:opacity-70"></div>
                <div className="relative z-10">
                  <div className="mb-10">
                    <span
                      className="inline-block rounded-full bg-gradient-to-r from-[#00a54f] to-[#1acf1b] px-8 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-lg"
                      style={{ fontFamily: "Gilroy, sans-serif" }}
                    >
                      Our Mission
                    </span>
                  </div>
                  <h2
                    className="mb-10 text-center text-4xl font-black text-gray-900 md:text-5xl"
                    style={{
                      fontFamily: "Gilroy, sans-serif",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    Transforming Food Systems
                  </h2>
                  <div
                    className="space-y-8 text-center text-lg leading-relaxed text-gray-700"
                    style={{
                      fontFamily: "Gilroy, sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    <p>
                      Our mission is to drive sustainable transformation by
                      providing technical and operational services across the
                      entire food value chain—from farm to fork.
                    </p>
                    <div className="space-y-5 py-6">
                      <div className="flex items-center justify-center gap-4 transition-all duration-300 hover:translate-x-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00a54f]/20">
                          <div className="h-3 w-3 rounded-full bg-[#00a54f]"></div>
                        </div>
                        <span className="text-lg font-medium">
                          Enhancing food safety
                        </span>
                      </div>
                      <div className="flex items-center justify-center gap-4 transition-all duration-300 hover:translate-x-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00a54f]/20">
                          <div className="h-3 w-3 rounded-full bg-[#00a54f]"></div>
                        </div>
                        <span className="text-lg font-medium">
                          Reducing food loss and waste
                        </span>
                      </div>
                      <div className="flex items-center justify-center gap-4 transition-all duration-300 hover:translate-x-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00a54f]/20">
                          <div className="h-3 w-3 rounded-full bg-[#00a54f]"></div>
                        </div>
                        <span className="text-lg font-medium">
                          Increasing access to nutrient‑rich foods
                        </span>
                      </div>
                    </div>
                    <p className="pt-4">
                      We achieve this through applied research, policy
                      engagement, and on‑the‑ground inclusive
                      implementation—empowering stakeholders from farmers to
                      consumers.
                    </p>
                  </div>
                </div>
              </div>

              {/* Vision */}
              <div className="group relative overflow-hidden rounded-3xl border border-gray-200/50 bg-gradient-to-br from-[#e5790e]/5 via-white to-white p-14 shadow-xl transition-all duration-700 hover:shadow-2xl">
                <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-gradient-to-br from-[#e5790e]/10 to-transparent blur-3xl transition-opacity duration-700 group-hover:opacity-70"></div>
                <div className="relative z-10">
                  <div className="mb-10">
                    <span
                      className="inline-block rounded-full bg-gradient-to-r from-[#e5790e] to-[#f59e0b] px-8 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-lg"
                      style={{ fontFamily: "Gilroy, sans-serif" }}
                    >
                      Our Vision
                    </span>
                  </div>
                  <h2
                    className="mb-10 text-center text-4xl font-black text-gray-900 md:text-5xl"
                    style={{
                      fontFamily: "Gilroy, sans-serif",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    Ideas into Lasting Impact
                  </h2>
                  <div
                    className="space-y-8 text-center text-lg leading-relaxed text-gray-700"
                    style={{
                      fontFamily: "Gilroy, sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    <p className="rounded-2xl bg-gradient-to-r from-[#e5790e]/10 to-transparent px-6 py-6 text-xl font-semibold text-gray-900">
                      Transforming ideas into innovations, driving
                      implementation, influencing programs and policies, and
                      creating lasting impact for a sustainable and inclusive
                      food system.
                    </p>
                    <p>
                      We envision a world where bold ideas spark innovative
                      solutions, effective implementation bridges the gap
                      between research and practice, influential programs and
                      policies drive systemic change, and measurable impact
                      ensures food security, nutrition, and sustainability for
                      all.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Our Approach - Four Pillars */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50/50 via-white to-white py-32 md:py-40">
        <div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-[#1d6f8f]/5 to-transparent blur-3xl"></div>

        <Container>
          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="mb-24 text-center">
              <div className="mb-8 inline-block rounded-full bg-gradient-to-r from-[#1d6f8f]/10 via-[#00a54f]/10 to-[#e5790e]/10 px-8 py-3">
                <span
                  className="text-sm font-bold uppercase tracking-wider text-[#1d6f8f]"
                  style={{ fontFamily: "Gilroy, sans-serif" }}
                >
                  Four Interconnected Pillars
                </span>
              </div>
              <h2
                className="mb-8 text-5xl font-black text-gray-900 md:text-6xl lg:text-7xl"
                style={{
                  fontFamily: "Gilroy, sans-serif",
                  letterSpacing: "-0.03em",
                }}
              >
                Our Approach
              </h2>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <p
                  className="mx-auto max-w-3xl text-center text-xl leading-relaxed text-gray-600 md:text-2xl"
                  style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
                >
                  We work across four interconnected pillars to create systemic
                  change.
                </p>
              </div>
            </div>

            <div className="grid gap-10 md:grid-cols-2 lg:gap-12">
              {/* R4D */}
              <div className="group relative overflow-hidden rounded-3xl border-l-8 border-[#1d6f8f] bg-white p-12 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-gradient-to-br from-[#1d6f8f]/10 to-transparent blur-2xl transition-opacity duration-500 group-hover:opacity-70"></div>
                <div className="relative z-10">
                  <div className="mb-8 flex items-center gap-5">
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1d6f8f] to-[#1d6f8f]/80 shadow-xl transition-all duration-500 group-hover:scale-110">
                      <svg
                        className="h-10 w-10 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    </div>
                    <h3
                      className="flex-1 text-center text-2xl font-bold text-gray-900 transition-colors duration-500 group-hover:text-[#1d6f8f]"
                      style={{ fontFamily: "Gilroy, sans-serif" }}
                    >
                      Research for Development
                    </h3>
                  </div>
                  <p
                    className="text-center text-lg leading-relaxed text-gray-600"
                    style={{
                      fontFamily: "Gilroy, sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    Generating data‑driven insights to inform innovation and
                    guide strategic decision‑making.
                  </p>
                </div>
              </div>

              {/* Policy Analysis */}
              <div className="group relative overflow-hidden rounded-3xl border-l-8 border-[#00a54f] bg-white p-12 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-gradient-to-br from-[#00a54f]/10 to-transparent blur-2xl transition-opacity duration-500 group-hover:opacity-70"></div>
                <div className="relative z-10">
                  <div className="mb-8 flex items-center gap-5">
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00a54f] to-[#00a54f]/80 shadow-xl transition-all duration-500 group-hover:scale-110">
                      <svg
                        className="h-10 w-10 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <h3
                      className="flex-1 text-center text-2xl font-bold text-gray-900 transition-colors duration-500 group-hover:text-[#00a54f]"
                      style={{ fontFamily: "Gilroy, sans-serif" }}
                    >
                      Policy Analysis & Engagement
                    </h3>
                  </div>
                  <p
                    className="text-center text-lg leading-relaxed text-gray-600"
                    style={{
                      fontFamily: "Gilroy, sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    Supporting evidence‑based policy dialogue to shape systems
                    and scale solutions.
                  </p>
                </div>
              </div>

              {/* Implementation */}
              <div className="group relative overflow-hidden rounded-3xl border-l-8 border-[#1acf1b] bg-white p-12 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-gradient-to-br from-[#1acf1b]/10 to-transparent blur-2xl transition-opacity duration-500 group-hover:opacity-70"></div>
                <div className="relative z-10">
                  <div className="mb-8 flex items-center gap-5">
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1acf1b] to-[#1acf1b]/80 shadow-xl transition-all duration-500 group-hover:scale-110">
                      <svg
                        className="h-10 w-10 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <h3
                      className="flex-1 text-center text-2xl font-bold text-gray-900 transition-colors duration-500 group-hover:text-[#1acf1b]"
                      style={{ fontFamily: "Gilroy, sans-serif" }}
                    >
                      Scalable Implementation
                    </h3>
                  </div>
                  <p
                    className="text-center text-lg leading-relaxed text-gray-600"
                    style={{
                      fontFamily: "Gilroy, sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    Designing, executing, and evaluating scalable,
                    cost‑effective, gender‑inclusive, high‑impact projects.
                  </p>
                </div>
              </div>

              {/* Capacity Strengthening */}
              <div className="group relative overflow-hidden rounded-3xl border-l-8 border-[#e5790e] bg-white p-12 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-gradient-to-br from-[#e5790e]/10 to-transparent blur-2xl transition-opacity duration-500 group-hover:opacity-70"></div>
                <div className="relative z-10">
                  <div className="mb-8 flex items-center gap-5">
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#e5790e] to-[#e5790e]/80 shadow-xl transition-all duration-500 group-hover:scale-110">
                      <svg
                        className="h-10 w-10 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    </div>
                    <h3
                      className="flex-1 text-center text-2xl font-bold text-gray-900 transition-colors duration-500 group-hover:text-[#e5790e]"
                      style={{ fontFamily: "Gilroy, sans-serif" }}
                    >
                      Capacity Strengthening
                    </h3>
                  </div>
                  <p
                    className="text-center text-lg leading-relaxed text-gray-600"
                    style={{
                      fontFamily: "Gilroy, sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    Investing in local expertise, community leadership, and
                    inclusive partnerships for sustainability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Integrated Services */}
      <section className="relative overflow-hidden bg-white py-32 md:py-40">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-bl from-[#00a54f]/5 to-transparent blur-3xl"></div>

        <Container>
          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="mb-24 text-center">
              <div className="mb-8 inline-block rounded-full bg-gradient-to-r from-[#1d6f8f]/10 to-[#e5790e]/10 px-8 py-3">
                <span
                  className="text-sm font-bold uppercase tracking-wider text-[#1d6f8f]"
                  style={{ fontFamily: "Gilroy, sans-serif" }}
                >
                  The I2I Operating Spine
                </span>
              </div>
              <h2
                className="mb-8 text-5xl font-black text-gray-900 md:text-6xl lg:text-7xl"
                style={{
                  fontFamily: "Gilroy, sans-serif",
                  letterSpacing: "-0.03em",
                }}
              >
                Integrated Services
              </h2>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <p
                  className="mx-auto max-w-3xl text-center text-xl leading-relaxed text-gray-600 md:text-2xl"
                  style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
                >
                  The I2I operating spine combines essential services for
                  comprehensive impact.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="group rounded-3xl border border-gray-200/50 bg-gradient-to-br from-[#1d6f8f]/5 to-white p-10 text-center shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-[#1d6f8f]/30 hover:shadow-2xl">
                <div className="mb-6 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1d6f8f] to-[#1d6f8f]/80 shadow-lg transition-all duration-500 group-hover:scale-110">
                    <span
                      className="text-2xl font-black text-white"
                      style={{ fontFamily: "Gilroy, sans-serif" }}
                    >
                      R
                    </span>
                  </div>
                </div>
                <h4
                  className="mb-5 text-2xl font-bold text-[#1d6f8f]"
                  style={{ fontFamily: "Gilroy, sans-serif" }}
                >
                  R&D
                </h4>
                <p
                  className="text-center text-base leading-relaxed text-gray-700"
                  style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
                >
                  Product and process innovation for upcycled, safe, nutritious
                  foods.
                </p>
              </div>

              <div className="group rounded-3xl border border-gray-200/50 bg-gradient-to-br from-[#00a54f]/5 to-white p-10 text-center shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-[#00a54f]/30 hover:shadow-2xl">
                <div className="mb-6 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00a54f] to-[#00a54f]/80 shadow-lg transition-all duration-500 group-hover:scale-110">
                    <span
                      className="text-2xl font-black text-white"
                      style={{ fontFamily: "Gilroy, sans-serif" }}
                    >
                      O
                    </span>
                  </div>
                </div>
                <h4
                  className="mb-5 text-2xl font-bold text-[#00a54f]"
                  style={{ fontFamily: "Gilroy, sans-serif" }}
                >
                  Operations
                </h4>
                <p
                  className="text-center text-base leading-relaxed text-gray-700"
                  style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
                >
                  Pooled services for sourcing, quality assurance, and
                  routes‑to‑market.
                </p>
              </div>

              <div className="group rounded-3xl border border-gray-200/50 bg-gradient-to-br from-[#1acf1b]/5 to-white p-10 text-center shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-[#1acf1b]/30 hover:shadow-2xl">
                <div className="mb-6 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1acf1b] to-[#1acf1b]/80 shadow-lg transition-all duration-500 group-hover:scale-110">
                    <span
                      className="text-2xl font-black text-white"
                      style={{ fontFamily: "Gilroy, sans-serif" }}
                    >
                      I
                    </span>
                  </div>
                </div>
                <h4
                  className="mb-5 text-2xl font-bold text-[#1acf1b]"
                  style={{ fontFamily: "Gilroy, sans-serif" }}
                >
                  Impact Tracking
                </h4>
                <p
                  className="text-center text-base leading-relaxed text-gray-700"
                  style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
                >
                  Common metrics and portfolio dashboards for rapid course
                  correction.
                </p>
              </div>

              <div className="group rounded-3xl border border-gray-200/50 bg-gradient-to-br from-[#e5790e]/5 to-white p-10 text-center shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-[#e5790e]/30 hover:shadow-2xl">
                <div className="mb-6 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#e5790e] to-[#e5790e]/80 shadow-lg transition-all duration-500 group-hover:scale-110">
                    <span
                      className="text-2xl font-black text-white"
                      style={{ fontFamily: "Gilroy, sans-serif" }}
                    >
                      C
                    </span>
                  </div>
                </div>
                <h4
                  className="mb-5 text-2xl font-bold text-[#e5790e]"
                  style={{ fontFamily: "Gilroy, sans-serif" }}
                >
                  Capital Readiness
                </h4>
                <p
                  className="text-center text-base leading-relaxed text-gray-700"
                  style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
                >
                  Standardized unit economics and de‑risked pathways for
                  investors.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why This Matters */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50/50 via-white to-white py-32 md:py-40">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#1d6f8f]/5 via-[#00a54f]/5 to-[#e5790e]/5 blur-3xl"></div>

        <Container>
          <div className="relative z-10 mx-auto max-w-6xl text-center">
            <div className="mb-12 inline-block rounded-full bg-gradient-to-r from-[#1d6f8f]/10 via-[#00a54f]/10 to-[#e5790e]/10 px-8 py-3">
              <span
                className="text-sm font-bold uppercase tracking-wider text-[#1d6f8f]"
                style={{ fontFamily: "Gilroy, sans-serif" }}
              >
                The Impact
              </span>
            </div>
            <h2
              className="mb-16 text-5xl font-black text-gray-900 md:text-6xl lg:text-7xl"
              style={{
                fontFamily: "Gilroy, sans-serif",
                letterSpacing: "-0.03em",
              }}
            >
              Why This Matters
            </h2>
            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-3xl bg-white/70 shadow-2xl backdrop-blur-sm"></div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <p
                  className="px-12 py-12 text-center text-2xl font-light leading-relaxed text-gray-800 md:px-16 md:py-16 md:text-3xl lg:text-4xl"
                  style={{
                    fontFamily: "Gilroy, sans-serif",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Fragmented enterprises struggle to scale alone. I2I aligns
                  actors, incentives, and rules so women‑led businesses can grow
                  faster, prove value, and compete on quality, price, and trust—
                  while advancing public‑good outcomes.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Outcomes We Target */}
      <section className="relative overflow-hidden bg-white py-32 md:py-40">
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-gradient-to-tr from-[#00a54f]/5 to-transparent blur-3xl"></div>

        <Container>
          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="mb-24 text-center">
              <div className="mb-8 inline-block rounded-full bg-gradient-to-r from-[#00a54f]/10 to-[#1acf1b]/10 px-8 py-3">
                <span
                  className="text-sm font-bold uppercase tracking-wider text-[#00a54f]"
                  style={{ fontFamily: "Gilroy, sans-serif" }}
                >
                  Measurable Results
                </span>
              </div>
              <h2
                className="mb-6 text-5xl font-black text-gray-900 md:text-6xl lg:text-7xl"
                style={{
                  fontFamily: "Gilroy, sans-serif",
                  letterSpacing: "-0.03em",
                }}
              >
                Outcomes We Target
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="group flex items-start gap-6 rounded-3xl border border-gray-200/50 bg-gradient-to-br from-[#00a54f]/5 via-white to-white p-10 shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
                <div className="mt-1 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00a54f] to-[#1acf1b] shadow-lg transition-all duration-500 group-hover:scale-110">
                  <svg
                    className="h-7 w-7 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p
                  className="flex-1 text-lg leading-relaxed text-gray-700"
                  style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
                >
                  Lower food loss and waste and higher processor margins.
                </p>
              </div>

              <div className="group flex items-start gap-6 rounded-3xl border border-gray-200/50 bg-gradient-to-br from-[#00a54f]/5 via-white to-white p-10 shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
                <div className="mt-1 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00a54f] to-[#1acf1b] shadow-lg transition-all duration-500 group-hover:scale-110">
                  <svg
                    className="h-7 w-7 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p
                  className="flex-1 text-lg leading-relaxed text-gray-700"
                  style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
                >
                  Safer products and improved diet quality at affordable price
                  points.
                </p>
              </div>

              <div className="group flex items-start gap-6 rounded-3xl border border-gray-200/50 bg-gradient-to-br from-[#00a54f]/5 via-white to-white p-10 shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
                <div className="mt-1 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00a54f] to-[#1acf1b] shadow-lg transition-all duration-500 group-hover:scale-110">
                  <svg
                    className="h-7 w-7 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p
                  className="flex-1 text-lg leading-relaxed text-gray-700"
                  style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
                >
                  Women&apos;s leadership and ownership embedded in governance
                  and growth.
                </p>
              </div>

              <div className="group flex items-start gap-6 rounded-3xl border border-gray-200/50 bg-gradient-to-br from-[#00a54f]/5 via-white to-white p-10 shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
                <div className="mt-1 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00a54f] to-[#1acf1b] shadow-lg transition-all duration-500 group-hover:scale-110">
                  <svg
                    className="h-7 w-7 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p
                  className="flex-1 text-lg leading-relaxed text-gray-700"
                  style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
                >
                  Verified climate co‑benefits through food loss reduction and
                  efficient logistics.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1d6f8f] via-[#0d7fa0] to-[#0d5f7f] py-40 text-white md:py-48">
        {/* Animated background elements */}
        <div className="absolute left-0 top-0 h-96 w-96 animate-pulse rounded-full bg-white/5 blur-3xl"></div>
        <div
          className="absolute bottom-0 right-0 h-96 w-96 animate-pulse rounded-full bg-white/5 blur-3xl"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-white/5 to-transparent blur-3xl"></div>

        <Container>
          <div
            className="relative z-10 mx-auto max-w-5xl text-center"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="mb-12 inline-block rounded-full border border-white/30 bg-white/10 px-8 py-3 backdrop-blur-sm">
              <span
                className="text-sm font-bold uppercase tracking-wider text-white"
                style={{ fontFamily: "Gilroy, sans-serif" }}
              >
                Join the Movement
              </span>
            </div>

            <h2
              className="mb-10 text-5xl font-black md:text-6xl lg:text-7xl"
              style={{
                fontFamily: "Gilroy, sans-serif",
                letterSpacing: "-0.03em",
                color: "white",
                textShadow: "0 4px 20px rgba(0,0,0,0.2)",
              }}
            >
              Build with Us
            </h2>

            <div className="mb-16">
              <p
                className="mx-auto max-w-4xl text-center text-xl font-light leading-relaxed text-white/95 md:text-2xl lg:text-3xl"
                style={{
                  fontFamily: "Gilroy, sans-serif",
                  textShadow: "0 2px 10px rgba(0,0,0,0.15)",
                  color: "white",
                }}
              >
                Whether you&apos;re an enterprise, municipality, school program,
                investor, or research partner—we co‑design, implement, and scale
                solutions that make nutrition affordable, circular, and trusted.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="/who-we-are#staff-board"
                className="group relative inline-block overflow-hidden rounded-full bg-white px-14 py-6 text-lg font-bold text-[#1d6f8f] shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_60px_rgba(255,255,255,0.3)]"
                style={{ fontFamily: "Gilroy, sans-serif" }}
              >
                <span className="relative z-10">Partner With Us</span>
                <div className="absolute inset-0 -z-0 bg-gradient-to-r from-white to-gray-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              </a>
              <a
                href="/our-approach"
                className="group relative inline-block overflow-hidden rounded-full border-2 border-white/90 bg-white/10 px-14 py-6 text-lg font-bold text-white backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-white hover:bg-white/20 hover:shadow-2xl"
                style={{ fontFamily: "Gilroy, sans-serif" }}
              >
                <span className="relative z-10">Learn More</span>
              </a>
            </div>

            {/* Subtle decorative line */}
            <div className="mt-16 flex items-center justify-center gap-4">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-white/30"></div>
              <div className="h-2 w-2 rotate-45 bg-white/30"></div>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-white/30"></div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
