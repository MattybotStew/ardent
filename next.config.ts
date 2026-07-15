import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/ardent",
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "media.licdn.com" },
      { protocol: "https", hostname: "**.licdn.com" },
    ],
  },
};

export default nextConfig;