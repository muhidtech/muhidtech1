'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

type BlogPost = {
  slug: string
  title: string
  excerpt: string
  category: string
  image: string
  date: string
}

const blogPosts: BlogPost[] = [
  {
    slug: 'building-modern-ui',
    title: 'Building Modern UI with Tailwind & Framer Motion',
    excerpt: 'Discover how we create performant and beautiful interfaces using Tailwind CSS and Framer Motion.',
    category: 'UI/UX',
    image: '/images/blog-1.jpg',
    date: 'May 20, 2025',
  },
  {
    slug: 'seo-strategies-2025',
    title: 'SEO Strategies That Work in 2025',
    excerpt: 'A breakdown of the latest SEO practices that drive growth and organic traffic.',
    category: 'SEO',
    image: '/images/blog-2.jpg',
    date: 'May 15, 2025',
  },
  {
    slug: 'nextjs-performance',
    title: 'How We Optimize Performance in Next.js',
    excerpt: 'Learn how we push for top Core Web Vitals scores on every MuhidTech project.',
    category: 'Web Dev',
    image: '/images/blog-3.jpg',
    date: 'May 10, 2025',
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen px-6 sm:px-10 lg:px-20 py-24 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl sm:text-6xl font-bold text-cyan-500">Insights from MuhidTech</h1>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
          Dive into the latest in development, design, and SEO from our expert team.
        </p>
      </motion.div>

      <section className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/30 transition-shadow"
          >
            <Link href={`/blog/${post.slug}`}>
              <div className="relative h-56 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-2">
                <span className="text-sm text-cyan-400 uppercase font-medium">{post.category}</span>
                <h2 className="text-xl font-bold">{post.title}</h2>
                <p className="text-gray-400 text-sm">{post.excerpt}</p>
                <p className="text-gray-600 text-xs mt-2">{post.date}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </section>
    </main>
  )
}
