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
    default: "MuhidTrick | FrontEnd Developer",
    template: "%s - MuhidTrick | FrontEnd Developer"
  },
  description: "I am a Frontend Developer specializing in React.js, Next.js, and Tailwind CSS. Explore my portfolio to see my best work.",  keywords: "Frontend Developer, React.js, Typescript, Next.js, Tailwind CSS, Web Development, Portfolio, E-commerce Websites",
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
