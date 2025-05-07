import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  images: {
    formats: ["image/webp", "image/avif"],
    // domains: ["your-cdn.com"], // Uncomment and edit if needed
  },
};

export default nextConfig;
