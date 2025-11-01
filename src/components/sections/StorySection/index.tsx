import React from "react";
import Image from "next/image";
import { StorySection as StorySectionType } from "@/domains/content/types";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";

interface StorySectionProps {
  data: StorySectionType;
}

export function StorySection({ data }: StorySectionProps) {
  const { id, heading, subheading, content, image, cta } = data;

  return (
    <section id={id} className="bg-secondary/30">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Heading level={2} className="mb-4">
              {heading}
            </Heading>
            {subheading && (
              <Text variant="lead" className="mb-6 text-primary">
                {subheading}
              </Text>
            )}
            <Text className="mb-6 whitespace-pre-line">{content}</Text>
            {cta && (
              <Button href={cta.href} variant={cta.variant || "primary"}>
                {cta.text}
              </Button>
            )}
          </div>

          {image && (
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
