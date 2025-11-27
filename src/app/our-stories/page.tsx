import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { getOurStoriesMetadata } from "@/domains/seo/metadata";
import { getStories } from "@/services/stories";
import { getPbImageUrl, StoryRecord } from "@/lib/pocketbase";

export const metadata: Metadata = getOurStoriesMetadata();

export default async function OurStoryPage() {
  const stories = await getStories();

  return (
    <section
      style={{ paddingTop: "100px" }}
      className="min-h-screen bg-linear-to-br from-gray-50 to-white py-16 md:py-24"
    >
      <Container>
        <div className="mx-auto max-w-4xl">
          {/* Badge */}
          <div className="mb-6 text-center">
            <span
              className="inline-block rounded-full bg-[#00a54f] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white"
              style={{
                fontFamily: "Gilroy, sans-serif",
                letterSpacing: "0.1em",
              }}
            >
              Latest News
            </span>
          </div>

          {stories.length === 0 ? (
             <div className="text-center py-12 bg-white rounded-2xl shadow-sm ring-1 ring-gray-100">
              <p className="text-gray-500 mb-4">No stories found at the moment.</p>
              <p className="text-sm text-gray-400">Please check the PocketBase admin panel to add stories.</p>
            </div>
          ) : (
            <div className="grid gap-8">
              {stories.map((story) => (
                <StoryCard key={story.id} story={story} />
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

function StoryCard({ story }: { story: StoryRecord }) {
  // PocketBase returns file fields as arrays, get the first image
  const imageUrl = story.cover_image?.[0]
    ? getPbImageUrl(story.collectionId, story.id, story.cover_image[0])
    : null;
  const linkHref = `/our-stories/${story.slug}`;

  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-gray-100 transition-shadow hover:shadow-2xl">
      {/* Image */}
      {imageUrl && (
        <div className="relative aspect-video">
          <Image
            src={imageUrl}
            alt={story.title}
            fill
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1000px"
            priority={false}
            unoptimized
          />
        </div>
      )}

      {/* Content */}
      <div className="px-8 py-10 md:px-12 md:py-12 mb-8">
        <h4
          className="mb-5 text-2xl font-bold leading-tight text-gray-900 md:text-3xl lg:text-4xl"
          style={{
            fontFamily: "Gilroy, sans-serif",
            letterSpacing: "-0.015em",
            paddingBottom: "20px",
          }}
        >
          {story.title}
        </h4>

        <p
          className="mb-8 text-base leading-relaxed text-gray-600 md:text-lg"
          style={{
            fontFamily: "Gilroy, sans-serif",
            fontWeight: 400,
            paddingBottom: "20px",
          }}
        >
          {story.excerpt}
        </p>

        {/* CTA */}
        <Link
          href={linkHref}
          className="group inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-[#00a54f] to-[#1acf1b] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:shadow-lg"
          style={{
            fontFamily: "Gilroy, sans-serif",
          }}
        >
          Read Full Story
          <svg
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>

        <p
          className="mt-5 text-xs tracking-wide text-gray-400"
          style={{
            fontFamily: "Gilroy, sans-serif",
            letterSpacing: "0.05em",
            paddingTop: "10px",
          }}
        >
          {story.author ? `${story.author} • ` : ''}
          {new Date(story.published_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>
    </article>
  );
}
