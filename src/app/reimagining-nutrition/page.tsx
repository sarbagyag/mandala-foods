import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { MealIntegrationGallery } from "@/components/sections/MealIntegrationGallery";
import { getMealIntegrationMedia } from "@/services/meal-integration";

export const metadata: Metadata = {
  title: "Reimagining Nutrition | Mandala Foods",
  description:
    "Mandala Foods is building a localized food systems integrator and school meal environment engineering platform — making nutritious, locally sourced school meals practical, scalable, and sustainable.",
};

export const dynamic = "force-dynamic";

export default async function ReimaginingNutritionPage() {
  const mealIntegrationMedia = await getMealIntegrationMedia();

  return (
    <>
      {/* ── Hero ── */}
      <section
        style={{ paddingTop: "100px" }}
        className="relative overflow-hidden bg-linear-to-br from-[#00a54f]/10 via-[#00a54f]/5 to-white py-32 md:py-40 lg:py-48"
      >
        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300a54f' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-linear-to-br from-[#00a54f]/8 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-linear-to-tr from-[#e5790e]/5 to-transparent blur-3xl" />

        <Container>
          <div className="relative z-10 mx-auto max-w-7xl">
            {/* Opening statement */}
            <div className="mb-20 text-center">
              <div className="mb-8 inline-block rounded-full bg-linear-to-r from-[#00a54f]/10 to-[#e5790e]/10 px-6 py-2 backdrop-blur-sm">
                <span
                  className="text-xs font-bold uppercase tracking-wider text-[#00a54f]"
                  style={{ fontFamily: "Gilroy, sans-serif" }}
                >
                  Reimagining Nutrition
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <p
                  className="text-center text-2xl font-light leading-relaxed text-gray-800 md:text-3xl lg:text-4xl"
                  style={{
                    fontFamily: "Gilroy, sans-serif",
                    letterSpacing: "-0.02em",
                    textShadow: "0 1px 2px rgba(0,0,0,0.05)",
                  }}
                >
                  School meals are one of the most powerful infrastructures
                  shaping child nutrition, learning, local agriculture, and
                  lifelong food habits.
                </p>
              </div>
            </div>

            {/* Headline + description */}
            <div className="mx-auto max-w-5xl text-center">
              <h1
                className="mb-8 text-5xl font-black text-gray-900 md:text-6xl lg:text-7xl"
                style={{
                  fontFamily: "Gilroy, sans-serif",
                  letterSpacing: "-0.03em",
                  background: "linear-gradient(135deg, #00a54f 0%, #e5790e 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                A New Model for School Nutrition
              </h1>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <p
                  className="mx-auto max-w-4xl text-center text-lg font-normal leading-relaxed text-gray-600 md:text-xl lg:text-2xl"
                  style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
                >
                  Mandala Foods is building a{" "}
                  <span className="font-semibold text-gray-800">
                    localized food systems integrator
                  </span>{" "}
                  and{" "}
                  <span className="font-semibold text-gray-800">
                    school meal environment engineering platform
                  </span>{" "}
                  — integrating local agriculture, nutrition science, operational
                  systems, and behavioral design into everyday school meals.
                </p>
              </div>
            </div>

            {/* Summary statement */}
            <div className="mt-20 text-center">
              <div className="relative">
                <div className="absolute inset-0 z-0 rounded-3xl bg-linear-to-r from-[#00a54f]/5 via-transparent to-[#e5790e]/5 blur-2xl" />
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <p
                    className="relative mx-auto max-w-4xl rounded-2xl bg-white/60 px-10 py-8 text-center text-xl font-medium leading-relaxed text-gray-800 shadow-lg backdrop-blur-sm md:text-2xl"
                    style={{ fontFamily: "Gilroy, sans-serif" }}
                  >
                    We are evolving beyond a conventional food company — building
                    systems that make healthy school meals easier, practical, and
                    locally integrated.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── The Challenge ── */}
      <section
        style={{ paddingTop: "100px" }}
        className="relative overflow-hidden bg-white py-32 md:py-40"
      >
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-linear-to-bl from-[#00a54f]/5 to-transparent blur-3xl" />

        <Container>
          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="mb-24 text-center">
              <div className="mb-8 inline-block rounded-full bg-linear-to-r from-[#00a54f]/10 to-[#e5790e]/10 px-8 py-3">
                <span
                  className="text-sm font-bold uppercase tracking-wider text-[#00a54f]"
                  style={{ fontFamily: "Gilroy, sans-serif" }}
                >
                  Why It Matters
                </span>
              </div>
              <h2
                className="mb-8 text-5xl font-black text-gray-900 md:text-6xl lg:text-7xl"
                style={{
                  fontFamily: "Gilroy, sans-serif",
                  letterSpacing: "-0.03em",
                }}
              >
                The Challenge
              </h2>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <p
                  className="mx-auto max-w-3xl text-center text-xl leading-relaxed text-gray-600 md:text-2xl"
                  style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
                >
                  Across Nepal and the Global South, school meal systems face
                  deeply interconnected pressures.
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
              {[
                {
                  color: "#00a54f",
                  icon: (
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  ),
                  title: "Limited Dietary Diversity",
                  body: "Most school meals lack variety and nutritional completeness, leaving children without the micronutrients essential for growth and learning.",
                },
                {
                  color: "#e5790e",
                  icon: (
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                  title: "Inconsistent Procurement",
                  body: "Fragmented supply chains and irregular sourcing make it difficult for schools to maintain quality, affordability, and local agricultural linkages.",
                },
                {
                  color: "#1acf1b",
                  icon: (
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  ),
                  title: "Ultra-Processed Food Exposure",
                  body: "Rising availability of cheap, ultra-processed foods in and around schools is displacing nutritious, locally produced alternatives.",
                },
                {
                  color: "#00a54f",
                  icon: (
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  ),
                  title: "Significant Post-Harvest Food Loss",
                  body: "Cosmetically rejected and surplus fruits and vegetables are wasted before reaching schools — a missed opportunity for both nutrition and farmer livelihoods.",
                },
              ].map(({ color, icon, title, body }) => (
                <div
                  key={title}
                  className="group relative overflow-hidden rounded-3xl border border-gray-200/50 bg-white/80 p-8 shadow-xl backdrop-blur-xl transition-all duration-700 hover:-translate-x-1 hover:shadow-2xl"
                  style={{ ["--hover-color" as string]: color }}
                >
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                    style={{
                      background: `linear-gradient(135deg, ${color}11 0%, transparent 60%)`,
                    }}
                  />
                  <div className="relative z-10 flex items-start gap-6">
                    <div
                      className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl shadow-xl transition-all duration-700 group-hover:scale-110 group-hover:shadow-2xl"
                      style={{
                        background: `linear-gradient(135deg, ${color} 0%, ${color}dd 100%)`,
                      }}
                    >
                      {icon}
                    </div>
                    <div className="flex-1">
                      <h3
                        className="mb-3 text-lg font-bold text-gray-900 transition-colors duration-500"
                        style={{
                          fontFamily: "Gilroy, sans-serif",
                        }}
                      >
                        {title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed text-gray-600"
                        style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
                      >
                        {body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Two Pillars ── */}
      <section
        style={{ paddingTop: "100px" }}
        className="relative overflow-hidden bg-linear-to-b from-gray-50/50 via-white to-white py-32 md:py-40"
      >
        <div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-linear-to-br from-[#00a54f]/5 to-transparent blur-3xl" />

        <Container>
          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="mb-24 text-center">
              <div className="mb-8 inline-block rounded-full bg-linear-to-r from-[#00a54f]/10 via-[#1acf1b]/10 to-[#e5790e]/10 px-8 py-3">
                <span
                  className="text-sm font-bold uppercase tracking-wider text-[#00a54f]"
                  style={{ fontFamily: "Gilroy, sans-serif" }}
                >
                  What We Do
                </span>
              </div>
              <h2
                className="mb-8 text-5xl font-black text-gray-900 md:text-6xl lg:text-7xl"
                style={{
                  fontFamily: "Gilroy, sans-serif",
                  letterSpacing: "-0.03em",
                }}
              >
                Our Two Pillars
              </h2>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <p
                  className="mx-auto max-w-3xl text-center text-xl leading-relaxed text-gray-600 md:text-2xl"
                  style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
                >
                  Two interconnected approaches that work together to transform
                  how schools source, prepare, and serve nutritious food.
                </p>
              </div>
            </div>

            <div className="grid gap-10 md:grid-cols-2 lg:gap-12">
              {/* Pillar 1 */}
              <div className="group relative overflow-hidden rounded-3xl border-l-8 border-[#00a54f] bg-white p-12 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-linear-to-br from-[#00a54f]/10 to-transparent blur-2xl transition-opacity duration-500 group-hover:opacity-70" />
                <div className="relative z-10">
                  <div className="mb-8 flex items-center gap-5">
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-[#00a54f] to-[#00a54f]/80 shadow-xl transition-all duration-500 group-hover:scale-110">
                      <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex items-center gap-3">
                      <span
                        className="text-6xl font-black leading-none text-[#00a54f]/15"
                        style={{ fontFamily: "Gilroy, sans-serif" }}
                      >
                        01
                      </span>
                    </div>
                  </div>
                  <h3
                    className="mb-5 text-2xl font-bold text-gray-900 transition-colors duration-500 group-hover:text-[#00a54f]"
                    style={{ fontFamily: "Gilroy, sans-serif" }}
                  >
                    Localized Food Systems Integration
                  </h3>
                  <p
                    className="mb-6 text-lg leading-relaxed text-gray-600"
                    style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
                  >
                    We connect local farmers, women-led food hubs, processing
                    systems, schools, municipalities, and nutrition programs into
                    one coordinated ecosystem.
                  </p>
                  <div className="space-y-3">
                    {[
                      "Transforms underutilized & surplus produce into school-ready foods",
                      "Nutritious, operationally practical, and culturally familiar",
                      "Scalable across municipalities and districts",
                    ].map((point) => (
                      <div key={point} className="flex items-center gap-3 transition-all duration-300 hover:translate-x-2">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#00a54f]/15">
                          <div className="h-2.5 w-2.5 rounded-full bg-[#00a54f]" />
                        </div>
                        <span
                          className="text-base font-medium text-gray-700"
                          style={{ fontFamily: "Gilroy, sans-serif" }}
                        >
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="group relative overflow-hidden rounded-3xl border-l-8 border-[#e5790e] bg-white p-12 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-linear-to-br from-[#e5790e]/10 to-transparent blur-2xl transition-opacity duration-500 group-hover:opacity-70" />
                <div className="relative z-10">
                  <div className="mb-8 flex items-center gap-5">
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-[#e5790e] to-[#e5790e]/80 shadow-xl transition-all duration-500 group-hover:scale-110">
                      <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div className="flex items-center gap-3">
                      <span
                        className="text-6xl font-black leading-none text-[#e5790e]/15"
                        style={{ fontFamily: "Gilroy, sans-serif" }}
                      >
                        02
                      </span>
                    </div>
                  </div>
                  <h3
                    className="mb-5 text-2xl font-bold text-gray-900 transition-colors duration-500 group-hover:text-[#e5790e]"
                    style={{ fontFamily: "Gilroy, sans-serif" }}
                  >
                    School Meal Environment Engineering
                  </h3>
                  <p
                    className="mb-6 text-lg leading-relaxed text-gray-600"
                    style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
                  >
                    We help schools operationalize healthier meals — not just
                    supplying products, but building the full environment for
                    better nutrition.
                  </p>
                  <div className="space-y-3">
                    {[
                      "Menu integration & school-ready fruit-based ingredients",
                      "Simplified meal preparation & kitchen workflow support",
                      "Nutrition education & healthy food behavior design",
                    ].map((point) => (
                      <div key={point} className="flex items-center gap-3 transition-all duration-300 hover:translate-x-2">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#e5790e]/15">
                          <div className="h-2.5 w-2.5 rounded-full bg-[#e5790e]" />
                        </div>
                        <span
                          className="text-base font-medium text-gray-700"
                          style={{ fontFamily: "Gilroy, sans-serif" }}
                        >
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Vision & Mission ── */}
      <section
        style={{ paddingTop: "100px" }}
        className="relative overflow-hidden bg-white py-32 md:py-40"
      >
        <Container>
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Vision */}
              <div className="group relative overflow-hidden rounded-3xl border border-gray-200/50 bg-linear-to-br from-[#00a54f]/5 via-white to-white p-14 shadow-xl transition-all duration-700 hover:shadow-2xl">
                <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-linear-to-br from-[#00a54f]/10 to-transparent blur-3xl transition-opacity duration-700 group-hover:opacity-70" />
                <div className="relative z-10">
                  <div className="mb-10">
                    <span
                      className="inline-block rounded-full bg-linear-to-r from-[#00a54f] to-[#1acf1b] px-8 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-lg"
                      style={{ fontFamily: "Gilroy, sans-serif" }}
                    >
                      Our Vision
                    </span>
                  </div>
                  <h2
                    className="mb-10 text-center text-4xl font-black text-gray-900 md:text-5xl"
                    style={{ fontFamily: "Gilroy, sans-serif", letterSpacing: "-0.02em" }}
                  >
                    Locally Rooted, Globally Relevant
                  </h2>
                  <div
                    className="space-y-6 text-center text-lg leading-relaxed text-gray-700"
                    style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
                  >
                    <p className="rounded-2xl bg-linear-to-r from-[#00a54f]/10 to-transparent px-6 py-6 text-xl font-semibold text-gray-900">
                      Healthier, locally rooted school food environments where
                      every child has access to nutritious, enjoyable, and
                      sustainable meals.
                    </p>
                    <p>
                      Meals that nourish learning, strengthen communities, and
                      transform food systems — for children, farmers, and the
                      planet alike.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mission */}
              <div className="group relative overflow-hidden rounded-3xl border border-gray-200/50 bg-linear-to-br from-[#e5790e]/5 via-white to-white p-14 shadow-xl transition-all duration-700 hover:shadow-2xl">
                <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-linear-to-br from-[#e5790e]/10 to-transparent blur-3xl transition-opacity duration-700 group-hover:opacity-70" />
                <div className="relative z-10">
                  <div className="mb-10">
                    <span
                      className="inline-block rounded-full bg-linear-to-r from-[#e5790e] to-[#f59e0b] px-8 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-lg"
                      style={{ fontFamily: "Gilroy, sans-serif" }}
                    >
                      Our Mission
                    </span>
                  </div>
                  <h2
                    className="mb-10 text-center text-4xl font-black text-gray-900 md:text-5xl"
                    style={{ fontFamily: "Gilroy, sans-serif", letterSpacing: "-0.02em" }}
                  >
                    Designing Healthier Food Environments
                  </h2>
                  <div
                    className="space-y-5 text-center text-lg leading-relaxed text-gray-700"
                    style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
                  >
                    <p>
                      Mandala Foods designs and operates healthier school food
                      environments by integrating local agriculture, nutrition
                      science, operational systems, and behavioral design into
                      everyday school meals.
                    </p>
                    <div className="space-y-4 py-4">
                      {[
                        "Improve child nutrition",
                        "Reduce food loss",
                        "Strengthen local economies",
                        "Shape lifelong food habits",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center justify-center gap-4 transition-all duration-300 hover:translate-x-2"
                        >
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e5790e]/20">
                            <div className="h-3 w-3 rounded-full bg-[#e5790e]" />
                          </div>
                          <span className="text-lg font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Built for Nepal ── */}
      <section
        style={{ paddingTop: "100px" }}
        className="relative overflow-hidden bg-linear-to-b from-gray-50/50 via-white to-white py-32 md:py-40"
      >
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-r from-[#00a54f]/5 via-[#e5790e]/5 to-[#00a54f]/5 blur-3xl" />

        <Container>
          <div className="relative z-10 mx-auto max-w-6xl text-center">
            <div className="mb-12 inline-block rounded-full bg-linear-to-r from-[#00a54f]/10 via-[#e5790e]/10 to-[#00a54f]/10 px-8 py-3">
              <span
                className="text-sm font-bold uppercase tracking-wider text-[#e5790e]"
                style={{ fontFamily: "Gilroy, sans-serif" }}
              >
                Built for Nepal. Designed for Global Relevance.
              </span>
            </div>
            <h2
              className="mb-16 text-5xl font-black text-gray-900 md:text-6xl lg:text-7xl"
              style={{ fontFamily: "Gilroy, sans-serif", letterSpacing: "-0.03em" }}
            >
              Rooted in Reality. Ready to Scale.
            </h2>
            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-3xl bg-white/70 shadow-2xl backdrop-blur-sm" />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <p
                  className="px-12 py-12 text-center text-2xl font-light leading-relaxed text-gray-800 md:px-16 md:py-16 md:text-3xl lg:text-4xl"
                  style={{ fontFamily: "Gilroy, sans-serif", letterSpacing: "-0.01em" }}
                >
                  Our model is rooted in Nepal&apos;s realities — local
                  agriculture, school meal systems, operational constraints,
                  and community-driven implementation. But the challenge we
                  address is global: how do we make healthy, locally sourced
                  school meals practical, scalable, and sustainable?
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Meal Integration Gallery ── */}
      {mealIntegrationMedia.length > 0 && (
        <section
          style={{ paddingTop: "100px" }}
          className="relative overflow-hidden bg-white py-32 md:py-40"
        >
          <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-linear-to-bl from-[#e5790e]/5 to-transparent blur-3xl" />

          <Container>
            <div className="relative z-10 mx-auto max-w-7xl">
              <div className="mb-20 text-center">
                <div className="mb-8 inline-block rounded-full bg-linear-to-r from-[#00a54f]/10 to-[#e5790e]/10 px-8 py-3">
                  <span
                    className="text-sm font-bold uppercase tracking-wider text-[#00a54f]"
                    style={{ fontFamily: "Gilroy, sans-serif" }}
                  >
                    In the Field
                  </span>
                </div>
                <h2
                  className="mb-8 text-5xl font-black text-gray-900 md:text-6xl lg:text-7xl"
                  style={{ fontFamily: "Gilroy, sans-serif", letterSpacing: "-0.03em" }}
                >
                  Our Ongoing Meal Integration Initiatives
                </h2>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <p
                    className="mx-auto max-w-3xl text-center text-xl leading-relaxed text-gray-600 md:text-2xl"
                    style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
                  >
                    A look at how our meals are reaching schools and communities
                    on the ground.
                  </p>
                </div>
              </div>

              <MealIntegrationGallery media={mealIntegrationMedia} />
            </div>
          </Container>
        </section>
      )}

      {/* ── CTA ── */}
      <section
        style={{ paddingTop: "100px" }}
        className="relative overflow-hidden bg-linear-to-br from-[#00a54f] via-[#008a42] to-[#006b33] py-40 text-white md:py-48"
      >
        <div className="absolute left-0 top-0 h-96 w-96 animate-pulse rounded-full bg-white/5 blur-3xl" />
        <div
          className="absolute bottom-0 right-0 h-96 w-96 animate-pulse rounded-full bg-white/5 blur-3xl"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-r from-white/5 to-transparent blur-3xl" />

        <Container>
          <div
            className="relative z-10 mx-auto max-w-5xl text-center"
            style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}
          >
            <div className="mb-12 inline-block rounded-full border border-white/30 bg-white/10 px-8 py-3 backdrop-blur-sm">
              <span
                className="text-sm font-bold uppercase tracking-wider text-white"
                style={{ fontFamily: "Gilroy, sans-serif" }}
              >
                Join Us
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
              Reimagine School Nutrition With Us
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
                The future of school meals is not only about feeding children.
                It is about building systems that make healthy eating easier,
                every day, and accessible for all.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="/who-we-are#staff-board"
                className="group relative inline-block overflow-hidden rounded-full bg-white px-14 py-6 text-lg font-bold text-[#00a54f] shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_60px_rgba(255,255,255,0.3)]"
                style={{ fontFamily: "Gilroy, sans-serif" }}
              >
                <span className="relative z-10">Partner With Us</span>
                <div className="absolute inset-0 -z-0 bg-linear-to-r from-white to-gray-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </a>
              <a
                href="/our-approach"
                className="group relative inline-block overflow-hidden rounded-full border-2 border-white/90 bg-white/10 px-14 py-6 text-lg font-bold text-white backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-white hover:bg-white/20 hover:shadow-2xl"
                style={{ fontFamily: "Gilroy, sans-serif" }}
              >
                <span className="relative z-10">Our Approach</span>
              </a>
            </div>

            <div className="mt-16 flex items-center justify-center gap-4">
              <div className="h-px w-20 bg-linear-to-r from-transparent to-white/30" />
              <div className="h-2 w-2 rotate-45 bg-white/30" />
              <div className="h-px w-20 bg-linear-to-l from-transparent to-white/30" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
