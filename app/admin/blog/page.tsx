"use client";

import React, { useEffect, useState } from "react";
import { fetchPosts } from "@/app/api/api";
import Layout from "../dashboard/components/layout/Layout";

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

  // Fetch blog posts on client side
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

  // Handler placeholders for edit, delete (implement API calls later)
  const handleEdit = (id: number) => {
    alert(`Edit blog with id ${id} - implement editing!`);
  };

  const handleDelete = (id: number) => {
            if (confirm("Are you sure you want to delete this blog post?")) {
            alert(`Delete blog with id ${id} - implement delete API call!`);
            }
        };

        if (loading) return <p>Loading blogs...</p>;
        if (error) return <p className="text-red-600">{error}</p>;

        return (
            <Layout>   
                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-semibold">Blog Posts</h2>
                    <button
                    onClick={() => alert("Add new blog - implement form/modal!")}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
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
                                className="text-blue-600 hover:underline"
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
                </div>
            </Layout>
  );
}
