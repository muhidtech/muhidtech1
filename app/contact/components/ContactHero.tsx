'use client';

import { motion } from 'framer-motion';

export default function ContactHero() {
  return (
    <section className="w-full min-h-[60vh] flex items-center justify-center px-6 md:px-16 bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] text-white relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10  max-w-4xl text-center text-white space-y-6"
      >
        <h1 className="text-5xl text-cyan-400 sm:text-7xl font-bold tracking-tight leading-tight">
          Le&lsquo;s Talk About Your Next Big Thing
        </h1>
        <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto">
          Have an idea, project, or question? Drop a message and we&lsquo;ll connect as soon as possible.
        </p>
      </motion.div>

      {/* Glassy Overlay Decoration */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-md pointer-events-none rounded-xl border border-white/10" />

      {/* Optional Animation or Gradient Blob */}
      <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
    </section>
  );
}
