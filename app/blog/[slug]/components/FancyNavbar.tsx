"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface NavbarProps {
  categories: string[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
  search: string;
  setSearch: (value: string) => void;
}

export default function FancyNavbar({
  categories,
  selectedCategory,
  onCategorySelect,
  search,
  setSearch,
}: NavbarProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setDropdownOpen(false);
    setShowMobileSearch(false);
  }, [pathname]);

  const handleCategoryClick = (category: string) => {
    onCategorySelect(category);
    setDropdownOpen(false);
    router.push(category === "All" ? "/blog" : `/blog?category=${encodeURIComponent(category)}`);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-black/20 backdrop-blur-2xl shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-cyan-400 font-extrabold text-2xl tracking-wide hover:text-cyan-500 transition"
          >
            MuhidTech
          </Link>

          {/* Search Bar - Only on md+ */}
          <div className="hidden md:block flex-1 mx-8">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search blog posts..."
              className="w-full rounded-md border border-gray-700 bg-black/40 backdrop-blur-md px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
            />
          </div>

          {/* Category Dropdown - Only on md+ */}
          <div className="relative text-white hidden md:block">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 text-white hover:text-cyan-400 focus:outline-none"
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
            >
              <span>{selectedCategory || "All Categories"}</span>
              <svg
                className={`w-5 h-5 transition-transform ${dropdownOpen ? "rotate-180" : "rotate-0"}`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {dropdownOpen && (
              <ul className="absolute right-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-md shadow-lg z-50">
                {["All", ...categories].map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => handleCategoryClick(cat)}
                      className={`w-full text-left px-4 py-2 hover:bg-cyan-600 transition ${
                        selectedCategory === cat ? "bg-cyan-700 font-semibold" : "font-normal"
                      }`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Mobile Icons */}
          <div className="flex items-center space-x-3 md:hidden">
            {/* Search Icon */}
            <button
              onClick={() => setShowMobileSearch((prev) => !prev)}
              className="p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              aria-label="Toggle search"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z" />
              </svg>
            </button>

            {/* Category Hamburger */}
            <div className="relative">
              <button
                aria-label="Toggle category menu"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  {dropdownOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>

              {dropdownOpen && (
                <ul className="absolute right-0 top-10 w-48 bg-gray-900 border border-gray-700 rounded-md shadow-lg z-50">
                  {["All", ...categories].map((cat) => (
                    <li key={cat}>
                      <button
                        onClick={() => handleCategoryClick(cat)}
                        className={`w-full text-left px-4 py-2 hover:bg-cyan-600 transition ${
                          selectedCategory === cat ? "bg-cyan-700 font-semibold" : "font-normal"
                        }`}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Search Input */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          showMobileSearch ? "max-h-40 py-2 px-6" : "max-h-0"
        }`}
      >
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search blog posts..."
          className="w-full rounded-md border border-gray-700 bg-black/40 backdrop-blur-md px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
        />
      </div>
    </>
  );
}
