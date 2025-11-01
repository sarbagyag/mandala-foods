import React from "react";
import Image from "next/image";
import { MissionSection as MissionSectionType } from "@/domains/content/types";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Card, CardContent } from "@/components/ui/Card";

interface MissionSectionProps {
  data: MissionSectionType;
}

export function MissionSection({ data }: MissionSectionProps) {
  const { id, heading, subheading, missions } = data;

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

        <div className="grid gap-8 md:grid-cols-3">
          {missions.map((mission, index) => (
            <Card
              key={mission.id}
              variant="default"
              padding="none"
              className="overflow-hidden"
            >
              {mission.image && (
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={mission.image.src}
                    alt={mission.image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}
              <CardContent padding="lg">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                    {index + 1}
                  </div>
                  <Heading level={4}>{mission.title}</Heading>
                </div>
                <Text className="text-muted">{mission.description}</Text>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
