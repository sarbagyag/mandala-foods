"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { getPbFileUrl, ProductVideoRecord } from "@/lib/pocketbase";

interface ProductVideosProps {
  videos: ProductVideoRecord[];
}

const FONT = { fontFamily: "Gilroy, sans-serif" } as const;

const fileUrl = (v: ProductVideoRecord, name?: string) =>
  name ? getPbFileUrl(v.collectionId, v.id, name) ?? undefined : undefined;

const productNames = (v: ProductVideoRecord) =>
  (v.expand?.product ?? []).map((p) => p.name).filter(Boolean);

function formatDuration(seconds: number) {
  if (!Number.isFinite(seconds) || seconds <= 0) return null;
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

/** Hover previews only for real pointers, and never when the user prefers reduced motion. */
function useCanPreview() {
  const [can, setCan] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    const update = () => setCan(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return can;
}

/* -------------------------------------------------------------------------- */
/*  Card                                                                      */
/* -------------------------------------------------------------------------- */

function VideoCard({
  video,
  index,
  total,
  canPreview,
  onOpen,
}: {
  video: ProductVideoRecord;
  index: number;
  total: number;
  canPreview: boolean;
  onOpen: (trigger: HTMLButtonElement) => void;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [duration, setDuration] = useState<string | null>(null);

  // Subscribe natively: the server-rendered <video> may load before hydration,
  // so a React onLoadedMetadata prop can miss the event.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const read = () => setDuration(formatDuration(el.duration));
    el.addEventListener("loadedmetadata", read);
    const raf = el.readyState >= 1 ? requestAnimationFrame(read) : 0;
    return () => {
      el.removeEventListener("loadedmetadata", read);
      cancelAnimationFrame(raf);
    };
  }, []);

  const src = fileUrl(video, video.video_file);
  const poster = fileUrl(video, video.thumbnail);
  const tags = productNames(video);
  if (!src) return null;

  const preview = (play: boolean) => {
    const el = ref.current;
    if (!el || !canPreview) return;
    if (play) {
      el.play().catch(() => {});
    } else {
      el.pause();
      el.currentTime = 0.1;
    }
  };

  return (
    <li
      className="shrink-0 snap-start"
      aria-roledescription="slide"
      aria-label={`${index + 1} of ${total}`}
    >
      <button
        type="button"
        onClick={(e) => onOpen(e.currentTarget)}
        onMouseEnter={() => preview(true)}
        onMouseLeave={() => preview(false)}
        onFocus={() => preview(true)}
        onBlur={() => preview(false)}
        aria-label={`Play video: ${video.title}${duration ? `, ${duration}` : ""}`}
        className="group relative block aspect-[9/16] w-[72vw] max-w-[300px] overflow-hidden rounded-[1.75rem] bg-gray-100 text-left shadow-[0_1px_2px_rgb(0_0_0/0.04),0_8px_24px_-8px_rgb(0_0_0/0.12)] outline-none transition-shadow duration-500 hover:shadow-[0_2px_4px_rgb(0_0_0/0.04),0_24px_48px_-12px_rgb(0_0_0/0.25)] focus-visible:ring-4 focus-visible:ring-[#00a54f]/40 focus-visible:ring-offset-2 sm:w-[260px] lg:w-[280px]"
      >
        {/* Skeleton — sits under the video, which is transparent until its first frame paints */}
        {!poster && (
          <span className="absolute inset-0 animate-pulse bg-gradient-to-br from-gray-100 to-gray-200" />
        )}

        <video
          ref={ref}
          muted
          loop
          playsInline
          preload={poster ? "none" : "metadata"}
          poster={poster}
          tabIndex={-1}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.04]"
        >
          {/* #t=0.1 makes browsers paint a real frame instead of a black box */}
          <source src={`${src}#t=0.1`} />
        </video>

        {/* Legibility scrims */}
        <span className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/30 to-transparent" />
        <span className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Duration */}
        {duration && (
          <span
            className="absolute right-4 top-4 rounded-full bg-black/35 px-2.5 py-1 text-[11px] font-semibold tabular-nums tracking-wide text-white ring-1 ring-white/20 backdrop-blur-md"
            style={FONT}
          >
            {duration}
          </span>
        )}

        {/* Play affordance */}
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 ring-1 ring-white/50 backdrop-blur-md transition-all duration-300 ease-out group-hover:bg-[#00a54f] group-hover:ring-[#00a54f] motion-safe:group-hover:scale-110">
            <Play className="ml-1 h-6 w-6 fill-white text-white" strokeWidth={0} />
          </span>
        </span>

        {/* Caption */}
        <span className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-5" style={FONT}>
          {tags.length > 0 && (
            <span className="flex flex-wrap gap-1.5">
              {tags.slice(0, 2).map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-white/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] ring-1 ring-white/25 backdrop-blur-md"
                  style={{ color: "white" }}
                >
                  {t}
                </span>
              ))}
              {tags.length > 2 && (
                <span className="px-1 text-[10px] font-bold" style={{ color: "rgb(255 255 255 / 0.8)" }}>
                  +{tags.length - 2}
                </span>
              )}
            </span>
          )}
          <span className="block text-lg font-bold leading-snug line-clamp-2" style={{ color: "white" }}>
            {video.title}
          </span>
          {video.description && (
            <span className="block text-sm leading-snug line-clamp-2" style={{ color: "rgb(255 255 255 / 0.78)" }}>
              {video.description}
            </span>
          )}
        </span>
      </button>
    </li>
  );
}

