import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { getWhoWeAreMetadata } from "@/domains/seo/metadata";
import { OurStorySection } from "./_components/OurStorySection";

export const metadata: Metadata = getWhoWeAreMetadata();

export default function WhoWeArePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary py-20 text-white">
        <Container>
          <Heading level={1} className="mb-6 text-white">
            Who We Are
          </Heading>
          <Text variant="lead" className="max-w-3xl text-white/90">
            We are Mandala Foods - pioneering Nepal's circular food economy to create
            sustainable livelihoods, protect the environment, and provide nutritious food
            for all.
          </Text>
        </Container>
      </section>

      {/* Our Story - New Detailed Section */}
      <OurStorySection />

      {/* Mission and Values */}
      <section id="mission-values" className="bg-secondary/30">
        <Container>
          <Heading level={2} className="mb-6">
            Mission and Values
          </Heading>
          <div className="mb-8">
            <Heading level={3} className="mb-4">
              Our Mission
            </Heading>
            <Text variant="lead">
              To create a sustainable, circular food economy in Nepal that empowers farmers,
              protects the environment, and provides nutritious food access to all
              communities.
            </Text>
          </div>
          <div>
            <Heading level={3} className="mb-6">
              Our Core Values
            </Heading>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Sustainability",
                  description:
                    "We prioritize environmental stewardship in every decision, from farming practices to packaging.",
                },
                {
                  title: "Fairness",
                  description:
                    "Every person in our supply chain deserves fair compensation and treatment.",
                },
                {
                  title: "Quality",
                  description:
                    "We never compromise on the nutritional value and safety of our food products.",
                },
                {
                  title: "Transparency",
                  description:
                    "We believe in open communication about our practices, challenges, and impact.",
                },
                {
                  title: "Innovation",
                  description:
                    "We constantly seek new ways to improve our circular economy model.",
                },
                {
                  title: "Community",
                  description:
                    "Our success is measured by the wellbeing of the communities we serve.",
                },
              ].map((value) => (
                <div key={value.title}>
                  <Heading level={4} className="mb-3">
                    {value.title}
                  </Heading>
                  <Text className="text-muted">{value.description}</Text>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Staff and Board */}
      <section id="staff-board" className="bg-white">
        <Container>
          <Heading level={2} className="mb-6">
            Our Team
          </Heading>
          <Text variant="lead" className="mb-12 text-muted">
            Meet the dedicated individuals working to transform Nepal's food system.
          </Text>
          <div className="text-center">
            <Text className="text-muted">
              Team profiles and organizational structure coming soon.
            </Text>
          </div>
        </Container>
      </section>
    </>
  );
}
