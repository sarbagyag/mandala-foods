import { Container } from "@/components/ui/Container";
import { ArrowLink, SectionHeader } from "@/components/ui/Section";
import { ProductTile } from "@/components/products/ProductTile";
import { ProductRecord } from "@/lib/pocketbase";

export function ProductShowcase({ products }: { products: ProductRecord[] }) {
  if (products.length === 0) return null;

  return (
    <section id="range" className="overflow-hidden bg-white py-20 md:py-28">
      <Container>
        <SectionHeader
          eyebrow="Our range"
          title="Made from fruit the market overlooked"
          lead="Minimally processed spreads, purées and snacks made from real Nepali fruit, sourced directly from farmers."
          action={<ArrowLink href="/products">View all products</ArrowLink>}
        />
      </Container>

      {/* Swipe row on small screens, grid from lg. auto-fill (not auto-fit) keeps empty
          columns, so one or two products stay tile-sized instead of stretching full width. */}
      <Container>
        <ul className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-[repeat(auto-fill,minmax(13rem,1fr))] lg:gap-6 lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden">
          {products.map((p) => (
            <li key={p.id} className="w-[68vw] max-w-[17rem] shrink-0 snap-start sm:w-[42vw] lg:w-auto lg:max-w-none">
              <ProductTile product={p} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
