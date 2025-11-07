import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Our Products | Mandala Foods",
  description:
    "Real Fruit. Real Goodness. Nutrition Made Easy — crafted for everyday life. Discover Fruit Smash, Fruit Splash, and Apple Halwa made from locally sourced Nepali fruits.",
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#00a54f]/5 via-white to-white py-32 md:py-40 lg:py-48">
        <Container>
          <div className="mx-auto max-w-6xl text-center">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h1
                className="mb-10 text-6xl font-black tracking-tight text-gray-900 md:text-7xl lg:text-8xl"
                style={{
                  fontFamily: "Gilroy, sans-serif",
                  letterSpacing: "-0.03em",
                }}
              >
                Real Fruit.{" "}
                <span className="text-[#00a54f]">Real Goodness.</span>
              </h1>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <p
                className="mb-8 text-3xl font-light leading-relaxed text-gray-700 md:text-4xl lg:text-5xl"
                style={{
                  fontFamily: "Gilroy, sans-serif",
                  letterSpacing: "-0.01em",
                }}
              >
                Nutrition Made Easy — crafted for everyday life.
              </p>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <p
                className="mx-auto max-w-4xl text-xl leading-relaxed text-gray-600 md:text-2xl"
                style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
              >
                At Mandala Foods, we turn local Nepali fruits — the ones
                markets overlook but nature made perfect — into delicious,
                fruit-based foods. Made from real fruit and sourced directly
                from farmers, our products are minimally processed and packed
                with natural goodness.
              </p>
            </div>

            {/* Impact Stats */}
            <div className="mt-20 grid gap-8 md:grid-cols-3">
              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#00a54f]/10">
                    <svg
                      className="h-8 w-8 text-[#00a54f]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                      />
                    </svg>
                  </div>
                </div>
                <h3
                  className="mb-2 text-center text-4xl font-black text-gray-900"
                  style={{ fontFamily: "Gilroy, sans-serif" }}
                >
                  100%
                </h3>
                <p
                  className="text-center text-base text-gray-600"
                  style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
                >
                  Locally Sourced Fruit
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e5790e]/10">
                    <svg
                      className="h-8 w-8 text-[#e5790e]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <h3
                  className="mb-2 text-center text-4xl font-black text-gray-900"
                  style={{ fontFamily: "Gilroy, sans-serif" }}
                >
                  0
                </h3>
                <p
                  className="text-center text-base text-gray-600"
                  style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
                >
                  Artificial Preservatives
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1acf1b]/10">
                    <svg
                      className="h-8 w-8 text-[#1acf1b]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <h3
                  className="mb-2 text-center text-4xl font-black text-gray-900"
                  style={{ fontFamily: "Gilroy, sans-serif" }}
                >
                  3×
                </h3>
                <p
                  className="text-center text-base text-gray-600"
                  style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
                >
                  More Real Fruit
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Fruit Smash Section */}
      <section className="bg-white py-32 md:py-40">
        <Container>
          <div className="mx-auto max-w-7xl">
            {/* Section Header */}
            <div className="mb-20 text-center">
              <div className="mb-4 inline-block">
                <span
                  className="rounded-full bg-[#00a54f]/10 px-6 py-2 text-sm font-bold uppercase tracking-wider text-[#00a54f]"
                  style={{ fontFamily: "Gilroy, sans-serif" }}
                >
                  Premium Product Line
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <h2
                  className="mb-6 text-6xl font-black text-gray-900 md:text-7xl lg:text-8xl"
                  style={{
                    fontFamily: "Gilroy, sans-serif",
                    letterSpacing: "-0.03em",
                  }}
                >
                  Fruit Smash
                </h2>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <p
                  className="text-3xl font-light text-gray-700 md:text-4xl"
                  style={{ fontFamily: "Gilroy, sans-serif" }}
                >
                  Real Fruit, Reimagined.
                </p>
              </div>
            </div>

            {/* Product Images Grid */}
            <div className="mb-20 grid gap-12 md:grid-cols-2 lg:gap-16">
              {/* Kiwi Smash */}
              <div className="group">
                <div className="relative mb-8 overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-b from-gray-50 to-white p-12 shadow-lg transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl">
                  <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-yellow-50 to-orange-50">
                    <Image
                      src="/products/kiwi-smash.png"
                      alt="Maya Kiwi Smash - Fruit is the Hero"
                      fill
                      className="object-contain p-8 transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3
                    className="mb-3 text-3xl font-black text-gray-900"
                    style={{ fontFamily: "Gilroy, sans-serif" }}
                  >
                    Maya Kiwi Smash
                  </h3>
                  <p
                    className="mb-6 text-lg text-gray-600"
                    style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
                  >
                    Upcycled with Care
                  </p>
                  <div className="flex justify-center gap-3">
                    <span className="rounded-full bg-[#00a54f]/10 px-4 py-2 text-sm font-semibold text-[#00a54f]">
                      Rich in Fiber
                    </span>
                    <span className="rounded-full bg-[#00a54f]/10 px-4 py-2 text-sm font-semibold text-[#00a54f]">
                      No Added Sugar
                    </span>
                  </div>
                </div>
              </div>

              {/* Zoya Smash */}
              <div className="group">
                <div className="relative mb-8 overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-b from-gray-50 to-white p-12 shadow-lg transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl">
                  <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-orange-50 to-red-50">
                    <Image
                      src="/products/zoya-smash.png"
                      alt="Zoya Fruit Smash"
                      fill
                      className="object-contain p-8 transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3
                    className="mb-3 text-3xl font-black text-gray-900"
                    style={{ fontFamily: "Gilroy, sans-serif" }}
                  >
                    Zoya Fruit Smash
                  </h3>
                  <p
                    className="mb-6 text-lg text-gray-600"
                    style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
                  >
                    Locally Sourced. Supporting Nepali Farmers.
                  </p>
                  <div className="flex justify-center gap-3">
                    <span className="rounded-full bg-[#e5790e]/10 px-4 py-2 text-sm font-semibold text-[#e5790e]">
                      100% Natural
                    </span>
                    <span className="rounded-full bg-[#e5790e]/10 px-4 py-2 text-sm font-semibold text-[#e5790e]">
                      Farm Fresh
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="mb-20 rounded-3xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-12 md:p-16">
              <div className="mx-auto max-w-4xl space-y-10 text-center">
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <p
                    className="text-2xl font-light leading-relaxed text-gray-700"
                    style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 300 }}
                  >
                    Every batch begins with real Nepali fruit — the kind that
                    rarely makes it to retail shelves. We give those harvests a
                    second chance, transforming them into thick, pulpy purées
                    that keep every bit of the fruit&apos;s natural fiber and
                    flavor intact.
                  </p>
                </div>

                <div className="my-12 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

                <div style={{ display: "flex", justifyContent: "center" }}>
                  <p
                    className="text-2xl font-medium leading-relaxed text-gray-900"
                    style={{ fontFamily: "Gilroy, sans-serif" }}
                  >
                    Made from locally sourced harvests, Fruit Smash packs more
                    fruit in every spoon — bringing fuller taste, better
                    nutrition, and a little more care to every bite.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Benefits Infographic */}
            <div className="mb-20">
              <h3
                className="mb-12 text-center text-4xl font-black text-gray-900"
                style={{ fontFamily: "Gilroy, sans-serif" }}
              >
                Why Choose Fruit Smash
              </h3>
              <div className="grid gap-8 md:grid-cols-3">
                <div className="group rounded-2xl border-2 border-gray-200 bg-white p-10 text-center transition-all duration-500 hover:border-[#00a54f] hover:shadow-xl">
                  <div className="mb-6 flex justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00a54f] to-[#00a54f]/80 shadow-lg">
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
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                    </div>
                  </div>
                  <h4
                    className="mb-4 text-5xl font-black text-[#00a54f]"
                    style={{ fontFamily: "Gilroy, sans-serif" }}
                  >
                    3×
                  </h4>
                  <p
                    className="text-xl font-bold text-gray-900"
                    style={{ fontFamily: "Gilroy, sans-serif" }}
                  >
                    More Real Fruit
                  </p>
                  <p
                    className="mt-2 text-base text-gray-600"
                    style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
                  >
                    Compared to traditional spreads
                  </p>
                </div>

                <div className="group rounded-2xl border-2 border-gray-200 bg-white p-10 text-center transition-all duration-500 hover:border-[#00a54f] hover:shadow-xl">
                  <div className="mb-6 flex justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00a54f] to-[#00a54f]/80 shadow-lg">
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
                          d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                        />
                      </svg>
                    </div>
                  </div>
                  <h4
                    className="mb-4 text-5xl font-black text-[#00a54f]"
                    style={{ fontFamily: "Gilroy, sans-serif" }}
                  >
                    High
                  </h4>
                  <p
                    className="text-xl font-bold text-gray-900"
                    style={{ fontFamily: "Gilroy, sans-serif" }}
                  >
                    Natural Fiber
                  </p>
                  <p
                    className="mt-2 text-base text-gray-600"
                    style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
                  >
                    Supports digestive health
                  </p>
                </div>

                <div className="group rounded-2xl border-2 border-gray-200 bg-white p-10 text-center transition-all duration-500 hover:border-[#00a54f] hover:shadow-xl">
                  <div className="mb-6 flex justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00a54f] to-[#00a54f]/80 shadow-lg">
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
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <h4
                    className="mb-4 text-5xl font-black text-[#00a54f]"
                    style={{ fontFamily: "Gilroy, sans-serif" }}
                  >
                    100%
                  </h4>
                  <p
                    className="text-xl font-bold text-gray-900"
                    style={{ fontFamily: "Gilroy, sans-serif" }}
                  >
                    Locally Sourced
                  </p>
                  <p
                    className="mt-2 text-base text-gray-600"
                    style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
                  >
                    Supporting Nepali farmers
                  </p>
                </div>
              </div>
            </div>

            {/* How to Enjoy */}
            <div className="rounded-3xl border border-gray-200 bg-white p-12 shadow-lg md:p-16">
              <h3
                className="mb-12 text-center text-4xl font-black text-gray-900"
                style={{ fontFamily: "Gilroy, sans-serif" }}
              >
                Versatile Enjoyment
              </h3>
              <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                <div className="text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-[#00a54f]/5 transition-all duration-300 hover:bg-[#00a54f]/10">
                      <svg
                        className="h-12 w-12 text-[#00a54f]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </div>
                  </div>
                  <h4
                    className="mb-3 text-xl font-bold text-gray-900"
                    style={{ fontFamily: "Gilroy, sans-serif" }}
                  >
                    Spread
                  </h4>
                  <p
                    className="text-base text-gray-600"
                    style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
                  >
                    On bread, chapati, or crackers
                  </p>
                </div>
                <div className="text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-[#00a54f]/5 transition-all duration-300 hover:bg-[#00a54f]/10">
                      <svg
                        className="h-12 w-12 text-[#00a54f]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </div>
                  </div>
                  <h4
                    className="mb-3 text-xl font-bold text-gray-900"
                    style={{ fontFamily: "Gilroy, sans-serif" }}
                  >
                    Top
                  </h4>
                  <p
                    className="text-base text-gray-600"
                    style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
                  >
                    Yogurt, oats, or fruit bowls
                  </p>
                </div>
                <div className="text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-[#00a54f]/5 transition-all duration-300 hover:bg-[#00a54f]/10">
                      <svg
                        className="h-12 w-12 text-[#00a54f]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </div>
                  </div>
                  <h4
                    className="mb-3 text-xl font-bold text-gray-900"
                    style={{ fontFamily: "Gilroy, sans-serif" }}
                  >
                    Blend
                  </h4>
                  <p
                    className="text-base text-gray-600"
                    style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
                  >
                    Into smoothies and shakes
                  </p>
                </div>
                <div className="text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-[#00a54f]/5 transition-all duration-300 hover:bg-[#00a54f]/10">
                      <svg
                        className="h-12 w-12 text-[#00a54f]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </div>
                  </div>
                  <h4
                    className="mb-3 text-xl font-bold text-gray-900"
                    style={{ fontFamily: "Gilroy, sans-serif" }}
                  >
                    Bake
                  </h4>
                  <p
                    className="text-base text-gray-600"
                    style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
                  >
                    In cakes, muffins, and pies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Apple Halwa Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-32 md:py-40">
        <Container>
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-20 lg:grid-cols-2 lg:gap-24">
              {/* Product Image */}
              <div className="order-2 lg:order-1">
                <div className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 p-16 shadow-2xl">
                  <div className="relative aspect-square">
                    <Image
                      src="/products/apple-halwa.png"
                      alt="Maya Apple Halwa Snack Bar"
                      fill
                      className="object-contain transition-transform duration-700 group-hover:scale-105 group-hover:rotate-2"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="order-1 lg:order-2">
                <div className="mb-6 inline-block">
                  <span
                    className="rounded-full bg-[#e5790e]/10 px-6 py-2 text-sm font-bold uppercase tracking-wider text-[#e5790e]"
                    style={{ fontFamily: "Gilroy, sans-serif" }}
                  >
                    Snack Innovation
                  </span>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <h2
                    className="mb-4 text-6xl font-black text-gray-900 md:text-7xl"
                    style={{
                      fontFamily: "Gilroy, sans-serif",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    Apple Halwa
                  </h2>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <p
                    className="mb-12 text-3xl font-light text-gray-700"
                    style={{ fontFamily: "Gilroy, sans-serif" }}
                  >
                    Snack Bar
                  </p>
                </div>

                <div className="space-y-8">
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <p
                      className="text-center text-2xl font-medium leading-relaxed text-gray-900"
                      style={{
                        fontFamily: "Gilroy, sans-serif",
                        fontWeight: 500,
                      }}
                    >
                      Same halwa, with real fruit.
                    </p>
                  </div>

                  <div className="space-y-6 rounded-3xl border-l-4 border-[#e5790e] bg-white p-10 shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e5790e]/10">
                        <svg
                          className="h-5 w-5 text-[#e5790e]"
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
                      <div>
                        <p
                          className="text-xl font-bold text-gray-900"
                          style={{ fontFamily: "Gilroy, sans-serif" }}
                        >
                          Rich in Nutrients
                        </p>
                        <p
                          className="mt-1 text-base text-gray-600"
                          style={{
                            fontFamily: "Gilroy, sans-serif",
                            fontWeight: 400,
                          }}
                        >
                          Antioxidants, Vitamin C, and Fiber
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e5790e]/10">
                        <svg
                          className="h-5 w-5 text-[#e5790e]"
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
                      <div>
                        <p
                          className="text-xl font-bold text-gray-900"
                          style={{ fontFamily: "Gilroy, sans-serif" }}
                        >
                          Clean Ingredients
                        </p>
                        <p
                          className="mt-1 text-base text-gray-600"
                          style={{
                            fontFamily: "Gilroy, sans-serif",
                            fontWeight: 400,
                          }}
                        >
                          No added sugars or preservatives
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e5790e]/10">
                        <svg
                          className="h-5 w-5 text-[#e5790e]"
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
                      <div>
                        <p
                          className="text-xl font-bold text-gray-900"
                          style={{ fontFamily: "Gilroy, sans-serif" }}
                        >
                          Perfect Anytime
                        </p>
                        <p
                          className="mt-1 text-base text-gray-600"
                          style={{
                            fontFamily: "Gilroy, sans-serif",
                            fontWeight: 400,
                          }}
                        >
                          Ideal for lunch boxes and on-the-go snacking
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Fruit Splash Section */}
      <section className="bg-white py-32 md:py-40">
        <Container>
          <div className="mx-auto max-w-7xl">
            {/* Section Header */}
            <div className="mb-20 text-center">
              <div className="mb-4 inline-block">
                <span
                  className="rounded-full bg-[#1acf1b]/10 px-6 py-2 text-sm font-bold uppercase tracking-wider text-[#1acf1b]"
                  style={{ fontFamily: "Gilroy, sans-serif" }}
                >
                  Beverage Line
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <h2
                  className="mb-6 text-6xl font-black text-gray-900 md:text-7xl lg:text-8xl"
                  style={{
                    fontFamily: "Gilroy, sans-serif",
                    letterSpacing: "-0.03em",
                  }}
                >
                  Fruit Splash
                </h2>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <p
                  className="text-3xl font-light text-gray-700 md:text-4xl"
                  style={{ fontFamily: "Gilroy, sans-serif" }}
                >
                  Keeping It Real
                </p>
              </div>
            </div>

            {/* Product Description */}
            <div className="mb-20 rounded-3xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-12 md:p-16">
              <div className="mx-auto max-w-4xl space-y-10 text-center">
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <p
                    className="text-2xl font-light leading-relaxed text-gray-700"
                    style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 300 }}
                  >
                    We start where others stop — with real Nepali fruit.
                  </p>
                </div>

                <div className="my-12 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

                <div style={{ display: "flex", justifyContent: "center" }}>
                  <p
                    className="text-2xl leading-relaxed text-gray-700"
                    style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
                  >
                    Made from rich fruit purée — not thin juice concentrate —
                    Fruit Splash captures the fiber, flavor, and freshness nature
                    intended. Pulpy, bright, and refreshingly honest, it&apos;s
                    crafted from locally grown fruits — often overlooked, yet
                    full of the fresh, honest taste of Nepal.
                  </p>
                </div>

                <div className="my-12 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

                <div style={{ display: "flex", justifyContent: "center" }}>
                  <p
                    className="text-2xl font-semibold leading-relaxed text-gray-900"
                    style={{ fontFamily: "Gilroy, sans-serif" }}
                  >
                    Each pouch is low in sugar, full of real fruit, and supports
                    Nepali farmers while bringing the taste of home-grown fruit
                    to your glass.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="mb-20 grid gap-8 md:grid-cols-3">
              <div className="rounded-2xl border-2 border-gray-200 bg-white p-10 text-center transition-all duration-500 hover:border-[#1acf1b] hover:shadow-xl">
                <div className="mb-6 flex justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1acf1b] to-[#1acf1b]/80 shadow-lg">
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
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                </div>
                <p
                  className="text-xl font-bold text-gray-900"
                  style={{ fontFamily: "Gilroy, sans-serif" }}
                >
                  More Real Fruit
                </p>
                <p
                  className="mt-2 text-base text-gray-600"
                  style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
                >
                  Rich purée, not concentrate
                </p>
              </div>

              <div className="rounded-2xl border-2 border-gray-200 bg-white p-10 text-center transition-all duration-500 hover:border-[#1acf1b] hover:shadow-xl">
                <div className="mb-6 flex justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1acf1b] to-[#1acf1b]/80 shadow-lg">
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
                        d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                      />
                    </svg>
                  </div>
                </div>
                <p
                  className="text-xl font-bold text-gray-900"
                  style={{ fontFamily: "Gilroy, sans-serif" }}
                >
                  High in Fiber
                </p>
                <p
                  className="mt-2 text-base text-gray-600"
                  style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
                >
                  Naturally nutritious
                </p>
              </div>

              <div className="rounded-2xl border-2 border-gray-200 bg-white p-10 text-center transition-all duration-500 hover:border-[#1acf1b] hover:shadow-xl">
                <div className="mb-6 flex justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1acf1b] to-[#1acf1b]/80 shadow-lg">
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
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                </div>
                <p
                  className="text-xl font-bold text-gray-900"
                  style={{ fontFamily: "Gilroy, sans-serif" }}
                >
                  Locally Sourced
                </p>
                <p
                  className="mt-2 text-base text-gray-600"
                  style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
                >
                  Farm-to-table freshness
                </p>
              </div>
            </div>

            {/* How to Enjoy */}
            <div className="rounded-3xl border border-gray-200 bg-white p-12 shadow-lg md:p-16">
              <h3
                className="mb-12 text-center text-4xl font-black text-gray-900"
                style={{ fontFamily: "Gilroy, sans-serif" }}
              >
                Serving Suggestions
              </h3>
              <div className="grid gap-12 md:grid-cols-3">
                <div className="text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-[#1acf1b]/5 transition-all duration-300 hover:bg-[#1acf1b]/10">
                      <svg
                        className="h-12 w-12 text-[#1acf1b]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </div>
                  </div>
                  <h4
                    className="mb-3 text-xl font-bold text-gray-900"
                    style={{ fontFamily: "Gilroy, sans-serif" }}
                  >
                    Straight Up
                  </h4>
                  <p
                    className="text-base text-gray-600"
                    style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
                  >
                    Chill and sip directly from the pouch
                  </p>
                </div>
                <div className="text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-[#1acf1b]/5 transition-all duration-300 hover:bg-[#1acf1b]/10">
                      <svg
                        className="h-12 w-12 text-[#1acf1b]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </div>
                  </div>
                  <h4
                    className="mb-3 text-xl font-bold text-gray-900"
                    style={{ fontFamily: "Gilroy, sans-serif" }}
                  >
                    On Ice
                  </h4>
                  <p
                    className="text-base text-gray-600"
                    style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
                  >
                    Pour over ice for a refreshing cooler
                  </p>
                </div>
                <div className="text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-[#1acf1b]/5 transition-all duration-300 hover:bg-[#1acf1b]/10">
                      <svg
                        className="h-12 w-12 text-[#1acf1b]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </div>
                  </div>
                  <h4
                    className="mb-3 text-xl font-bold text-gray-900"
                    style={{ fontFamily: "Gilroy, sans-serif" }}
                  >
                    Mix It
                  </h4>
                  <p
                    className="text-base text-gray-600"
                    style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
                  >
                    Blend with soda for a natural spritzer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#00a54f] via-[#00a54f] to-[#008a42] py-32 text-white md:py-40">
        <Container>
          <div className="relative z-10 mx-auto max-w-5xl text-center">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <h2
                className="mb-8 text-6xl font-black md:text-7xl"
                style={{
                  fontFamily: "Gilroy, sans-serif",
                  letterSpacing: "-0.03em",
                  color: "white",
                }}
              >
                Thick, Delicious, and Guilt-Free
              </h2>
              <p
                className="mb-16 text-center text-2xl font-light leading-relaxed md:text-3xl"
                style={{ fontFamily: "Gilroy, sans-serif", color: "white" }}
              >
                Fruit that does more — supporting Nepali farmers, reducing food
                waste, and bringing honest nutrition to every home.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/who-we-are#staff-board"
                className="inline-block rounded-full bg-white px-14 py-6 text-xl font-bold text-[#00a54f] shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-gray-50 hover:shadow-xl"
                style={{ fontFamily: "Gilroy, sans-serif" }}
              >
                Get in Touch
              </Link>
              <Link
                href="/our-approach"
                className="inline-block rounded-full border-2 border-white px-14 py-6 text-xl font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-white/10"
                style={{ fontFamily: "Gilroy, sans-serif" }}
              >
                Our Story
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
