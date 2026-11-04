import Image from "next/image";
import { MissionSection as MissionSectionType } from "@/domains/content/types";
import { Container } from "@/components/ui/Container";
import { ArrowLink, SectionHeader } from "@/components/ui/Section";

interface MissionSectionProps {
  data: MissionSectionType;
}

/** The Mandala Group companies, side by side. */
export function MissionSection({ data }: MissionSectionProps) {
  const { id, eyebrow, heading, subheading, missions } = data;

  return (
    <section id={id} className="bg-white py-20 md:py-28">
      <Container>
        <SectionHeader eyebrow={eyebrow} title={heading} lead={subheading} />

        <div className="grid gap-6 md:grid-cols-2">
          {missions.map((m) => (
            <article
              key={m.id}
              className="flex flex-col overflow-hidden rounded-[1.5rem] border border-line bg-white transition-shadow duration-300 hover:shadow-[0_24px_48px_-28px_rgb(0_0_0/0.3)]"
            >
              {m.image && (
                <div className="relative flex aspect-[16/9] items-center justify-center bg-mist">
                  <Image
                    src={m.image.src}
                    alt={m.image.alt}
                    width={m.image.width ?? 600}
                    height={m.image.height ?? 600}
                    className="h-[62%] w-auto rounded-2xl object-contain mix-blend-multiply"
                    sizes="(max-width: 768px) 60vw, 25vw"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col p-8 md:p-10">
                <h3 className="text-2xl font-bold tracking-[-0.025em] text-ink">{m.title}</h3>
                <p className="mt-3 flex-1 text-[1.05rem] leading-relaxed text-gray-600">{m.description}</p>
                {m.cta && (
                  <div className="mt-8">
                    <ArrowLink href={m.cta.href} external={m.cta.external} tone="green">
                      {m.cta.text}
                    </ArrowLink>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
