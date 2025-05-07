"use client"

import Link from 'next/link';
import React from 'react'
import { FaPaperPlane, FaBlog, FaFolderOpen, FaEye } from 'react-icons/fa';
import { motion } from 'framer-motion'
import Image from 'next/image';


const sections = [
    {
      title: "Start a Conversation",
      description:
        "Begin your next project with MuhidTech. Let’s chat about your goals, ideas, and how we can bring them to life through modern web development.",
      icon: FaPaperPlane,
      link: "/contact",
    },
    {
      title: "Read Our Insights",
      description:
        "Explore articles on web development, SEO, UI/UX, and emerging tech trends written by the MuhidTech team to keep you ahead.",
      icon: FaBlog,
      link: "/blog",
    },
    {
      title: "Browse Our Work",
      description:
        "Check out real-world projects and client solutions built with React, Next.js, TailwindCSS, and Django by the MuhidTech team.",
      icon: FaFolderOpen,
      link: "/projects",
    },
    {
      title: "Learn About Us",
      description:
        "Discover the MuhidTech team, our mission, and our commitment to delivering high-quality web solutions tailored to your needs.",
      icon: FaEye,
      link: "/about",
    }
  ];


  
export default function Represent() {
  return (
    <div className='flex flex-col items-center justify-center gap-10 py-10 pb-30'>
        <motion.h1
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        viewport={{ once: true }}
        className='text-3xl sm:text-4xl  lg:w-4xl text-center font-mono font-bold'>
            Connect, Learn, & Explore with MuhidTech
        </motion.h1>
        <hr  className='w-sm text-cyan-500'/>

        <motion.div 
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 p-5">
        {sections.map((section, i) => (
            <div
            key={i}
            className="group relative flex flex-col items-start justify-center gap-10 bg-gray-800 sm:p-10 p-5 rounded-3xl w-full shadow-lg transition-transform transform hover:scale-105 duration-300 overflow-hidden"
            >
            {/* Hover Image */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
                <Image
                fill
                src="/logo.jpeg" // Replace with your actual image path
                alt="Preview"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/80" />
                <div className="absolute inset-0 flex items-center justify-center">
                {/* <span  className='p-3 rounded-2xl bg-gray-700 cursor-pointer'>
                    <Link href="/contact" className="text-white cursor-pointer text-4xl opacity-0 group-hover:opacity-100 transition duration-300">
                        <FaEye />
                    </Link>
                    
                </span> */}
                </div>
            </div>

            {/* Content */}
            <h2 className="text-2xl font-bold z-10 ">{section.title}</h2>
            <p className="text-gray-400 z-10 ">{section.description}</p>
            <div className="pt-5 z-10  flex w-full items-center justify-between">
                <span className='p-3 rounded-2xl bg-gray-700'>
                    <section.icon className="text-3xl text-cyan-500 " />
                </span>
                <button className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-700 transition duration-300 cursor-pointer">
                    <Link href={section.link}  aria-label={`Learn more about this ${section.title} `} >
                        Learn More
                    </Link>
                </button>
            </div>
            </div>
        ))}
        </motion.div>
    </div>
  )
}
