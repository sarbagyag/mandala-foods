import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { pb, getPbImageUrl, getPbFileUrl, StoryRecord } from "@/lib/pocketbase";
import { StoryContent } from "@/components/publications/StoryContent";
import { DocumentsSection } from "@/components/publications/DocumentsSection";
import { formatStoryDate } from "@/components/publications/StoryCard";
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
  } catch {
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
      <article className="bg-white pb-20 pt-28 md:pb-28 md:pt-36">
        <Container>
          <div className="mx-auto max-w-3xl">
            <nav aria-label="Breadcrumb" className="mb-10">
              <ol className="flex items-center gap-2 text-sm text-gray-500">
                <li>
                  <Link href="/publications" className="inline-flex items-center gap-1.5 font-semibold text-ink hover:text-primary">
                    <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                    Publications
                  </Link>
                </li>
                {story.category && (
                  <>
                    <li aria-hidden="true" className="text-gray-300">/</li>
                    <li>{story.category}</li>
                  </>
                )}
              </ol>
            </nav>

            <header className="mb-10 md:mb-12">
              <h1 className="text-balance text-[2.25rem] font-bold leading-[1.08] tracking-[-0.035em] text-ink md:text-[3.25rem]">
                {story.title}
              </h1>
              {story.excerpt && (
                <p className="mt-6 text-xl leading-relaxed text-gray-600">{story.excerpt}</p>
              )}
              <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-line pt-6 text-sm text-gray-500">
                {story.author && <span className="font-semibold text-ink">{story.author}</span>}
                {story.published_date && (
                  <time dateTime={story.published_date}>{formatStoryDate(story.published_date, "long")}</time>
                )}
              </div>
            </header>
          </div>

          {imageUrl && (
            <div className="relative mx-auto mb-14 aspect-[16/9] max-w-5xl overflow-hidden rounded-[1.75rem] bg-mist">
              <Image src={imageUrl} alt="" fill className="object-cover" priority unoptimized />
            </div>
          )}

          <div className="mx-auto max-w-3xl">
            <StoryContent html={story.content} videoUrls={videoUrls} />

            {story.documents && story.documents.length > 0 && (
              <DocumentsSection
                documents={story.documents}
                collectionId={story.collectionId}
                recordId={story.id}
              />
            )}

            {story.external_link && (
              <div className="mt-12 border-t border-line pt-8">
                <a
                  href={story.external_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-[0.95rem] font-semibold text-white transition-colors hover:bg-primary-hover"
                >
                  Read the full article at the source
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            )}

            <div className="mt-16 border-t border-line pt-8">
              <Link href="/publications" className="inline-flex items-center gap-2 text-[0.95rem] font-semibold text-ink hover:text-primary">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                All publications
              </Link>
            </div>
          </div>
        </Container>
      </article>
    </>
  );
}
