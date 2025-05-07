import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap'
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL("https://muhidtech.vercel.app"),
  title: {
    default: "MuhidTech | Web Developer",
    template: "%s - MuhidTech | Web Developer"
  },
  description: "We build websites and web applications using React.js, Next.js, and Tailwind CSS. Explore our portfolio to see our best work.",
  applicationName: "MuhidTech",
  keywords: [
    "Frontend Developer",
    "React.js",
    "Typescript",
    "Next.js",
    "Tailwind CSS",
    "Web Development",
    "Portfolio",
    "E-commerce Websites",
    "Web Applications",
    "MuhidTech",
    "Muhid",
    "Muhid Tech",
    "MuhidTech Portfolio",
    "Website Development",
    "Hire Me",
    "Building Websites",
    "Building Web Applications",
    "Building E-commerce Websites",
    "Building Web Apps",
    "Building Websites with React",
    "Building Websites with Next.js",
    "Building Websites with Tailwind CSS",
    "Building Web Applications with React",
    "Building Web Applications with Next.js",
    "Building Web Applications with Tailwind CSS",
    "Building E-commerce Websites with React",
    "Building E-commerce Websites with Next.js",
    "Building E-commerce Websites with Tailwind CSS",
    "Building Web Apps with React",
    "Building Web Apps with Next.js",
    "Software Engineer",
    "Software Development",
    "Software Engineer Portfolio",
    "Software Development Portfolio",
    "Software Engineer Projects",
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
    title: "MuhidTech | FrontEnd Developer",
    description: "I am a Frontend Developer specializing in React.js, Next.js, and Tailwind CSS. Explore my portfolio to see my best work.",
    url: "https://muhidtech.vercel.app",
    siteName: "MuhidTech",
    images: [
      {
        url: "https://muhidtech.com/projects/muhidtech.png",
        width: 1200,
        height: 630,
        alt: "MuhidTech | Web Developer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#06b6d4" />

        {/* Remove redundant font preloads */}
        <link rel="preload" href="/logo1.png" as="image" />

        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="icon" href="/favicon.ico" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Muhidtech",
              "url": "https://muhidtech.vercel.app",
              "logo": "https://muhidtech.vercel.app/icons/android-chrome-512x512.png",
              "sameAs": [
                "https://github.com/muhidtech",
                "https://linkedin.com/company/muhidtech"
              ]
            }
          `}
        </script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
}