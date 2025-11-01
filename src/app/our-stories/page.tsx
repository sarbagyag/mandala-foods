import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Card, CardContent } from "@/components/ui/Card";
import { getOurStoriesMetadata } from "@/domains/seo/metadata";

export const metadata: Metadata = getOurStoriesMetadata();

export default function OurStoriesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary py-20 text-white">
        <Container>
          <Heading level={1} className="mb-6 text-white">
            Our Stories
          </Heading>
          <Text variant="lead" className="max-w-3xl text-white/90">
            Real stories from the farmers, restaurants, and communities transforming Nepal's
            food system together.
          </Text>
        </Container>
      </section>

      {/* Overview */}
      <section id="overview" className="bg-white">
        <Container>
          <Heading level={2} className="mb-6">
            Stories of Change
          </Heading>
          <Text className="mb-8 max-w-3xl">
            Every person in our network has a unique story of transformation. From farmers
            increasing their income through sustainable practices to restaurants serving
            fresh, local ingredients, these stories showcase the power of circular economy.
          </Text>
        </Container>
      </section>

      {/* Farmers Stories */}
      <section id="farmers" className="bg-secondary/30">
        <Container>
          <Heading level={2} className="mb-6">
            Farmer Stories
          </Heading>
          <Text className="mb-12 max-w-3xl">
            Meet the farmers who are pioneering sustainable agriculture in Nepal.
          </Text>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Ram Prasad Sharma",
                location: "Chitwan",
                story:
                  "After joining Mandala Foods, Ram increased his income by 60% through organic farming practices and fair trade partnerships.",
              },
              {
                name: "Maya Gurung",
                location: "Kaski",
                story:
                  "Maya transformed her small farm into a thriving organic vegetable operation, now supplying restaurants across Pokhara.",
              },
              {
                name: "Bhim Bahadur Tamang",
                location: "Nuwakot",
                story:
                  "Bhim's cooperative of 50 farmers now produces organic grains that feed thousands of families while preserving traditional varieties.",
              },
            ].map((farmer, index) => (
              <Card key={index} padding="lg">
                <CardContent>
                  <Heading level={4} className="mb-2">
                    {farmer.name}
                  </Heading>
                  <Text className="mb-4 text-sm text-primary">{farmer.location}</Text>
                  <Text className="text-muted">{farmer.story}</Text>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* HORECA Stories */}
      <section id="horeca" className="bg-white">
        <Container>
          <Heading level={2} className="mb-6">
            HORECA Partners
          </Heading>
          <Text className="mb-12 max-w-3xl">
            Hotels, restaurants, and cafes choosing sustainable, locally-sourced ingredients.
          </Text>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Green Café Kathmandu",
                type: "Café",
                story:
                  "By sourcing 80% of ingredients from Mandala Foods, Green Café reduced costs while improving quality and sustainability.",
              },
              {
                name: "Riverside Hotel Pokhara",
                type: "Hotel",
                story:
                  "This boutique hotel's farm-to-table restaurant features seasonal menus based on Mandala Foods' fresh produce.",
              },
              {
                name: "Taste of Nepal Restaurant",
                type: "Restaurant",
                story:
                  "Chef Suman's modern Nepali cuisine celebrates local ingredients sourced through our sustainable network.",
              },
            ].map((partner, index) => (
              <Card key={index} padding="lg">
                <CardContent>
                  <Heading level={4} className="mb-2">
                    {partner.name}
                  </Heading>
                  <Text className="mb-4 text-sm text-primary">{partner.type}</Text>
                  <Text className="text-muted">{partner.story}</Text>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="bg-primary/10">
        <Container>
          <div className="text-center">
            <Heading level={3} className="mb-4">
              Want to Share Your Story?
            </Heading>
            <Text className="mb-6">
              Are you a farmer, restaurant owner, or community member working with Mandala
              Foods? We'd love to hear from you.
            </Text>
            <Text className="text-muted">Contact information coming soon.</Text>
          </div>
        </Container>
      </section>
    </>
  );
}
