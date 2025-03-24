'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    title: 'TexPal Clone',
    description: 'A modern clone of the TexPal website built using React and Tailwind CSS. This project focuses on delivering a pixel-perfect replica with optimized responsiveness and clean code architecture.',
    link: 'https://taxpals.vercel.app/',
    image: '/TaxPal.png',
  },
  {
    title: 'E-Commerce Template',
    description: 'A fully responsive e-commerce website template crafted with Next.js, Tailwind CSS, and TypeScript. It is designed for scalability and optimized for SEO and performance.',
    link: 'https://ecohavens.vercel.app/',
    image: '/ecoHaven.png',
  },
  {
    title: 'Company Website',
    description: 'A professional company website built with Next.js and Tailwind CSS. This project emphasizes a modern UI, smooth animations, and a user-centric design.',
    link: 'https://ecompanys.netlify.app/',
    image: '/ecompany.png',
  },
];

const Portfolio = () => {
  return (
    <main className="min-h-screen pt-30 text-white p-10">
      <motion.h1
        className="text-4xl font-bold mb-10 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Portfolio
      </motion.h1>

      <motion.p
        className="text-center mb-16 text-lg text-white/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Explore some of my latest projects where I bring ideas to life with cutting-edge front-end technologies.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="rounded-2xl overflow-hidden bg-black/60 p-5"
            initial={{ opacity: 0, y: 50 }}
            whileHover={{ scale: 1.05 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.3 }}
          >
            <div className="h-60 bg-gray-800 rounded-xl mb-5">
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={1000}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
            <p className="text-white/70 mb-5">{project.description}</p>

            <Link href={project.link} target="_blank" className="text-[#B68250] hover:underline">
              View Project →
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-20 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <h2 className="text-3xl font-semibold mb-5">Why Choose Me?</h2>
        <p className="max-w-3xl mx-auto text-lg text-white/70 mb-10">
          I deliver pixel-perfect, responsive, and SEO-optimized websites tailored to your needs. With expertise in
          React, Next.js, TypeScript, and Tailwind CSS, I transform complex ideas into user-friendly, scalable
          solutions. Your vision is my priority, and I strive to exceed your expectations.
        </p>

        <Link href="/contact" className="py-3 px-6 bg-[#B68250] rounded-2xl text-lg hover:bg-[#C9DDEE] transition duration-300">
          Let&apos;s Work Together
        </Link>
      </motion.div>
    </main>
  );
};

export default Portfolio;
