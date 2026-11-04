import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Section";

export function MissionVisionSection() {
  return (
    <section id="mission-vision" className="bg-forest py-20 md:py-28">
      <Container>
        <div className="max-w-4xl">
          <Eyebrow tone="light">Our belief</Eyebrow>
          <p className="text-balance text-[1.9rem] font-bold leading-[1.2] tracking-[-0.03em] text-white md:text-[2.75rem]">
            Good nutrition should be within everyone&rsquo;s reach — and no nourishing food should ever go to waste.
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            This belief is the foundation of who we are. We see food not just as a commodity, but as a force for
            dignity, livelihood, and health.
          </p>
        </div>

        <div className="mt-16 grid gap-12 border-t border-white/15 pt-12 md:mt-20 md:grid-cols-2 md:gap-16">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Our mission</h3>
            <p className="mt-4 text-xl leading-relaxed text-white/90 md:text-2xl md:leading-relaxed">
              To build a circular food economy that transforms waste into worth — upcycling local harvests into
              nutritious products that nourish people and empower those who grow our food.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Our vision</h3>
            <p className="mt-4 text-xl leading-relaxed text-white/90 md:text-2xl md:leading-relaxed">
              A world where every harvest — and every person — gets the chance they deserve. Where no good is
              wasted, and healthy food choices are never a luxury.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
