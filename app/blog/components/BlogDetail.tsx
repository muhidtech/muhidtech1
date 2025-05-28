'use client';

import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { BlogPost } from '../data/mockPosts';

export default function BlogDetail({ post }: { post: BlogPost }) {
  return (
    <article className="prose prose-invert prose-lg max-w-none text-gray-200">
      <h1 className="text-3xl font-bold text-white mb-4">{post.title}</h1>
      <p className="text-sm text-gray-400 mb-6">
        {post.date} • {post.readTime} • by {post.author}
      </p>

      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full rounded-lg mb-8"
        />
      )}

      {/* Render markdown with proper plugins */}
      <div className="space-y-4 leading-relaxed">
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          remarkPlugins={[remarkGfm]}
        >
          {post.content}
        </ReactMarkdown>
      </div>

      {post.videoUrl && (
        <div className="mt-10 w-full">
          <iframe
            src={post.videoUrl}
            title="Video player"
            className="w-full h-[400px] rounded-lg"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      )}
    </article>
  );
}
