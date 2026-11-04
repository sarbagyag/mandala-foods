import { ImpactSection as ImpactSectionType } from "@/domains/content/types";
import { Container } from "@/components/ui/Container";
import { ArrowLink, SectionHeader } from "@/components/ui/Section";

interface ImpactSectionProps {
  data: ImpactSectionType;
}

export function ImpactSection({ data }: ImpactSectionProps) {
  const { id, eyebrow, heading, subheading, metrics, cta } = data;

  return (
    <section id={id} className="bg-forest py-20 md:py-28">
      <Container>
        <SectionHeader
          eyebrow={eyebrow}
          title={heading}
          lead={subheading}
          tone="light"
          action={
            cta && (
              <ArrowLink href={cta.href} external={cta.external} tone="light">
                {cta.text}
              </ArrowLink>
            )
          }
        />

        <ol className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <li key={m.id} className="border-t border-white/15 pt-6">
              <span className="text-sm font-bold tabular-nums text-accent">{String(i + 1).padStart(2, "0")}</span>
              {m.value && <p className="mt-3 text-4xl font-bold tracking-[-0.03em] text-white">{m.value}</p>}
              <h3 className="mt-3 text-xl font-bold leading-snug tracking-[-0.02em] text-white">{m.label}</h3>
              {m.description && <p className="mt-3 text-[0.95rem] leading-relaxed text-white/65">{m.description}</p>}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
