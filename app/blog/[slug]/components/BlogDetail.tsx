'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ReactPlayer from 'react-player/youtube';
import Image from 'next/image';
import { useState, ReactNode } from 'react';

interface CodeProps {
  inline?: boolean;
  className?: string;
  children?: ReactNode;
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


export const CodeBlock: React.FC<CodeProps> = ({ inline, className, children, ...rest }) => {
  const [copied, setCopied] = useState(false);

  const languageMatch = /language-(\w+)/.exec(className || '');
  const language = languageMatch?.[1] ?? 'text';

  const codeString = Array.isArray(children) ? children.join('') : String(children);

  // Handle inline code (e.g., `django`, `rest api`)
  if (inline) {
    // Render inline code like a tag instead of real code styling
    return (
      <span className="bg-gray-800 text-gray-200 px-2 py-0.5 rounded text-sm font-medium mr-1">
        {codeString}
      </span>
    );
  }

  // Handle code blocks (e.g., ```bash or ```
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeString.trim());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Copy failed:', err);
    }
  };

  return (
    <>
    {languageMatch 
      && (
    <div className="relative group mb-6 rounded-md border border-[#333] bg-[#1e1e1e] font-mono">
      <div className="flex justify-between items-center px-4 py-2 bg-[#252526] text-xs text-[#cccccc] rounded-t-md select-none">
        <span className="uppercase">{language}</span>
        <button
          onClick={handleCopy}
          className="text-xs text-[#d4d4d4] bg-[#0e639c] px-3 py-1 rounded hover:bg-[#1177bb] transition-colors duration-200"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      
        <SyntaxHighlighter language={language}  style={dark}  PreTag="div">
          {codeString}
        </SyntaxHighlighter>
    </div>
      )
      }
    {!languageMatch 
    &&  (

        <code {...rest} className={className}>
            {children}
        </code>
      )
    }
    </>
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
