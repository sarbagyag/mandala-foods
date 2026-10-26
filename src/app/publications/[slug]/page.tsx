import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { pb, getPbImageUrl, getPbFileUrl, StoryRecord } from "@/lib/pocketbase";
import { StoryContent } from "@/components/publications/StoryContent";
import { DocumentsSection } from "@/components/publications/DocumentsSection";
import { siteConfig } from "@/config/site";
import { generateMetadata as buildSEOMetadata } from "@/domains/seo/metadata";
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  renderStructuredData,
} from "@/domains/seo/structured-data";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

// Generate metadata dynamically
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const story = await pb
      .collection("stories")
      .getFirstListItem<StoryRecord>(`slug="${slug}"`);
    const imageUrl = story.cover_image
      ? getPbImageUrl(story.collectionId, story.id, story.cover_image)
      : null;

    return buildSEOMetadata({
      title: story.title,
      description: story.excerpt,
      // Falls back to siteConfig.ogImage when the story has no cover image.
      ogImage: imageUrl || undefined,
      canonical: `${siteConfig.url}/publications/${slug}`,
    });
  } catch {
    return {
      title: "Story Not Found | Mandala Foods",
    };
  }
}

async function getStory(slug: string) {
  try {
    const story = await pb
      .collection("stories")
      .getFirstListItem<StoryRecord>(`slug="${slug}"`);
    return story;
  } catch (error) {
    return null;
  }
}

export default async function StoryDetailPage({ params }: Props) {
  const { slug } = await params;
  const story = await getStory(slug);

  if (!story) {
    notFound();
  }

  const imageUrl = story.cover_image
    ? getPbImageUrl(story.collectionId, story.id, story.cover_image)
    : null;

  const videoUrls = (story.videos ?? [])
    .map((file) => getPbFileUrl(story.collectionId, story.id, file))
    .filter((url): url is string => Boolean(url));

  const articleSchema = generateArticleSchema({
    title: story.title,
    description: story.excerpt,
    image: imageUrl,
    author: story.author,
    publishedDate: story.published_date,
    updatedDate: story.updated,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: siteConfig.url },
    { name: "Publications", item: `${siteConfig.url}/publications` },
    { name: story.title, item: `${siteConfig.url}/publications/${slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: renderStructuredData(articleSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: renderStructuredData(breadcrumbSchema),
        }}
      />
      <article className="min-h-screen bg-white pt-32 pb-20">
        <Container>
          <div className="mx-auto max-w-4xl">
            <Link
              href="/publications"
              className="inline-flex items-center text-sm text-gray-500 hover:text-[#00a54f] mb-8 transition-colors"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              Back to Stories
            </Link>

            <header className="mb-10">
              {story.category && (
                <span className="inline-block rounded-full bg-[#00a54f]/10 px-3 py-1 text-xs font-semibold text-[#00a54f] mb-4 uppercase tracking-wider">
                  {story.category}
                </span>
              )}
              <h1
                className="font-bold text-gray-900 leading-tight mb-6"
                style={{
                  fontFamily: "Gilroy, sans-serif",
                  fontSize: "clamp(1.875rem, 3.4vw, 3rem)",
                }}
              >
                {story.title}
              </h1>

              <div className="flex items-center text-gray-500 text-sm">
                {story.author && (
                  <span className="mr-4">By {story.author}</span>
                )}
                <time dateTime={story.published_date}>
                  {new Date(story.published_date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
            </header>

            {imageUrl && (
              <div className="relative aspect-video w-full mb-12 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={imageUrl}
                  alt={story.title}
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
              </div>
            )}

            <StoryContent
              html={story.content}
              videoUrls={videoUrls}
            />

            {story.documents && story.documents.length > 0 && (
              <DocumentsSection
                documents={story.documents}
                collectionId={story.collectionId}
                recordId={story.id}
              />
            )}

            {story.external_link && (
              <div className="mt-12 pt-8 border-t border-gray-100">
                <Link
                  href={story.external_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#00a54f] hover:bg-[#008f44] transition-colors"
                >
                  Read Full Article on Source
                </Link>
              </div>
            )}
          </div>
        </Container>
      </article>
    </>
  );
}
