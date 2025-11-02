import { contentService } from "@/domains/content/service";
import { VideoHeroSection } from "@/components/sections/VideoHeroSection";
import { ProductsGrid } from "@/components/sections/ProductsGrid";
import { StorySection } from "@/components/sections/StorySection";
import { MissionSection } from "@/components/sections/MissionSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { BlogsSection } from "@/components/sections/BlogsSection";

export default async function HomePage() {
  const content = await contentService.getHomePageContent();

  return (
    <>
      <VideoHeroSection data={content.hero} />
      {content.sections.map((section) => {
        switch (section.type) {
          case "products-grid":
            return <ProductsGrid key={section.id} data={section} />;
          case "story":
            return <StorySection key={section.id} data={section} />;
          case "mission":
            return <MissionSection key={section.id} data={section} />;
          case "impact":
            return <ImpactSection key={section.id} data={section} />;
          // case "blogs":
          //   return <BlogsSection key={section.id} data={section} />;
          default:
            return null;
        }
      })}
    </>
  );
}
