"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getPbImageUrl, MealIntegrationMediaRecord } from "@/lib/pocketbase";

interface MealIntegrationGalleryProps {
  media: MealIntegrationMediaRecord[];
}

function extractYoutubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=)([^&\s]+)/,
    /(?:youtube\.com\/shorts\/)([^?&\s]+)/,
    /(?:youtube\.com\/embed\/)([^?&\s]+)/,
    /(?:youtu\.be\/)([^?&\s]+)/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

function getThumbnailUrl(item: MealIntegrationMediaRecord): string | null {
  if (item.thumbnail) {
    return getPbImageUrl(item.collectionId, item.id, item.thumbnail);
  }
  if (item.media_type === "photo" && item.media_file) {
    return getPbImageUrl(item.collectionId, item.id, item.media_file);
  }
  if (item.media_type === "youtube" && item.youtube_url) {
    const videoId = extractYoutubeId(item.youtube_url);
    if (videoId) return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  }
  return null;
}

export function MealIntegrationGallery({ media }: MealIntegrationGalleryProps) {
  const [activeItem, setActiveItem] = useState<MealIntegrationMediaRecord | null>(null);

  useEffect(() => {
    if (!activeItem) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveItem(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeItem]);

  if (media.length === 0) return null;

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {media.map((item) => {
          const thumbnailUrl = getThumbnailUrl(item);
          const isPlayable = item.media_type === "youtube" || item.media_type === "video_upload";

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveItem(item)}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-gray-200/50 bg-white text-left shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative aspect-video overflow-hidden bg-gray-100">
                {thumbnailUrl ? (
                  <Image
                    src={thumbnailUrl}
                    alt={item.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-[#00a54f]/10 to-[#e5790e]/10" />
                )}
                {isPlayable && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors duration-300 group-hover:bg-black/30">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-xl transition-transform duration-300 group-hover:scale-110">
                      <svg className="ml-1 h-6 w-6 text-[#00a54f]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3
                  className="mb-2 text-lg font-bold leading-tight text-gray-900 line-clamp-2"
                  style={{ fontFamily: "Gilroy, sans-serif" }}
                >
                  {item.title}
                </h3>
                {item.description && (
                  <p
                    className="mb-3 flex-1 text-sm leading-relaxed text-gray-600 line-clamp-2"
                    style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
                  >
                    {item.description}
                  </p>
                )}
                <div className="mt-auto flex items-center gap-2 text-xs text-gray-500">
                  {item.date && (
                    <time dateTime={item.date}>
                      {new Date(item.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                  )}
                  {item.date && item.uploaded_by && <span className="text-gray-300">•</span>}
                  {item.uploaded_by && <span>{item.uploaded_by}</span>}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {activeItem && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/80 p-4 pt-28 backdrop-blur-sm md:p-8 md:pt-32"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveItem(null)}
              aria-label="Close"
              className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {activeItem.media_type === "photo" && activeItem.media_file && (
              <div className="relative aspect-video w-full">
                <Image
                  src={getPbImageUrl(activeItem.collectionId, activeItem.id, activeItem.media_file) ?? ""}
                  alt={activeItem.title}
                  fill
                  unoptimized
                  className="object-contain"
                />
              </div>
            )}

            {activeItem.media_type === "video_upload" && activeItem.media_file && (
              <video
                src={getPbImageUrl(activeItem.collectionId, activeItem.id, activeItem.media_file) ?? ""}
                controls
                autoPlay
                className="aspect-video w-full bg-black"
              />
            )}

            {activeItem.media_type === "youtube" && activeItem.youtube_url && (
              <div className="aspect-video w-full">
                {(() => {
                  const videoId = extractYoutubeId(activeItem.youtube_url!);
                  if (!videoId) return null;
                  return (
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
                      title={activeItem.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="h-full w-full"
                    />
                  );
                })()}
              </div>
            )}

            <div className="bg-white p-6">
              <h3 className="mb-1 text-xl font-bold text-gray-900" style={{ fontFamily: "Gilroy, sans-serif" }}>
                {activeItem.title}
              </h3>
              {activeItem.description && (
                <p className="text-sm leading-relaxed text-gray-600" style={{ fontFamily: "Gilroy, sans-serif" }}>
                  {activeItem.description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
