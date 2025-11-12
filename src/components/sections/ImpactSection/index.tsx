import React from "react";
import { ImpactSection as ImpactSectionType } from "@/domains/content/types";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";

interface ImpactSectionProps {
  data: ImpactSectionType;
}

export function ImpactSection({ data }: ImpactSectionProps) {
  const { id, heading, subheading, metrics, cta } = data;

  return (
    <section style={{ paddingTop: "100px" }} id={id} className="relative bg-gradient-to-br from-orange-50 via-red-50 to-orange-50 py-20 md:py-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-30 pointer-events-none" />

      <Container>
        <div className="text-center mb-16 max-w-3xl mx-auto relative">
          <Heading level={2} className="mb-6 text-gray-900">
            {heading}
          </Heading>
          {subheading && (
            <Text variant="lead" className="text-gray-600 text-lg">
              {subheading}
            </Text>
          )}
        </div>

        <div className="grid gap-8 md:grid-cols-2 mb-16 max-w-6xl mx-auto relative">
          {metrics.map((metric, index) => (
            <div
              key={metric.id}
              className="group relative bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-orange-100 hover:border-orange-200"
            >
              {/* Elegant Number Badge */}
              <div className="absolute -top-5 -left-5 w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                {index + 1}
              </div>

              {/* Content */}
              <div className="mt-4">
                <Heading level={3} className="mb-4 text-gray-900 text-2xl font-bold leading-tight">
                  {metric.label}
                </Heading>
                <Text className="text-gray-600 leading-relaxed text-base">
                  {metric.description}
                </Text>
              </div>

              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-orange-50 to-transparent rounded-tl-3xl pointer-events-none opacity-50" />
            </div>
          ))}
        </div>

        {cta && (
          <div className="text-center relative">
            <Button
              href={cta.href}
              variant={cta.variant || "primary"}
              size="lg"
              className="group bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-3 hover:scale-105"
              external={cta.external}
            >
              {cta.text}
              <svg
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
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
      </Container>
    </section>
  );
}
