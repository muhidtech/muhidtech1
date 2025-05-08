import React from 'react'
import type { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Our Blog',
    description: 'Thie page is under construction',
    keywords: 'blog, coming soon',
  }
export const dynamic = 'force-dynamic' // This will force the page to be dynamic


export default function BlogLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <body>
        {children}
      </body>
    );
  }