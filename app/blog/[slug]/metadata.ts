// app/blog/[slug]/metadata.ts
import type { Metadata } from "next";
import { getPostData } from "./getPostData";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostData(params.slug);

  if (!post) {
    return {
      title: "Post Not Found | MuhidTech Blog",
      description: "The requested blog post was not found.",
      robots: "noindex, nofollow",
    };
  }

  return {
    title: post.title,
    description: post.summary,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.summary,
      url: `https://muhidtech.vercel.app/blog/${post.slug}`,
      siteName: "MuhidTech",
      images: [
        {
          url: post.image ?? "",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: "en-US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
      images: post.image ? [post.image] : [],
      site: "@MuhidTech911",
      creator: "@MuhidTech911",
    },
  };
}
