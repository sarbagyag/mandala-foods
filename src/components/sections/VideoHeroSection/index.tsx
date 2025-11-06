import React from "react";
import { VideoHeroSection as VideoHeroSectionType } from "@/domains/content/types";
import { Button } from "@/components/ui/Button";

interface VideoHeroSectionProps {
  data: VideoHeroSectionType;
}

export function VideoHeroSection({ data }: VideoHeroSectionProps) {
  const {
    id,
    videoUrl,
    heading,
    subheading,
    cta,
    secondaryCta,
    overlayOpacity = 0.4,
  } = data;

  return (
    <section
      id={id}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-90"
        aria-hidden="true"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay - Darker at bottom for better text contrast */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 top-25 left-0 flex h-full items-end pb-20 md:pb-28 lg:pb-32 px-6 md:px-12 lg:px-16">
        <div className="max-w-5xl space-y-8 animate-fade-in">
          {/* Heading with elegant typography */}
          <h1 className="font-extrabold leading-[1.1] tracking-tight">
            <span
              className="block text-6xl md:text-7xl lg:text-8xl mb-2"
              style={{
                background:
                  "linear-gradient(135deg, #ff9a3c 0%, #e5790e 50%, #c85a00 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {heading.split(" ").slice(0, 2).join(" ")}
            </span>
            <span className="block text-5xl md:text-6xl lg:text-7xl text-white">
              {heading.split(" ").slice(2).join(" ")}
            </span>
          </h1>

          {/* Description text with elegant spacing */}
          {subheading && (
            <p
              style={{ color: "white" }}
              className="max-w-2xl text-lg md:text-xl lg:text-2xl leading-relaxed text-white font-light"
            >
              <br />
              {subheading}
            </p>
          )}

          {/* CTA Buttons with refined styling */}
          <div className="flex flex-wrap gap-4 pt-6">
            {cta && (
              <Button
                href={cta.href}
                size="lg"
                className="group text-white font-bold px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-base hover:scale-105"
                style={{
                  backgroundColor: "#e5790e",
                  borderColor: "#e5790e",
                }}
              >
                {cta.text}
                <svg
                  className="inline-block ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Button>
            )}
            {secondaryCta && (
              <Button
                href={secondaryCta.href}
                variant="outline"
                size="lg"
                className="group border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-gray-900 font-semibold px-10 py-4 rounded-full transition-all duration-300 text-base hover:scale-105"
              >
                {secondaryCta.text}
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Elegant Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/70 text-xs uppercase tracking-widest font-semibold">
            Scroll
          </span>
          <svg
            className="h-6 w-6 text-white/70"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
