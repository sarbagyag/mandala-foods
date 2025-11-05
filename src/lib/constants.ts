export const APP_NAME = "Mandala Foods";
export const APP_DESCRIPTION =
  "Nepal's Circular Food Solution connecting farmers, processors, and consumers";

export const ROUTES = {
  HOME: "/",
  WHO_WE_ARE: "/who-we-are",
  OUR_APPROACH: "/our-approach",
  OUR_STORIES: "/our-stories",
  PRODUCTS: "/products",
  RECIPE_CORNER: "/recipe-corner",
} as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

export const SECTION_IDS = {
  HERO: "hero",
  PRODUCTS: "products",
  OUR_STORY: "our-story",
  MISSION: "mission",
  IMPACT: "impact",
  BLOGS: "blogs",
  // Who We Are
  WHO_WE_ARE_STORY: "our-story",
  WHO_WE_ARE_MISSION: "mission-values",
  WHO_WE_ARE_STAFF: "staff-board",
  // Our Approach
  UNIQUE_APPROACH: "unique-approach",
  CIRCLE_OF_CHANGE: "circle-of-change",
  APPROACH_IMPACT: "impact",
  NETWORK_PARTNERSHIPS: "network-partnerships",
  FUNDERS: "funders",
  // Our Stories
  STORIES_OVERVIEW: "overview",
  FARMERS: "farmers",
  HORECA: "horeca",
  // Recipe Corner
  HOME_RECIPES: "home-recipes",
  FOODSERVICE_RECIPES: "foodservice-recipes",
} as const;
