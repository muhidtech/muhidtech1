/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization configuration
  images: {
    domains: ['github.com', 'raw.githubusercontent.com'], // Allow images from GitHub
    formats: ['image/avif', 'image/webp'], // Modern image formats for better performance
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048], // Responsive image sizes
    imageSizes: [16, 32, 48, 64, 96, 128, 256], // Smaller image sizes
    minimumCacheTTL: 60 * 60 * 24, // Cache images for 24 hours
  },
  
  // SEO optimizations
  reactStrictMode: true, // Helps identify problems in development
  poweredByHeader: false, // Remove X-Powered-By header for security
  
  // Metadata and content security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
  
  // Experimental features that might benefit a portfolio
  experimental: {
    optimizeCss: true, // CSS optimization
    scrollRestoration: true, // Restore scroll position when navigating
  },
  
  // Webpack configuration for SVG support
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = nextConfig;
