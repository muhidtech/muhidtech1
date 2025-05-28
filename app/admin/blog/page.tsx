"use client";

import React, { useEffect, useState, useRef } from "react";
import Layout from "../dashboard/components/layout/Layout";
import { createPost, fetchPosts, updatePost, deletePost } from "@/app/api/api";


export interface BlogPost {
  id: number;
  title: string;
  summary: string;
  category: string;
  date: string;
  slug: string;
  image?: string;
  featured?: boolean;
  author?: string;
  readTime?: string;
  tags?: string[];
  content: string;
  videoUrl?: string;
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [editPost, setEditPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    async function loadBlogs() {
      try {
        const data = await fetchPosts();
        setBlogs(data);
      } catch (e: any) {
        setError(e.message || "Failed to fetch blogs");
      } finally {
        setLoading(false);
      }
    }
    loadBlogs();
  }, []);

  const handleSubmit = async (post: Partial<BlogPost>) => {
    try {
      if (editPost) {
        const updated = await updatePost(editPost.id.toString(), post);
        setBlogs((prev) =>
          prev.map((b) => (b.id === editPost.id ? { ...b, ...updated } : b))
        );
        setEditPost(null);
      } else {
        const newPost = await createPost(post);
        setBlogs((prev) => [newPost, ...prev]);
      }
    } catch (err: any) {
      alert(err.message);
    }
  };

  const handleEdit = (id: number) => {
    const post = blogs.find((b) => b.id === id);
    if (post) {
      setEditPost(post);
      setModalOpen(true);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this blog post?")) return;
    try {
      await deletePost(id.toString());
      setBlogs((prev) => prev.filter((b) => b.id !== id));
    } catch (err: any) {
      alert(err.message);
    }
  };

  if (loading) return <p>Loading blogs...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <Layout>
      <div className="ml-65 p-4 bg-white/20 backdrop-blur-2xl rounded-lg shadow max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Blog Posts</h2>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded"
          >
            + Add New
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm font-light">
            <thead className="border-b border-gray-300 dark:border-gray-700">
              <tr>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2 hidden sm:table-cell">Category</th>
                <th className="px-4 py-2 hidden md:table-cell">Date</th>
                <th className="px-4 py-2 hidden lg:table-cell">Author</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr
                  key={blog.id}
                  className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <td className="px-4 py-3 max-w-xs truncate">{blog.title}</td>
                  <td className="px-4 py-3 hidden sm:table-cell">{blog.category}</td>
                  <td className="px-4 py-3 hidden md:table-cell">
                    {new Date(blog.date).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3 hidden lg:table-cell">{blog.author || "-"}</td>
                  <td className="px-4 py-3 space-x-2">
                    <button
                      onClick={() => handleEdit(blog.id)}
                      className="text-cyan-500 hover:underline cursor-pointer"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(blog.id)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {blogs.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-4 py-6 text-center text-gray-500">
                    No blog posts found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {isModalOpen && (
        <AddPostModal
          postToEdit={editPost || undefined}
          isEditMode={!!editPost}
          onClose={() => {
            setModalOpen(false);
            setEditPost(null);
          }}
        />
      )}
      </div>
    </Layout>
  );
}

export interface BlogPost {
  title: string;
  summary: string;
  category: string;
  date: string;
  slug: string;
  image?: string;
  featured?: boolean;
  author?: string;
  readTime?: string;
  tags?: string[];
  content: string;
  videoUrl?: string;
}


type ModalProps = {
  onClose: () => void;
  postToEdit?: BlogPost;
  isEditMode?: boolean;
};

function AddPostModal({ onClose, postToEdit, isEditMode }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 300, y: 300 });

  // Form state for all BlogPost fields
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [slug, setSlug] = useState("");
  const [image, setImage] = useState("");
  const [featured, setFeatured] = useState(false);
  const [readTime, setReadTime] = useState("");
  const [tags, setTags] = useState<string>("");
  const [content, setContent] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);

  useEffect(() => {
    if (postToEdit) {
        setTitle(postToEdit.title || "");
        setSummary(postToEdit.summary || "");
        setCategory(postToEdit.category || "");
        setAuthor(postToEdit.author || "");
        setDate(postToEdit.date || new Date().toISOString().slice(0, 10));
        setSlug(postToEdit.slug || "");
        setImage(postToEdit.image || "");
        setFeatured(!!postToEdit.featured);
        setReadTime(postToEdit.readTime || "");
        setTags(postToEdit.tags?.join(", ") || "");
        setContent(postToEdit.content || "");
        setVideoUrl(postToEdit.videoUrl || "");
    }
  }, [postToEdit]);
  // Drag handlers (unchanged)
  const onMouseDown = (e: React.MouseEvent) => {
    if (!headerRef.current) return;
    const rect = headerRef.current.getBoundingClientRect();
    setDragging(true);
    setOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };
  const onMouseMove = (e: MouseEvent) => {
    if (!dragging) return;
    setPosition({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });
  };
  const onMouseUp = () => setDragging(false);
  useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
    } else {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [dragging, offset]);

  // Submit handler
  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  const blogData = {
    title,
    summary,
    category,
    date,
    slug,
    image: imageFile || (image || undefined),
    featured,
    author: author || undefined,
    readTime: readTime || undefined,
    tags: tags ? tags.split(",").map(t => t.trim()) : undefined,
    content,
    videoUrl: videoFile || (videoUrl || undefined),
  };

  if (isEditMode && postToEdit) {
    updatePost(postToEdit.slug, blogData); // 👈 Make sure `slug` or `id` is used as identifier
  } else {
    createPost(blogData);
  }

  onClose();
};

    useEffect(() => {
        if (title && !slug) {
            setSlug(
            title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/(^-|-$)+/g, "")
            );
        }
    }, [title]);


  return (
    <div
      ref={modalRef}
      className="fixed z-60 w-[90vw] max-w-4xl bg-white bg-opacity-30 dark:bg-gray-900 dark:bg-opacity-30 backdrop-blur-lg border border-cyan-500 rounded-xl shadow-2xl p-6 cursor-default transition-transform duration-200 ease-in-out sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 overflow-hidden"
      style={{ top: position.y, left: position.x, cursor: dragging ? "grabbing" : "default" }}
    >
      {/* Header */}
      <div
        ref={headerRef}
        onMouseDown={window.innerWidth >= 640 ? onMouseDown : undefined}
        className="cursor-grab select-none bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-6 py-3 rounded-t-xl flex justify-between items-center shadow-lg"
      >
        <h3 className="font-semibold text-lg tracking-wide">
            {isEditMode ? "Edit Blog Post" : "Add New Blog Post"}
        </h3>

        <button
          onClick={onClose}
          className="text-white hover:text-cyan-200 font-bold text-2xl leading-none transition-colors"
          aria-label="Close modal"
          type="button"
        >
          &times;
        </button>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="mt-5 grid grid-cols-1 gap-5 max-h-[80vh] overflow-y-auto pr-5 sm:grid-cols-2"
      >
        {/* Title */}
        <div className="sm:col-span-2">
          <label htmlFor="title" className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
            Title <span className="text-red-500">*</span>
          </label>
          <input
            id="title"
            type="text"
            required
            className="w-full px-4 py-2 border border-cyan-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-800 dark:border-cyan-600 dark:text-white"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Slug */}
        <div>
          <label htmlFor="slug" className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
            Slug <span className="text-red-500">*</span>
          </label>
          <input
            id="slug"
            type="text"
            required
            className="w-full px-4 py-2 border border-cyan-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-800 dark:border-cyan-600 dark:text-white"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
          />
        </div>

        {/* Category */}
        <div>
          <label htmlFor="category" className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
            Category
          </label>
          <input
            id="category"
            type="text"
            className="w-full px-4 py-2 border border-cyan-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-800 dark:border-cyan-600 dark:text-white"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        {/* Author */}
        <div>
          <label htmlFor="author" className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
            Author
          </label>
          <input
            id="author"
            type="text"
            className="w-full px-4 py-2 border border-cyan-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-800 dark:border-cyan-600 dark:text-white"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        {/* Date */}
        <div>
          <label htmlFor="date" className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
            Date
          </label>
          <input
            id="date"
            type="date"
            className="w-full px-4 py-2 border border-cyan-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-800 dark:border-cyan-600 dark:text-white"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        {/* Image */}
        <div className="sm:col-span-2">
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
                Image (URL or File)
            </label>
            <input
                type="text"
                placeholder="Paste image URL"
                className="w-full mb-2 px-4 py-2 border border-cyan-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-800 dark:border-cyan-600 dark:text-white"
                value={image}
                onChange={e => setImage(e.target.value)}
                disabled={!!imageFile}
            />
            <input
                type="file"
                accept="image/*"
                className="w-full"
                onChange={e => {
                const file = e.target.files?.[0] || null;
                setImageFile(file);
                if (file) setImage(""); // Clear URL if file is chosen
                }}
                disabled={!!image}
            />
            {imageFile && (
                <div className="text-xs text-gray-500 mt-1">
                Selected file: {imageFile.name}
                <button
                    type="button"
                    className="ml-2 text-red-500 underline"
                    onClick={() => setImageFile(null)}
                >
                    Remove
                </button>
                </div>
            )}
        </div>

        {/* Video URL */}
        <div className="sm:col-span-2">
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
                Video (URL or File)
            </label>
            <input
                type="text"
                placeholder="Paste video URL"
                className="w-full mb-2 px-4 py-2 border border-cyan-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-800 dark:border-cyan-600 dark:text-white"
                value={videoUrl}
                onChange={e => setVideoUrl(e.target.value)}
                disabled={!!videoFile}
            />
            <input
                type="file"
                accept="video/*"
                className="w-full"
                onChange={e => {
                const file = e.target.files?.[0] || null;
                setVideoFile(file);
                if (file) setVideoUrl(""); // Clear URL if file is chosen
                }}
                disabled={!!videoUrl}
            />
            {videoFile && (
                <div className="text-xs text-gray-500 mt-1">
                Selected file: {videoFile.name}
                <button
                    type="button"
                    className="ml-2 text-red-500 underline"
                    onClick={() => setVideoFile(null)}
                >
                    Remove
                </button>
                </div>
            )}
        </div>

        {/* Read Time */}
        <div>
          <label htmlFor="readTime" className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
            Read Time (e.g., 5 min)
          </label>
          <input
            id="readTime"
            type="text"
            className="w-full px-4 py-2 border border-cyan-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-800 dark:border-cyan-600 dark:text-white"
            value={readTime}
            onChange={(e) => setReadTime(e.target.value)}
          />
        </div>

        {/* Tags */}
        <div>
          <label htmlFor="tags" className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
            Tags (comma separated)
          </label>
          <input
            id="tags"
            type="text"
            className="w-full px-4 py-2 border border-cyan-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-800 dark:border-cyan-600 dark:text-white"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>

        {/* Featured */}
        <div className="flex items-center gap-2">
          <input
            id="featured"
            type="checkbox"
            checked={featured}
            onChange={(e) => setFeatured(e.target.checked)}
            className="h-5 w-5 text-cyan-600 border-gray-300 rounded"
          />
          <label htmlFor="featured" className="font-medium text-gray-700 dark:text-gray-300">
            Featured
          </label>
        </div>

        {/* Summary */}
        <div className="sm:col-span-2">
          <label htmlFor="summary" className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
            Summary <span className="text-red-500">*</span>
          </label>
          <textarea
            id="summary"
            required
            rows={3}
            className="w-full px-4 py-2 border border-cyan-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-800 dark:border-cyan-600 dark:text-white resize-none"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          />
        </div>

        {/* Content */}
        <div className="sm:col-span-2">
          <label htmlFor="content" className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
            Content <span className="text-red-500">*</span>
          </label>
          <textarea
            id="content"
            required
            rows={6}
            className="w-full px-4 py-2 border border-cyan-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-800 dark:border-cyan-600 dark:text-white resize-none"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        {/* Buttons */}
        <div className="sm:col-span-2 flex justify-end gap-3 mt-2">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-md border border-cyan-400 hover:bg-cyan-100 dark:border-cyan-600 dark:hover:bg-cyan-700 dark:hover:text-white transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-5 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold hover:from-cyan-600 hover:to-cyan-700 transition"
          >
            Add Post
          </button>
        </div>
      </form>
    </div>
  );
}