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
      {/* Hero Section with Logo */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#1d6f8f]/5 via-white to-white py-24 md:py-32 lg:py-40">
        <Container>
          <div className="mx-auto max-w-6xl text-center">
            {/* I2I Logo - Larger and More Prominent */}
            <div className="mb-16 flex justify-center">
              <div className="relative h-56 w-full max-w-3xl md:h-64 lg:h-72">
                <Image
                  src="/images/idea2impact/logo.jpg"
                  alt="Idea to Impact (I2I) - Ideas, Innovations, Implementation, Influence, Impact"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>

            {/* Tagline */}
            <div className="mx-auto max-w-5xl space-y-8">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <p
                  className="text-center text-2xl font-light leading-relaxed text-gray-700 md:text-3xl lg:text-4xl"
                  style={{
                    fontFamily: "Gilroy, sans-serif",
                    letterSpacing: "-0.01em",
                  }}
                >
                  A governance and systems platform uniting circular, women‑led
                  food enterprises to turn post‑harvest loss into prosperity.
                </p>
              </div>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <p
                  className="mx-auto max-w-4xl text-center text-lg font-normal leading-relaxed text-gray-600 md:text-xl"
                  style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
                >
                  We integrate research & development, shared operations, and
                  impact tracking under one structure to drive scalable,
                  investable food‑systems transformation through market‑driven,
                  nutrition‑sensitive, climate‑smart business models.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Governance Model */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-24 md:py-32">
        <Container>
          <div className="mx-auto max-w-7xl">
            <div className="mb-20 text-center">
              <h2
                className="mb-6 text-center text-5xl font-black text-gray-900 md:text-6xl lg:text-7xl"
                style={{
                  fontFamily: "Gilroy, sans-serif",
                  letterSpacing: "-0.03em",
                }}
              >
                Governance Model
              </h2>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <p
                  className="mx-auto max-w-3xl text-center text-xl leading-relaxed text-gray-600"
                  style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
                >
                  I2I operates under a joint governance framework designed for
                  scale and accountability.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
              {/* Central Leadership Council */}
              <div className="group rounded-3xl border border-gray-200 bg-white p-10 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#1d6f8f]/30 hover:shadow-2xl">
                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1d6f8f] to-[#1d6f8f]/80 shadow-lg">
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
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3
                  className="mb-4 text-center text-2xl font-bold text-gray-900"
                  style={{ fontFamily: "Gilroy, sans-serif" }}
                >
                  Central Leadership Council
                </h3>
                <p
                  className="text-center text-base leading-relaxed text-gray-600"
                  style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
                >
                  Sets strategic direction, mobilizes capital, and champions
                  joint fundraising.
                </p>
              </div>

              {/* Shared Operations & Finance */}
              <div className="group rounded-3xl border border-gray-200 bg-white p-10 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#00a54f]/30 hover:shadow-2xl">
                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00a54f] to-[#00a54f]/80 shadow-lg">
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
                      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3
                  className="mb-4 text-center text-2xl font-bold text-gray-900"
                  style={{ fontFamily: "Gilroy, sans-serif" }}
                >
                  Shared Operations & Finance
                </h3>
                <p
                  className="text-center text-base leading-relaxed text-gray-600"
                  style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
                >
                  Streamlines procurement, marketing, compliance, and
                  working‑capital discipline—reducing overhead for member
                  ventures.
                </p>
              </div>

              {/* Unified Impact Measurement */}
              <div className="group rounded-3xl border border-gray-200 bg-white p-10 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#e5790e]/30 hover:shadow-2xl">
                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#e5790e] to-[#e5790e]/80 shadow-lg">
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
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3
                  className="mb-4 text-center text-2xl font-bold text-gray-900"
                  style={{ fontFamily: "Gilroy, sans-serif" }}
                >
                  Unified Impact Measurement
                </h3>
                <p
                  className="text-center text-base leading-relaxed text-gray-600"
                  style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
                >
                  Tracks results across the portfolio—loss reduction, diet
                  quality, affordability, women&apos;s agency, and climate
                  co‑benefits—enabling data‑driven decisions.
                </p>
              </div>
            </div>

            {/* Summary Statement */}
            <div className="mt-20 text-center">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <p
                  className="mx-auto max-w-4xl text-center text-2xl font-medium leading-relaxed text-gray-700"
                  style={{ fontFamily: "Gilroy, sans-serif" }}
                >
                  By uniting circular enterprises under one governance, I2I
                  turns food loss and waste into nutrition, livelihoods, and
                  climate action.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-24 md:py-32">
        <Container>
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
              {/* Mission */}
              <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-12 shadow-sm">
                <div className="mb-8">
                  <span
                    className="inline-block rounded-full bg-[#00a54f] px-6 py-2 text-sm font-bold uppercase tracking-wider text-white"
                    style={{ fontFamily: "Gilroy, sans-serif" }}
                  >
                    Our Mission
                  </span>
                </div>
                <h2
                  className="mb-8 text-center text-4xl font-black text-gray-900 md:text-5xl"
                  style={{
                    fontFamily: "Gilroy, sans-serif",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Transforming Food Systems
                </h2>
                <div
                  className="space-y-6 text-center text-lg leading-relaxed text-gray-700"
                  style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
                >
                  <p>
                    Our mission is to drive sustainable transformation by
                    providing technical and operational services across the
                    entire food value chain—from farm to fork.
                  </p>
                  <div className="space-y-4 pt-4">
                    <div className="flex items-center justify-center gap-3">
                      <div className="h-2.5 w-2.5 rounded-full bg-[#00a54f]"></div>
                      <span className="text-lg">Enhancing food safety</span>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <div className="h-2.5 w-2.5 rounded-full bg-[#00a54f]"></div>
                      <span className="text-lg">
                        Reducing food loss and waste
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <div className="h-2.5 w-2.5 rounded-full bg-[#00a54f]"></div>
                      <span className="text-lg">
                        Increasing access to nutrient‑rich foods
                      </span>
                    </div>
                  </div>
                  <p className="pt-6">
                    We achieve this through applied research, policy engagement,
                    and on‑the‑ground inclusive implementation—empowering
                    stakeholders from farmers to consumers.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-12 shadow-sm">
                <div className="mb-8">
                  <span
                    className="inline-block rounded-full bg-[#e5790e] px-6 py-2 text-sm font-bold uppercase tracking-wider text-white"
                    style={{ fontFamily: "Gilroy, sans-serif" }}
                  >
                    Our Vision
                  </span>
                </div>
                <h2
                  className="mb-8 text-center text-4xl font-black text-gray-900 md:text-5xl"
                  style={{
                    fontFamily: "Gilroy, sans-serif",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Ideas into Lasting Impact
                </h2>
                <div
                  className="space-y-6 text-center text-lg leading-relaxed text-gray-700"
                  style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
                >
                  <p className="text-xl font-semibold text-gray-900">
                    Transforming ideas into innovations, driving implementation,
                    influencing programs and policies, and creating lasting
                    impact for a sustainable and inclusive food system.
                  </p>
                  <p>
                    We envision a world where bold ideas spark innovative
                    solutions, effective implementation bridges the gap between
                    research and practice, influential programs and policies
                    drive systemic change, and measurable impact ensures food
                    security, nutrition, and sustainability for all.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Our Approach - Four Pillars */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24 md:py-32">
        <Container>
          <div className="mx-auto max-w-7xl">
            <div className="mb-20 text-center">
              <h2
                className="mb-6 text-5xl font-black text-gray-900 md:text-6xl lg:text-7xl"
                style={{
                  fontFamily: "Gilroy, sans-serif",
                  letterSpacing: "-0.03em",
                }}
              >
                Our Approach
              </h2>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <p
                  className="mx-auto max-w-3xl text-center text-xl leading-relaxed text-gray-600"
                  style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
                >
                  We work across four interconnected pillars to create systemic
                  change.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
              {/* R4D */}
              <div className="group rounded-3xl border-l-4 border-[#1d6f8f] bg-white p-10 shadow-sm transition-all duration-300 hover:shadow-xl">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#1d6f8f] to-[#1d6f8f]/80">
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
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h3
                    className="flex-1 text-center text-2xl font-bold text-gray-900"
                    style={{ fontFamily: "Gilroy, sans-serif" }}
                  >
                    Research for Development
                  </h3>
                </div>
                <p
                  className="text-center text-lg leading-relaxed text-gray-600"
                  style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
                >
                  Generating data‑driven insights to inform innovation and guide
                  strategic decision‑making.
                </p>
              </div>

              {/* Policy Analysis */}
              <div className="group rounded-3xl border-l-4 border-[#00a54f] bg-white p-10 shadow-sm transition-all duration-300 hover:shadow-xl">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#00a54f] to-[#00a54f]/80">
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
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h3
                    className="flex-1 text-center text-2xl font-bold text-gray-900"
                    style={{ fontFamily: "Gilroy, sans-serif" }}
                  >
                    Policy Analysis & Engagement
                  </h3>
                </div>
                <p
                  className="text-center text-lg leading-relaxed text-gray-600"
                  style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
                >
                  Supporting evidence‑based policy dialogue to shape systems and
                  scale solutions.
                </p>
              </div>

              {/* Implementation */}
              <div className="group rounded-3xl border-l-4 border-[#1acf1b] bg-white p-10 shadow-sm transition-all duration-300 hover:shadow-xl">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#1acf1b] to-[#1acf1b]/80">
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
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3
                    className="flex-1 text-center text-2xl font-bold text-gray-900"
                    style={{ fontFamily: "Gilroy, sans-serif" }}
                  >
                    Scalable Implementation
                  </h3>
                </div>
                <p
                  className="text-center text-lg leading-relaxed text-gray-600"
                  style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
                >
                  Designing, executing, and evaluating scalable, cost‑effective,
                  gender‑inclusive, high‑impact projects.
                </p>
              </div>

              {/* Capacity Strengthening */}
              <div className="group rounded-3xl border-l-4 border-[#e5790e] bg-white p-10 shadow-sm transition-all duration-300 hover:shadow-xl">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#e5790e] to-[#e5790e]/80">
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
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <h3
                    className="flex-1 text-center text-2xl font-bold text-gray-900"
                    style={{ fontFamily: "Gilroy, sans-serif" }}
                  >
                    Capacity Strengthening
                  </h3>
                </div>
                <p
                  className="text-center text-lg leading-relaxed text-gray-600"
                  style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
                >
                  Investing in local expertise, community leadership, and
                  inclusive partnerships for sustainability.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Integrated Services */}
      <section className="bg-white py-24 md:py-32">
        <Container>
          <div className="mx-auto max-w-7xl">
            <div className="mb-20 text-center">
              <h2
                className="mb-6 text-5xl font-black text-gray-900 md:text-6xl lg:text-7xl"
                style={{
                  fontFamily: "Gilroy, sans-serif",
                  letterSpacing: "-0.03em",
                }}
              >
                Integrated Services
              </h2>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <p
                  className="mx-auto max-w-3xl text-center text-xl leading-relaxed text-gray-600"
                  style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
                >
                  The I2I operating spine combines essential services for
                  comprehensive impact.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-[#1d6f8f]/5 to-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <h4
                  className="mb-4 text-2xl font-bold text-[#1d6f8f]"
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

              <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-[#00a54f]/5 to-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <h4
                  className="mb-4 text-2xl font-bold text-[#00a54f]"
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

              <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-[#1acf1b]/5 to-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <h4
                  className="mb-4 text-2xl font-bold text-[#1acf1b]"
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

              <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-[#e5790e]/5 to-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <h4
                  className="mb-4 text-2xl font-bold text-[#e5790e]"
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
      <section className="bg-gradient-to-b from-gray-50 to-white py-24 md:py-32">
        <Container>
          <div className="mx-auto max-w-5xl text-center">
            <h2
              className="mb-12 text-5xl font-black text-gray-900 md:text-6xl"
              style={{
                fontFamily: "Gilroy, sans-serif",
                letterSpacing: "-0.03em",
              }}
            >
              Why This Matters
            </h2>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <p
                className="text-center text-2xl font-light leading-relaxed text-gray-700 md:text-3xl"
                style={{ fontFamily: "Gilroy, sans-serif" }}
              >
                Fragmented enterprises struggle to scale alone. I2I aligns
                actors, incentives, and rules so women‑led businesses can grow
                faster, prove value, and compete on quality, price, and trust—
                while advancing public‑good outcomes.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Outcomes We Target */}
      <section className="bg-white py-24 md:py-32">
        <Container>
          <div className="mx-auto max-w-6xl">
            <div className="mb-20 text-center">
              <h2
                className="mb-6 text-5xl font-black text-gray-900 md:text-6xl"
                style={{
                  fontFamily: "Gilroy, sans-serif",
                  letterSpacing: "-0.03em",
                }}
              >
                Outcomes We Target
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex items-start gap-6 rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8 shadow-sm">
                <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#00a54f]/10">
                  <svg
                    className="h-6 w-6 text-[#00a54f]"
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
                  className="flex-1 text-center text-lg leading-relaxed text-gray-700"
                  style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
                >
                  Lower food loss and waste and higher processor margins.
                </p>
              </div>

              <div className="flex items-start gap-6 rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8 shadow-sm">
                <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#00a54f]/10">
                  <svg
                    className="h-6 w-6 text-[#00a54f]"
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
                  className="flex-1 text-center text-lg leading-relaxed text-gray-700"
                  style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
                >
                  Safer products and improved diet quality at affordable price
                  points.
                </p>
              </div>

              <div className="flex items-start gap-6 rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8 shadow-sm">
                <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#00a54f]/10">
                  <svg
                    className="h-6 w-6 text-[#00a54f]"
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
                  className="flex-1 text-center text-lg leading-relaxed text-gray-700"
                  style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
                >
                  Women&apos;s leadership and ownership embedded in governance
                  and growth.
                </p>
              </div>

              <div className="flex items-start gap-6 rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8 shadow-sm">
                <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#00a54f]/10">
                  <svg
                    className="h-6 w-6 text-[#00a54f]"
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
                  className="flex-1 text-center text-lg leading-relaxed text-gray-700"
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
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1d6f8f] via-[#1d6f8f] to-[#0d5f7f] py-32 text-white">
        <Container>
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                margin: "2rem",
              }}
            >
              <h2
                className="mb-8 text-5xl font-black md:text-6xl lg:text-7xl"
                style={{
                  fontFamily: "Gilroy, sans-serif",
                  letterSpacing: "-0.03em",
                  color: "white",
                }}
              >
                Build with Us
              </h2>
              <p
                className="mb-12 text-center text-xl font-light leading-relaxed md:text-2xl"
                style={{ fontFamily: "Gilroy, sans-serif", color: "white" }}
              >
                Whether you&apos;re an enterprise, municipality, school program,
                investor, or research partner—we co‑design, implement, and scale
                solutions that make nutrition affordable, circular, and trusted.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="/who-we-are#staff-board"
                className="inline-block rounded-full bg-white px-12 py-5 text-lg font-bold text-[#1d6f8f] shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-gray-50 hover:shadow-xl"
                style={{ fontFamily: "Gilroy, sans-serif" }}
              >
                Partner With Us
              </a>
              <a
                href="/our-approach"
                className="inline-block rounded-full border-2 border-white px-12 py-5 text-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-white/10"
                style={{ fontFamily: "Gilroy, sans-serif" }}
              >
                Learn More
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
