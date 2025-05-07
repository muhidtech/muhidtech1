import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
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
        url: "https://muhidtech.com/images/og-image.png",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
