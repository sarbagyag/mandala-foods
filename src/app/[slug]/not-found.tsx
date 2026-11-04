import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Section";

/*
 * Every single-segment URL (e.g. /some-typo) is handled by the Digital ID
 * route, so this is also the page most mistyped links land on.
 */
export default function IdentityNotFound() {
  return (
    <section className="flex min-h-[80vh] items-center bg-white pb-20 pt-32">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Error 404</Eyebrow>
          <h1 className="text-balance text-[2.5rem] font-bold leading-[1.05] tracking-[-0.035em] text-ink md:text-6xl">
            We couldn&apos;t find that page.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            The page or digital ID you&apos;re looking for doesn&apos;t exist or has been deactivated.
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
