import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  image?: { src: string; alt: string };
  /** Extra content under the lead (buttons, chips) */
  children?: React.ReactNode;
  className?: string;
}

/**
 * Inner-page hero: editorial, left-aligned, clears the fixed header.
 * With an image it becomes a two-column split.
 */
export function PageHero({ eyebrow, title, lead, image, children, className }: PageHeroProps) {
  return (
    <section className={cn("border-b border-line bg-white pb-16 pt-32 md:pb-20 md:pt-40", className)}>
      <Container>
        <div
          className={cn(
            "grid items-center gap-12",
            image && "lg:grid-cols-[1.1fr_1fr] lg:gap-16"
          )}
        >
          <div className="max-w-3xl">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="text-balance text-[2.5rem] font-bold leading-[1.05] tracking-[-0.035em] text-ink md:text-6xl lg:text-[4.25rem]">
              {title}
            </h1>
            {lead && (
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
                {lead}
              </p>
            )}
            {children && <div className="mt-9">{children}</div>}
          </div>
          {image && (
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-mist">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
