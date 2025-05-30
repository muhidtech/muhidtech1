'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import 'highlight.js/styles/github-dark.css';
import ReactPlayer from 'react-player/youtube';
import Image from 'next/image';
import { useState } from 'react';

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

function CodeBlock({
  inline,
  className = '',
  children,
  node,
  ...props
}: {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
  node?: any;
  [key: string]: any;
}) {
  const [copied, setCopied] = useState(false);

  const codeString =
    !inline && node?.children?.[0]?.value
      ? node.children[0].value
      : typeof children === 'string'
      ? children
      : '';

  const language = className.replace('language-', '') || 'code';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeString.trim());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Copy failed:', err);
      setCopied(false);
    }
  };

  if (inline) {
    return (
      <code className="bg-gray-800 text-pink-400 px-1 rounded" {...props}>
        {children}
      </code>
    );
  }

  return (
    <div className="relative group my-6">
      <div className="flex items-center justify-between bg-gray-800 px-4 py-2 text-xs text-gray-400 rounded-t-md">
        <span>{language}</span>
        <button
          onClick={handleCopy}
          className="bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre className="bg-gray-900 p-4 rounded-b-md overflow-x-auto">
        <code className={className} {...props}>
          {codeString}
        </code>
      </pre>
    </div>
  );
}

export default function BlogDetail({ post }: Props) {
  return (
    <article className="prose prose-invert max-w-full">
      <h1 className="text-3xl font-bold text-white mb-4">{post.title}</h1>
      <p className="text-sm text-gray-400 mb-6">
        {post.date} • {post.readTime} • by {post.author}
      </p>

      <div className="w-full h-[300px] relative mb-6 rounded-lg overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          width={1200}
          height={600}
          layout="responsive"
          className="rounded-lg mb-6 object-cover"
        />
      </div>

      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkGfm]}
        components={{
          code: CodeBlock,
        }}
      >
        {post.content}
      </ReactMarkdown>

      {post.video && (
        <div className="mt-8">
          <ReactPlayer url={post.video} width="100%" height="400px" controls />
        </div>
      )}
    </article>
  );
}


