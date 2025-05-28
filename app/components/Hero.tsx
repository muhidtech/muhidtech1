"use client"

import Link from 'next/link'
import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';
import useHoverEffect from './HoverEffect'
import BackgroundAnimation from './BackgroundAnimation'
import TrustedBy from './TrustedBy'


export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);


  const { transform } = useHoverEffect({ ref: heroRef, x: 30, y: -40, z: 30 });

  const imghover = useHoverEffect({ ref: heroRef, x: 20, y: -50, z: 11 });
  return (
    <>
      <BackgroundAnimation />
      <div ref={heroRef} className='flex flex-col  items-center justify-center px-6 py-30 gap-20 sm:px-10'>
         
          <div className="flex flex-col items-center justify-center h-full w-full gap-5 sm:gap-10">
            {/* Optimized heading with quicker animation */}

            <motion.h1
              className="text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-center max-w-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                MuhidTech
              </span>
              <br />
              <span className="text-white">Creative Development Studio</span>
            </motion.h1>

            <motion.p
              className="text-sm md:text-base lg:text-lg text-white/70 max-w-2xl text-center tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              We design fast, responsive websites and apps using React, Next.js, Django & Tailwind — optimized for SEO, speed, and growth.
            </motion.p>

            <motion.div
              className="mt-6 flex flex-wrap items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Link
                href="/contact"
                className="px-6 py-3 bg-cyan-500 text-white font-semibold rounded-full hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              >
                Let’s Build Together
              </Link>
              <Link
                href="/projects"
                className="px-6 py-3 border border-white text-white font-semibold rounded-full hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-white transition"
              >
                View Portfolio
              </Link>
            </motion.div>

          </div>

          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ transform, opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className='mt-6 lg:mt-0 shadow-md relative'
          >

            {/* Background Animation */}
            <motion.div
            whileInView={{ transform: imghover.transform }}
            transition={{ duration: 0.1, ease: 'easeInOut' }}
            >
              <Image 
                src="/logo2.png"
                alt="MuhidTech"
                width={500}
                height={500}
                sizes="(max-width: 768px) 100vw, 500px"
                priority
                className='w-full h-auto max-w-xs sm:max-w-md lg:max-w-lg rounded-2xl bg-cover '
              />
            </motion.div>


            {/* Top Right Feature */}
            <motion.div 
            animate={{
              y: [-5, 0], // keyframes for bounce
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
            className='absolute top-5 right-[-20%] flex gap-3 items-center bg-white/10 backdrop-blur-xl text-xs sm:text-sm font-semibold py-2 px-4 rounded-xl text-white shadow-md border border-white/20'>
              <div className='w-2 h-2 sm:w-3 sm:h-3 rounded-full border-2 bg-cyan-500 border-white'></div>
              <p>Fast, Responsive & SEO-Ready</p>
            </motion.div>




            {/* Bottom Left Feature */}
            <motion.div 
            animate={{
              y: [-5, 0], // keyframes for bounce
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
            className='absolute bottom-5 left-[-20%] flex gap-3 items-center bg-white/10 backdrop-blur-xl text-xs sm:text-sm font-semibold py-2 px-4 rounded-xl text-white shadow-md border border-white/20'>
              <div className='w-2 h-2 sm:w-3 sm:h-3 rounded-full border-2 bg-cyan-500 border-white'></div>
              <p>Crafted with React, Next.js & Tailwind</p>
            </motion.div>


          </motion.div>


          <p className='text-sm text-center flex gap-3 lg:w-5xl flex-col pb-5 font-mono font-normal text-gray-300'>
              Helping you build a digital presence that stands out! <br />
          </p>

          <TrustedBy />
      </div>

    </>
  )
}




