import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { pb, getPbImageUrl, StoryRecord } from "@/lib/pocketbase";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

// Generate metadata dynamically
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const story = await pb.collection('stories').getFirstListItem<StoryRecord>(`slug="${slug}"`);
    const imageUrl = story.cover_image
      ? getPbImageUrl(story.collectionId, story.id, story.cover_image)
      : null;

    return {
      title: `${story.title} | Mandala Foods`,
      description: story.excerpt,
      openGraph: {
        images: imageUrl ? [imageUrl] : [],
      },
    };
  } catch {
    return {
      title: 'Story Not Found | Mandala Foods',
    };
  }
}

async function getStory(slug: string) {
  try {
    const story = await pb.collection('stories').getFirstListItem<StoryRecord>(`slug="${slug}"`);
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

  return (
    <article className="min-h-screen bg-white pt-32 pb-20">
      <Container>
        <div className="mx-auto max-w-3xl">
          <Link href="/our-stories" className="inline-flex items-center text-sm text-gray-500 hover:text-[#00a54f] mb-8 transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            Back to Stories
          </Link>
          
          <header className="mb-10">
            {story.category && (
               <span className="inline-block rounded-full bg-[#00a54f]/10 px-3 py-1 text-xs font-semibold text-[#00a54f] mb-4 uppercase tracking-wider">
                 {story.category}
               </span>
            )}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6" style={{ fontFamily: "Gilroy, sans-serif" }}>
              {story.title}
            </h1>
            
            <div className="flex items-center text-gray-500 text-sm">
               {story.author && <span className="mr-4">By {story.author}</span>}
               <time dateTime={story.published_date}>
                 {new Date(story.published_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
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

          <div 
            className="prose prose-lg prose-green max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: story.content }}
          />
          
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
  );
}
