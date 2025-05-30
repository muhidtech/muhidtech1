"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import { updatePost, createPost, getPostBySlug } from "@/app/api/api"; // Assume you have a getPostBySlug function
import ProtectedRoute from "@/app/hooks/ProtectedRoute";
import Layout from "../../dashboard/components/layout/Layout";
import { BlogPost } from "../page";

const MarkdownEditor = dynamic(() => import("../components/MarkdownEditor"), { ssr: false });

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const slugParam = searchParams.get("slug"); // For editing, pass ?slug=your-post-slug

  const [isLoading, setIsLoading] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [postToEdit, setPostToEdit] = useState<BlogPost| null>(null);

  // Form state
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [slug, setSlug] = useState("");
  const [author, setAuthor] = useState("");
  const [readTime, setReadTime] = useState("");
  const [tags, setTags] = useState("");
  const [featured, setFeatured] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [videoUrl, setVideoUrl] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    async function fetchPost() {
      if (!slugParam) return;

      setIsLoading(true);
      setIsEditMode(true);

      try {
        const post = await getPostBySlug(slugParam);
        if (!post) {
          alert("Post not found.");
          router.back();
          return;
        }
        setPostToEdit(post);

        // Populate form with post data
        setTitle(post.title || "");
        setSummary(post.summary || "");
        setCategory(post.category || "");
        setDate(post.date ? post.date.split("T")[0] : new Date().toISOString().split("T")[0]);
        setSlug(post.slug || "");
        setAuthor(post.author || "");
        setReadTime(post.readTime || "");
        setTags(Array.isArray(post.tags) ? post.tags.join(", ") : "");
        setFeatured(post.featured || false);
        setVideoUrl(post.videoUrl || "");
        setContent(post.content || "");
        // imageFile cannot be populated as File object, maybe show filename somewhere if needed
      } catch (error) {
        alert("Failed to load post." + error);
        router.back();
      } finally {
        setIsLoading(false);
      }
    }

    fetchPost();
  }, [slugParam, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const blogData = {
      title,
      summary,
      category,
      date,
      slug,
      author,
      readTime,
      tags: tags.split(",").map(tag => tag.trim()),
      featured,
      videoUrl,
      content,
      image: imageFile ?? undefined, // Only pass File or undefined
    };

    console.log("📝 Blog Data to Submit:", blogData);

    try {
      if (isEditMode && postToEdit) {
        await updatePost(postToEdit.slug, blogData);
      } else {
        await createPost(blogData);
      }
      router.back();
    } catch (error) {
      alert("Failed to submit post.");
      console.error(error);
    }
  };

  if (isLoading) return <p>Loading post data...</p>;

  return (
    <ProtectedRoute>
      <Layout>
        <div className="max-w-7xl w-auto md:ml-60 px-4 py-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-cyan-600">
              {isEditMode ? "Edit Blog Post" : "Add New Blog Post"}
            </h1>
            <button
              onClick={() => router.back()}
              className="border border-cyan-500 text-cyan-600 px-4 py-2 rounded-md hover:bg-cyan-50 transition"
            >
              Go Back
            </button>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              required
              placeholder="Title"
              className="input"
              value={title}
              onChange={e => {
                setTitle(e.target.value);
                if (!slug) {
                  setSlug(
                    e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "")
                  );
                }
              }}
            />
            <input
              required
              placeholder="Slug"
              className="input"
              value={slug}
              onChange={e => setSlug(e.target.value)}
            />
            <input placeholder="Summary" className="input" value={summary} onChange={e => setSummary(e.target.value)} />
            <input placeholder="Category" className="input" value={category} onChange={e => setCategory(e.target.value)} />
            <input type="date" className="input" value={date} onChange={e => setDate(e.target.value)} />
            <input placeholder="Author" className="input" value={author} onChange={e => setAuthor(e.target.value)} />
            <input placeholder="Read Time" className="input" value={readTime} onChange={e => setReadTime(e.target.value)} />
            <input placeholder="Tags (comma-separated)" className="input" value={tags} onChange={e => setTags(e.target.value)} />

            {/* Image File */}
            <div className="sm:col-span-2">
              <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Upload Cover Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={e => setImageFile(e.target.files?.[0] || null)}
              />
              {imageFile && (
                <div className="text-sm text-gray-500 mt-1">
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
              {!imageFile && isEditMode && postToEdit?.image && (
                <p className="text-sm text-gray-500 mt-1">
                  Current Image: {typeof postToEdit.image === "string" ? postToEdit.image : postToEdit.image.name}
                </p>
              )}
            </div>

            {/* Video URL */}
            <div className="sm:col-span-2">
              <input
                type="text"
                placeholder="YouTube Video URL (optional)"
                className="input"
                value={videoUrl}
                onChange={e => setVideoUrl(e.target.value)}
              />
            </div>

            {/* Featured Toggle */}
            <div className="flex items-center space-x-3 sm:col-span-2">
              <input
                type="checkbox"
                id="featured"
                checked={featured}
                onChange={() => setFeatured(!featured)}
                className="w-5 h-5 text-cyan-600 focus:ring-cyan-500 border-gray-300 rounded"
              />
              <label htmlFor="featured" className="text-gray-700 dark:text-gray-300">Featured Post</label>
            </div>

            {/* Markdown Editor */}
            <div className="sm:col-span-2">
              <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
                Post Content (Markdown Supported)
              </label>
              <MarkdownEditor content={content} setContent={setContent} />
            </div>

            {/* Submit Button */}
            <div className="sm:col-span-2 flex justify-end mt-4">
              <button
                type="submit"
                className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold px-4 py-2 rounded-md hover:from-cyan-600 hover:to-cyan-700 transition"
              >
                {isEditMode ? "Update Post" : "Submit Post"}
              </button>
            </div>
          </form>
        </div>
      </Layout>
    </ProtectedRoute>
  );
}
