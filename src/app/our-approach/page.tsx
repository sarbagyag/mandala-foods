import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Card, CardContent } from "@/components/ui/Card";
import { getOurApproachMetadata } from "@/domains/seo/metadata";

export const metadata: Metadata = getOurApproachMetadata();

export default function OurApproachPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary py-20 text-white">
        <Container>
          <Heading level={1} className="mb-6 text-white">
            Our Approach
          </Heading>
          <Text variant="lead" className="max-w-3xl text-white/90">
            A circular economy model that transforms waste into opportunity and creates
            sustainable value at every step.
          </Text>
        </Container>
      </section>

      {/* Unique Approach */}
      <section id="unique-approach" className="bg-white">
        <Container>
          <Heading level={2} className="mb-6">
            Our Unique Approach
          </Heading>
          <Text className="mb-8 max-w-3xl">
            Mandala Foods operates on a circular economy principle, where nothing goes to
            waste. We connect farmers, processors, and consumers in a sustainable loop that
            benefits everyone involved.
          </Text>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Direct Farmer Partnerships",
                description:
                  "We work directly with farmers, eliminating middlemen and ensuring fair prices.",
              },
              {
                title: "Sustainable Processing",
                description:
                  "Our processing facilities transform surplus produce into value-added products.",
              },
              {
                title: "Community Distribution",
                description:
                  "We distribute nutritious food to communities while supporting local economies.",
              },
            ].map((feature, index) => (
              <Card key={index} padding="lg">
                <CardContent>
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                    {index + 1}
                  </div>
                  <Heading level={4} className="mb-3">
                    {feature.title}
                  </Heading>
                  <Text className="text-muted">{feature.description}</Text>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Circle of Change */}
      <section id="circle-of-change" className="bg-secondary/30">
        <Container>
          <Heading level={2} className="mb-6">
            Circle of Change
          </Heading>
          <Text className="mb-12 max-w-3xl">
            Our circular model creates a continuous loop of value, sustainability, and
            impact.
          </Text>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "Sustainable Farming",
                description:
                  "Farmers use organic practices supported by our training and resources.",
              },
              {
                step: "Fair Trade",
                description:
                  "We purchase produce at fair prices, ensuring farmer livelihoods.",
              },
              {
                step: "Value Addition",
                description:
                  "Processing facilities transform produce into nutritious products.",
              },
              {
                step: "Community Access",
                description:
                  "Healthy food reaches communities while revenue supports farmers.",
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white">
                  {index + 1}
                </div>
                <Heading level={5} className="mb-3">
                  {step.step}
                </Heading>
                <Text className="text-muted">{step.description}</Text>
                {index < 3 && (
                  <div className="absolute right-0 top-8 hidden h-0.5 w-full bg-primary/30 lg:block" />
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Impact */}
      <section id="impact" className="bg-white">
        <Container>
          <Heading level={2} className="mb-6">
            Our Impact
          </Heading>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "500+", label: "Farmers Supported" },
              { value: "40%", label: "Waste Reduction" },
              { value: "50+", label: "Communities Served" },
              { value: "100K+", label: "Meals Provided" },
            ].map((metric, index) => (
              <Card key={index} padding="lg" className="text-center">
                <CardContent>
                  <div className="mb-2 text-5xl font-bold text-primary">
                    {metric.value}
                  </div>
                  <Text className="font-medium">{metric.label}</Text>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Network and Partnerships */}
      <section id="network-partnerships" className="bg-secondary/30">
        <Container>
          <Heading level={2} className="mb-6">
            Network and Partnerships
          </Heading>
          <Text className="mb-8 max-w-3xl">
            We collaborate with organizations across Nepal and internationally to amplify our
            impact and share best practices.
          </Text>
          <Text className="text-muted">
            Partnership details and logos coming soon.
          </Text>
        </Container>
      </section>

      {/* Funders */}
      <section id="funders" className="bg-white">
        <Container>
          <Heading level={2} className="mb-6">
            Our Funders
          </Heading>
          <Text className="mb-8 max-w-3xl">
            We are grateful for the support of organizations that believe in our mission to
            create a sustainable food system in Nepal.
          </Text>
          <Text className="text-muted">Funder information coming soon.</Text>
        </Container>
      </section>
    </>
  );
}
