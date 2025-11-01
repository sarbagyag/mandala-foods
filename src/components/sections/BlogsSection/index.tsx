import React from "react";
import Image from "next/image";
import { BlogsSection as BlogsSectionType } from "@/domains/content/types";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Card, CardContent, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { formatDate } from "@/lib/utils";

interface BlogsSectionProps {
  data: BlogsSectionType;
}

export function BlogsSection({ data }: BlogsSectionProps) {
  const { id, heading, subheading, blogs } = data;

  return (
    <section id={id} className="bg-secondary/20">
      <Container>
        <div className="text-center">
          <Heading level={2} className="mb-4">
            {heading}
          </Heading>
          {subheading && (
            <Text variant="lead" className="mb-12 text-muted">
              {subheading}
            </Text>
          )}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <Card key={blog.id} hover padding="none" variant="default">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-lg">
                <Image
                  src={blog.image.src}
                  alt={blog.image.alt}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardContent padding="lg">
                {blog.category && (
                  <div className="mb-3">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {blog.category}
                    </span>
                  </div>
                )}
                <Heading level={4} className="mb-3">
                  {blog.title}
                </Heading>
                <Text className="mb-4 text-muted">{blog.excerpt}</Text>
                <div className="flex items-center gap-2 text-sm text-muted">
                  <time dateTime={blog.date}>{formatDate(blog.date)}</time>
                  {blog.author && (
                    <>
                      <span>•</span>
                      <span>{blog.author}</span>
                    </>
                  )}
                </div>
              </CardContent>
              <CardFooter padding="lg" className="pt-0">
                <Button
                  href={`/stories/${blog.slug}`}
                  variant="ghost"
                  size="sm"
                >
                  Read More →
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/our-stories" variant="outline" size="lg">
            View All Stories
          </Button>
        </div>
      </Container>
    </section>
  );
}
