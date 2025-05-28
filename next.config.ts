import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production", // Removes console logs in production
  },
  images: {
    formats: ["image/webp", "image/avif"], // Use modern image formats
    domains: ['muhidtech.onrender.com'],
  },
  experimental: {
    optimizeCss: true, // Enable CSS optimization
  },
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(nextConfig);