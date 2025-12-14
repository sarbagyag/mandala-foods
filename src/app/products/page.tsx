import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { getProducts } from "@/services/products";
import { getPbImageUrl } from "@/lib/pocketbase";

export const metadata: Metadata = {
  title: "Our Products | Mandala Foods",
  description:
    "Real Fruit. Real Goodness. Nutrition Made Easy — crafted for everyday life. Discover Fruit Smash, Fruit Splash, and Apple Halwa made from locally sourced Nepali fruits.",
};

// Helper to get styles based on category
const getCategoryStyles = (category: string) => {
  switch (category) {
    case "spread":
      return {
        imageGradient: "bg-gradient-to-br from-green-100 via-green-50 to-lime-50",
        sectionBg: "bg-gray-50",
      };
    case "smash":
      return {
        imageGradient: "bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50",
        sectionBg: "bg-gray-50",
      };
    case "innovation":
      return {
        imageGradient: "bg-gradient-to-br from-orange-50 via-red-50 to-pink-50",
        sectionBg: "bg-gradient-to-b from-gray-50 to-white",
      };
    case "splash":
      return {
        imageGradient: "bg-gradient-to-br from-green-50 via-lime-50 to-emerald-50",
        sectionBg: "bg-white",
      };
    default:
      return {
        imageGradient: "bg-gray-100",
        sectionBg: "bg-white",
      };
  }
};

export default async function ProductsPage() {
  const products = await getProducts();

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

      {/* Dynamic Products */}
      {products.map((product, index) => {
        const styles = getCategoryStyles(product.category);
        const imageUrl = getPbImageUrl(
          product.collectionId,
          product.id,
          product.product_image
        );
        const isEven = index % 2 === 0;

        // Determine text color based on theme_color or default to existing
        // We ensure it is a valid hex code to support the alpha-channel manipulation below
        const accentColor = 
          product.theme_color && product.theme_color.startsWith("#") 
            ? product.theme_color 
            : "#00a54f";
        
        // Helper to Convert hex to rgba for backgrounds with opacity
        // A simple way is to use existing tailwind classes if possible, 
        // or style objects. We will use style objects for dynamic colors.

        return (
          <section
            key={product.id}
            style={{ paddingTop: "100px" }}
            className={`${styles.sectionBg} py-20 md:py-24`}
          >
            <Container>
              <div className="mx-auto max-w-7xl">
                <div className="grid items-center gap-20 lg:grid-cols-2 lg:gap-24">
                  {/* Product Image */}
                  <div className={isEven ? "order-1" : "order-2 lg:order-1"}>
                    <div
                      className={`overflow-hidden rounded-3xl border border-gray-200 ${styles.imageGradient} p-16 shadow-2xl`}
                    >
                      <div className="relative aspect-square">
                        {imageUrl && (
                          <Image
                            src={imageUrl}
                            alt={`${product.name} - ${product.one_liner}`}
                            fill
                            className="object-contain" // Keep existing styling
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            unoptimized
                          />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className={isEven ? "order-2" : "order-1 lg:order-2"}>
                    <div className="mb-6 inline-block">
                      <span
                        className="rounded-full px-6 py-2 text-sm uppercase tracking-wider"
                        style={{
                          fontFamily: "Gilroy, sans-serif",
                          backgroundColor: `${accentColor}1A`, // 10% opacity
                          color: accentColor,
                        }}
                      >
                        {product.category_tag}
                      </span>
                    </div>
                    <h2
                      className="mb-4 text-5xl text-gray-900 md:text-6xl"
                      style={{ fontFamily: "Gilroy, sans-serif" }}
                    >
                      {product.name}
                    </h2>
                    <p
                      className="mb-12 text-2xl text-gray-700"
                      style={{ fontFamily: "Gilroy, sans-serif" }}
                    >
                      {product.one_liner}
                    </p>

                    <div className="space-y-8">
                      <p
                        className="text-lg text-gray-700"
                        style={{ fontFamily: "Gilroy, sans-serif" }}
                      >
                       {product.excerpt}
                      </p>

                      <div 
                        className="space-y-6 rounded-3xl border-l-4 bg-white p-10 shadow-lg"
                        style={{ borderColor: accentColor }}
                      >
                        {/* Features Loop */}
                        {product.features?.map((feature, idx) => (
                           <div key={idx} className="flex items-start gap-4">
                           <div 
                             className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                             style={{ backgroundColor: `${accentColor}1A` }}
                           >
                              {/* Using the tick icon consistently */}
                             <svg
                               className="h-5 w-5"
                               style={{ color: accentColor }}
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
                               {feature.title}
                             </p>
                             <p
                               className="mt-1 text-base text-gray-600"
                               style={{ fontFamily: "Gilroy, sans-serif" }}
                             >
                               {feature.subtitle}
                             </p>
                           </div>
                         </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        );
      })}

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
            <div className="mt-1 flex flex-wrap justify-center gap-6">
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
