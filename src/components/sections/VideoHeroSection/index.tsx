"use client";

import { useEffect, useRef } from "react";
import { VideoHeroSection as VideoHeroSectionType } from "@/domains/content/types";
import { Button } from "@/components/ui/Button";

interface VideoHeroSectionProps {
  data: VideoHeroSectionType;
}

export function VideoHeroSection({ data }: VideoHeroSectionProps) {
  const { id, videoUrl, posterUrl, heading, subheading, cta, secondaryCta } = data;
  const videoRef = useRef<HTMLVideoElement>(null);

  // Respect users who ask for less motion: show the poster frame instead.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) videoRef.current?.pause();
  }, []);

  return (
    <section
      id={id}
      className="relative flex min-h-[100svh] w-full items-end overflow-hidden bg-forest py-0 md:py-0 lg:py-0"
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={posterUrl}
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

      {/* Legibility: darken the lower-left where the copy sits */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/20" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-32 sm:px-6 md:pb-24 lg:px-8">
        <div className="max-w-3xl animate-fade-in">
          <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase leading-none tracking-[0.22em] text-white/80">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            Mandala Foods · Made in Nepal
          </p>
          <h1 className="text-balance text-[2.9rem] font-bold leading-[1.02] tracking-[-0.04em] text-white sm:text-6xl lg:text-[5.25rem]">
            {heading}
          </h1>
          {subheading && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">
              {subheading}
            </p>
          )}
          <div className="mt-10 flex flex-wrap gap-3">
            {cta && (
              <Button href={cta.href} variant="accent" size="lg" arrow>
                {cta.text}
              </Button>
            )}
            {secondaryCta && (
              <Button href={secondaryCta.href} variant="outlineLight" size="lg">
                {secondaryCta.text}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
