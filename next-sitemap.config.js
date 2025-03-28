/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://muhidtech.vercel.app/", // Change this if you get a custom domain
  generateRobotsTxt: true, // Generates a robots.txt file
  sitemapSize: 5000,
  generateIndexSitemap: false, // Ensures a valid single sitemap.xml
};