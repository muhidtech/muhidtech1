"use client";

import '@uiw/react-md-editor/markdown-editor.css';
import MDEditor from "@uiw/react-md-editor";

export default function MarkdownEditor({
  content,
  setContent,
}: {
  content: string;
  setContent: (v: string) => void;
}) {
  return (
    <div data-color-mode="light">
      <MDEditor value={content} onChange={(v) => setContent(v || "")} height={400} />
    </div>
  );
}