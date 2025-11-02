import React from "react";
import Image from "next/image";
import { MissionSection as MissionSectionType } from "@/domains/content/types";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";

interface MissionSectionProps {
  data: MissionSectionType;
}

export function MissionSection({ data }: MissionSectionProps) {
  const { id, heading, subheading, missions } = data;

  return (
    <section id={id} className="bg-gradient-to-b from-gray-50 to-white py-20 md:py-32">
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
          {missions.map((mission) => (
            <div
              key={mission.id}
              className="group flex flex-col overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 bg-white border border-gray-100"
            >
              {/* Image */}
              {mission.image && (
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={mission.image.src}
                    alt={mission.image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}

              {/* Content Below Image */}
              <div className="flex flex-col flex-grow p-8">
                <Heading
                  level={3}
                  className="mb-4 text-gray-900 text-2xl font-bold leading-tight"
                >
                  {mission.title}
                </Heading>
                <Text className="mb-6 text-gray-600 leading-relaxed text-base">
                  {mission.description}
                </Text>

                {mission.cta && (
                  <div className="mt-auto pt-2">
                    <Button
                      href={mission.cta.href}
                      variant={mission.cta.variant || "outline"}
                      size="md"
                      className="group/btn text-orange-600 border-2 border-orange-600 hover:bg-orange-50 font-semibold px-6 py-2.5 text-sm rounded-full transition-all duration-300 inline-flex items-center gap-2 hover:scale-105"
                      external={mission.cta.external}
                    >
                      {mission.cta.text}
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
