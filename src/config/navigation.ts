import { NavigationConfig } from "@/domains/navigation/types";

export const navigationConfig: NavigationConfig = {
  mainNav: [
    {
      title: "Who we are",
      href: "/who-we-are",
      items: [
        {
          title: "Our Journey",
          href: "/who-we-are#our-journey",
          // description: "From overlooked harvests to reimagined nutrition",
        },
        {
          title: "Mission & Vision",
          href: "/who-we-are#mission-vision",
          // description: "Our belief, mission, and vision for the future",
        },
        {
          title: "Staff & Board",
          href: "/who-we-are#staff-board",
          // description: "Meet the team turning waste into worth",
        },
      ],
    },
    {
      title: "Products",
      href: "/products",
      external: false,
    },
    {
      title: "Recipe Corner",
      href: "/",
      disabled: true,
      items: [
        // {
        //   title: "Recipes for Home",
        //   href: "/recipe-corner#home-recipes",
        //   description: "Delicious recipes for everyday cooking",
        // },
        // {
        //   title: "Recipes for Foodservice",
        //   href: "/recipe-corner#foodservice-recipes",
        //   description: "Professional recipes for restaurants and cafes",
        // },
      ],
    },
    {
      title: "Our Approach",
      href: "/our-approach",
      items: [
        {
          title: "Our Unique Approach",
          href: "/our-approach#unique-approach",
          // description: "What makes us different",
        },
        {
          title: "Why it matters?",
          href: "/our-approach#why-it-matters",
          // description: "The food challenges we address",
        },
        {
          title: "Our Circular Model",
          href: "/our-approach#circular-model",
          // description: "Measuring our circular impact",
        },
        {
          title: "What makes us different?",
          href: "/our-approach#what-makes-us-different",
          // description: "What sets our approach apart",
        },
        {
          title: "Real Outcomes, Real Impact",
          href: "/our-approach#real-outcomes-real-impact",
          // description: "The difference we are making",
        },
        {
          title: "Evidence-Based, Field-Tested",
          href: "/our-approach#evidence-based-field-tested",
          // description: "Proven strategies driving success",
        },
        {
          title: "Built for Scale",
          href: "/our-approach#built-for-scale",
          // description: "Scaling solutions for greater reach",
        },
        {
          title: "Idea to Impact (I2I)",
          href: "/idea2impact",
          // description: "Our governance platform for circular food enterprises",
        },
      ],
    },
    {
      title: "Our Stories",
      href: "/our-stories",
      items: [
        // {
        //   title: "Overview",
        //   href: "/our-stories#overview",
        //   description: "Stories from our community",
        // },
        // {
        //   title: "Farmers",
        //   href: "/our-stories#farmers",
        //   description: "Meet the farmers we work with",
        // },
        // {
        //   title: "HORECA",
        //   href: "/our-stories#horeca",
        //   description: "Hotel, restaurant, and cafe partners",
        // },
      ],
    },
  ],
};
