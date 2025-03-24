'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const techStacks = [
  { name: 'React.js', img: '/react.svg' },
  { name: 'Next.js', img: '/nextjs.svg' },
  { name: 'TypeScript', img: '/typescript.svg' },
  { name: 'JavaScript', img: '/javascript.svg' },
  { name: 'HTML5', img: '/html5.svg' },
  { name: 'CSS3', img: '/css.svg' },
  { name: 'TailwindCSS', img: '/tailwindcss.svg' },
  { name: 'SEO', img: '/seo.png' },
];

const reviews = [
  'Muhideen transformed our ideas into an elegant and responsive website! Highly recommend him for front-end development.',
  'His attention to detail and commitment to performance optimization make him stand out. Truly a front-end expert!',
  'Working with Muhideen was seamless—his expertise in React and Next.js brought our vision to life beautifully.',
];

const About = () => {
  return (
    <section className="min-h-screen pt-30 text-white p-10 flex flex-col items-center">
      <motion.h1
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h1>

      <motion.p
        className="text-lg text-center max-w-3xl mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        I&#39;m Muhideen, a passionate Front-End Developer with expertise in React.js, Next.js, TypeScript, and Tailwind CSS. I specialize in creating fast, responsive, and SEO-optimized web applications that provide excellent user experiences. Let me bring your vision to life with modern, clean, and scalable front-end solutions.
      </motion.p>

      <div className="overflow-hidden w-full max-w-5xl mb-12">
        <motion.div
          className="flex space-x-12 animate-slider"
          initial={{ x: '100%' }}
          animate={{ x: '-100%' }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          {techStacks.map((tech, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image src={tech.img} alt={tech.name} width={80} height={80} />
              <p className="mt-2">{tech.name}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.h2
        className="text-3xl font-semibold mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        Why Work With Me?
      </motion.h2>
      <motion.p
        className="text-lg text-center max-w-3xl mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        I deliver high-quality, scalable, and SEO-optimized solutions. With a keen eye for design and performance, I ensure your website not only looks great but also performs exceptionally well. Let&#39;s collaborate to build something remarkable!
      </motion.p>

      <motion.h2
        className="text-3xl font-semibold mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        What Clients Say
      </motion.h2>
      <div className="flex flex-col gap-8 max-w-4xl">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            className="bg-[#1a1a1a] p-6 rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 + index * 0.3 }}
          >
            <p className="text-lg">&quot;{review}&quot;</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
