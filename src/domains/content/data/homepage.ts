import { HomePageContent } from "../types";
import { SECTION_IDS } from "@/lib/constants";


export const homepageContent: HomePageContent = {
  id: "home",
  title: "Mandala Foods - Nepal's Circular Food Solution",
  description:
    "We upcycle surplus and cosmetically imperfect fruits into reduced-sugar, high-fiber products — real taste, trusted nutrition, and a story of second chances in every pouch.",
  hero: {
    type: "video-hero",
    id: SECTION_IDS.HERO,
    videoUrl: "/videos/mandala-compressed.mp4",
    heading: "Mandala Foods Turning Local Surplus into Global Solutions",
    subheading: "We upcycle surplus and cosmetically imperfect fruits into reduced-sugar, high-fiber products — real taste, trusted nutrition, and a story of second chances in every pouch.",
    cta: {
      text: "Discover Our Products",
      href: "/",
      variant: "primary",
    },
    secondaryCta: {
      text: "Our Story",
      href: "/who-we-are",
      variant: "outline",
    },
    overlayOpacity: 0.5,
  },
  sections: [
    {
      type: "products-grid",
      id: SECTION_IDS.PRODUCTS,
      heading: "Our Products",
      subheading: "Sustainably sourced, lovingly crafted",
      products: [
        {
          id: "schools",
          title: "Schools",
          description:
            "Nutrition for Learning - Providing healthy, delicious food options for schools",
          headline: "Nutrition for Learning",
          image: {
            src: "/images/products/schools.jpg",
            alt: "Kids in a classroom, enjoying Fruit Smash pouches",
            width: 400,
            height: 300,
          },
          cta: {
            text: "Schools",
            href: "/products/schools",
            variant: "primary",
          },
        },
        {
          id: "families",
          title: "Families (Retail)",
          description:
            "Nutritious Goodness On the Go - Perfect for lunchboxes and busy lifestyles",
          headline: "Nutritious Goodness On the Go",
          image: {
            src: "/images/products/families.jpg",
            alt: "Someone squeezing a pouch directly, lunchbox or on-the-go",
            width: 400,
            height: 300,
          },
          cta: {
            text: "Families",
            href: "/products/families",
            variant: "primary",
          },
        },
        {
          id: "collaborators",
          title: "Collaborators",
          description:
            "Co-Create for Impact - Partner with us to develop innovative food solutions",
          headline: "Co-Create for Impact",
          image: {
            src: "/images/products/collaborators.jpg",
            alt: "Hands working in a kitchen, collaborative team working together",
            width: 400,
            height: 300,
          },
          cta: {
            text: "Collaborators",
            href: "/products/collaborators",
            variant: "primary",
          },
        },
      ],
    },
    {
      type: "story",
      id: SECTION_IDS.OUR_STORY,
      heading: "Our Story",
      content:
        "It started with a simple mission: helping rural farmers in Nepal bring their harvests to urban markets. But we soon realized the problem was bigger — perfectly edible fruits were being discarded for cosmetic imperfections, while families struggled to afford nutritious food.\n\nThat spark gave birth to Mandala Foods.\n\nFrom that moment, our journey became a mission: giving every harvest, and every family, the second chance they deserve.",
      videoUrl: "https://www.youtube.com/watch?v=YgQ7DuJbf58",
      cta: {
        text: "Read Our Full Story",
        href: "/who-we-are",
        variant: "primary",
      },
    },
    {
      type: "mission",
      id: SECTION_IDS.MISSION,
      heading: "Three Missions, One Purpose",
      missions: [
        {
          id: "mandala-foods",
          title: "Mandala Foods",
          description:
            "We give surplus fruits a second chance — turning them into reduced-sugar, high-fiber foods that nourish families and empower farmers. Each product is crafted from local produce, carrying real taste, trusted nutrition, and a story worth sharing.",
          image: {
            src: "/images/mission/mandala-foods.jpg",
            alt: "Mandala Foods products made from surplus fruits",
            width: 400,
            height: 300,
          },
          cta: {
            text: "Discover Our Products",
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
            alt: "Mandala Agrifresh technologies for farmers",
            width: 400,
            height: 300,
          },
          cta: {
            text: "Explore Mandala Agrifresh",
            href: "https://www.mandalaagrifresh.com",
            variant: "outline",
            external: true,
          },
        },
        {
          id: "idea2impact",
          title: "Idea2Impact",
          description:
            "Bringing experts together to reimagine food systems — through research, innovation, and evidence that builds trust in nutrition.",
          image: {
            src: "/images/mission/idea22impact.jpg",
            alt: "Idea2Impact research and innovation",
            width: 400,
            height: 300,
          },
          cta: {
            text: "Learn about Idea2Impact",
            href: "/idea2impact",
            variant: "outline",
          },
        },
      ],
    },
    {
      type: "impact",
      id: SECTION_IDS.IMPACT,
      heading: "Our Impact",
      metrics: [
        {
          id: "nutrition-for-children",
          value: "",
          label: "Nutrition for Every Child",
          description: "We make good nutrition easier to access — giving children in schools, and families everywhere, affordable and healthy options.",
        },
        {
          id: "dignity-for-farmers",
          value: "",
          label: "Dignity for Farmers",
          description: "By sourcing locally and rescuing imperfect harvests, we create steady markets that value farmers' work and strengthen rural livelihoods.",
        },
        {
          id: "fighting-food-loss",
          value: "",
          label: "Fighting Food Loss & Waste",
          description: "Every fruit we upcycle reduces waste and methane emissions — turning climate costs into nourishment and dignity.",
        },
        {
          id: "changing-food-systems",
          value: "",
          label: "Changing Food Systems",
          description: "We make healthy choices easy to adopt at every level — helping schools, families, and partners shift toward lasting nutrition behaviors.",
        },
      ],
      cta: {
        text: "Know more about our circularity approach",
        href: "/our-approach",
        variant: "primary",
      },
    },
    {
      type: "blogs",
      id: SECTION_IDS.BLOGS,
      heading: "Latest Stories",
      subheading: "From our community",
      blogs: [
        {
          id: "farmer-spotlight-1",
          title: "Meet Ram: A Farmer's Journey to Sustainability",
          excerpt:
            "How one farmer transformed his practice and increased his income by 60% through sustainable agriculture",
          image: {
            src: "/images/blog/farmer-ram.jpg",
            alt: "Farmer Ram in his field",
            width: 400,
            height: 250,
          },
          date: "2025-01-15",
          author: "Mandala Foods Team",
          category: "Farmers",
          slug: "farmer-spotlight-ram",
        },
        {
          id: "horeca-partnership-1",
          title: "Local Cafes Embrace Sustainable Sourcing",
          excerpt:
            "Three Kathmandu cafes share their experience partnering with Mandala Foods for locally-sourced ingredients",
          image: {
            src: "/images/blog/cafe-partnership.jpg",
            alt: "Cafe serving sustainable food",
            width: 400,
            height: 250,
          },
          date: "2025-01-10",
          author: "Mandala Foods Team",
          category: "HORECA",
          slug: "cafe-sustainable-sourcing",
        },
        {
          id: "impact-story-1",
          title: "Reducing Food Waste: Our Circle of Change",
          excerpt:
            "An in-depth look at how our circular economy model prevents 40% of potential food waste",
          image: {
            src: "/images/blog/circle-of-change.jpg",
            alt: "Circular economy diagram",
            width: 400,
            height: 250,
          },
          date: "2025-01-05",
          author: "Mandala Foods Team",
          category: "Impact",
          slug: "reducing-food-waste",
        },
      ],
    },
  ],
};
