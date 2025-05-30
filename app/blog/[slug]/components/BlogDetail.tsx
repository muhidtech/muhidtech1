// components/BlogDetail.tsx
'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css'; // Dark theme for code
import ReactPlayer from 'react-player/youtube';
import Image from 'next/image';

interface Props {
  post: {
    title: string;
    content: string;
    image: string;
    video?: string;
    readTime: string;
    author: string;
    date: string;
  };
}

export default function BlogDetail({ post }: Props) {
  return (
    <article className="prose prose-invert max-w-full">

      {/* Title */}
      <h1 className="text-3xl font-bold text-white mb-4">{post.title}</h1>
      <p className="text-sm text-gray-400 mb-6">
        {post.date} • {post.readTime} • by {post.author}
      </p>

      {/* Cover Image */}
      <div className="w-full h-[300px] relative mb-6 rounded-lg overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          width={1200}
          height={600} // Aspect ratio = 2:1
          layout="responsive"
          className="rounded-lg mb-6 object-cover"
        />
      </div>
      {/* Markdown Content */}
      <ReactMarkdown
        rehypePlugins={[rehypeRaw, rehypeHighlight]}
        remarkPlugins={[remarkGfm]}
        components={{
          code({ inline, className, children, ...props }: React.ComponentProps<'code'> & { inline?: boolean }) {
            return !inline ? (
              <pre className={`${className} bg-gray-900 p-4 rounded-md overflow-x-auto`}>
                <code {...props}>{children}</code>
              </pre>
            ) : (
              <code className="bg-gray-800 text-pink-400 px-1 rounded" {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {post.content}
      </ReactMarkdown>

      {/* Optional YouTube Video */}
      {post.video && (
        <div className="mt-8">
          <ReactPlayer url={post.video} width="100%" height="400px" controls />
        </div>
      )}
    </article>
  );
}
