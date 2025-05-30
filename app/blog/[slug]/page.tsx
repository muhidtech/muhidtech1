import BlogPostPage from "./BlogPostPage";
import { getPostBySlug } from "@/app/api/api";
import { Metadata } from 'next';

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) {
    return { title: 'Post Not Found' };
  }
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://muhidtech.vercel.com/blog/${params.slug}`,
      images: [{ url: post.image, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

export default function Page({ params }: PageProps) {
  return <BlogPostPage slug={params.slug} />;
}