/* -------------------------------------------------------------------------- */
/*  Modal player                                                              */
/* -------------------------------------------------------------------------- */

function PlayerModal({
  videos,
  index,
  onIndex,
  onClose,
}: {
  videos: ProductVideoRecord[];
  index: number;
  onIndex: (i: number) => void;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const [shown, setShown] = useState(false);
  const video = videos[index];
  const total = videos.length;
  const tags = productNames(video);

  const go = useCallback(
    (dir: 1 | -1) => onIndex((index + dir + total) % total),
    [index, total, onIndex]
  );

  useEffect(() => {
    const id = requestAnimationFrame(() => setShown(true));
    closeRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      cancelAnimationFrame(id);
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight" && total > 1) go(1);
      else if (e.key === "ArrowLeft" && total > 1) go(-1);
      else if (e.key === "Tab" && dialogRef.current) {
        // Keep focus inside the dialog
        const nodes = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, video[controls], [href], [tabindex]:not([tabindex="-1"])'
        );
        if (!nodes.length) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, onClose, total]);

  const navBtn =
    "flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition-colors hover:border-[#00a54f] hover:bg-[#00a54f] hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#00a54f]/30";

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300 md:p-8",
        shown ? "opacity-100" : "opacity-0"
      )}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-gray-950/85 backdrop-blur-md" aria-hidden="true" />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-video-title"
        onClick={(e) => e.stopPropagation()}
        className={cn(
          "relative flex max-h-full w-full max-w-5xl flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-2xl transition-transform duration-300 ease-out",
          shown ? "translate-y-0 scale-100" : "translate-y-3 scale-[0.98]"
        )}
      >
        <div className="relative flex min-h-0 flex-1 items-center justify-center bg-black">
          <video
            key={video.id}
            src={fileUrl(video, video.video_file)}
            poster={fileUrl(video, video.thumbnail)}
            controls
            autoPlay
            playsInline
            className="max-h-[68vh] w-full object-contain"
          />
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close video"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white ring-1 ring-white/20 backdrop-blur-md transition-colors hover:bg-[#00a54f] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between md:px-8" style={FONT}>
          <div className="min-w-0">
            {tags.length > 0 && (
              <div className="mb-2 flex flex-wrap gap-1.5">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-[#00a54f]/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#00a54f]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
            <h3 id="product-video-title" style={{ fontSize: "1.375rem", lineHeight: 1.25 }}>
              {video.title}
            </h3>
            {video.description && (
              <p className="mt-1" style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
                {video.description}
              </p>
            )}
          </div>

          {total > 1 && (
            <div className="flex shrink-0 items-center gap-3">
              <span className="text-sm font-semibold tabular-nums text-gray-500" aria-live="polite">
                {String(index + 1).padStart(2, "0")}
                <span className="mx-1 text-gray-300">/</span>
                {String(total).padStart(2, "0")}
              </span>
              <button type="button" onClick={() => go(-1)} aria-label="Previous video" className={navBtn}>
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button type="button" onClick={() => go(1)} aria-label="Next video" className={navBtn}>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section                                                                   */
/* -------------------------------------------------------------------------- */

export function ProductVideos({ videos }: ProductVideosProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const alignRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const [gutter, setGutter] = useState(16);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [progress, setProgress] = useState({ size: 1, offset: 0 });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const canPreview = useCanPreview();

  // Align the first card with the page grid while letting the track bleed to the viewport edge.
  useLayoutEffect(() => {
    const measure = () => {
      const s = sectionRef.current?.getBoundingClientRect();
      const a = alignRef.current?.getBoundingClientRect();
      if (s && a) setGutter(Math.max(16, Math.round(a.left - s.left)));
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (sectionRef.current) ro.observe(sectionRef.current);
    return () => ro.disconnect();
  }, []);

  const updateScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < max - 4);
    const size = el.scrollWidth ? el.clientWidth / el.scrollWidth : 1;
    setProgress({ size, offset: max > 0 ? (el.scrollLeft / max) * (1 - size) : 0 });
  }, []);

  useEffect(() => {
    updateScroll();
    window.addEventListener("resize", updateScroll);
    return () => window.removeEventListener("resize", updateScroll);
  }, [updateScroll, videos.length, gutter]);

  const scrollByPage = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth - gutter * 2) * 0.9, behavior: "smooth" });
  };

  const open = (i: number, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setActiveIndex(i);
  };

  const close = () => {
    setActiveIndex(null);
    triggerRef.current?.focus();
  };

  if (videos.length === 0) return null;

  const arrowBtn =
    "flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm transition-all duration-200 hover:border-[#00a54f] hover:bg-[#00a54f] hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#00a54f]/30 disabled:pointer-events-none disabled:opacity-35";

  return (
    <section
      ref={sectionRef}
      aria-labelledby="product-videos-heading"
      className="overflow-hidden bg-white py-20 md:py-28"
    >
      <Container>
        <div ref={alignRef} className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between" style={FONT}>
            <div className="max-w-2xl">
              <p
                className="flex items-center gap-3 font-bold uppercase"
                style={{ color: "#00a54f", fontSize: "0.75rem", letterSpacing: "0.22em", lineHeight: 1, marginBottom: "1.25rem" }}
              >
                <span className="h-px w-8 bg-[#00a54f]" aria-hidden="true" />
                Watch &amp; Discover
              </p>
              <h2 id="product-videos-heading" style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}>
                See our products{" "}
                <span className="whitespace-nowrap" style={{ color: "#00a54f" }}>in action</span>
              </h2>
              <p style={{ fontSize: "1.125rem", lineHeight: 1.6, marginTop: "1rem" }}>
                From the farm to your table — watch how local Nepali fruit becomes everyday goodness.
              </p>
            </div>

            <div className="hidden shrink-0 items-center gap-3 md:flex">
              <button type="button" aria-label="Scroll to previous videos" onClick={() => scrollByPage(-1)} disabled={!canPrev} className={arrowBtn}>
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button type="button" aria-label="Scroll to next videos" onClick={() => scrollByPage(1)} disabled={!canNext} className={arrowBtn}>
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </Container>

      {/* Full-bleed track, inset to the page grid */}
      <div
        ref={trackRef}
        onScroll={updateScroll}
        role="region"
        aria-roledescription="carousel"
        aria-label="Product videos"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") { e.preventDefault(); scrollByPage(1); }
          if (e.key === "ArrowLeft") { e.preventDefault(); scrollByPage(-1); }
        }}
        className="snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth pb-6 pt-2 outline-none [scrollbar-width:none] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#00a54f]/30 [&::-webkit-scrollbar]:hidden"
        style={{ scrollPaddingInline: gutter }}
      >
        <ul className="flex w-max gap-4 md:gap-6" style={{ paddingInline: gutter }}>
          {videos.map((video, i) => (
            <VideoCard
              key={video.id}
              video={video}
              index={i}
              total={videos.length}
              canPreview={canPreview}
              onOpen={(t) => open(i, t)}
            />
          ))}
        </ul>
      </div>

      {/* Progress indicator — only when there is something to scroll */}
      {progress.size < 0.999 && (
        <Container>
          <div className="mx-auto max-w-7xl">
            <div className="relative mt-4 h-[3px] w-full max-w-xs overflow-hidden rounded-full bg-gray-200" aria-hidden="true">
              <div
                className="absolute inset-y-0 rounded-full bg-[#00a54f] transition-[left] duration-150 ease-out"
                style={{ width: `${progress.size * 100}%`, left: `${progress.offset * 100}%` }}
              />
            </div>
          </div>
        </Container>
      )}

      {activeIndex !== null && (
        <PlayerModal videos={videos} index={activeIndex} onIndex={setActiveIndex} onClose={close} />
      )}
    </section>
  );
}
