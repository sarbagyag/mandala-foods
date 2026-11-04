import { Metadata } from "next";
import { Building2, ClipboardList, Globe2, ShoppingBasket, Sprout, TriangleAlert } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Eyebrow, SectionHeader } from "@/components/ui/Section";
import { CTABand } from "@/components/ui/CTABand";
import { MealIntegrationGallery } from "@/components/sections/MealIntegrationGallery";
import { getMealIntegrationMedia } from "@/services/meal-integration";
import { getReimaginingNutritionMetadata } from "@/domains/seo/metadata";

export const metadata: Metadata = getReimaginingNutritionMetadata();

export const dynamic = "force-dynamic";

const challenges = [
  {
    icon: ClipboardList,
    title: "Limited dietary diversity",
    body: "Most school meals lack variety and nutritional completeness, leaving children without the micronutrients essential for growth and learning.",
  },
  {
    icon: ShoppingBasket,
    title: "Inconsistent procurement",
    body: "Fragmented supply chains and irregular sourcing make it difficult for schools to maintain quality, affordability, and local agricultural linkages.",
  },
  {
    icon: TriangleAlert,
    title: "Ultra-processed food exposure",
    body: "Rising availability of cheap, ultra-processed foods in and around schools is displacing nutritious, locally produced alternatives.",
  },
  {
    icon: Sprout,
    title: "Significant post-harvest food loss",
    body: "Cosmetically rejected and surplus fruits and vegetables are wasted before reaching schools — a missed opportunity for both nutrition and farmer livelihoods.",
  },
];

const pillars = [
  {
    icon: Globe2,
    title: "Localized food systems integration",
    body: "We connect local farmers, women-led food hubs, processing systems, schools, municipalities, and nutrition programs into one coordinated ecosystem.",
    points: [
      "Transforms underutilized & surplus produce into school-ready foods",
      "Nutritious, operationally practical, and culturally familiar",
      "Scalable across municipalities and districts",
    ],
  },
  {
    icon: Building2,
    title: "School meal environment engineering",
    body: "We help schools operationalize healthier meals — not just supplying products, but building the full environment for better nutrition.",
    points: [
      "Menu integration & school-ready fruit-based ingredients",
      "Simplified meal preparation & kitchen workflow support",
      "Nutrition education & healthy food behavior design",
    ],
  },
];

const goals = [
  "Improve child nutrition",
  "Reduce food loss",
  "Strengthen local economies",
  "Shape lifelong food habits",
];

