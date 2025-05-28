'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="relative bg-neutral-950 py-24 overflow-hidden">
      {/* Glowing Aura Background */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/20 blur-[200px] rounded-full" />
      </motion.div>

      {/* CTA Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center md:text-left">
        <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight">
          Let’s Bring Your Ideas to Life
        </h2>
        <p className="text-white/70 mt-4 text-base md:text-lg">
          Build modern, scalable, and beautiful software that makes an impact.
        </p>
        <Link
          href="/contact"
          className="inline-block mt-8 px-8 py-3 text-white font-semibold text-lg bg-cyan-500 rounded-full transition-all duration-300 shadow-md hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.4)] hover:bg-cyan-600"
        >
          Get a Free Quote
        </Link>
      </div>

      {/* Illustration Image */}
      <div className="hidden lg:block absolute top-0 lg:right-[-10%] xl:right-0 z-5 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px]">
        <Image
          src="/ctaimage.png"
          alt="Contact Illustration"
          width={700}
          height={700}
          className="w-full h-auto object-contain pointer-events-none select-none"
          priority
        />
      </div>
    </section>
  );
}
