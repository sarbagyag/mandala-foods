import Image from "next/image";
import Link from "next/link";
import { Paperclip } from "lucide-react";
import { getPbImageUrl, StoryRecord } from "@/lib/pocketbase";
import { cn } from "@/lib/utils";

export function formatStoryDate(date: string, month: "short" | "long" = "short") {
  const d = new Date(date);
  return Number.isNaN(d.getTime())
    ? ""
    : d.toLocaleDateString("en-GB", { day: "numeric", month, year: "numeric" });
}

/** Publication card. `featured` renders the wide horizontal version. */
export function StoryCard({ story, featured = false }: { story: StoryRecord; featured?: boolean }) {
  const img = story.cover_image ? getPbImageUrl(story.collectionId, story.id, story.cover_image) : null;
  const docs = story.documents?.length ?? 0;

  return (
    <Link
      href={`/publications/${story.slug}`}
      className={cn(
        "group flex h-full flex-col focus-visible:outline-none",
        featured && "lg:grid lg:grid-cols-[1.25fr_1fr] lg:items-center lg:gap-12"
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-[1.25rem] bg-mist ring-1 ring-black/[0.04] group-focus-visible:ring-2 group-focus-visible:ring-primary",
          featured ? "aspect-[16/10]" : "aspect-[3/2]"
        )}
      >
        {img && (
          <Image
            src={img}
            alt=""
            fill
            unoptimized
            className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.03]"
            sizes={featured ? "(max-width: 1024px) 100vw, 55vw" : "(max-width: 768px) 100vw, 33vw"}
          />
        )}
      </div>

      <div className={cn("flex flex-1 flex-col pt-6", featured && "lg:pt-0")}>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-500">
          {story.category && (
            <span className="font-bold uppercase tracking-[0.14em] text-primary text-[11px]">{story.category}</span>
          )}
          {story.published_date && <time dateTime={story.published_date}>{formatStoryDate(story.published_date)}</time>}
          {docs > 0 && (
            <span className="inline-flex items-center gap-1" title={`${docs} attached document${docs > 1 ? "s" : ""}`}>
              <Paperclip className="h-3.5 w-3.5" aria-hidden="true" />
              {docs}
            </span>
          )}
        </div>
        <h3
          className={cn(
            "mt-3 text-balance font-bold leading-snug tracking-[-0.02em] text-ink transition-colors group-hover:text-primary",
            featured ? "text-2xl md:text-[2rem] md:leading-tight" : "text-xl"
          )}
        >
          {story.title}
        </h3>
        {story.excerpt && (
          <p className={cn("mt-3 leading-relaxed text-gray-600", featured ? "text-lg line-clamp-4" : "text-[0.95rem] line-clamp-3")}>
            {story.excerpt}
          </p>
        )}
        <span className="mt-5 text-[0.95rem] font-semibold text-ink underline decoration-ink/20 underline-offset-[6px] transition-colors group-hover:decoration-primary">
          Read more
        </span>
      </div>
    </Link>
  );
}
