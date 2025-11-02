import React from "react";
import Image from "next/image";
import { StorySection as StorySectionType } from "@/domains/content/types";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";

interface StorySectionProps {
  data: StorySectionType;
}

export function StorySection({ data }: StorySectionProps) {
  const { id, heading, subheading, content, image, videoUrl, cta } = data;

  // Extract YouTube video ID from URL
  const getYouTubeEmbedUrl = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    const videoId = match && match[2].length === 11 ? match[2] : null;
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  };

  const embedUrl = videoUrl ? getYouTubeEmbedUrl(videoUrl) : null;

  return (
    <section id={id} className="bg-white py-20 md:py-32 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 to-transparent pointer-events-none" />

      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center relative">
          <div className="space-y-8">
            <div>
              <Heading level={2} className="mb-6 text-gray-900 leading-tight">
                {heading}
              </Heading>
              {subheading && (
                <Text variant="lead" className="text-orange-600 font-medium text-xl mb-8">
                  {subheading}
                </Text>
              )}
            </div>

            <div className="prose prose-lg max-w-none">
              <Text className="whitespace-pre-line text-lg leading-relaxed text-gray-700">
                {content}
              </Text>
            </div>

            {cta && (
              <div className="pt-4">
                <Button
                  href={cta.href}
                  variant={cta.variant || "primary"}
                  className="group bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2 hover:scale-105"
                >
                  {cta.text}
                  <svg
                    className="h-5 w-5 transition-transform group-hover:translate-x-1"
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
              </div>
            )}
          </div>

          {embedUrl ? (
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-gray-200">
              <iframe
                src={embedUrl}
                title={heading}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          ) : image ? (
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-gray-200">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
