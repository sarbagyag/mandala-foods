export const siteConfig = {
  name: "Mandala Foods",
  description:
    "Mandala Foods is pioneering Nepal's circular food solution, connecting farmers, processors, and consumers to create sustainable food systems.",
  url: "https://mandalafoods.com",
  ogImage: "https://mandalafoods.com/og-image.jpg",
  links: {
    facebook: "https://www.facebook.com/people/Mandala-Foods/61578758764455/",
    linkedin: "https://www.linkedin.com/company/mandala-foods",
    youtube: "https://www.youtube.com/@Mandala_Foods",
  },
  contact: {
    email: "info@mandalafoods.com",
    phone: "+977 9823604610",
    whatsapp: "+9779823604610",
    address: "Kathmandu, Nepal",
  },
} as const;

export type SiteConfig = typeof siteConfig;
