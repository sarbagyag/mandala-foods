import { Metadata } from "next";
import { getWhoWeAreMetadata } from "@/domains/seo/metadata";
import { PageHero } from "@/components/ui/PageHero";
import { CTABand } from "@/components/ui/CTABand";
import { OurJourneySection } from "./_components/OurJourneySection";
import { MissionVisionSection } from "./_components/MissionVisionSection";
import { StaffBoardSection } from "./_components/StaffBoardSection";

export const metadata: Metadata = getWhoWeAreMetadata();

export default function WhoWeArePage() {
  return (
    <>
      <PageHero
        eyebrow="Who we are"
        title="A story of second chances"
        lead="From overlooked harvests to reimagined nutrition, we turn waste into worth."
        image={{
          src: "/images/our-story/rejecting-imperfect.jpeg",
          alt: "Fruit sellers and families at a market in Nepal",
        }}
      />
      <OurJourneySection />
      <MissionVisionSection />
      <StaffBoardSection />
      <CTABand
        eyebrow="What we make"
        title="See the products behind the mission."
        primary={{ text: "Explore products", href: "/products" }}
        secondary={{ text: "Our approach", href: "/our-approach" }}
      />
    </>
  );
}
