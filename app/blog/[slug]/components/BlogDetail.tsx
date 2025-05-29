// components/BlogDetail.tsx
'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css'; // Dark theme for code
import ReactPlayer from 'react-player/youtube';

interface Props {
  post: {
    title: string;
    content: string;
    image: string;
    video?: string;
  };
}

export default function BlogDetail({ post }: Props) {
  return (
    <article className="prose prose-invert max-w-full">
      {/* Cover Image */}
      <img src={post.image} alt={post.title} className="rounded-lg w-full max-h-[400px] object-cover mb-6" />

      {/* Title */}
      <h1 className="text-4xl font-bold text-white mb-6">{post.title}</h1>

      {/* Markdown Content */}
      <ReactMarkdown
        children={post.content}
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
      />

      {/* Optional YouTube Video */}
      {post.video && (
        <div className="mt-8">
          <ReactPlayer url={post.video} width="100%" height="400px" controls />
        </div>
      )}
    </article>
  );
}
