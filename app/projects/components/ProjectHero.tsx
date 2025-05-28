'use client';

import { motion } from 'framer-motion';

export default function ProjectsHero() {
  return (
    <section className="w-full h-[80vh] flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="text-center max-w-3xl space-y-10"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-5xl text-cyan-400 sm:text-7xl font-bold tracking-tight leading-tight"
        >
          Our Work Speaks Louder
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto"
        >
          Explore a collection of high-impact, beautifully crafted digital experiences built with precision and passion.
        </motion.p>
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition text-white font-medium shadow-lg"
        >
          View Projects
        </motion.a>
      </motion.div>
    </section>
  );
}
