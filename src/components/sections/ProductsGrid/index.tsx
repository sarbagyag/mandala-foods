import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductsGridSection as ProductsGridSectionType } from "@/domains/content/types";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/Section";

interface ProductsGridSectionProps {
  data: ProductsGridSectionType;
}

/** "Who we serve" — audience cards, each leading somewhere useful. */
export function ProductsGrid({ data }: ProductsGridSectionProps) {
  const { id, eyebrow, heading, subheading, products } = data;

  return (
    <section id={id} className="bg-mist py-20 md:py-28">
      <Container>
        <SectionHeader eyebrow={eyebrow} title={heading} lead={subheading} />

        <ul className="grid gap-6 md:grid-cols-3">
          {products.map((item) => {
            const href = item.cta?.href ?? "/products";
            const isAnchor = href.startsWith("#");
            const card = (
              <>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" aria-hidden="true" />
                  <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-ink backdrop-blur-sm">
                    {item.title}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                    <h3 className="text-2xl font-bold leading-tight tracking-[-0.025em] text-white">{item.headline}</h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-white/80">{item.description}</p>
                    {item.cta && (
                      <span className="mt-5 inline-flex items-center gap-2 text-[0.95rem] font-semibold text-white">
                        {item.cta.text}
                        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                      </span>
                    )}
                  </div>
                </div>
              </>
            );
            const cls =
              "group block overflow-hidden rounded-[1.5rem] bg-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";
            return (
              <li key={item.id}>
                {isAnchor ? (
                  <a href={href} className={cls}>
                    {card}
                  </a>
                ) : (
                  <Link href={href} className={cls}>
                    {card}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
