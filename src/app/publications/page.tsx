import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { StoryCard } from "@/components/publications/StoryCard";
import { getOurStoriesMetadata } from "@/domains/seo/metadata";
import { getStories } from "@/services/stories";

export const metadata: Metadata = getOurStoriesMetadata();

export const dynamic = "force-dynamic";

export default async function PublicationsPage() {
  const stories = await getStories();
  const [featured, ...rest] = stories;

  return (
    <>
      <PageHero
        eyebrow="Publications"
        title="News, reports and insights"
        lead="Technical reports, blogs, and insights shaping our journey."
      />

      <section className="bg-white py-16 md:py-24">
        <Container>
          {!featured ? (
            <div className="rounded-[1.5rem] bg-mist px-6 py-20 text-center">
              <p className="text-lg font-semibold text-ink">No publications yet.</p>
              <p className="mt-2 text-gray-600">New reports and stories will appear here soon.</p>
            </div>
          ) : (
            <>
              <StoryCard story={featured} featured />
              {rest.length > 0 && (
                <ul className="mt-20 grid gap-x-8 gap-y-14 border-t border-line pt-16 md:grid-cols-2 lg:grid-cols-3">
                  {rest.map((s) => (
                    <li key={s.id}>
                      <StoryCard story={s} />
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}
        </Container>
      </section>
    </>
  );
}
