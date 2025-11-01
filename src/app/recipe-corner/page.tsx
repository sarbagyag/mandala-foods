import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { getRecipeCornerMetadata } from "@/domains/seo/metadata";

export const metadata: Metadata = getRecipeCornerMetadata();

export default function RecipeCornerPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary py-20 text-white">
        <Container>
          <Heading level={1} className="mb-6 text-white">
            Recipe Corner
          </Heading>
          <Text variant="lead" className="max-w-3xl text-white/90">
            Delicious recipes using sustainable, locally-sourced ingredients from Mandala
            Foods.
          </Text>
        </Container>
      </section>

      {/* Home Recipes */}
      <section id="home-recipes" className="bg-white">
        <Container>
          <Heading level={2} className="mb-6">
            Recipes for Home
          </Heading>
          <Text className="mb-12 max-w-3xl">
            Easy, healthy recipes perfect for everyday home cooking using fresh, sustainable
            ingredients.
          </Text>
          <div className="text-center">
            <Text className="text-muted">
              Home recipe collection coming soon. Check back soon for delicious recipes!
            </Text>
          </div>
        </Container>
      </section>

      {/* Foodservice Recipes */}
      <section id="foodservice-recipes" className="bg-secondary/30">
        <Container>
          <Heading level={2} className="mb-6">
            Recipes for Foodservice
          </Heading>
          <Text className="mb-12 max-w-3xl">
            Professional recipes designed for restaurants, cafes, and catering services.
          </Text>
          <div className="text-center">
            <Text className="text-muted">
              Foodservice recipe collection coming soon. Perfect for chefs and food service
              professionals.
            </Text>
          </div>
        </Container>
      </section>
    </>
  );
}
