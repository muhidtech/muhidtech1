import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Metadata } from "next";
import Hero from "./components/ProjectHero";
import FeaturedProjects from "./components/Featured";
import ProjectStats from "./components/ProjectsStats";
import DownloadCV from "./components/DownloadCV";
import CallToAction from "../about/components/CTA";

export const metadata: Metadata = {
  title: "MuhidTech Projects | Showcasing Creative Web & Software Solutions",
  description:
    "Explore MuhidTech's portfolio of web development and design projects that demonstrate skills, creativity, and innovation in building modern applications.",
  keywords: [
    "MuhidTech projects",
    "portfolio",
    "web development",
    "software development",
    "project showcase",
    "creative projects",
    "React projects",
    "Next.js portfolio",
    "frontend development",
    "web design",
    "modern web apps",
    "project portfolio",
    "open source projects",
  ],
  openGraph: {
    title: "MuhidTech Projects | Creative Web & Software Solutions",
    description:
      "Browse through the portfolio of MuhidTech's best web and software projects, demonstrating innovation and technical expertise.",
    url: "https://muhidtech.vercel.app/projects",
    siteName: "MuhidTech",
    images: [
      {
        url: "https://muhidtech.vercel.app/images/projects-og-image.png", // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: "MuhidTech Project Showcase",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@MuhidTech",
    creator: "@MuhidTech",
  },
};

function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Semantic main content */}
        <Hero />
        <ProjectStats />
        <FeaturedProjects />
        <DownloadCV />
        <CallToAction />
      </main>
      <Footer />

      {/* Structured Data for Projects Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "MuhidTech Projects",
            "url": "https://muhidtech.vercel.app/projects",
            "description":
              "A curated list of MuhidTech’s web development and software projects.",
            "itemListElement": [
              // Optionally, list featured projects here if you want to go deeper (id, name, url, description)
              // e.g.
              // {
              //   "@type": "ListItem",
              //   "position": 1,
              //   "url": "https://muhidtech.vercel.app/projects/project-1",
              //   "name": "Project One",
              // },
            ],
          }),
        }}
      />
    </>
  );
}

export default ProjectsPage;
