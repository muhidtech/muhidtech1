"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Layout from "../dashboard/components/layout/Layout";
import ProtectedRoute from "@/app/hooks/ProtectedRoute";
import { fetchPosts, deletePost } from "@/app/api/api";
import SkeletonCard from "./components/SkeletonCard";
import Image from "next/image";

export interface BlogPost {
  id: number;
  title: string;
  summary: string;
  category: string;
  date: string;
  slug: string;
  image: string | File | null;
  featured?: boolean;
  author?: string;
  readTime?: string;
  tags?: string[];
  content: string;
  videoUrl?: string;
}

export default function BlogPage() {
  const router = useRouter();
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadBlogs() {
      try {
        const data = await fetchPosts();
        setBlogs(data);
      } catch (e) {
        setError("Failed to fetch blogs" + e);
      } finally {
        setLoading(false);
      }
    }
    loadBlogs();
  }, []);

  const handleDelete = async (slug: string) => {
    if (!confirm("Are you sure you want to delete this blog post?")) return;
    try {
      await deletePost(slug);
      setBlogs((prev) => prev.filter((b) => b.slug !== slug));
    } catch {
      alert("Failed to delete blog post");
    }
  };

  return (
    <ProtectedRoute>
      <Layout>
        <div className="w-auto md:ml-60 p-4 max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-white">Blog Posts</h2>
            <button
              onClick={() => router.push("/admin/blog/add")}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-lg shadow-lg transition duration-300"
            >
              + Add New
            </button>
          </div>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading
              ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
              : blogs.map((blog) => (
                  <div
                    key={blog.id}
                    className="bg-gradient-to-tr from-cyan-800/70 to-blue-900/90 border border-cyan-500/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-400/50 transition transform hover:-translate-y-1 duration-300"
                  >
                    {((typeof blog.image === "string" && blog.image) ||
                      (blog.image instanceof File && blog.image)) && (
                      <div className="relative w-full h-48">
                        <Image
                          fill
                          src={
                            typeof blog.image === "string"
                              ? blog.image
                              : blog.image instanceof File
                              ? URL.createObjectURL(blog.image)
                              : ""
                          }
                          alt={blog.title}
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      </div>
                    )}

                    <div className="p-4">
                      <h3 className="text-lg font-bold text-white mb-1 line-clamp-1">{blog.title}</h3>
                      <p className="text-gray-300 text-sm mb-3 line-clamp-2">{blog.summary}</p>

                      <div className="flex justify-between text-xs text-cyan-300 font-mono mb-2">
                        <span>{new Date(blog.date).toLocaleDateString()}</span>
                        <span>{blog.author || "Anonymous"}</span>
                      </div>

                      <div className="flex justify-between mt-2">
                        <button
                          onClick={() => router.push(`/admin/blog/add?slug=${blog.slug}`)}
                          className="text-cyan-400 hover:text-cyan-600 font-semibold text-sm transition"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(blog.slug)}
                          className="text-red-500 hover:text-red-600 font-semibold text-sm transition"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </Layout>
    </ProtectedRoute>
  );
}
