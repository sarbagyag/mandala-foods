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
      {/* Hero Section - Premium Storytelling */}
      <section
        id="unique-approach"
        className="relative overflow-hidden bg-gradient-to-br from-white via-primary/5 to-accent/5 pb-20 pt-32 md:pb-24 md:pt-40"
      >
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl"></div>
        <Container>
          <div className="relative z-10 mx-auto max-w-5xl">
            <div className="mb-6 inline-block rounded-full border border-accent/30 bg-gradient-to-r from-accent/10 to-primary/10 px-5 py-2.5">
              <Text className="text-xs font-bold tracking-widest text-accent">
                CIRCULAR INNOVATION
              </Text>
            </div>
            <Heading
              level={1}
              className="mb-8 text-balance bg-gradient-to-r from-primary via-accent to-primary bg-clip-text font-extrabold leading-tight text-transparent"
            >
              Our Approach
            </Heading>
            <div className="mb-10 h-1 w-24 bg-gradient-to-r from-accent via-primary to-accent"></div>
            <Text
              variant="lead"
              className="mb-8 max-w-4xl text-balance text-3xl font-semibold leading-tight text-foreground md:text-4xl"
            >
              Circular Food. Local Innovation. Lasting Nutritional Impact.
            </Text>
            <Text className="max-w-3xl text-lg leading-relaxed text-muted md:text-xl">
              We&apos;re redefining how food moves through Nepal—from farm to
              table, and back into the community. Our approach is grounded in
              circular food innovation: a system that preserves surplus,
              upcycles waste, and redistributes nutrition—ensuring no nourishing
              food is left behind.
            </Text>
          </div>
        </Container>
      </section>

      {/* Why It Matters - The Challenge */}
      <section
        id="why-it-matters"
        className="bg-gradient-to-b from-gray-50 to-white py-20 md:py-28"
      >
        <Container>
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <Heading level={2} className="mb-6 font-extrabold">
                Why It Matters
              </Heading>
              <div className="mx-auto mb-8 h-1 w-20 bg-gradient-to-r from-accent to-primary"></div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Text className="mx-auto max-w-3xl text-lg text-muted md:text-xl">
                  Nepal faces a triple food challenge that demands innovative
                  solutions
                </Text>
              </div>
            </div>

            <div className="mb-16 grid gap-6 md:grid-cols-3">
              {[
                {
                  challenge: "High food loss post-harvest",
                  number: "01",
                },
                {
                  challenge: "Low consumption of nutritious foods",
                  number: "02",
                },
                {
                  challenge: "Rising environmental pressure from waste",
                  number: "03",
                },
              ].map((item, index) => (
                <div key={index} className="group relative h-full">
                  <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-accent to-primary opacity-0 blur transition duration-500 group-hover:opacity-30"></div>
                  <Card
                    padding="lg"
                    className="relative flex h-full flex-col border-0 bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
                  >
                    <CardContent className="flex h-full flex-col">
                      <div className="mb-6 text-7xl font-extrabold bg-gradient-to-br from-accent/30 to-primary/30 bg-clip-text text-transparent">
                        {item.number}
                      </div>
                      <Text className="flex-1 text-lg font-semibold leading-relaxed text-foreground">
                        {item.challenge}
                      </Text>
                      <div className="mt-6 h-1 w-12 bg-gradient-to-r from-accent to-primary transition-all duration-300 group-hover:w-full"></div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-accent/20 bg-gradient-to-r from-accent/5 via-primary/5 to-accent/5 p-10 md:p-14">
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-accent/20 blur-3xl"></div>
              <div className="relative z-10">
                <Text className="text-center text-lg font-medium leading-relaxed text-foreground md:text-xl">
                  While global supply chains use advanced tools to reduce loss
                  and extend shelf life, these solutions have often been
                  missing—or misapplied—in Nepal.{" "}
                  <span className="font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                    That&apos;s where Mandala Foods steps in.
                  </span>
                </Text>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Our Circular Model - The Solution */}
      <section id="circular-model" className="relative bg-white py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-7xl">
            <div className="mb-20 text-center">
              <Heading level={2} className="mb-6 font-extrabold">
                Our Circular Model
              </Heading>
              <div className="mx-auto mb-8 h-1 w-20 bg-gradient-to-r from-primary to-accent"></div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <Text className="mx-auto mb-6 max-w-2xl text-2xl font-semibold leading-tight text-foreground md:text-3xl">
                  Preserve → Upcycle → Redistribute
                </Text>
                <Text className="mx-auto max-w-3xl text-lg text-muted">
                  We integrate low-cost, high-impact solutions to reimagine the
                  fresh produce value chain
                </Text>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Preserve",
                  subtitle: "Extend shelf life at the source",
                  details: [
                    "MAP bags to slow spoilage",
                    "Ethylene absorbers to delay ripening",
                    "Thermal pallet covers to prevent heat stress",
                  ],
                  outcome:
                    "Improves quality, reduces early-stage loss, increases farmer incomes",
                },
                {
                  number: "02",
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
                  number: "03",
                  title: "Redistribute",
                  subtitle: "Deliver nutrition at scale",
                  details: [
                    "Nutritious food for children and families",
                    "Real, whole fruit alternative for every community",
                    "Healthier snack options for families with NCDs",
                  ],
                  outcome:
                    "Market access for local producers, affordable nutrition for rural communities",
                },
              ].map((step, index) => {
                const colors = [
                  {
                    bg: "bg-gradient-to-br from-accent to-accent-hover",
                    border: "border-accent",
                    text: "text-accent",
                  },
                  {
                    bg: "bg-gradient-to-br from-primary to-primary-hover",
                    border: "border-primary",
                    text: "text-primary",
                  },
                  {
                    bg: "bg-gradient-to-br from-accent to-primary",
                    border: "border-accent",
                    text: "text-accent",
                  },
                ];
                const color = colors[index];
                return (
                  <div
                    key={index}
                    className="group relative flex h-full flex-col bg-gray-50 p-8 transition-all duration-300 hover:bg-white hover:shadow-2xl lg:p-10"
                  >
                    <div
                      className={`absolute left-0 top-0 h-full w-1.5 ${color.bg} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                    ></div>
                    <div className="mb-6 flex-shrink-0">
                      <div
                        className={`mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl ${color.bg} text-2xl font-bold text-white shadow-lg`}
                      >
                        {step.number}
                      </div>
                      <Heading
                        level={3}
                        className="mb-2 text-2xl font-bold text-foreground"
                      >
                        {step.title}
                      </Heading>
                      <Text className="text-base font-semibold text-muted">
                        {step.subtitle}
                      </Text>
                    </div>
                    <ul
                      className={`mb-6 flex-1 space-y-3 border-l-2 ${color.border}/30 pl-5`}
                    >
                      {step.details.map((detail, i) => (
                        <li
                          key={i}
                          className="text-base leading-relaxed text-muted"
                        >
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <div className={`border-t ${color.border}/10 pt-6`}>
                      <Text
                        className={`text-sm font-semibold leading-relaxed ${color.text}`}
                      >
                        {step.outcome}
                      </Text>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* What Makes Us Different - Differentiation */}
      <section
        id="what-makes-us-different"
        className="bg-gradient-to-b from-gray-50 to-white py-20 md:py-28"
      >
        <Container>
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <Heading level={2} className="mb-6 font-extrabold">
                What Makes Us Different
              </Heading>
              <div className="mx-auto mb-8 h-1 w-20 bg-gradient-to-r from-accent via-primary to-accent"></div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Text className="mx-auto max-w-3xl text-lg text-muted md:text-xl">
                  Four pillars of innovation that set us apart
                </Text>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Localized Innovations, Global Insight",
                  description:
                    "First in Nepal to adapt solutions like passive MAP bags for fragmented rural markets",
                  badge: "INNOVATION",
                },
                {
                  title: "Behavior Change Built In",
                  description:
                    "Our products drive nutrition awareness, demand, and dietary transformation",
                  badge: "IMPACT",
                },
                {
                  title: "School-First Scalability",
                  description:
                    "Schools serve as anchor markets to reach children at scale",
                  badge: "REACH",
                },
                {
                  title: "Designed for Climate & Equity",
                  description:
                    "Reduces food waste, and centers women across the value chain",
                  badge: "SUSTAINABILITY",
                },
              ].map((pillar, index) => {
                const badgeColors = [
                  {
                    bg: "bg-accent/10",
                    text: "text-accent",
                    glow: "from-accent/20 to-accent/10",
                  },
                  {
                    bg: "bg-primary/10",
                    text: "text-primary",
                    glow: "from-primary/20 to-primary/10",
                  },
                  {
                    bg: "bg-accent/10",
                    text: "text-accent",
                    glow: "from-accent/20 to-primary/10",
                  },
                  {
                    bg: "bg-primary/10",
                    text: "text-primary",
                    glow: "from-primary/20 to-accent/10",
                  },
                ];
                const badgeColor = badgeColors[index];
                return (
                  <div key={index} className="group relative h-full">
                    <div
                      className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${badgeColor.glow} opacity-0 blur-xl transition duration-500 group-hover:opacity-100`}
                    ></div>
                    <div className="relative flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:border-accent/30 hover:shadow-xl">
                      <div
                        className={`mb-5 inline-block self-start rounded-full ${badgeColor.bg} px-4 py-2`}
                      >
                        <Text
                          className={`text-xs font-bold tracking-widest ${badgeColor.text}`}
                        >
                          {pillar.badge}
                        </Text>
                      </div>
                      <Heading level={3} className="mb-4 text-xl font-bold">
                        {pillar.title}
                      </Heading>
                      <div className="mb-5 h-1 w-12 bg-gradient-to-r from-accent to-primary"></div>
                      <Text className="flex-1 leading-relaxed text-muted">
                        {pillar.description}
                      </Text>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Real Outcomes, Real Impact - Results */}
      <section
        id="real-outcomes-real-impact"
        className="relative overflow-hidden bg-white py-20 md:py-28"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-white to-primary/5"></div>
        <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl"></div>
        <Container>
          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <Heading level={2} className="mb-6 font-extrabold">
                Real Outcomes, Real Impact
              </Heading>
              <div className="mx-auto mb-8 h-1 w-20 bg-gradient-to-r from-accent via-primary to-accent"></div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Text className="mx-auto max-w-3xl text-lg text-muted md:text-xl">
                  Our target include measurable results that transform lives and
                  communities
                </Text>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  value: "269 MT",
                  label: "Surplus fruit rescued annually",
                  subtext: "",
                },
                {
                  value: "147,000+",
                  label: "Children nourished each year",
                  subtext: "",
                },
                {
                  value: "1,000+",
                  label: "Women employed",
                  subtext: "In sourcing, processing, and sales",
                },
                {
                  value: "30-40%",
                  label: "More income for farmers",
                  subtext: "",
                },
                {
                  value: "$8.85 → $3.21",
                  label: "Cost per child",
                  subtext: "",
                },
                {
                  value: "3x",
                  label: "More children nourished",
                  subtext: "In just 5 years",
                },
              ].map((metric, index) => {
                const colors = [
                  {
                    gradient: "from-accent to-primary",
                    text: "text-accent",
                    line: "bg-accent",
                  },
                  {
                    gradient: "from-primary to-accent",
                    text: "text-primary",
                    line: "bg-primary",
                  },
                  {
                    gradient: "from-accent to-accent-hover",
                    text: "text-accent",
                    line: "bg-gradient-to-r from-accent to-primary",
                  },
                  {
                    gradient: "from-primary to-primary-hover",
                    text: "text-primary",
                    line: "bg-gradient-to-r from-primary to-accent",
                  },
                  {
                    gradient: "from-accent to-primary",
                    text: "text-accent",
                    line: "bg-accent",
                  },
                  {
                    gradient: "from-primary to-secondary",
                    text: "text-primary",
                    line: "bg-primary",
                  },
                ];
                const color = colors[index];
                return (
                  <div key={index} className="group relative h-full">
                    <div
                      className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${color.gradient} opacity-0 blur transition duration-500 group-hover:opacity-30`}
                    ></div>
                    <div className="relative flex h-full min-h-[240px] flex-col justify-center rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-lg transition-all duration-300 hover:shadow-2xl">
                      <div
                        className={`mb-5 text-4xl font-extrabold ${color.text}`}
                      >
                        {metric.value}
                      </div>
                      <div
                        className={`mx-auto mb-4 h-1 w-12 ${color.line}`}
                      ></div>
                      <Text className="mb-2 font-semibold text-foreground">
                        {metric.label}
                      </Text>
                      {metric.subtext && (
                        <Text className="text-sm text-muted">
                          {metric.subtext}
                        </Text>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Evidence-Based, Field-Tested - Validation */}
      <section
        id="evidence-based-field-tested"
        className="bg-gradient-to-b from-gray-50 to-white py-20 md:py-28"
      >
        <Container>
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <Heading level={2} className="mb-6 font-extrabold">
                Evidence-Based, Field-Tested
              </Heading>
              <div className="mx-auto mb-8 h-1 w-20 bg-gradient-to-r from-primary via-accent to-primary"></div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Text className="mx-auto max-w-3xl text-lg text-muted md:text-xl">
                  Our approach combines global research and local pilot data
                </Text>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  finding: "Better post-harvest handling",
                  result: "Less loss, better prices",
                },
                {
                  finding: "Locally made, shelf-stable, fruit product",
                  result:
                    "Improved vitamin A, zinc, magnesium, and iron intake",
                },
                {
                  finding: "School meals",
                  result: "Higher attendance and long-term learning outcomes",
                },
              ].map((item, index) => {
                const colors = [
                  {
                    bg: "bg-gradient-to-br from-accent to-accent-hover",
                    line: "bg-gradient-to-r from-accent to-primary",
                    text: "text-accent",
                    glow: "from-accent/10 to-accent/5",
                  },
                  {
                    bg: "bg-gradient-to-br from-primary to-primary-hover",
                    line: "bg-gradient-to-r from-primary to-accent",
                    text: "text-primary",
                    glow: "from-primary/10 to-primary/5",
                  },
                  {
                    bg: "bg-gradient-to-br from-accent to-primary",
                    line: "bg-gradient-to-r from-accent to-primary",
                    text: "text-accent",
                    glow: "from-accent/10 to-primary/5",
                  },
                ];
                const color = colors[index];
                return (
                  <div key={index} className="group relative h-full">
                    <div
                      className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-b ${color.glow} opacity-0 transition duration-300 group-hover:opacity-100`}
                    ></div>
                    <div className="relative flex h-full min-h-[280px] flex-col rounded-2xl border border-gray-200 bg-white p-8 text-center transition-all duration-300 hover:shadow-xl">
                      <div
                        className={`mx-auto mb-6 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full ${color.bg} text-2xl font-bold text-white shadow-lg`}
                      >
                        ✓
                      </div>
                      <Text className="mb-5 flex-1 text-lg font-semibold text-foreground">
                        {item.finding}
                      </Text>
                      <div
                        className={`mx-auto mb-5 h-1 w-16 ${color.line}`}
                      ></div>
                      <Text className={`font-semibold ${color.text}`}>
                        {item.result}
                      </Text>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Built for Scale - Vision */}
      <section
        id="built-for-scale"
        className="relative overflow-hidden bg-white py-20 md:py-28"
      >
        <Container>
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <Heading level={2} className="mb-6 font-extrabold">
                Built for Scale
              </Heading>
              <div className="mx-auto mb-8 h-1 w-20 bg-gradient-to-r from-accent to-primary"></div>
              <Text className="mb-6 text-xl font-medium leading-relaxed text-foreground">
                Our circular model isn&apos;t just working—it&apos;s gaining
                momentum.
              </Text>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Text className="mx-auto max-w-3xl text-lg text-muted">
                  We&apos;re building toward a future where:
                </Text>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  target: "2M children",
                  description: "Nourished nationwide by 2035",
                },
                {
                  target: "Rural economies",
                  description: "Thrive through upcycled value chains",
                },
                {
                  target: "Circular Model",
                  description: "A regenerative approach to food systems",
                },
                {
                  target: "New standard for global south",
                  description: "Affordable, nutritious food at scale",
                },
              ].map((vision, index) => {
                const colors = [
                  {
                    bg: "bg-gradient-to-br from-accent to-primary",
                    border: "hover:border-accent",
                    text: "text-accent",
                    glow: "from-accent/20 to-primary/20",
                    line: "bg-gradient-to-r from-accent to-primary",
                  },
                  {
                    bg: "bg-gradient-to-br from-primary to-accent",
                    border: "hover:border-primary",
                    text: "text-primary",
                    glow: "from-primary/20 to-accent/20",
                    line: "bg-gradient-to-r from-primary to-accent",
                  },
                  {
                    bg: "bg-gradient-to-br from-accent via-primary to-accent",
                    border: "hover:border-accent",
                    text: "text-accent",
                    glow: "from-accent/20 to-accent/10",
                    line: "bg-gradient-to-r from-accent to-primary",
                  },
                  {
                    bg: "bg-gradient-to-br from-primary to-primary-hover",
                    border: "hover:border-primary",
                    text: "text-primary",
                    glow: "from-primary/20 to-primary/10",
                    line: "bg-gradient-to-r from-primary to-accent",
                  },
                ];
                const color = colors[index];
                return (
                  <div key={index} className="group relative h-full">
                    <div
                      className={`absolute -inset-1 rounded-2xl bg-gradient-to-br ${color.glow} opacity-0 blur-xl transition duration-500 group-hover:opacity-100`}
                    ></div>
                    <div
                      className={`relative flex h-full min-h-[280px] flex-col rounded-2xl border-2 border-gray-200 bg-white p-8 text-center transition-all duration-300 ${color.border} hover:shadow-2xl`}
                    >
                      <div
                        className={`mx-auto mb-5 inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full ${color.bg} text-3xl font-bold text-white shadow-lg`}
                      >
                        {index + 1}
                      </div>
                      <Heading
                        level={3}
                        className={`mb-4 flex-1 text-xl font-bold ${color.text}`}
                      >
                        {vision.target}
                      </Heading>
                      <div
                        className={`mx-auto mb-5 h-1 w-12 ${color.line}`}
                      ></div>
                      <Text className="leading-relaxed text-muted">
                        {vision.description}
                      </Text>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
