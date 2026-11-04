import { Container } from "@/components/ui/Container";
import { ArrowLink, SectionHeader } from "@/components/ui/Section";
import { StoryCard } from "@/components/publications/StoryCard";
import { StoryRecord } from "@/lib/pocketbase";

export function LatestStories({ stories }: { stories: StoryRecord[] }) {
  if (stories.length === 0) return null;

  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <SectionHeader
          eyebrow="Publications"
          title="News, reports and insights"
          action={<ArrowLink href="/publications">All publications</ArrowLink>}
        />
        <ul className="grid gap-10 md:grid-cols-3 md:gap-8">
          {stories.map((s) => (
            <li key={s.id}>
              <StoryCard story={s} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
