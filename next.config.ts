import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "**" },
      { protocol: "http", hostname: "**" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/portfolio",
        destination: "https://pixel-log-ten.vercel.app/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
