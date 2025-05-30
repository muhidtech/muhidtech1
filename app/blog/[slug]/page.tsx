import { Metadata } from 'next';
import { getPostBySlug } from '@/app/api/api';
import BlogPostPage from './BlogPostPage';

// Remove the Props interface and getSlug import

// Generate static params for all blog slugs
// export async function generateStaticParams() {
//   // getAllSlugs should return an array of slugs, e.g. ['part-1', 'part-2']
//   const slugs = await getAllSlugs();
//   return slugs.map((slug: string) => ({ slug }));
// }

type Props = {
  params: Promise<{ slug: string }>
}


// Server-side metadata generation
export async function generateMetadata(
  { params }: Props,
): Promise<Metadata>{
  const { slug } = await params
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      url: `https://muhidtech.vercel.app/blog/${post.slug}`,
      images: [{ url: post.image, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
      images: [post.image],
    },
  };
}

// Render component with slug prop
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
})  {
  const { slug } = await params
  return <BlogPostPage slug={slug} />;
}