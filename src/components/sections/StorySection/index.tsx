import Image from "next/image";
import { StorySection as StorySectionType } from "@/domains/content/types";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Section";
import { YouTubeLite } from "@/components/ui/YouTubeLite";

interface StorySectionProps {
  data: StorySectionType;
}

export function StorySection({ data }: StorySectionProps) {
  const { id, eyebrow, heading, content, image, videoUrl, cta } = data;
  const paragraphs = content.split(/\n\n+/);

  return (
    <section id={id} className="bg-white py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-20">
          <div>
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            <h2 className="text-balance text-[2rem] font-bold leading-[1.1] tracking-[-0.03em] text-ink md:text-[2.75rem]">
              {heading}
            </h2>
            <div className="mt-6 space-y-4">
              {paragraphs.map((p, i) => (
                <p key={i} className={i === 1 ? "text-lg font-semibold text-ink" : "text-lg leading-relaxed text-gray-600"}>
                  {p}
                </p>
              ))}
            </div>
            {cta && (
              <div className="mt-9">
                <Button href={cta.href} variant="dark" size="lg" arrow>
                  {cta.text}
                </Button>
              </div>
            )}
          </div>

          <div>
            {videoUrl ? (
              <YouTubeLite url={videoUrl} title={heading} poster={image} />
            ) : image ? (
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
