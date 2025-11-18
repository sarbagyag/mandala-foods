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
      <section
        style={{ paddingTop: "100px" }}
        className="bg-white py-24 md:py-32"
      >
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h1
              className="mb-6 text-5xl text-gray-900 md:text-6xl"
              style={{ fontFamily: "Gilroy, sans-serif" }}
            >
              Real Fruit. <span className="text-[#00a54f]">Real Goodness.</span>
            </h1>
            <p
              className="mb-6 text-2xl text-gray-700 md:text-3xl"
              style={{ fontFamily: "Gilroy, sans-serif" }}
            >
              Nutrition Made Easy — crafted for everyday life.
            </p>
            <p
              className="text-lg text-gray-600 md:text-xl"
              style={{ fontFamily: "Gilroy, sans-serif" }}
            >
              At Mandala Foods, we turn local Nepali fruits — the ones markets
              overlook but nature made perfect — into delicious, fruit-based
              foods. Made from real fruit and sourced directly from farmers, our
              products are minimally processed and packed with natural goodness.
            </p>
          </div>
        </Container>
      </section>

      {/* Madam Purée Section */}
      <section
        style={{ paddingTop: "100px" }}
        className="bg-gray-50 py-20 md:py-24"
      >
        <Container>
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-20 lg:grid-cols-2 lg:gap-24">
              {/* Product Image */}
              <div className="order-1">
                <div className="overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-green-100 via-green-50 to-lime-50 p-16 shadow-2xl">
                  <div className="relative aspect-square">
                    <Image
                      src="/products/madampuree.jpeg"
                      alt="Madam Purée - Like jam, but better"
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="order-2">
                <div className="mb-6 inline-block">
                  <span
                    className="rounded-full bg-[#00a54f]/10 px-6 py-2 text-sm uppercase tracking-wider text-[#00a54f]"
                    style={{ fontFamily: "Gilroy, sans-serif" }}
                  >
                    Premium Spread
                  </span>
                </div>
                <h2
                  className="mb-4 text-5xl text-gray-900 md:text-6xl"
                  style={{ fontFamily: "Gilroy, sans-serif" }}
                >
                  Madam Purée
                </h2>
                <p
                  className="mb-12 text-2xl text-gray-700"
                  style={{ fontFamily: "Gilroy, sans-serif" }}
                >
                  Like jam, but better.
                </p>

                <div className="space-y-8">
                  <p
                    className="text-lg text-gray-700"
                    style={{ fontFamily: "Gilroy, sans-serif" }}
                  >
                    A thick, pulpy fruit purée that brings real fruit flavor to
                    your table. Made from locally sourced Nepali fruits and
                    crafted to perfection, Madam Purée delivers the goodness of
                    fresh fruit in every spoonful — supporting farmers and
                    reducing food waste.
                  </p>

                  <div className="space-y-6 rounded-3xl border-l-4 border-[#00a54f] bg-white p-10 shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#00a54f]/10">
                        <svg
                          className="h-5 w-5 text-[#00a54f]"
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
                          className="text-xl text-gray-900"
                          style={{ fontFamily: "Gilroy, sans-serif" }}
                        >
                          Real Fruit Texture
                        </p>
                        <p
                          className="mt-1 text-base text-gray-600"
                          style={{ fontFamily: "Gilroy, sans-serif" }}
                        >
                          Thick and pulpy, not overly processed
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#00a54f]/10">
                        <svg
                          className="h-5 w-5 text-[#00a54f]"
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
                          className="text-xl text-gray-900"
                          style={{ fontFamily: "Gilroy, sans-serif" }}
                        >
                          Locally Sourced
                        </p>
                        <p
                          className="mt-1 text-base text-gray-600"
                          style={{ fontFamily: "Gilroy, sans-serif" }}
                        >
                          Supporting Nepali farmers
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#00a54f]/10">
                        <svg
                          className="h-5 w-5 text-[#00a54f]"
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
                          className="text-xl text-gray-900"
                          style={{ fontFamily: "Gilroy, sans-serif" }}
                        >
                          Naturally Delicious
                        </p>
                        <p
                          className="mt-1 text-base text-gray-600"
                          style={{ fontFamily: "Gilroy, sans-serif" }}
                        >
                          Pure fruit flavor in every bite
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

      {/* Fruit Smash Section */}
      <section
        style={{ paddingTop: "100px" }}
        className="bg-gray-50 py-20 md:py-24"
      >
        <Container>
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-20 lg:grid-cols-2 lg:gap-24">
              {/* Product Image */}
              <div className="order-1">
                <div className="overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 p-16 shadow-2xl">
                  <div className="relative aspect-square">
                    <Image
                      src="/products/kiwi-smash.png"
                      alt="Maya Kiwi Smash - Fruit is the Hero"
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="order-2">
                <div className="mb-6 inline-block">
                  <span
                    className="rounded-full bg-[#00a54f]/10 px-6 py-2 text-sm uppercase tracking-wider text-[#00a54f]"
                    style={{ fontFamily: "Gilroy, sans-serif" }}
                  >
                    Premium Product Line
                  </span>
                </div>
                <h2
                  className="mb-4 text-5xl text-gray-900 md:text-6xl"
                  style={{ fontFamily: "Gilroy, sans-serif" }}
                >
                  Fruit Smash
                </h2>
                <p
                  className="mb-12 text-2xl text-gray-700"
                  style={{ fontFamily: "Gilroy, sans-serif" }}
                >
                  Real Fruit, Reimagined.
                </p>

                <div className="space-y-8">
                  <p
                    className="text-lg text-gray-700"
                    style={{ fontFamily: "Gilroy, sans-serif" }}
                  >
                    Every batch begins with real Nepali fruit — the kind that
                    rarely makes it to retail shelves. We give those harvests a
                    second chance, transforming them into thick, pulpy purées
                    that keep every bit of the fruit&apos;s natural fiber and
                    flavor intact.
                  </p>

                  <div className="space-y-6 rounded-3xl border-l-4 border-[#00a54f] bg-white p-10 shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#00a54f]/10">
                        <svg
                          className="h-5 w-5 text-[#00a54f]"
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
                          className="text-xl text-gray-900"
                          style={{ fontFamily: "Gilroy, sans-serif" }}
                        >
                          3× More Real Fruit
                        </p>
                        <p
                          className="mt-1 text-base text-gray-600"
                          style={{ fontFamily: "Gilroy, sans-serif" }}
                        >
                          Compared to traditional spreads
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#00a54f]/10">
                        <svg
                          className="h-5 w-5 text-[#00a54f]"
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
                          className="text-xl text-gray-900"
                          style={{ fontFamily: "Gilroy, sans-serif" }}
                        >
                          High in Natural Fiber
                        </p>
                        <p
                          className="mt-1 text-base text-gray-600"
                          style={{ fontFamily: "Gilroy, sans-serif" }}
                        >
                          Supports digestive health
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#00a54f]/10">
                        <svg
                          className="h-5 w-5 text-[#00a54f]"
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
                          className="text-xl text-gray-900"
                          style={{ fontFamily: "Gilroy, sans-serif" }}
                        >
                          100% Locally Sourced
                        </p>
                        <p
                          className="mt-1 text-base text-gray-600"
                          style={{ fontFamily: "Gilroy, sans-serif" }}
                        >
                          Supporting Nepali farmers
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

      {/* Apple Halwa Section */}
      <section
        style={{ paddingTop: "100px" }}
        className="bg-gradient-to-b from-gray-50 to-white py-32 md:py-40"
      >
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
      <section
        style={{ paddingTop: "100px" }}
        className="bg-white py-20 md:py-24"
      >
        <Container>
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-20 lg:grid-cols-2 lg:gap-24">
              {/* Product Image */}
              <div className="order-2 lg:order-1">
                <div className="overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-green-50 via-lime-50 to-emerald-50 p-16 shadow-2xl">
                  <div className="relative aspect-square">
                    <Image
                      src="/products/mango-splash.png"
                      alt="Maya Kiwi Smash - Fruit is the Hero"
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="order-1 lg:order-2">
                <div className="mb-6 inline-block">
                  <span
                    className="rounded-full bg-[#1acf1b]/10 px-6 py-2 text-sm uppercase tracking-wider text-[#1acf1b]"
                    style={{ fontFamily: "Gilroy, sans-serif" }}
                  >
                    Beverage Line
                  </span>
                </div>
                <h2
                  className="mb-4 text-5xl text-gray-900 md:text-6xl"
                  style={{ fontFamily: "Gilroy, sans-serif" }}
                >
                  Fruit Splash
                </h2>
                <p
                  className="mb-12 text-2xl text-gray-700"
                  style={{ fontFamily: "Gilroy, sans-serif" }}
                >
                  Keeping It Real
                </p>

                <div className="space-y-8">
                  <p
                    className="text-lg text-gray-700"
                    style={{ fontFamily: "Gilroy, sans-serif" }}
                  >
                    Made from rich fruit purée — not thin juice concentrate —
                    Fruit Splash captures the fiber, flavor, and freshness
                    nature intended. Pulpy, bright, and refreshingly honest,
                    it&apos;s crafted from locally grown fruits — often
                    overlooked, yet full of the fresh, honest taste of Nepal.
                  </p>

                  <div className="space-y-6 rounded-3xl border-l-4 border-[#1acf1b] bg-white p-10 shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1acf1b]/10">
                        <svg
                          className="h-5 w-5 text-[#1acf1b]"
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
                          className="text-xl text-gray-900"
                          style={{ fontFamily: "Gilroy, sans-serif" }}
                        >
                          More Real Fruit
                        </p>
                        <p
                          className="mt-1 text-base text-gray-600"
                          style={{ fontFamily: "Gilroy, sans-serif" }}
                        >
                          Rich purée, not concentrate
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1acf1b]/10">
                        <svg
                          className="h-5 w-5 text-[#1acf1b]"
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
                          className="text-xl text-gray-900"
                          style={{ fontFamily: "Gilroy, sans-serif" }}
                        >
                          High in Fiber
                        </p>
                        <p
                          className="mt-1 text-base text-gray-600"
                          style={{ fontFamily: "Gilroy, sans-serif" }}
                        >
                          Naturally nutritious
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1acf1b]/10">
                        <svg
                          className="h-5 w-5 text-[#1acf1b]"
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
                          className="text-xl text-gray-900"
                          style={{ fontFamily: "Gilroy, sans-serif" }}
                        >
                          Locally Sourced
                        </p>
                        <p
                          className="mt-1 text-base text-gray-600"
                          style={{ fontFamily: "Gilroy, sans-serif" }}
                        >
                          Farm-to-table freshness
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

      {/* Call to Action */}
      <section
        style={{ paddingTop: "100px" }}
        className="bg-[#00a54f] py-20 text-white md:py-24"
      >
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h2
              className="mb-6 text-4xl text-white md:text-5xl"
              style={{ fontFamily: "Gilroy, sans-serif", color: "white" }}
            >
              Thick, Delicious, and Guilt-Free
            </h2>
            <p
              className="mb-12 text-lg text-white md:text-xl"
              style={{ fontFamily: "Gilroy, sans-serif", color: "white" }}
            >
              Fruit that does more — supporting Nepali farmers, reducing food
              waste, and bringing honest nutrition to every home.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-1">
              <Link
                href="/our-approach"
                className="inline-block rounded-full border-2 border-white px-10 py-4 text-lg text-white transition-all hover:bg-white/10"
                style={{ fontFamily: "Gilroy, sans-serif" }}
              >
                Our Approach
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
