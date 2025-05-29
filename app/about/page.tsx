import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutHero from "./components/Hero";
import WhatMakesUsDifferent from "./components/WhatMakesUsDifferent";
import TechStack from "./components/TechStack";
import Mission from "./components/Mission";
import Timeline from "./components/Timeline";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CTA";
import DownloadCV from "../projects/components/DownloadCV";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About MuhidTech | Our Mission, Team & Values",
  description:
    "Discover the story behind MuhidTech, our mission, values, innovative tech stack, dedicated team, and testimonials from satisfied clients.",
  keywords: [
    "MuhidTech",
    "About Us",
    "Our Mission",
    "Our Vision",
    "Our Values",
    "Tech Stack",
    "Timeline",
    "Team",
    "Client Testimonials",
    "Web Development Services",
    "Software Development",
    "Web Applications",
    "E-commerce Development",
  ],
  openGraph: {
    title: "About MuhidTech | Leading Frontend Development Studio",
    description:
      "Learn about MuhidTech’s journey, mission, tech expertise, and client success stories. We build modern, high-performance web apps.",
    url: "https://muhidtech.vercel.app/about",
    siteName: "MuhidTech",
    images: [
      {
        url: "https://muhidtech.vercel.app/opengraph-image.png", // Replace with actual image URL for About page
        width: 1200,
        height: 630,
        alt: "About MuhidTech | Web Developer Studio",
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

function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Semantic main section for SEO */}
        <AboutHero />
        <WhatMakesUsDifferent />
        <TechStack />
        <Mission />
        <Timeline />
        <Testimonials />
        <DownloadCV />
        <CallToAction />
      </main>
      <Footer />

      {/* Structured Data for About Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "MuhidTech",
              "url": "https://muhidtech.vercel.app",
              "logo": "https://muhidtech.vercel.app/icons/android-chrome-512x512.png",
              "sameAs": [
                "https://github.com/muhidtech",
                "https://www.linkedin.com/in/mohammed-muhideen-abdul-kadir-19aa99357",
                "https://x.com/MuhidTech911",
              ],
              "foundingDate": "2020", 
              "founders": [
                {
                  "@type": "Person",
                  "name": "Muhid",
                },
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer support",
                "email": "muhidtech77@gmail.com",
                "url": "https://muhidtech.vercel.app/contact",
              },
            },
            "description": "Learn more about MuhidTech's mission, team, values, and services.",
          }),
        }}
      />
    </>
  );
}

export default AboutPage;
