/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://muhidtech.vercel.app/", // Your website URL
  generateRobotsTxt: true, // Generates robots.txt
  generateIndexSitemap: false, // Ensures a single sitemap.xml
  additionalPaths: async (config) => [
    { loc: "/", lastmod: new Date().toISOString() },
    { loc: "/contact", lastmod: new Date().toISOString() },
    { loc: "/about", lastmod: new Date().toISOString() },
    { loc: "/portfolio", lastmod: new Date().toISOString() },
  ],
};
