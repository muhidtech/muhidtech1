'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  const headlineText = "Crafting Stunning, Scalable Front-End Experiences with React & Next.js";
  const subheadlineText = "I’m Muhideen, a passionate Front-End Developer specializing in React.js, Next.js, TypeScript, and Tailwind CSS—delivering responsive, SEO-optimized, and user-friendly web applications.";

  return (
    <main className="flex flex-col h-screen justify-start px-20 py-30 items-start gap-5">
      <motion.h1
        className="md:text-4xl text-3xl lg:w-4xl font-semibold"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        {headlineText.split('').map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.05 }}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>

      <motion.h2
        className="text-xl lg:w-3xl font-medium text-white/50"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        {subheadlineText}
      </motion.h2>

      <motion.div
        className="flex sm:flex-row flex-col gap-10 mt-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <button className="py-3 px-6 bg-[#B68250] rounded-2xl cursor-pointer hover:bg-[#C9DDEE] transition duration-300 ease-in-out">
          <Link href="/portfolio">Explore My Work</Link>
        </button>
        <button className="py-3 px-6 bg-[#B68250] rounded-2xl cursor-pointer hover:bg-[#C9DDEE] transition duration-300 ease-in-out">
          <Link href='/contact'>Let&apos;s Build Together</Link>
        </button>
      </motion.div>
    </main>
  );
};

export default Hero;