import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://muhidtech.vercel.app"),
  title: {
    default: "MuhidTech | Web Developer",
    template: "%s - MuhidTech | Web Developer",
  },
  description:
    "We build fast, responsive websites and web applications using React.js, Next.js, and Tailwind CSS. Explore MuhidTech’s portfolio to see our best work.",
  applicationName: "MuhidTech",
  keywords: [
    "Frontend Developer",
    "React.js",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "Web Development",
    "Portfolio",
    "E-commerce Websites",
    "Web Applications",
    "MuhidTech",
    "Software Engineer",
    "Software Development",
    "Web Developer Portfolio",
  ],
  authors: [
    {
      name: "MuhidTech",
      url: "https://muhidtech.vercel.app",
    },
  ],
  creator: "MuhidTech",
  publisher: "MuhidTech",
  openGraph: {
    title: "MuhidTech | Frontend Developer",
    description:
      "I am a Frontend Developer specializing in React.js, Next.js, and Tailwind CSS. Explore my portfolio to see my best work.",
    url: "https://muhidtech.vercel.app",
    siteName: "MuhidTech",
    images: [
      {
        url: "https://muhidtech.vercel.app/projects/muhidtech.png",
        width: 1200,
        height: 630,
        alt: "MuhidTech | Web Developer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@MuhidTech911", // add Twitter handle for better branding
    creator: "@MuhidTech911",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/icons/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#06b6d4" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="icon" href="/favicon.ico" />

        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "MuhidTech",
              url: "https://muhidtech.vercel.app",
              logo: "https://muhidtech.vercel.app/icons/android-chrome-512x512.png",
              sameAs: [
                "https://github.com/muhidtech",
                "https://www.linkedin.com/in/mohammed-muhideen-abdul-kadir-19aa99357",
                "https://x.com/MuhidTech911",
              ],
            }),
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        <Analytics />
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
}
