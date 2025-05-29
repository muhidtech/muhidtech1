'use client';

import Link from 'next/link';
import { FaPaperPlane, FaBlog, FaFolderOpen, FaEye } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';

const sections = [
  {
    title: 'Start a Conversation',
    description:
      'Begin your next project with MuhidTech. Let’s chat about your goals, ideas, and how we can bring them to life through modern web development.',
    icon: FaPaperPlane,
    link: '/contact',
    text: "Let's Talk",
  },
  {
    title: 'Read Our Insights',
    description:
      'Explore articles on web development, SEO, UI/UX, and emerging tech trends written by the MuhidTech team to keep you ahead.',
    icon: FaBlog,
    link: '/blog',
    text: 'Read Articles',
  },
  {
    title: 'Browse Our Work',
    description:
      'Check out real-world projects and client solutions built with React, Next.js, TailwindCSS, and Django by the MuhidTech team.',
    icon: FaFolderOpen,
    link: '/projects',
    text: 'View Projects',
  },
  {
    title: 'Learn About Us',
    description:
      'Discover the MuhidTech team, our mission, and our commitment to delivering high-quality web solutions tailored to your needs.',
    icon: FaEye,
    link: '/about',
    text: 'Get to Know Us',
  },
];

export default function Represent() {
  return (
    <section className="flex flex-col items-center justify-center gap-16 py-20 px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Connect, Learn, & Explore with <span className="text-cyan-500">MuhidTech</span>
        </h2>
        <p className="text-gray-400 mt-3 text-base sm:text-lg max-w-2xl mx-auto">
          Discover more about what we do, how we work, and how you can be part of it all.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl"
      >
        {sections.map((section, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="group relative overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300"
          >
            {/* Hover Background */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 scale-100 group-hover:scale-105 z-0">
              <Image
                src="/logo.jpeg"
                fill
                alt="Card Background"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">{section.title}</h3>
                <p className="text-gray-300 text-sm mt-3">{section.description}</p>
              </div>

              <div className="mt-6 flex justify-between items-center">
                <div className="p-3 bg-white/10 rounded-xl">
                  <section.icon className="text-cyan-500 text-xl" />
                </div>
                <Link
                  href={section.link}
                  aria-label={`Go to ${section.title}`}
                  className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-medium transition duration-300"
                >
                  {section.text}
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
