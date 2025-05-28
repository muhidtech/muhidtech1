import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '../data/mockPosts'; // adjust import path as needed

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-cyan-500 transition group"
    >
      {post.image && (
        <div className="relative w-full h-52">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      <div className="p-5 space-y-3">
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span className="bg-cyan-800/20 text-cyan-400 px-2 py-0.5 rounded-full uppercase tracking-wide">
            {post.category}
          </span>
          <span>{post.date}</span>
        </div>

        <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-200">
          {post.title}
        </h3>

        <p className="text-gray-400 text-sm line-clamp-3">{post.summary}</p>

        <div className="flex items-center justify-between text-xs text-gray-500 mt-4">
          <span>{post.author || 'MuhidTech'}</span>
          <span>{post.readTime || '5 min read'}</span>
        </div>

        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-gray-800 text-gray-300 px-2 py-0.5 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
