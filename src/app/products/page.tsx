import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { getProducts } from "@/services/products";
import { getPbImageUrl, ProductRecord } from "@/lib/pocketbase";

export const metadata: Metadata = {
  title: "Our Products | Mandala Foods",
  description:
    "Real Fruit. Real Goodness. Nutrition Made Easy — crafted for everyday life. Discover Fruit Smash, Fruit Splash, and Apple Halwa made from locally sourced Nepali fruits.",
};

// Helper to group sorted products by category
// Since the API returns them sorted by category_order, we can just iterate.
type CategoryGroup = {
  category: string;
  categoryTag: string; // Display name like "Premium Spread"
  themeColor: string; 
  products: ProductRecord[];
};

function groupProducts(products: ProductRecord[]): CategoryGroup[] {
  const groups: CategoryGroup[] = [];
  
  products.forEach((product) => {
    // Current group is the last one
    const lastGroup = groups[groups.length - 1];
    
    // Normalize category for comparison
    const currentCategory = product.category || "Other";
    
    if (lastGroup && lastGroup.category === currentCategory) {
      lastGroup.products.push(product);
    } else {
      groups.push({
        category: currentCategory,
        // Use the tag from the first product, or fallback to the category name
        categoryTag: product.category_tag || currentCategory,
        // Fallback or use product's theme color
        themeColor: product.theme_color?.startsWith("#") ? product.theme_color : "#00a54f",
        products: [product],
      });
    }
  });

  return groups;
}

export default async function ProductsPage() {
  const products = await getProducts();
  const groupedProducts = groupProducts(products);

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

      {/* Dynamic Category Sections */}
      {groupedProducts.map((group, groupIndex) => {
        // Use the group's theme color for the badge/section accents
        const categoryColor = group.themeColor;
        
        // Alternate background colors for sections for visual separation
        const isSectionEven = groupIndex % 2 === 0;
        const sectionBgClass = isSectionEven ? "bg-gray-50" : "bg-white";

        return (
          <section
            key={group.category + groupIndex}
            className={`${sectionBgClass} py-24`}
          >
            <Container>
              <div className="mx-auto max-w-7xl">
                {/* Category Header */}
                <div className="mb-16 flex flex-col items-center">
                   <span
                      className="rounded-full px-8 py-3 text-sm font-bold uppercase tracking-widest shadow-sm"
                      style={{
                        fontFamily: "Gilroy, sans-serif",
                        backgroundColor: `${categoryColor}15`, // 15% opacity
                        color: categoryColor,
                        border: `1px solid ${categoryColor}30`
                      }}
                    >
                      {group.category.toUpperCase().replace("-", " ")}
                    </span>
                </div>

                {/* Products Grid - 2 Column or Centered Single */}
                <div 
                  className={
                    group.products.length === 1 
                      ? "flex justify-center" 
                      : "grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16"
                  }
                >
                  {group.products.map((product) => {
                     const imageUrl = getPbImageUrl(
                        product.collectionId,
                        product.id,
                        product.product_image
                      );
                      const accentColor = 
                        product.theme_color && product.theme_color.startsWith("#") 
                          ? product.theme_color 
                          : "#00a54f";

                    return (
                      <div 
                        key={product.id} 
                        className={`flex flex-col gap-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-100 transition-shadow hover:shadow-xl md:p-10 ${
                          group.products.length === 1 ? "w-full max-w-2xl" : ""
                        }`}
                      >
                         {/* Image Area - Card Style */}
                         <div 
                           className="relative overflow-hidden rounded-2xl p-10 md:p-12"
                           style={{
                               // Dynamic gradient based on accent color
                               background: `linear-gradient(135deg, ${accentColor}1A 0%, ${accentColor}05 100%)`,
                           }}
                         >
                            {/* Category Tag Badge Overlay */}
                            <div className="absolute top-2 left-4 z-10">
                              <span
                                className="inline-block rounded-sm px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] shadow-sm backdrop-blur-md"
                                style={{
                                  fontFamily: "Gilroy, sans-serif",
                                  // backgroundColor: "#ffeee0", // Premium Creamy Orange
                                  color: "#c2410c", // Deep Burnt Orange for contrast/legibility
                                  // border: "1px solid #fed7aa" // Subtle border
                                }}
                              >
                                {product.category_tag}
                              </span>
                            </div>

                            <div className="relative aspect-square w-full">
                                {imageUrl && (
                                  <Image
                                    src={imageUrl}
                                    alt={`${product.name} - ${product.one_liner}`}
                                    fill
                                    className="object-contain transition-transform duration-500 hover:scale-105"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    unoptimized
                                  />
                                )}
                            </div>
                         </div>

                         {/* Content Area */}
                         <div className="flex flex-1 flex-col">
                            <div className="mb-4">
                                <h3 
                                    className="text-3xl font-bold text-gray-900 md:text-4xl"
                                    style={{ fontFamily: "Gilroy, sans-serif" }}
                                >
                                    {product.name}
                                </h3>
                                <p 
                                    className="mt-2 text-xl font-medium text-gray-600"
                                    style={{ fontFamily: "Gilroy, sans-serif" }}
                                >
                                    {product.one_liner}
                                </p>
                            </div>

                            <p 
                                className="mb-8 text-gray-600 leading-relaxed"
                                style={{ fontFamily: "Gilroy, sans-serif" }}
                            >
                                {product.excerpt}
                            </p>

                            {/* Features List */}
                            <div className="mt-4 space-y-4">
                                {product.features?.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-3 rounded-xl bg-gray-50 p-4">
                                        <div 
                                            className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                                            style={{ backgroundColor: `${accentColor}20` }}
                                        >
                                            <svg
                                                className="h-3 w-3"
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
                                            <p className="font-semibold text-gray-900 text-sm">
                                                {feature.title}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                {feature.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                         </div>
                      </div>
                    );
                  })}
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
