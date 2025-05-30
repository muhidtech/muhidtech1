'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import 'highlight.js/styles/github-dark.css'; // We will override some styles below
import ReactPlayer from 'react-player/youtube';
import Image from 'next/image';
import { useState, ReactNode } from 'react';

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

// filepath: c:\Users\RanVic\OneDrive\Desktop\portfolio\app\blog\[slug]\components\BlogDetail.tsx
export const CodeBlock: React.FC<CodeProps> = ({
  inline,
  className,
  children,
  node,
  ...props
}) => {
  const [copied, setCopied] = useState(false);

  // Only customize code blocks (not inline code)
  if (inline) {
    // Render inline code as plain text (no styling)
    return <>{children}</>;
  }

  // Extract language from className like "language-js"
  const languageMatch = className?.match(/language-(\w+)/);
  const language = languageMatch?.[1] ?? 'text';

  // Get code string
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

  return (
    <div className="relative group mb-6 rounded-md border border-[#333] bg-[#1e1e1e] font-mono">
      <div className="flex justify-between items-center px-4 py-2 bg-[#252526] text-xs text-[#cccccc] rounded-t-md select-none">
        <span className="uppercase">{language}</span>
        <button
          onClick={handleCopy}
          className="text-xs text-[#d4d4d4] bg-[#0e639c] px-3 py-1 rounded hover:bg-[#1177bb] transition-colors duration-200"
          aria-label="Copy code to clipboard"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre
        className={`p-4 overflow-x-auto text-sm text-[#d4d4d4]`}
        style={{ fontFamily: "'Source Code Pro', monospace" }}
      >
        <code {...props}>{children}</code>
      </pre>
    </div>
  );
};

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
