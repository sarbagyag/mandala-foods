import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Section";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center bg-white pb-20 pt-32">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Error 404</Eyebrow>
          <h1 className="text-balance text-[2.5rem] font-bold leading-[1.05] tracking-[-0.035em] text-ink md:text-6xl">
            We couldn&apos;t find that page.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            It may have been moved or deleted. Try one of these instead.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/" size="lg" arrow>
              Go to homepage
            </Button>
            <Button href="/products" variant="outline" size="lg">
              Our products
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
