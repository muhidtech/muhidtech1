import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '../data/mockPosts'; // adjust import path as needed

export default function FeaturedPost({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block rounded-xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform bg-gradient-to-br from-cyan-600 via-cyan-500 to-blue-600 text-white relative"
    >
      {post.image && (
        <div className="relative h-56 w-full">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
      )}

      <div className="p-6 relative z-10">
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="bg-white/20 rounded-full px-3 py-1 uppercase font-semibold tracking-wider">
            {post.category}
          </span>
          <span className="opacity-80">{post.date}</span>
        </div>

        <h2 className="text-3xl font-extrabold leading-tight">{post.title}</h2>

        <p className="mt-3 text-white/90 line-clamp-3">{post.summary}</p>

        <div className="mt-5 flex justify-between text-xs opacity-80">
          <span>{post.author || 'MuhidTech'}</span>
          <span>{post.readTime || '5 min read'}</span>
        </div>
      </div>
    </Link>
  );
}
