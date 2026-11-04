import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { getRecipeCornerMetadata } from "@/domains/seo/metadata";

export const metadata: Metadata = getRecipeCornerMetadata();

const collections = [
  {
    id: "home-recipes",
    title: "Recipes for home",
    body: "Easy, healthy recipes perfect for everyday home cooking using fresh, sustainable ingredients.",
  },
  {
    id: "foodservice-recipes",
    title: "Recipes for foodservice",
    body: "Professional recipes designed for restaurants, cafes, and catering services.",
  },
];

export default function RecipeCornerPage() {
  return (
    <>
      <PageHero
        eyebrow="Recipe corner"
        title="Cooking with real fruit"
        lead="Delicious recipes using sustainable, locally sourced ingredients from Mandala Foods."
      />
      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {collections.map((c) => (
              <article key={c.id} id={c.id} className="rounded-[1.5rem] bg-mist p-8 md:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Coming soon</p>
                <h2 className="mt-4 text-2xl font-bold tracking-[-0.025em] text-ink">{c.title}</h2>
                <p className="mt-3 text-lg leading-relaxed text-gray-600">{c.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-12">
            <Button href="/products" variant="dark" arrow>
              Explore our products
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
