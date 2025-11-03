import React from "react";
import Image from "next/image";
import { ProductsGridSection as ProductsGridSectionType } from "@/domains/content/types";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";

interface ProductsGridSectionProps {
  data: ProductsGridSectionType;
}

export function ProductsGrid({ data }: ProductsGridSectionProps) {
  const { id, heading, subheading, products } = data;

  return (
    <section
      id={id}
      className="bg-gradient-to-b from-white to-gray-50 py-20 md:py-32"
    >
      <Container>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <Heading level={2} className="mb-6 text-gray-900">
            {heading}
          </Heading>
          {subheading && (
            <Text variant="lead" className="text-gray-600 text-lg">
              {subheading}
            </Text>
          )}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 bg-white border border-gray-100"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={product.image.src}
                  alt={product.image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Content Below Image */}
              <div className="flex flex-col flex-grow p-8">
                <Heading
                  level={3}
                  className="mb-6 text-gray-900 text-2xl font-bold leading-tight"
                >
                  {product.headline}
                </Heading>

                {product.cta && (
                  <div className="mt-auto pt-2">
                    <Button
                      href={product.cta.href}
                      variant={"accent"}
                      size="md"
                      className="group/btn text-white font-bold px-7 py-3 text-sm rounded-full transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-lg inline-flex items-center gap-2"
                      style={{
                        backgroundColor: "#e5790e",
                      }}
                      external={product.cta.external}
                    >
                      {product.cta.text}
                      <svg
                        className="h-4 w-4 transition-transform group-hover/btn:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
