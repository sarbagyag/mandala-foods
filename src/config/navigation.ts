import { NavigationConfig } from "@/domains/navigation/types";

export const navigationConfig: NavigationConfig = {
  mainNav: [
    {
      title: "Who we are?",
      href: "/who-we-are",
      items: [
        {
          title: "Our Journey",
          href: "/who-we-are#our-journey",
          description: "From overlooked harvests to reimagined nutrition",
        },
        {
          title: "Mission & Vision",
          href: "/who-we-are#mission-vision",
          description: "Our belief, mission, and vision for the future",
        },
        {
          title: "Staff & Board",
          href: "/who-we-are#staff-board",
          description: "Meet the team turning waste into worth",
        },
      ],
    },
    {
      title: "Products",
      href: "/",
      external: true,
    },
    {
      title: "Recipe Corner",
      href: "/recipe-corner",
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
          description: "What makes us different",
        },
        {
          title: "Circle of Change",
          href: "/our-approach#circle-of-change",
          description: "Our circular economy model",
        },
        {
          title: "Impact",
          href: "/our-approach#impact",
          description: "Measuring our social and environmental impact",
        },
        {
          title: "Network and Partnerships",
          href: "/our-approach#network-partnerships",
          description: "Our collaborative ecosystem",
        },
        {
          title: "Funders",
          href: "/our-approach#funders",
          description: "Organizations supporting our mission",
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
