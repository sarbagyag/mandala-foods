import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Section";

export function OurJourneySection() {
  return (
    <section id="our-journey" className="bg-white py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Author column */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>Our journey</Eyebrow>
            <h2 className="text-balance text-[2rem] font-bold leading-[1.1] tracking-[-0.03em] text-ink md:text-[2.75rem]">
              A letter from our founder
            </h2>
            <figure className="mt-10">
              <div className="relative aspect-[4/5] max-w-sm overflow-hidden rounded-[1.5rem] bg-mist">
                <Image
                  src="/images/team/board/sophiya.png"
                  alt="Sophiya Tamang"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 80vw, 30vw"
                />
              </div>
              <figcaption className="mt-5">
                <p className="text-lg font-bold text-ink">Sophiya Tamang</p>
                <p className="mt-1 text-sm leading-relaxed text-gray-600">
                  Co-Founder &amp; CEO, Mandala Foods
                  <br />
                  Co-Founder, Mandala Agrifresh
                  <br />
                  Co-Founder &amp; CEO, Idea2Impact
                </p>
              </figcaption>
            </figure>
          </aside>

          {/* Letter */}
          <div className="max-w-2xl space-y-6 [&>p:not([class])]:text-lg [&>p:not([class])]:leading-[1.8] [&>p:not([class])]:text-gray-700">
            <p className="text-xl leading-relaxed text-ink md:text-2xl md:leading-relaxed">
              In Nepal, half of all fruits and vegetables never reach a plate because they lose their quality and
              freshness on their long journey from farm to fork. Perfectly good food is lost — in fields, on the road,
              in markets, and even in kitchens. Farmers lose income. Families lose nutrition.
            </p>
            <p>That&rsquo;s where our story began.</p>
            <p>
              Through Mandala Agrifresh, we helped farmers reduce post-harvest loss with simple, affordable
              technologies that could keep fruits and vegetables fresh for longer. But we realized that even when
              fruits reached markets, many were still rejected, not for their quality, but for their looks. Perfectly
              edible fruits were being discarded while children went without nutritious food.
            </p>
            <p className="pt-2 text-xl font-bold text-ink">Then came a personal moment of truth.</p>
            <p>
              While traveling with my six-month-old daughter, I searched for safe, fruit-based purees, something
              easily available abroad but not in Nepal. It struck me: the very fruits being wasted here could become
              the nourishing food I wanted for her. That spark became the Mandala Foods.
            </p>
            <p>In 2025, we founded Idea2Impact and Mandala Foods with a clear belief:</p>
            <blockquote className="my-10 border-l-4 border-accent py-1 pl-6 text-2xl font-semibold leading-snug tracking-[-0.02em] text-ink md:text-[1.75rem]">
              Good nutrition should be accessible to all — and no nourishing food should ever go to waste.
            </blockquote>
            <p>
              Today, we upcycle surplus and market-rejected fruits — good harvests overlooked due to cosmetic
              standards — into safe, affordable, and nutrient-rich fruit-based foods crafted for schools and families
              across Nepal.
            </p>
            <p>
              Our products are more than food. Every jar and pouch we create is a proof that food loss and waste can
              become nourishment, and that circularity can restore dignity.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
