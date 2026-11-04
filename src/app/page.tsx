import { contentService } from "@/domains/content/service";
import { getProducts } from "@/services/products";
import { getStories } from "@/services/stories";
import { VideoHeroSection } from "@/components/sections/VideoHeroSection";
import { ValueStrip } from "@/components/home/ValueStrip";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { ProductsGrid } from "@/components/sections/ProductsGrid";
import { StorySection } from "@/components/sections/StorySection";
import { MissionSection } from "@/components/sections/MissionSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { LatestStories } from "@/components/home/LatestStories";
import { CTABand } from "@/components/ui/CTABand";
import type {
  ImpactSection as ImpactData,
  MissionSection as MissionData,
  ProductsGridSection as AudienceData,
  Section,
  StorySection as StoryData,
} from "@/domains/content/types";

export const dynamic = "force-dynamic";

function pick<T extends Section>(sections: Section[], type: T["type"]) {
  return sections.find((s) => s.type === type) as T | undefined;
}

export default async function HomePage() {
  const [content, products, stories] = await Promise.all([
    contentService.getHomePageContent(),
    getProducts(),
    getStories(1, 3),
  ]);

  const audiences = pick<AudienceData>(content.sections, "products-grid");
  const story = pick<StoryData>(content.sections, "story");
  const group = pick<MissionData>(content.sections, "mission");
  const impact = pick<ImpactData>(content.sections, "impact");

  return (
    <>
      <VideoHeroSection data={content.hero} />
      <ValueStrip />
      <ProductShowcase products={products} />
      {audiences && <ProductsGrid data={audiences} />}
      {story && <StorySection data={story} />}
      {group && <MissionSection data={group} />}
      {impact && <ImpactSection data={impact} />}
      <LatestStories stories={stories} />
      <CTABand
        eyebrow="For schools"
        title="Bringing healthier meals to your school?"
        lead="We help schools serve nutritious, locally made fruit foods — from menus to kitchens."
        primary={{ text: "School nutrition", href: "/reimagining-nutrition" }}
        secondary={{ text: "Contact us", href: "#contact" }}
      />
    </>
  );
}
