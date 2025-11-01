import React from "react";
import { VideoHeroSection as VideoHeroSectionType } from "@/domains/content/types";
import { Container } from "@/components/ui/Container";
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
    overlayOpacity = 0.5,
  } = data;

  return (
    <section id={id} className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <Container>
          <div className="max-w-4xl space-y-15 text-white">
            {/* Heading with styled text similar to CommonWealth Kitchen */}
            <h1 className="text-6xl font-bold leading-tight text-white md:text-7xl lg:text-8xl">
              {heading.split(",").map((line, index) => (
                <React.Fragment key={index}>
                  {index === 0 && (
                    <>
                      <span className="text-orange-400">
                        {line.split(" ")[0]}
                      </span>
                      <span className="text-white">
                        {" "}
                        {line.split(" ").slice(1).join(" ")}
                      </span>
                    </>
                  )}
                  {index > 0 && (
                    <>
                      <br />
                      <span className="text-white">{line.trim()}</span>
                    </>
                  )}
                </React.Fragment>
              ))}
            </h1>

            {/* Description text */}
            {subheading && (
              <p className="max-w-3xl text-xl leading-relaxed text-white md:text-2xl">
                {subheading}
              </p>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              {cta && (
                <Button
                  href={cta.href}
                  variant={cta.variant || "primary"}
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3"
                >
                  {cta.text}
                </Button>
              )}
              {secondaryCta && (
                <Button
                  href={secondaryCta.href}
                  variant="outline"
                  size="lg"
                  className="border-2 border-white bg-white text-gray-900 hover:bg-white/90 font-semibold px-8 py-3"
                >
                  {secondaryCta.text}
                </Button>
              )}
            </div>
          </div>
        </Container>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <svg
          className="h-6 w-6 text-white"
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
    </section>
  );
}
