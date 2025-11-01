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
    heading: "Where Every Harvest Finds Its Worth",
    subheading: "We upcycle surplus and cosmetically imperfect fruits into reduced-sugar, high-fiber products — real taste, trusted nutrition, and a story of second chances in every pouch.",
    cta: {
      text: "Discover Our Products",
      href: "https://eatsmashfoods.com/",
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
          id: "smash-foods",
          title: "SMASH Foods",
          description:
            "Our flagship line of sustainable, nutritious food products made from locally sourced ingredients",
          image: {
            src: "/images/products/smash-foods.jpg",
            alt: "SMASH Foods product range",
            width: 400,
            height: 300,
          },
          link: "https://eatsmashfoods.com/",
        },
        {
          id: "fresh-produce",
          title: "Fresh Produce",
          description:
            "Farm-fresh vegetables and fruits directly from our network of sustainable farmers",
          image: {
            src: "/images/products/fresh-produce.jpg",
            alt: "Fresh produce from local farms",
            width: 400,
            height: 300,
          },
        },
        {
          id: "processed-goods",
          title: "Processed Goods",
          description:
            "Value-added products created through our circular processing system",
          image: {
            src: "/images/products/processed-goods.jpg",
            alt: "Processed food products",
            width: 400,
            height: 300,
          },
        },
      ],
    },
    {
      type: "story",
      id: SECTION_IDS.OUR_STORY,
      heading: "Our Story",
      subheading: "Building a Sustainable Food System",
      content:
        "Mandala Foods was born from a vision to create a circular food economy in Nepal. We connect farmers with markets, reduce food waste, and provide nutritious, sustainable food options to communities across the country. Our model demonstrates that economic prosperity and environmental sustainability can work hand in hand.",
      image: {
        src: "/images/story/our-story.jpg",
        alt: "Farmers working in sustainable agriculture",
        width: 600,
        height: 400,
      },
      cta: {
        text: "Read More",
        href: "/who-we-are",
        variant: "outline",
      },
    },
    {
      type: "mission",
      id: SECTION_IDS.MISSION,
      heading: "Three Missions, One Purpose",
      subheading: "Our commitment to people, planet, and prosperity",
      missions: [
        {
          id: "sustainable-livelihood",
          title: "Sustainable Livelihood",
          description:
            "Empowering farmers and processors with fair wages, training, and market access",
          icon: "users",
          image: {
            src: "/images/mission/livelihood.jpg",
            alt: "Farmers collaboration",
            width: 400,
            height: 300,
          },
        },
        {
          id: "environmental-stewardship",
          title: "Environmental Stewardship",
          description:
            "Reducing waste, promoting organic farming, and protecting Nepal's natural resources",
          icon: "leaf",
          image: {
            src: "/images/mission/environment.jpg",
            alt: "Sustainable farming practices",
            width: 400,
            height: 300,
          },
        },
        {
          id: "nutritious-food",
          title: "Nutritious Food Access",
          description:
            "Making healthy, sustainably-produced food accessible to all communities",
          icon: "heart",
          image: {
            src: "/images/mission/nutrition.jpg",
            alt: "Healthy food products",
            width: 400,
            height: 300,
          },
        },
      ],
    },
    {
      type: "impact",
      id: SECTION_IDS.IMPACT,
      heading: "Our Impact",
      subheading: "Creating measurable change in communities",
      metrics: [
        {
          id: "farmers",
          value: "500+",
          label: "Farmers Supported",
          description: "Direct partnerships with small-scale farmers",
          icon: "users",
        },
        {
          id: "waste-reduction",
          value: "40%",
          label: "Waste Reduction",
          description: "Food waste prevented through circular practices",
          icon: "recycle",
        },
        {
          id: "communities",
          value: "50+",
          label: "Communities Served",
          description: "Across rural and urban Nepal",
          icon: "map-pin",
        },
        {
          id: "meals",
          value: "100K+",
          label: "Meals Provided",
          description: "Nutritious meals to communities",
          icon: "utensils",
        },
      ],
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
