import { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Eyebrow } from "@/components/ui/Section";
import { CTABand } from "@/components/ui/CTABand";
import { ProductVideos } from "@/components/sections/ProductVideos";
import { productAccent, productImageUrl } from "@/components/products/ProductTile";
import { getProducts } from "@/services/products";
import { getProductVideos } from "@/services/product-videos";
import { ProductRecord } from "@/lib/pocketbase";
import { siteConfig } from "@/config/site";
import { getProductsMetadata } from "@/domains/seo/metadata";
import { cn } from "@/lib/utils";

export const metadata: Metadata = getProductsMetadata();

export const dynamic = "force-dynamic";

type CategoryGroup = { category: string; label: string; products: ProductRecord[] };

const titleCase = (s: string) => s.charAt(0).toUpperCase() + s.slice(1).replace(/-/g, " ");

/** Products arrive sorted by category_order, so consecutive runs form the groups. */
function groupProducts(products: ProductRecord[]): CategoryGroup[] {
  const groups: CategoryGroup[] = [];
  for (const product of products) {
    const category = product.category || "other";
    const last = groups[groups.length - 1];
    if (last && last.category === category) last.products.push(product);
    else groups.push({ category, label: titleCase(category), products: [product] });
  }
  return groups;
}

function ProductFeature({ product, flip }: { product: ProductRecord; flip: boolean }) {
  const accent = productAccent(product);
  const img = productImageUrl(product);

  return (
    <article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
      <div
        className={cn("relative aspect-[4/5] overflow-hidden rounded-[2rem] sm:aspect-square lg:aspect-[4/5]", flip && "lg:order-2")}
        style={{ backgroundColor: `${accent}14` }}
      >
        {img && (
          <Image
            src={img}
            alt={`${product.name} — ${product.one_liner}`}
            fill
            unoptimized
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        )}
      </div>

      <div className={cn(flip && "lg:order-1")}>
        {product.category_tag && <Eyebrow tone="orange">{product.category_tag}</Eyebrow>}
        <h3 className="text-balance text-[2.25rem] font-bold leading-[1.05] tracking-[-0.035em] text-ink md:text-5xl">
          {product.name}
        </h3>
        {product.one_liner && (
          <p className="mt-4 text-xl font-semibold leading-snug tracking-[-0.01em] text-ink/80">
            {product.one_liner}
          </p>
        )}
        {product.excerpt && <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-600">{product.excerpt}</p>}

        {product.features?.length > 0 && (
          <ul className="mt-9 grid gap-x-8 gap-y-6 border-t border-line pt-8 sm:grid-cols-2">
            {product.features.map((f, i) => (
              <li key={i} className="flex gap-3">
                <span
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: `${accent}1f`, color: accent }}
                >
                  <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[0.95rem] font-bold leading-snug text-ink">{f.title}</p>
                  {f.subtitle && <p className="mt-1 text-sm leading-snug text-gray-600">{f.subtitle}</p>}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

export default async function ProductsPage() {
  const [products, videos] = await Promise.all([getProducts(), getProductVideos()]);
  const groups = groupProducts(products);
  // Alternate image side across the whole page, not per category
  const flipped = new Set(products.filter((_, i) => i % 2 === 1).map((p) => p.id));

  return (
    <>
      <PageHero
        eyebrow="Our products"
        title="Nutrition made easy, crafted for everyday life."
        lead="We turn local Nepali fruits — the ones markets overlook but nature made perfect — into delicious, fruit-based foods. Made from real fruit, sourced directly from farmers, minimally processed and packed with natural goodness."
      >
        {groups.length > 1 && (
          <nav aria-label="Product categories">
            <ul className="flex flex-wrap gap-2">
              {groups.map((g) => (
                <li key={g.category}>
                  <a
                    href={`#${g.category}`}
                    className="inline-flex h-10 items-center gap-2 rounded-full border border-line bg-white px-4 text-sm font-semibold text-ink transition-colors hover:border-ink"
                  >
                    {g.label}
                    <span className="text-xs font-bold tabular-nums text-gray-400">{g.products.length}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </PageHero>

      <ProductVideos videos={videos} />

      {groups.length === 0 ? (
        <section className="bg-white py-24">
          <Container>
            <p className="text-center text-lg text-gray-600">Our product range is being updated. Please check back soon.</p>
          </Container>
        </section>
      ) : (
        groups.map((group, gi) => (
          <section
            key={group.category}
            id={group.category}
            aria-labelledby={`${group.category}-heading`}
            className={cn("py-20 md:py-28", gi % 2 === 0 ? "bg-mist" : "bg-white")}
          >
            <Container>
              <header className="mb-14 flex items-baseline justify-between gap-6 border-b border-ink/10 pb-6 md:mb-20">
                <h2
                  id={`${group.category}-heading`}
                  className="text-[2rem] font-bold tracking-[-0.03em] text-ink md:text-[2.75rem]"
                >
                  {group.label}
                </h2>
                <span className="text-sm font-semibold text-gray-500">
                  {group.products.length} {group.products.length === 1 ? "product" : "products"}
                </span>
              </header>
              <div className="space-y-24 md:space-y-32">
                {group.products.map((p) => (
                  <ProductFeature key={p.id} product={p} flip={flipped.has(p.id)} />
                ))}
              </div>
            </Container>
          </section>
        ))
      )}

      <CTABand
        eyebrow="Stockists & partners"
        title="Interested in stocking Mandala Foods?"
        lead="We supply schools, retailers and institutions across Nepal. Tell us what you need and we'll get back to you."
        primary={{ text: "Contact us", href: `mailto:${siteConfig.contact.email}` }}
        secondary={{ text: "School nutrition", href: "/reimagining-nutrition" }}
      />
    </>
  );
}
