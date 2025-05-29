import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Metadata } from "next";
import ContactHero from "./components/ContactHero";
import Contact from "./components/Contact";
import ContactInfoSocials from "./components/ContactInfo";
import FaqSection from "../components/FaqSection";
import DownloadCV from "../projects/components/DownloadCV";

export const metadata: Metadata = {
  title: "Contact MuhidTech | Get in Touch for Projects & Collaborations",
  description:
    "Reach out to MuhidTech for inquiries, project collaborations, or support. We're ready to help you bring your ideas to life.",
  keywords: [
    "Contact",
    "Inquiries",
    "Collaborations",
    "Projects",
    "Support",
    "Email",
    "Phone",
    "Social Media",
    "MuhidTech Contact",
    "MuhidTech Support",
    "MuhidTech Collaborations",
    "Get in Touch",
    "Reach MuhidTech",
  ],
  authors: [
    {
      name: "MuhidTech",
      url: "https://muhidtech.vercel.app",
    },
  ],
  openGraph: {
    title: "Contact MuhidTech | Web Development & Collaborations",
    description:
      "Contact MuhidTech to discuss your web development projects, collaborations, or inquiries. We’re here to help you succeed.",
    url: "https://muhidtech.vercel.app/contact",
    siteName: "MuhidTech",
    images: [
      {
        url: "https://muhidtech.vercel.app/opengraph-image.png", // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: "Contact MuhidTech",
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

function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactHero />
        <Contact />
        <ContactInfoSocials />
        <FaqSection />
        <DownloadCV />
      </main>
      <Footer />

      {/* Structured Data for Contact */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "MuhidTech",
            "url": "https://muhidtech.vercel.app",
            "logo": "https://muhidtech.vercel.app/icons/android-chrome-512x512.png",
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+233599153930", // Replace with your real phone number
                "contactType": "Customer Support",
                "areaServed": "Global",
                "availableLanguage": ["English"],
              },
              {
                "@type": "ContactPoint",
                "email": "muhidtech77@gmail.com", // Replace with your real email
                "contactType": "Customer Support",
                "availableLanguage": ["English"],
              },
            ],
            "sameAs": [
              "https://github.com/muhidtech",
              "https://www.linkedin.com/in/mohammed-muhideen-abdul-kadir-19aa99357",
              "https://x.com/MuhidTech911",
            ],
          }),
        }}
      />
    </>
  );
}

export default ContactPage;
