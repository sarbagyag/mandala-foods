export const siteConfig = {
  name: "Mandala Foods",
  description:
    "Mandala Foods is pioneering Nepal's circular food solution, connecting farmers, processors, and consumers to create sustainable food systems.",
  url: "https://mandalafoods.com",
  ogImage: "https://mandalafoods.com/og-image.jpg",
  links: {
    twitter: "https://twitter.com/mandalafoods",
    facebook: "https://facebook.com/mandalafoods",
    instagram: "https://instagram.com/mandalafoods",
    linkedin: "https://linkedin.com/company/mandalafoods",
    youtube: "https://youtube.com/@mandalafoods",
  },
  contact: {
    email: "info@mandalafoods.com",
    phone: "+977-1-XXXXXXX",
    address: "Kathmandu, Nepal",
  },
} as const;

export type SiteConfig = typeof siteConfig;
