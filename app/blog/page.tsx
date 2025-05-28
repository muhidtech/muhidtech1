'use client';

import { useEffect, useState } from 'react';
import BlogCard from './components/BlogCard';
import FeaturedPost from './components/FeaturedPost';
import SearchBar from './components/SearchBar';
import Categories from './components/Categories';
import BackgroundAnimation from '../components/BackgroundAnimation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BlogPost } from './data/mockPosts';
import { fetchPosts } from '../api/api';

const POSTS_PER_PAGE = 8;

export default function BlogPage() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<BlogPost[]>([]);


   useEffect(() => {
        const loadProjects = async () => {
          try {
            const data = await fetchPosts();
            setBlog(data);
          } catch (err) {
            setError(
              err && typeof err === "object" && "message" in err
                ? (err as { message: string }).message
                : "Failed to load projects"
            );
          } finally {
            setLoading(false);
          }
        };
    
        loadProjects();
      }, []);
  // Filter posts by category and search term
  const filteredPosts = blog.filter(post =>
    (selectedCategory === 'All' || post.category === selectedCategory) &&
    (post.title.toLowerCase().includes(search.toLowerCase()) ||
     post.summary.toLowerCase().includes(search.toLowerCase()))
  );

  // Pagination calculation
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  // Featured post always first (if it matches filter)
  const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : null;

  // If featured post is paginated in slice, avoid duplicate showing
  const postsToShow = paginatedPosts.filter(post => post.id !== featuredPost?.id);

  // Reset page if filters change
  const handleCategorySelect = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (term: string) => {
    setSearch(term);
    setCurrentPage(1);
  };

  // Pagination buttons component
  function Pagination() {
    return (
      <div className="flex justify-center gap-3 mt-8">
        <button
          onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded border border-gray-700 bg-gray-800 text-gray-300 disabled:opacity-50"
        >
          Prev
        </button>
        {[...Array(totalPages)].map((_, i) => {
          const pageNum = i + 1;
          return (
            <button
              key={pageNum}
              onClick={() => setCurrentPage(pageNum)}
              className={`px-3 py-1 rounded border ${
                currentPage === pageNum
                  ? 'bg-cyan-500 border-cyan-500 text-white'
                  : 'border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {pageNum}
            </button>
          );
        })}
        <button
          onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded border border-gray-700 bg-gray-800 text-gray-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    );
  }

  return (
    <>
      <BackgroundAnimation />
      <Navbar />
      <main className="px-6 py-10 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-cyan-500 mb-6">Our Blog</h1>

        <SearchBar search={search} setSearch={handleSearchChange} />
        <Categories posts={blog} selected={selectedCategory} onSelect={handleCategorySelect} />

        {featuredPost && (
          <section className="my-10">
            <FeaturedPost post={featuredPost} />
          </section>
        )}

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {postsToShow.length > 0 ? (
            postsToShow.map(post => <BlogCard key={post.id} post={post} />)
          ) : (
            <p className="text-center text-gray-400 col-span-full">No posts found.</p>
          )}
        </section>

        {totalPages > 1 && <Pagination />}
      </main>
      <Footer />
    </>
  );
}
