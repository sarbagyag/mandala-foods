import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // formats: ["image/avif", "image/webp"], 
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cms.mandalafoods.co",
        port: "",
        pathname: "/api/files/**",
      },
    ],
  },
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
