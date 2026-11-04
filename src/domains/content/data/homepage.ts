import { HomePageContent } from "../types";
import { SECTION_IDS } from "@/lib/constants";
import { AGRIFRESH_URL } from "@/config/navigation";

export const homepageContent: HomePageContent = {
  id: "home",
  title: "Mandala Foods - Nepal's Circular Food Solution",
  description:
    "We upcycle surplus and cosmetically imperfect fruits into reduced-sugar, high-fiber products — real taste, trusted nutrition, and a story of second chances in every pouch.",
  hero: {
    type: "video-hero",
    id: SECTION_IDS.HERO,
    videoUrl: "/videos/mandala-compressed.mp4",
    posterUrl: "/images/hero-poster.jpg",
    heading: "Real fruit. Real goodness.",
    subheading:
      "We upcycle surplus and overlooked Nepali fruit into reduced-sugar, high-fibre foods — real taste, trusted nutrition, and second chances for fruits, farmers, and families.",
    cta: {
      text: "Explore our products",
      href: "/products",
      variant: "primary",
    },
    secondaryCta: {
      text: "Our story",
      href: "/who-we-are",
      variant: "outline",
    },
    overlayOpacity: 0.5,
  },
  sections: [
    {
      type: "products-grid",
      id: SECTION_IDS.PRODUCTS,
      eyebrow: "Who we serve",
      heading: "Nutrition made easy",
      subheading: "Because healthy choices should never have been difficult.",
      products: [
        {
          id: "schools",
          title: "Schools",
          headline: "Fuel for learning",
          description:
            "Healthy, delicious fruit-based foods that fit into everyday school meal programmes.",
          image: {
            src: "/images/products/schools.jpg",
            alt: "Children in a classroom enjoying Fruit Smash pouches",
            width: 1024,
            height: 1024,
          },
          cta: { text: "School nutrition", href: "/reimagining-nutrition", variant: "primary" },
        },
        {
          id: "families",
          title: "Families",
          headline: "Goodness you can trust",
          description:
            "Nutritious goodness on the go — perfect for lunchboxes and busy lifestyles.",
          image: {
            src: "/images/products/families.jpg",
            alt: "A family enjoying fruit pouches together",
            width: 1024,
            height: 1024,
          },
          cta: { text: "Shop the range", href: "/products", variant: "primary" },
        },
        {
          id: "collaborators",
          title: "Partners",
          headline: "Co-create for impact",
          description:
            "Partner with us to develop and distribute innovative, locally made food solutions.",
          image: {
            src: "/images/products/collaborators.jpg",
            alt: "A team working together in a kitchen",
            width: 1024,
            height: 1024,
          },
          cta: { text: "Partner with us", href: "#contact", variant: "primary" },
        },
      ],
    },
    {
      type: "story",
      id: SECTION_IDS.OUR_STORY,
      eyebrow: "Our story",
      heading: "Every harvest deserves a second chance",
      content:
        "It started with a simple mission: helping rural farmers in Nepal bring their harvests to urban markets. But we soon realized the problem was bigger — perfectly edible fruits were being discarded for cosmetic imperfections, while families struggled to afford nutritious food.\n\nThat spark gave birth to Mandala Foods.\n\nFrom that moment, our journey became a mission: giving every harvest, and every family, the second chance they deserve.",
      videoUrl: "https://www.youtube.com/watch?v=YgQ7DuJbf58",
      image: {
        src: "/images/our-story/mandala_foods_birth.png",
        alt: "Families and farmers sorting fruit at a Mandala Foods processing centre",
      },
      cta: {
        text: "Read our full story",
        href: "/who-we-are",
        variant: "primary",
      },
    },
    {
      type: "mission",
      id: SECTION_IDS.MISSION,
      eyebrow: "The Mandala Group",
      heading: "Two companies. One purpose.",
      subheading:
        "From the farm gate to the lunchbox: Mandala Agrifresh keeps harvests fresh, and Mandala Foods turns surplus into nutrition.",
      missions: [
        {
          id: "mandala-foods",
          title: "Mandala Foods",
          description:
            "We upcycle local fruits into low-sugar, fibre-rich foods that nourish families, empower farmers, and deliver taste, trust, and purpose to every meal.",
          image: {
            src: "/images/mission/mandala-foods.jpg",
            alt: "Mandala Foods logo",
            width: 1200,
            height: 1200,
          },
          cta: {
            text: "Discover our products",
            href: "/products",
            variant: "outline",
          },
        },
        {
          id: "mandala-agrifresh",
          title: "Mandala Agrifresh",
          description:
            "Helping farmers keep harvests fresh for longer — with simple, affordable technologies that reduce food loss from farm to market.",
          image: {
            src: "/images/mission/mandalaagrifresh.jpg",
            alt: "Mandala Agrifresh logo",
            width: 938,
            height: 938,
          },
          cta: {
            text: "Visit Mandala Agrifresh",
            href: AGRIFRESH_URL,
            variant: "outline",
            external: true,
          },
        },
      ],
    },
    {
      type: "impact",
      id: SECTION_IDS.IMPACT,
      eyebrow: "Our impact",
      heading: "Good for children, farmers and the planet",
      metrics: [
        {
          id: "nutrition-for-children",
          value: "",
          label: "Nutrition for every child",
          description:
            "We make good nutrition easier to access — giving children in schools, and families everywhere, affordable and healthy options.",
        },
        {
          id: "dignity-for-farmers",
          value: "",
          label: "Dignity for farmers",
          description:
            "By sourcing locally and rescuing overlooked harvests, we create steady markets that value farmers' work and strengthen rural livelihoods.",
        },
        {
          id: "fighting-food-loss",
          value: "",
          label: "Turning food loss into nutrition",
          description:
            "Every fruit we upcycle reduces waste and methane emissions — turning climate costs into nourishment and dignity.",
        },
        {
          id: "changing-food-systems",
          value: "",
          label: "Building a circular food economy",
          description:
            "We make healthy choices easy to adopt at every level — helping schools, families, and partners shift toward lasting nutrition behaviours.",
        },
      ],
      cta: {
        text: "Our circular approach",
        href: "/our-approach",
        variant: "primary",
      },
    },
  ],
};
