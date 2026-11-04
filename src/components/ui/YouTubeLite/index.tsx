"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

export function youTubeId(url: string): string | null {
  const m = url.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|shorts\/)([^#&?]*).*/);
  return m && m[2].length === 11 ? m[2] : null;
}

/**
 * Shows a poster with a play button and only loads YouTube when clicked —
 * keeps the page fast and avoids third-party requests until needed.
 */
export function YouTubeLite({
  url,
  title,
  poster,
}: {
  url: string;
  title: string;
  poster?: { src: string; alt: string };
}) {
  const [playing, setPlaying] = useState(false);
  const id = youTubeId(url);
  if (!id) return null;

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-[1.5rem] bg-ink">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 h-full w-full focus-visible:outline-none"
          aria-label={`Play video: ${title}`}
        >
          {poster ? (
            <Image src={poster.src} alt={poster.alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" className="absolute inset-0 h-full w-full object-cover" />
          )}
          <span className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/35" aria-hidden="true" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-ink shadow-xl transition-transform duration-300 motion-safe:group-hover:scale-105 group-focus-visible:ring-4 group-focus-visible:ring-primary/50">
              <Play className="ml-1 h-7 w-7 fill-current" strokeWidth={0} />
            </span>
          </span>
          <span className="absolute bottom-5 left-5 rounded-full bg-black/45 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
            Watch our story
          </span>
        </button>
      )}
    </div>
  );
}
