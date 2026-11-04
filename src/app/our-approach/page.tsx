import { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Eyebrow, SectionHeader } from "@/components/ui/Section";
import { CTABand } from "@/components/ui/CTABand";
import { getOurApproachMetadata } from "@/domains/seo/metadata";

export const metadata: Metadata = getOurApproachMetadata();

const jumpLinks = [
  { href: "#why-it-matters", label: "Why it matters" },
  { href: "#circular-model", label: "Circular model" },
  { href: "#what-makes-us-different", label: "What makes us different" },
  { href: "#real-outcomes-real-impact", label: "Impact targets" },
  { href: "#evidence-based-field-tested", label: "Evidence" },
  { href: "#built-for-scale", label: "Built for scale" },
];

const challenges = [
  "High post-harvest food loss",
  "Low consumption of nutritious foods",
  "Rising environmental pressure from waste",
];

const steps = [
  {
    title: "Preserve",
    subtitle: "Extend shelf life at the source",
    details: [
      "MAP bags to slow spoilage",
      "Ethylene absorbers to delay ripening",
      "Thermal pallet covers to prevent heat stress",
    ],
    outcome: "Improves quality, reduces early-stage loss, increases farmer incomes",
  },
  {
    title: "Upcycle",
    subtitle: "Transform surplus into value",
    details: [
      "Nutritious, shelf-stable products",
      "Fruit-based spreads and snack ingredients",
      "Affordable local alternatives to costly imports",
    ],
    outcome: "All with no or limited added preservatives",
  },
  {
    title: "Redistribute",
    subtitle: "Deliver nutrition at scale",
    details: [
      "Nutritious food for children and families",
      "Real, whole fruit alternative for every community",
      "Healthier snack options for families with NCDs",
    ],
    outcome: "Market access for local producers, affordable nutrition for rural communities",
  },
];

const pillars = [
  {
    badge: "Innovation",
    title: "Localized innovations, global insight",
    description: "First in Nepal to adapt solutions like passive MAP bags for fragmented rural markets",
  },
  {
    badge: "Impact",
    title: "Behavior change built in",
    description: "Our products drive nutrition awareness, demand, and dietary transformation",
  },
  {
    badge: "Reach",
    title: "School-first scalability",
    description: "Schools serve as anchor markets to reach children at scale",
  },
  {
    badge: "Sustainability",
    title: "Designed for climate & equity",
    description: "Reduces food waste, and centers women across the value chain",
  },
];

const targets = [
  { value: "269 MT", label: "Surplus fruit rescued annually" },
  { value: "147,000+", label: "Children nourished each year" },
  { value: "1,000+", label: "Women employed", subtext: "In sourcing, processing, and sales" },
  { value: "30–40%", label: "More income for farmers" },
  { value: "$8.85 → $3.21", label: "Cost per child" },
  { value: "3x", label: "More children nourished", subtext: "In just 5 years" },
];

const evidence = [
  { finding: "Better post-harvest handling", result: "Less loss, better prices" },
  {
    finding: "Locally made, shelf-stable, fruit product",
    result: "Improved vitamin A, zinc, magnesium, and iron intake",
  },
  { finding: "School meals", result: "Higher attendance and long-term learning outcomes" },
];

const future = [
  { target: "2M children", description: "Nourished nationwide by 2035" },
  { target: "Rural economies", description: "Thrive through upcycled value chains" },
  { target: "Circular model", description: "A regenerative approach to food systems" },
  { target: "New standard for the Global South", description: "Affordable, nutritious food at scale" },
];

