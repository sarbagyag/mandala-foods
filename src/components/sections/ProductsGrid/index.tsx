import React from "react";
import Image from "next/image";
import { ProductsGridSection as ProductsGridSectionType } from "@/domains/content/types";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

interface ProductsGridSectionProps {
  data: ProductsGridSectionType;
}

export function ProductsGrid({ data }: ProductsGridSectionProps) {
  const { id, heading, subheading, products } = data;

  return (
    <section id={id} className="bg-white">
      <Container>
        <div className="text-center">
          <Heading level={2} className="mb-4">
            {heading}
          </Heading>
          {subheading && (
            <Text variant="lead" className="mb-12 text-muted">
              {subheading}
            </Text>
          )}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card key={product.id} hover padding="none" variant="outline">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-lg">
                <Image
                  src={product.image.src}
                  alt={product.image.alt}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardContent padding="lg">
                <Heading level={3} className="mb-3">
                  {product.title}
                </Heading>
                <Text className="mb-4 text-muted">{product.description}</Text>
                {product.link && (
                  <Button
                    href={product.link}
                    variant="outline"
                    size="sm"
                    external={product.link.startsWith("http")}
                  >
                    Learn More
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