export default async function ReimaginingNutritionPage() {
  const mealIntegrationMedia = await getMealIntegrationMedia();

  return (
    <>
      <PageHero
        eyebrow="School nutrition"
        title="A new model for school nutrition"
        lead="School meals are one of the most powerful infrastructures shaping child nutrition, learning, local agriculture, and lifelong food habits."
        image={{ src: "/images/products/schools.jpg", alt: "Children in a classroom enjoying fruit pouches" }}
      />

      {/* Positioning statement */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-20">
            <Eyebrow className="lg:pt-3">What we&apos;re building</Eyebrow>
            <div>
              <p className="text-balance text-[1.7rem] font-semibold leading-[1.3] tracking-[-0.025em] text-ink md:text-[2.25rem]">
                Mandala Foods is building a localized food systems integrator and school meal environment engineering
                platform — integrating local agriculture, nutrition science, operational systems, and behavioral design
                into everyday school meals.
              </p>
              <p className="mt-8 max-w-2xl border-l-4 border-accent pl-6 text-lg leading-relaxed text-gray-600">
                We are evolving beyond a conventional food company — building systems that make healthy school meals
                easier, practical, and locally integrated.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* The challenge */}
      <section className="bg-mist py-20 md:py-28">
        <Container>
          <SectionHeader
            eyebrow="Why it matters"
            title="The challenge"
            lead="Across Nepal and the Global South, school meal systems face deeply interconnected pressures."
          />
          <ul className="grid gap-6 md:grid-cols-2">
            {challenges.map(({ icon: Icon, title, body }) => (
              <li key={title} className="flex gap-6 rounded-[1.5rem] bg-white p-8">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl font-bold tracking-[-0.02em] text-ink">{title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-gray-600">{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Two pillars */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <SectionHeader
            eyebrow="What we do"
            title="Our two pillars"
            lead="Two interconnected approaches that work together to transform how schools source, prepare, and serve nutritious food."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {pillars.map(({ icon: Icon, title, body, points }, i) => (
              <article key={title} className="flex flex-col rounded-[1.5rem] border border-line p-8 md:p-10">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <span className="text-sm font-bold tabular-nums text-gray-300">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-8 text-2xl font-bold tracking-[-0.025em] text-ink">{title}</h3>
                <p className="mt-3 text-lg leading-relaxed text-gray-600">{body}</p>
                <ul className="mt-8 space-y-3 border-t border-line pt-6">
                  {points.map((p) => (
                    <li key={p} className="flex gap-3 text-[0.95rem] font-medium leading-relaxed text-ink">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Vision & mission */}
      <section className="bg-forest py-20 md:py-28">
        <Container>
          <div className="grid gap-16 md:grid-cols-2 md:gap-20">
            <div>
              <Eyebrow tone="light">Our vision</Eyebrow>
              <h2 className="text-[1.9rem] font-bold leading-[1.15] tracking-[-0.03em] text-white md:text-[2.5rem]">
                Locally rooted, globally relevant
              </h2>
              <div className="mt-6 space-y-4">
                <p className="text-lg leading-relaxed text-white/75">
                  Healthier, locally rooted school food environments where every child has access to nutritious,
                  enjoyable, and sustainable meals.
                </p>
                <p className="text-lg leading-relaxed text-white/75">
                  Meals that nourish learning, strengthen communities, and transform food systems — for children,
                  farmers, and the planet alike.
                </p>
              </div>
            </div>
            <div>
              <Eyebrow tone="light">Our mission</Eyebrow>
              <h2 className="text-[1.9rem] font-bold leading-[1.15] tracking-[-0.03em] text-white md:text-[2.5rem]">
                Designing healthier food environments
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/75">
                Mandala Foods designs and operates healthier school food environments by integrating local
                agriculture, nutrition science, operational systems, and behavioral design into everyday school meals.
              </p>
              <ul className="mt-8 grid grid-cols-2 gap-3">
                {goals.map((g) => (
                  <li key={g} className="rounded-xl border border-white/15 px-4 py-3 text-[0.95rem] font-semibold text-white">
                    {g}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Built for Nepal */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Built for Nepal. Designed for global relevance.</Eyebrow>
            <h2 className="text-balance text-[2rem] font-bold leading-[1.1] tracking-[-0.03em] text-ink md:text-[2.75rem]">
              Rooted in reality. Ready to scale.
            </h2>
            <p className="mx-auto mt-6 text-lg leading-relaxed text-gray-600 md:text-xl">
              Our model is rooted in Nepal&apos;s realities — local agriculture, school meal systems, operational
              constraints, and community-driven implementation. But the challenge we address is global: how do we make
              healthy, locally sourced school meals practical, scalable, and sustainable?
            </p>
          </div>
        </Container>
      </section>

      {/* Gallery */}
      {mealIntegrationMedia.length > 0 && (
        <section className="bg-mist py-20 md:py-28">
          <Container>
            <SectionHeader
              eyebrow="In the field"
              title="Our ongoing meal integration initiatives"
              lead="A look at how our meals are reaching schools and communities on the ground."
            />
            <MealIntegrationGallery media={mealIntegrationMedia} />
          </Container>
        </section>
      )}

      <CTABand
        eyebrow="Join us"
        title="Reimagine school nutrition with us"
        lead="The future of school meals is not only about feeding children. It is about building systems that make healthy eating easier, every day, and accessible for all."
        primary={{ text: "Partner with us", href: "#contact" }}
        secondary={{ text: "Our approach", href: "/our-approach" }}
      />
    </>
  );
}
