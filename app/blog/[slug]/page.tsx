'use client';

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import BlogDetail from "../components/BlogDetail";
import BackgroundAnimation from "@/app/components/BackgroundAnimation";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { BlogPost } from "../data/mockPosts";
import { fetchPosts, getComments, postComment } from "@/app/api/api";
import FancyNavbar from "./components/FancyNavbar";

export default function BlogPostPage() {
  const router = useRouter();
  const { slug } = useParams() as { slug: string };

  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [comments, setComments] = useState<{ name: string; comment: string }[]>([]);
  const [newComment, setNewComment] = useState({ name: "", comment: "" });
  const [showComments, setShowComments] = useState(true);

  // Fetch all blog posts
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
  const postId = post?.id;

  // Fetch comments for this post when loaded
  useEffect(() => {
    if (!postId) return;
    setLoading(true);
    getComments(post.slug)
      .then(setComments)
      .catch(() => setError("Failed to load comments."))
      .finally(() => setLoading(false));
  }, [postId]);

  // Submit a comment via API
  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, comment } = newComment;
    if (!name.trim() || !comment.trim()) {
      setError("Please enter both name and comment.");
      return;
    }
    if (!post || post.slug === undefined || !post.slug) {
      setError("Post not loaded. Please try again later.");
      return;
    }

    try {
      const posted = await postComment(post.slug, name.trim(), comment.trim());
      setComments(prev => [posted, ...prev]);
      setNewComment({ name: "", comment: "" });
      setError("");
    } catch (e) {
      setError("Failed to post comment.");
    }
  };


  const handleCategorySelect = (cat: string) => {
    setSelectedCategory(cat);
    setSearch("");
    router.push(cat === "All" ? "/blog" : `/blog?category=${encodeURIComponent(cat)}`);
  };

  if (loading) return <p className="text-center py-10 text-gray-400">Loading...</p>;

  if (!post) {
    return (
      <main className="max-w-4xl mx-auto p-6 text-center text-gray-400">
        <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
        <button onClick={() => router.push("/blog")} className="text-cyan-500 underline">Go back to blog</button>
      </main>
    );
  }

  // Extract unique categories from posts, including "All"
  const categories = ["All", ...Array.from(new Set(posts.flatMap(p => p.category ? [p.category] : [])))];

  // Define topPosts and relatedPosts
  const topPosts = posts
    .filter(p => p.id !== post.id)
    .slice(0, 3);

  const relatedPosts = posts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <>
      <BackgroundAnimation />
      <Navbar />
      <FancyNavbar
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
        search={search}
        setSearch={setSearch}
      />

      <main className="max-w-4xl mx-auto px-6 py-12 mt-10">
        <BlogDetail post={post} />

        {/* Comment Section */}
        <section className="mt-20 mb-24">
          <h2 className="text-3xl font-bold text-cyan-500 mb-6">Leave a Comment</h2>

          <form
            onSubmit={handleCommentSubmit}
            className="bg-gray-900 border border-gray-700 rounded-xl p-6 mb-8 space-y-4 shadow-md"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={newComment.name}
              onChange={e => setNewComment({ ...newComment, name: e.target.value })}
              className="w-full rounded-md bg-gray-800 border border-gray-700 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <textarea
              placeholder="Your Comment"
              value={newComment.comment}
              onChange={e => setNewComment({ ...newComment, comment: e.target.value })}
              rows={4}
              className="w-full rounded-md bg-gray-800 border border-gray-700 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            {/* {error && <p className="text-red-500">{error}</p>} */}
            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 px-6 py-2 rounded-md text-white font-semibold transition"
            >
              Submit Comment
            </button>
          </form>

          {/* Toggle Comments */}
          <div className="text-center mb-6">
            <button
              onClick={() => setShowComments(prev => !prev)}
              className="text-cyan-400 hover:text-cyan-300 text-lg underline underline-offset-4 transition"
            >
              {showComments ? "Hide Comments" : `Show ${comments.length} Comment${comments.length !== 1 ? "s" : ""}`}
            </button>
          </div>

          {/* Comments */}
          {showComments && (
            <div className="space-y-5">
              {comments.length > 0 ? (
                comments.map(({ name, comment }, i) => (
                  <div
                    key={i}
                    className="bg-gray-900 border border-gray-700 rounded-lg p-5 shadow-sm hover:shadow-md transition"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-cyan-400 font-semibold">{name}</p>
                      <span className="text-gray-500 text-sm">#{i + 1}</span>
                    </div>
                    <p className="text-gray-300">{comment}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-400 text-center">No comments yet. Be the first to comment!</p>
              )}
            </div>
          )}
        </section>

        {/* Related/Top Posts */}
        {[{ label: "Top Posts", data: topPosts }, { label: "Related Posts", data: relatedPosts }].map(
          ({ label, data }) =>
            data.length > 0 && (
              <section key={label} className="mb-14">
                <h2 className="text-2xl font-semibold mb-5 text-cyan-500">{label}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {data.map(post => (
                    <Link
                      key={post.id}
                      href={`/blog/${post.slug}`}
                      className="group block bg-gray-900 border border-gray-700 rounded-lg p-5 transition hover:border-cyan-500 hover:shadow-lg"
                    >
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition">{post.title}</h3>
                      <p className="text-sm text-gray-400 mt-2">{post.summary}</p>
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
