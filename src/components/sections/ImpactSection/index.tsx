import React from "react";
import { ImpactSection as ImpactSectionType } from "@/domains/content/types";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Card, CardContent } from "@/components/ui/Card";

interface ImpactSectionProps {
  data: ImpactSectionType;
}

export function ImpactSection({ data }: ImpactSectionProps) {
  const { id, heading, subheading, metrics } = data;

  return (
    <section id={id} className="bg-primary text-white">
      <Container>
        <div className="text-center">
          <Heading level={2} className="mb-4 text-white">
            {heading}
          </Heading>
          {subheading && (
            <Text variant="lead" className="mb-12 text-white/90">
              {subheading}
            </Text>
          )}
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <Card
              key={metric.id}
              variant="ghost"
              padding="lg"
              className="text-center"
            >
              <CardContent>
                <div className="mb-3 text-5xl font-bold text-white">
                  {metric.value}
                </div>
                <Heading level={5} className="mb-2 text-white">
                  {metric.label}
                </Heading>
                {metric.description && (
                  <Text className="text-sm text-white/80">
                    {metric.description}
                  </Text>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
