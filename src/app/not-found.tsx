import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8 text-8xl font-bold text-primary">404</div>
          <Heading level={1} className="mb-4">
            Page Not Found
          </Heading>
          <Text variant="lead" className="mb-8 text-muted">
            Sorry, we couldn't find the page you're looking for. It might have been moved
            or deleted.
          </Text>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button href="/" variant="primary" size="lg">
              Go Home
            </Button>
            <Button href="/our-stories" variant="outline" size="lg">
              View Our Stories
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
