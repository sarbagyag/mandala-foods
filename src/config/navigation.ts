import { NavigationConfig } from "@/domains/navigation/types";

export const AGRIFRESH_URL = "https://www.linkedin.com/company/mandalaagrifresh/posts/";

/*
 * The top bar stays short (product first); the detailed section links that
 * used to live in dropdowns now sit in the footer.
 * Idea2Impact is intentionally not linked anywhere for now.
 */
export const navigationConfig: NavigationConfig = {
  mainNav: [
    { title: "Products", href: "/products" },
    { title: "Our Story", href: "/who-we-are" },
    { title: "Our Approach", href: "/our-approach" },
    { title: "School Nutrition", href: "/reimagining-nutrition" },
    { title: "Publications", href: "/publications" },
  ],
  footerNav: [
    {
      title: "Products",
      items: [
        { title: "All products", href: "/products" },
        { title: "Spreads", href: "/products#spread" },
        { title: "Smash", href: "/products#smash" },
        { title: "Splash", href: "/products#splash" },
        { title: "Innovation", href: "/products#innovation" },
      ],
    },
    {
      title: "Company",
      items: [
        { title: "Our journey", href: "/who-we-are#our-journey" },
        { title: "Mission & vision", href: "/who-we-are#mission-vision" },
        { title: "Leadership & team", href: "/who-we-are#staff-board" },
        { title: "Publications", href: "/publications" },
      ],
    },
    {
      title: "Our Approach",
      items: [
        { title: "Why it matters", href: "/our-approach#why-it-matters" },
        { title: "Our circular model", href: "/our-approach#circular-model" },
        { title: "What makes us different", href: "/our-approach#what-makes-us-different" },
        { title: "Impact targets", href: "/our-approach#real-outcomes-real-impact" },
        { title: "School nutrition", href: "/reimagining-nutrition" },
      ],
    },
    {
      title: "Mandala Group",
      items: [
        { title: "Mandala Foods", href: "/" },
        { title: "Mandala Agrifresh", href: AGRIFRESH_URL, external: true },
      ],
    },
  ],
};
