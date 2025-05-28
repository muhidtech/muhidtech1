"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { BlogPost } from "../data/mockPosts"; // or your API type
import BlogDetail from "../components/BlogDetail";
import BackgroundAnimation from "@/app/components/BackgroundAnimation";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import SearchBar from "../components/SearchBar";
import { fetchPosts } from "@/app/api/api";

export default function BlogPostPage() {
  const router = useRouter();
  const { slug } = useParams() as { slug: string };

  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  const [comments, setComments] = useState<{ name: string; comment: string }[]>([]);
  const [newComment, setNewComment] = useState({ name: "", comment: "" });

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (e) {
        setError("Failed to fetch posts.");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const post = posts.find(p => p.slug === slug);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, comment } = newComment;

    if (!name.trim() || !comment.trim()) {
      setError("Please enter both your name and comment.");
      return;
    }

    setComments(prev => [...prev, { name: name.trim(), comment: comment.trim() }]);
    setNewComment({ name: "", comment: "" });
    setError("");
  };

  if (loading) return <p className="text-center py-10 text-gray-400">Loading...</p>;

  if (!post) {
    return (
      <main className="max-w-4xl mx-auto p-6 text-center text-gray-400">
        <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
        <button onClick={() => router.push("/blog")} className="text-cyan-500 underline">
          Go back to blog
        </button>
      </main>
    );
  }

  const topPosts = posts.filter(p => p.featured && p.id !== post.id).slice(0, 3);
  const relatedPosts = posts.filter(p => p.category === post.category && p.id !== post.id).slice(0, 3);

  return (
    <>
      <BackgroundAnimation />
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-10">
        {/* Header Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5 mb-8">
          <button onClick={() => router.back()} className="text-cyan-500 hover:text-cyan-400 transition">
            ← Go back
          </button>
          <SearchBar search={search} setSearch={setSearch} />
        </div>

        {/* Blog Detail */}
        <BlogDetail post={post} />

        {/* Comment Section */}
        <section className="mb-16 mt-14">
          <h2 className="text-2xl font-semibold mb-6 text-cyan-500">Leave a Comment</h2>
          <form onSubmit={handleCommentSubmit} className="space-y-4 max-w-lg mb-10">
            <input
              type="text"
              placeholder="Your Name"
              value={newComment.name}
              onChange={e => setNewComment({ ...newComment, name: e.target.value })}
              className="w-full rounded-md border border-gray-600 bg-gray-900 px-4 py-2 text-white placeholder-gray-500"
            />
            <textarea
              placeholder="Your Comment"
              value={newComment.comment}
              onChange={e => setNewComment({ ...newComment, comment: e.target.value })}
              rows={4}
              className="w-full rounded-md border border-gray-600 bg-gray-900 px-4 py-2 text-white placeholder-gray-500"
            />
            {error && <p className="text-red-500">{error}</p>}
            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 px-6 py-2 rounded-md text-white transition"
            >
              Submit
            </button>
          </form>

          {comments.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Comments</h3>
              <ul className="space-y-4">
                {comments.map(({ name, comment }, i) => (
                  <li key={i} className="bg-gray-800 p-4 rounded-md">
                    <p className="text-white font-semibold">{name}</p>
                    <p className="text-gray-300">{comment}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* Top & Related Posts */}
        {[{ label: "Top Posts", data: topPosts }, { label: "Related Posts", data: relatedPosts }].map(
          ({ label, data }) =>
            data.length > 0 && (
              <section key={label} className="mb-12">
                <h2 className="text-2xl font-semibold mb-6 text-cyan-500">{label}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {data.map(post => (
                    <Link
                      key={post.id}
                      href={`/blog/${post.slug}`}
                      className="block bg-gray-900 rounded-lg p-5 hover:border-cyan-500 border border-gray-800 transition"
                    >
                      <h3 className="text-xl font-semibold text-white">{post.title}</h3>
                      <p className="text-gray-400 mt-2 text-sm">{post.summary}</p>
                    </Link>
                  ))}
                </div>
              </section>
            )
        )}
      </main>

      <Footer />
    </>
  );
}
