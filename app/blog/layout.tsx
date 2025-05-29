import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MuhidTech Blog | Insights, Tutorials & Updates",
  description:
    "Explore the MuhidTech Blog for web development tutorials, tech insights, project updates, and industry trends. Coming soon!",
  keywords:
    "blog, web development blog, tutorials, tech insights, programming, Next.js, React, Tailwind CSS, software development, MuhidTech blog",
  openGraph: {
    title: "MuhidTech Blog | Insights, Tutorials & Updates",
    description:
      "Stay tuned for the MuhidTech Blog with expert tutorials, tech insights, and latest updates in web development.",
    url: "https://muhidtech.vercel.app/blog",
    siteName: "MuhidTech",
    images: [
      {
        url: "https://muhidtech.vercel.app/opengraph-image-blog.png", // replace with actual blog image
        width: 1200,
        height: 630,
        alt: "MuhidTech Blog",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@MuhidTech911",
    creator: "@MuhidTech911",
  },
};

export const dynamic = "force-dynamic"; // Forces the page to be dynamic

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="noindex, nofollow" />
        {/* If you want search engines NOT to index this page while under construction */}
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
