"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { getPbFileUrl, ProductVideoRecord } from "@/lib/pocketbase";

interface ProductVideosProps {
  videos: ProductVideoRecord[];
}

const fileUrl = (v: ProductVideoRecord, name?: string) =>
  name ? getPbFileUrl(v.collectionId, v.id, name) ?? undefined : undefined;

function VideoCard({
  video,
  onOpen,
}: {
  video: ProductVideoRecord;
  onOpen: () => void;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const src = fileUrl(video, video.video_file);
  const poster = fileUrl(video, video.thumbnail);
  if (!src) return null;

  // Muted preview on hover (desktop); the full player opens in the modal.
  const preview = (play: boolean) => {
    const el = ref.current;
    if (!el) return;
    if (play) {
      el.play().catch(() => {});
    } else {
      el.pause();
      el.currentTime = 0.1;
    }
  };

  return (
    <button
      type="button"
      onClick={onOpen}
      onMouseEnter={() => preview(true)}
      onMouseLeave={() => preview(false)}
      aria-label={`Play video: ${video.title}`}
      className="group relative aspect-[9/16] w-[220px] shrink-0 snap-start overflow-hidden rounded-3xl bg-gray-900 text-left shadow-lg ring-1 ring-black/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#00a54f]/50 sm:w-[240px] lg:w-[260px]"
    >
      <video
        ref={ref}
        muted
        loop
        playsInline
        preload={poster ? "none" : "metadata"}
        poster={poster}
        tabIndex={-1}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      >
        {/* #t=0.1 makes browsers paint a real frame instead of a black box */}
        <source src={`${src}#t=0.1`} />
      </video>

      {/* Readability gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-xl backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[#00a54f]">
          <Play
            className="ml-0.5 h-6 w-6 fill-[#00a54f] text-[#00a54f] transition-colors group-hover:fill-white group-hover:text-white"
          />
        </span>
      </div>

      {/* Caption */}
      <div className="absolute inset-x-0 bottom-0 p-5" style={{ fontFamily: "Gilroy, sans-serif" }}>
        <h3
          className="font-bold leading-tight line-clamp-2"
          style={{ color: "white", fontSize: "1.125rem" }}
        >
          {video.title}
        </h3>
        {video.description && (
          <p
            className="mt-1 line-clamp-2"
            style={{ color: "rgb(255 255 255 / 0.8)", fontSize: "0.875rem", lineHeight: 1.4 }}
          >
            {video.description}
          </p>
        )}
      </div>
    </button>
  );
}

export function ProductVideos({ videos }: ProductVideosProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [active, setActive] = useState<ProductVideoRecord | null>(null);

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, [updateArrows, videos.length]);

  // Modal: close on Escape, lock page scroll while open
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  if (videos.length === 0) return null;

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  const arrowClass =
    "hidden h-12 w-12 items-center justify-center rounded-full border border-[#00a54f]/30 bg-white text-[#00a54f] shadow-md transition-all hover:bg-[#00a54f] hover:text-white disabled:pointer-events-none disabled:opacity-30 md:flex";

  const activeSrc = active ? fileUrl(active, active.video_file) : undefined;

  return (
    <section className="bg-white pb-24">
      <Container>
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#00a54f]/[0.07] via-white to-[#e5790e]/[0.07] px-4 py-14 ring-1 ring-[#00a54f]/10 sm:px-8 md:py-16">
          {/* Header */}
          <div className="mb-10 text-center" style={{ fontFamily: "Gilroy, sans-serif" }}>
            <span className="mb-5 inline-block rounded-full border border-dashed border-[#00a54f]/50 px-5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#00a54f]">
              Watch &amp; Discover
            </span>
            <h2 className="mb-4 text-4xl text-gray-900 md:text-5xl">
              See Our Products <span className="text-[#00a54f]">in Action</span>
            </h2>
            <p className="max-w-2xl text-lg text-gray-600" style={{ margin: "0 auto" }}>
              From the farm to your table — watch how our fruit becomes everyday goodness.
            </p>
          </div>

          {/* Carousel */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              aria-label="Previous videos"
              onClick={() => scrollBy(-1)}
              disabled={!canPrev}
              className={arrowClass}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div
              ref={trackRef}
              onScroll={updateArrows}
              className="min-w-0 flex-1 snap-x snap-mandatory overflow-x-auto scroll-smooth py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {/* w-max + mx-auto centres a short list and left-aligns an overflowing one */}
              <div className="mx-auto flex w-max gap-5 px-1">
                {videos.map((video) => (
                  <VideoCard key={video.id} video={video} onOpen={() => setActive(video)} />
                ))}
              </div>
            </div>

            <button
              type="button"
              aria-label="Next videos"
              onClick={() => scrollBy(1)}
              disabled={!canNext}
              className={arrowClass}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {videos.length > 1 && (
            <p className="mt-6 text-center text-sm text-gray-500 md:hidden">
              Swipe to see more →
            </p>
          )}
        </div>
      </Container>

      {/* Player modal */}
      {active && activeSrc && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-[#00a54f]"
            >
              <X className="h-5 w-5" />
            </button>
            <video
              key={active.id}
              src={activeSrc}
              poster={fileUrl(active, active.thumbnail)}
              controls
              autoPlay
              playsInline
              className="max-h-[75vh] w-full bg-black object-contain"
            />
            <div className="bg-white p-6" style={{ fontFamily: "Gilroy, sans-serif" }}>
              <h3 className="text-xl font-bold text-gray-900">{active.title}</h3>
              {active.description && (
                <p className="mt-1 text-gray-600">{active.description}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
