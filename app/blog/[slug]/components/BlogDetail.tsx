'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import 'highlight.js/styles/github-dark.css';
import ReactPlayer from 'react-player/youtube';
import Image from 'next/image';
import { useState, ReactNode } from 'react';
// import type { Element as HastElement } from 'hast';
// import type { Parent } from 'unist';

// interface CodeProps {
//   inline?: boolean;
//   className?: string;
//   children?: ReactNode;
//   node?: Parent & { children: { value: string }[] };
//   [key: string]: unknown;
// }

interface CodeProps {
  inline?: boolean;
  className?: string;
  children?: ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  node?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}


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

export const CodeBlock: React.FC<CodeProps> = ({
  inline,
  className,
  children,
  node,
  ...props
}) => {
  const [copied, setCopied] = useState(false);

  const codeString =
    !inline && node?.children?.[0]?.value
      ? node.children[0].value
      : typeof children === 'string'
      ? children
      : '';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeString.trim());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  if (inline) {
    return (
      <code className="bg-gray-800 text-pink-400 px-1 rounded" {...props}>
        {children}
      </code>
    );
  }

  const languageMatch = className?.match(/language-(\w+)/);
  const language = languageMatch?.[1] ?? 'text';

  return (
    <div className="relative group mb-4 rounded-md border border-gray-700 bg-[#1e1e1e]">
      <div className="flex justify-between items-center px-4 py-2 bg-[#2d2d2d] text-xs font-mono text-gray-400 rounded-t-md">
        <span>{language}</span>
        <button
          onClick={handleCopy}
          className="text-xs text-white bg-gray-700 px-2 py-1 rounded hover:bg-cyan-600 transition-opacity"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre className={`p-4 overflow-x-auto ${className}`}>
        <code {...props}>{children}</code>
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
