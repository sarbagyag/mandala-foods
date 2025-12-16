import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { getOurStoriesMetadata } from "@/domains/seo/metadata";
import { getStories } from "@/services/stories";
import { getPbImageUrl, StoryRecord } from "@/lib/pocketbase";

export const metadata: Metadata = getOurStoriesMetadata();

export const dynamic = "force-dynamic";

export default async function OurStoryPage() {
  const stories = await getStories();

  return (
    <section
      style={{ paddingTop: "100px" }}
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-16 md:py-24"
    >
      <Container>
        <div className="mx-auto max-w-7xl">
          {/* Header Section */}
          <div className="mb-16 text-center">
            <span
              className="inline-block rounded-full bg-[#00a54f]/10 px-5 py-2 text-xs font-bold uppercase tracking-widest text-[#00a54f] mb-6"
              style={{
                fontFamily: "Gilroy, sans-serif",
                letterSpacing: "0.15em",
              }}
            >
              News & Stories
            </span>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
              style={{
                fontFamily: "Gilroy, sans-serif",
                letterSpacing: "-0.02em",
              }}
            >Our Latest Updates
              Our Latest Updates
            </h1>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
            <p
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
              style={{
                fontFamily: "Gilroy, sans-serif",
              }}
            >
              Discover the stories, insights, and innovations shaping our journey
            </p>
 
            </div>
         </div>

          {stories.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl shadow-sm ring-1 ring-gray-100">
              <p className="text-gray-500 mb-4 text-lg">No stories found at the moment.</p>
              <p className="text-sm text-gray-400">Please check the PocketBase admin panel to add stories.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
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
  // PocketBase returns file fields as string
  const imageUrl = story.cover_image
    ? getPbImageUrl(story.collectionId, story.id, story.cover_image)
    : null;
  const linkHref = `/our-stories/${story.slug}`;

  return (
    <Link href={linkHref} className="group">
      <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-gray-100 transition-all duration-300 hover:shadow-2xl hover:ring-[#00a54f]/20 hover:-translate-y-1">
        {/* Image */}
        {imageUrl && (
          <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
            <Image
              src={imageUrl}
              alt={story.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
              unoptimized
            />
            {story.category && (
              <div className="absolute top-4 left-4">
                <span
                  className="inline-block rounded-full bg-white/95 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#00a54f] shadow-sm"
                  style={{
                    fontFamily: "Gilroy, sans-serif",
                    letterSpacing: "0.08em",
                  }}
                >
                  {story.category}
                </span>
              </div>
            )}
          </div>
        )}

        {/* Content */}
        <div className="flex flex-1 flex-col p-6 lg:p-7">
          {/* Date and Author */}
          <div className="mb-3 flex items-center gap-2 text-xs text-gray-500">
            <time dateTime={story.published_date}>
              {new Date(story.published_date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </time>
            {story.author && (
              <>
                <span className="text-gray-300">•</span>
                <span>{story.author}</span>
              </>
            )}
          </div>

          {/* Title */}
          <h3
            className="mb-3 text-xl font-bold leading-tight text-gray-900 transition-colors group-hover:text-[#00a54f] lg:text-2xl line-clamp-2"
            style={{
              fontFamily: "Gilroy, sans-serif",
              letterSpacing: "-0.01em",
            }}
          >
            {story.title}
          </h3>

          {/* Excerpt */}
          <p
            className="mb-4 flex-1 text-sm leading-relaxed text-gray-600 line-clamp-3"
            style={{
              fontFamily: "Gilroy, sans-serif",
            }}
          >
            {story.excerpt}
          </p>

          {/* Read More Link */}
          <div className="flex items-center gap-2 text-sm font-semibold text-[#00a54f] transition-all group-hover:gap-3">
            <span
              style={{
                fontFamily: "Gilroy, sans-serif",
              }}
            >
              Read More
            </span>
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
}
