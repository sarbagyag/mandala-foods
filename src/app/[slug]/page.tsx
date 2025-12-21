import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getIdentityByUsername } from "@/services/identity";
import { getPbImageUrl } from "@/lib/pocketbase";
import DigitalIDCard from "./DigitalIDCard";

// Force dynamic rendering
export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const identity = await getIdentityByUsername(slug);

  if (!identity) {
    return {
      title: "Not Found | Mandala Foods",
      description: "Digital ID not found",
    };
  }

  return {
    title: `${identity.full_name} - Digital ID | Mandala Foods`,
    description: `Digital identity card for ${identity.full_name}, ${identity.position} at Mandala Foods`,
  };
}

export default async function DigitalIDPage({ params }: Props) {
  const { slug } = await params;
  const identity = await getIdentityByUsername(slug);

  if (!identity) {
    notFound();
  }

  const profileImageUrl = getPbImageUrl(
    identity.collectionId,
    identity.id,
    identity.profile_image
  );

  const themeColor = identity.card_theme_color || "#1d6f8f";

  return (
    <DigitalIDCard
      identity={identity}
      profileImageUrl={profileImageUrl}
      themeColor={themeColor}
    />
  );
}
