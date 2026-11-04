import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Section";

interface CTALink {
  text: string;
  href: string;
  external?: boolean;
}

interface CTABandProps {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  primary: CTALink;
  secondary?: CTALink;
}

/** Closing call-to-action that points to the next step on each page. */
export function CTABand({ eyebrow, title, lead, primary, secondary }: CTABandProps) {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <div className="grid items-end gap-10 rounded-[2rem] bg-mist px-6 py-12 sm:px-12 md:px-16 md:py-16 lg:grid-cols-[1.5fr_1fr]">
          <div>
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            <h2 className="text-balance text-[2rem] font-bold leading-[1.1] tracking-[-0.03em] text-ink md:text-[2.6rem]">
              {title}
            </h2>
            {lead && <p className="mt-4 max-w-xl text-lg leading-relaxed text-gray-600">{lead}</p>}
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Button href={primary.href} external={primary.external} size="lg" arrow>
              {primary.text}
            </Button>
            {secondary && (
              <Button href={secondary.href} external={secondary.external} variant="outline" size="lg">
                {secondary.text}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
