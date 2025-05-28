'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AboutHero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-6 sm:px-12 lg:px-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      
      {/* Animated Background Blobs */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-cyan-500 rounded-full opacity-20 blur-3xl"
        initial={{ x: -200, y: -200 }}
        animate={{ x: 100, y: 50 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      />
      <motion.div 
        className="absolute w-[500px] h-[500px] bg-purple-500 rounded-full opacity-20 blur-3xl"
        initial={{ x: 300, y: 200 }}
        animate={{ x: -100, y: 100 }}
        transition={{ duration: 12, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      />

      {/* Glass Overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-lg rounded-xl z-0"></div>

      {/* Hero Content */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="relative z-10 max-w-4xl text-center text-white space-y-6"
      >
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight leading-tight">
          Meet the Team Behind <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">MuhidTech</span>
        </h1>
        <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto">
          We&lsquo;re a collective of builders, designers, and engineers creating impactful digital experiences.
        </p>
        <div className="pt-4">
          <Link
            href="/contact"
            className="px-6 py-3 bg-cyan-500 text-white font-semibold rounded-full hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          >
            Get in Touch
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
