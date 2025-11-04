import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { getWhoWeAreMetadata } from "@/domains/seo/metadata";
import { OurJourneySection } from "./_components/OurJourneySection";
import { MissionVisionSection } from "./_components/MissionVisionSection";
import { StaffBoardSection } from "./_components/StaffBoardSection";

export const metadata: Metadata = getWhoWeAreMetadata();

export default function WhoWeArePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-24 md:py-32 lg:py-40">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-orange-50/30" aria-hidden="true" />
        <Container>
          <div className="relative mx-auto max-w-6xl text-center">
            <div className="mb-8 inline-block">
              <div className="rounded-full border-2 border-[#e5790e]/20 bg-[#e5790e]/5 px-8 py-3">
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#e5790e]" style={{ fontFamily: 'Gilroy, sans-serif' }}>
                  Who We Are
                </span>
              </div>
            </div>
            <h1 className="mb-10 text-6xl font-black leading-[1.1] tracking-tight text-gray-900 md:text-7xl lg:text-8xl" style={{ fontFamily: 'Gilroy, sans-serif' }}>
              A Story of{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-[#e5790e] to-[#c85a00] bg-clip-text text-transparent">
                  Second Chances
                </span>
              </span>
            </h1>
            <p className="mx-auto max-w-4xl text-2xl font-light leading-relaxed text-gray-600 md:text-3xl" style={{ fontFamily: 'Gilroy, sans-serif', letterSpacing: '-0.01em' }}>
              From overlooked harvests to reimagined nutrition, we turn waste into worth.
            </p>
          </div>
        </Container>
        <div className="absolute bottom-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </section>

      {/* Our Journey Section */}
      <OurJourneySection />

      {/* Mission & Vision Section */}
      <MissionVisionSection />

      {/* Staff & Board Section */}
      <StaffBoardSection />
    </>
  );
}