export default function OurApproachPage() {
  return (
    <>
      <div id="unique-approach">
        <PageHero
          eyebrow="Our approach"
          title="Circular food. Local innovation. Lasting nutritional impact."
          lead="We're redefining how food moves through Nepal — from farm to table, and back into the community. Our approach is grounded in circular food innovation: a system that preserves surplus, upcycles waste, and redistributes nutrition — ensuring no nourishing food is left behind."
        >
          <nav aria-label="On this page">
            <ul className="flex flex-wrap gap-2">
              {jumpLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="inline-flex h-10 items-center rounded-full border border-line px-4 text-sm font-semibold text-ink transition-colors hover:border-ink"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </PageHero>
      </div>

      {/* Why it matters */}
      <section id="why-it-matters" className="bg-white py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div>
              <SectionHeader
                eyebrow="Why it matters"
                title="Nepal faces a triple food challenge"
                className="mb-10 md:mb-10"
              />
              <ol className="divide-y divide-line border-y border-line">
                {challenges.map((c, i) => (
                  <li key={c} className="flex items-baseline gap-6 py-6">
                    <span className="w-8 shrink-0 text-sm font-bold tabular-nums text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xl font-semibold leading-snug tracking-[-0.015em] text-ink">{c}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-10 text-lg leading-relaxed text-gray-600">
                While global supply chains use advanced tools to reduce loss and extend shelf life, these solutions
                have often been missing — or misapplied — in Nepal.{" "}
                <strong className="font-semibold text-ink">That&apos;s where Mandala Foods steps in.</strong>
              </p>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-mist">
              <Image
                src="/images/our-story/nepal_food_waste.png"
                alt="Spoiled produce by a mountain road in Nepal"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Circular model */}
      <section id="circular-model" className="bg-mist py-20 md:py-28">
        <Container>
          <SectionHeader
            eyebrow="Our circular model"
            title="Preserve. Upcycle. Redistribute."
            lead="We integrate low-cost, high-impact solutions to reimagine the fresh produce value chain."
          />
          <ol className="grid gap-6 lg:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title} className="relative flex flex-col rounded-[1.5rem] bg-white p-8 md:p-10">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {i < steps.length - 1 && (
                    <ArrowRight className="hidden h-5 w-5 text-gray-300 lg:block" aria-hidden="true" />
                  )}
                </div>
                <h3 className="mt-8 text-2xl font-bold tracking-[-0.025em] text-ink">{s.title}</h3>
                <p className="mt-1 text-[0.95rem] font-semibold text-gray-500">{s.subtitle}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {s.details.map((d) => (
                    <li key={d} className="flex gap-3 text-[0.95rem] leading-relaxed text-gray-700">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-primary" strokeWidth={2.5} aria-hidden="true" />
                      {d}
                    </li>
                  ))}
                </ul>
                <p className="mt-8 border-t border-line pt-6 text-sm font-semibold leading-relaxed text-ink">
                  {s.outcome}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* What makes us different */}
      <section id="what-makes-us-different" className="bg-white py-20 md:py-28">
        <Container>
          <SectionHeader
            eyebrow="What makes us different"
            title="Four pillars of innovation that set us apart"
          />
          <div className="grid border-t border-line md:grid-cols-2">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className={`border-b border-line py-10 md:px-10 ${i % 2 === 0 ? "md:border-r md:pl-0" : "md:pr-0"}`}
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">{p.badge}</p>
                <h3 className="mt-4 text-2xl font-bold tracking-[-0.025em] text-ink">{p.title}</h3>
                <p className="mt-3 max-w-md text-lg leading-relaxed text-gray-600">{p.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Targets */}
      <section id="real-outcomes-real-impact" className="bg-forest py-20 md:py-28">
        <Container>
          <SectionHeader
            tone="light"
            eyebrow="Our targets"
            title="Real outcomes, real impact"
            lead="Our targets include measurable results that transform lives and communities."
          />
          <dl className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {targets.map((t) => (
              <div key={t.label} className="border-t border-white/15 pt-6">
                <dd className="text-[2.75rem] font-bold leading-none tracking-[-0.04em] text-white md:text-[3.25rem]">
                  {t.value}
                </dd>
                <dt className="mt-4 text-lg font-semibold text-white/90">{t.label}</dt>
                {t.subtext && <dd className="mt-1 text-sm text-white/60">{t.subtext}</dd>}
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Evidence */}
      <section id="evidence-based-field-tested" className="bg-white py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <SectionHeader
              eyebrow="Evidence-based, field-tested"
              title="Our approach combines global research and local pilot data"
              className="mb-0 md:mb-0"
            />
            <div className="border-t border-line">
              <div className="hidden grid-cols-2 gap-8 border-b border-line py-4 text-xs font-bold uppercase tracking-[0.18em] text-gray-400 sm:grid">
                <span>Intervention</span>
                <span>Result</span>
              </div>
              {evidence.map((e) => (
                <div key={e.finding} className="grid gap-2 border-b border-line py-7 sm:grid-cols-2 sm:gap-8">
                  <p className="text-lg font-semibold leading-snug text-ink">{e.finding}</p>
                  <p className="flex gap-3 text-lg leading-snug text-gray-600">
                    <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    {e.result}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Built for scale */}
      <section id="built-for-scale" className="bg-mist py-20 md:py-28">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Built for scale</Eyebrow>
            <h2 className="text-balance text-[2rem] font-bold leading-[1.1] tracking-[-0.03em] text-ink md:text-[2.75rem]">
              Our circular model isn&apos;t just working — it&apos;s gaining momentum.
            </h2>
            <p className="mt-5 text-lg text-gray-600">We&apos;re building toward a future where:</p>
          </div>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {future.map((f) => (
              <li key={f.target} className="rounded-[1.5rem] bg-white p-8">
                <h3 className="text-xl font-bold leading-snug tracking-[-0.02em] text-ink">{f.target}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-gray-600">{f.description}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CTABand
        eyebrow="See it in practice"
        title="Our approach, in every jar and pouch."
        primary={{ text: "Explore products", href: "/products" }}
        secondary={{ text: "School nutrition", href: "/reimagining-nutrition" }}
      />
    </>
  );
}
