'use client';

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import BlogDetail from "./components/BlogDetail";
import BackgroundAnimation from "@/app/components/BackgroundAnimation";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { BlogPost } from "../data/mockPosts";
import { fetchPosts, getComments, postComment } from "@/app/api/api";
import FancyNavbar from "./components/FancyNavbar";



function timeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  const days = Math.floor(hours / 24);
  if (days === 1) return "yesterday";
  return `${days} day${days > 1 ? "s" : ""} ago`;
}



export default function BlogPostPage() {
  const router = useRouter();
  const { slug } = useParams() as { slug: string };

  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [comments, setComments] = useState<{ name: string; text: string, created_at: string }[]>([]);
  const [newComment, setNewComment] = useState({ name: "", comment: "" });
  const [showComments, setShowComments] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (e) {
        setError("Failed to fetch posts: " + (e instanceof Error ? e.message : String(e)));
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const post = posts.find(p => p.slug === slug);
  const postId = post?.id;

  useEffect(() => {
    if (!post || !post.slug) return;
    setLoading(true);
    getComments(post.slug)
      .then(setComments)
      .catch(() => setError("Failed to load comments."))
      .finally(() => setLoading(false));
  }, [postId, post?.slug]);

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, comment } = newComment;
    if (!name.trim() || !comment.trim()) {
      setError("Please enter both name and comment.");
      return;
    }
    if (!post?.slug) {
      setError("Post not loaded. Please try again later.");
      return;
    }

    try {
      const posted = await postComment(post.slug, name.trim(), comment.trim());
      setComments(prev => [posted, ...prev]);
      setNewComment({ name: "", comment: "" });
      setError("");
    } catch (e) {
      setError("Failed to post comment." + (e instanceof Error ? e.message : String(e)));
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

  const categories = ["All", ...Array.from(new Set(posts.flatMap(p => p.category ? [p.category] : [])))];

  const topPosts = posts.filter(p => p.id !== post.id).slice(0, 3);
  const relatedPosts = posts.filter(p => p.id !== post.id && p.category === post.category).slice(0, 3);

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
        {post && (
          <BlogDetail
            post={{
              title: post.title,
              content: post.content,
              image: post.image ?? "",
              video: post.videoUrl,
              author: post.author ?? "",
              date: post.date,
              readTime: post.readTime ?? "",
            }}
          />
        )}

        <section className="mt-20 mb-24 max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-cyan-500 mb-10 text-center">
            Comments
          </h2>

          {/* Comment Form */}
          <form
            onSubmit={handleCommentSubmit}
            className="bg-gray-900 border border-gray-700 rounded-xl p-6 sm:p-8 space-y-5 shadow-lg"
          >
            <input
              type="text"
              placeholder="Your name"
              value={newComment.name}
              onChange={e => setNewComment({ ...newComment, name: e.target.value })}
              required
              className="w-full rounded-md bg-gray-800 border border-gray-700 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <textarea
              placeholder="Write your comment..."
              value={newComment.comment}
              onChange={e => setNewComment({ ...newComment, comment: e.target.value })}
              rows={4}
              required
              className="w-full rounded-md bg-gray-800 border border-gray-700 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <div className="text-right">
              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-600 px-6 py-2 rounded-md text-white font-semibold shadow-md transition"
              >
                Post Comment
              </button>
            </div>
          </form>

          {/* Toggle Comments */}
          <div className="text-center mt-10 mb-6">
            <button
              onClick={() => setShowComments(prev => !prev)}
              className="text-cyan-400 hover:text-cyan-300 text-lg underline underline-offset-4 transition font-medium"
            >
              {showComments
                ? "Hide Comments"
                : `View ${comments.length} Comment${comments.length !== 1 ? "s" : ""}`}
            </button>
          </div>

          {/* TikTok/Instagram-style Comments */}
          {showComments && (
            <div className="space-y-6">
              {comments.length > 0 ? (
                comments.map(({ name, text, created_at }, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    {/* Avatar */}
                    <div className="w-10 h-10 flex-shrink-0 rounded-full bg-cyan-600 text-white flex items-center justify-center font-bold">
                      {name.charAt(0).toUpperCase()}
                    </div>

                    {/* Comment content */}
                    <div className="flex-1">
                      <p className="text-gray-200 leading-snug">
                        <span className="font-semibold text-cyan-400 mr-2">{name}</span>
                        {text}
                      </p>
                      <div className="text-gray-500 text-xs mt-1">{timeAgo(created_at)}</div>
                    </div>

                    {/* Optional Like Icon
                    <button
                      className="text-gray-500 hover:text-cyan-500 transition"
                      title="Like"
                    >
                      ❤️
                    </button> */}
                  </div>
                ))
              ) : (
                <p className="text-gray-400 text-center italic">No comments yet. Be the first to leave one!</p>
              )}
            </div>
          )}
        </section>

        {/* Related / Top Posts */}
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
