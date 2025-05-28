'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="w-full mb-10">
      <div className="text-center py-20 md:px-6 max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl font-bold text-cyan-500 mb-4"
        >
          Our Process
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-300 text-lg"
        >
          A proven strategy from idea to execution — crafted for performance, clarity, and growth.
        </motion.p>
      </div>

      <Intro />
      <Design />
      <Build />
      <Refine />
      <ExtraSection
        title="Launch & Scale"
        description="We deploy your product and help it grow with smart SEO and performance enhancements."
        image="/images/five.jpg"
      />
    </main>
  );
}

// ─── Step 1: Discovery ────────────────────────────────
export function Intro() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '150vh']);
  const x = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <div className='h-screen overflow-hidden w-full relative' ref={container}>
      <motion.div style={{ y }} className='w-full h-full relative'>
        <Image
          src='/images/one.jpg'
          fill
          alt='Discovery'
          style={{ objectFit: 'cover' }}
          className='absolute inset-0 !object-cover !w-full !h-full z-0'
          priority
        />
        <div className='absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10 opacity-100'>
          <motion.h1 className='text-4xl md:text-7xl font-bold text-white' style={{ opacity: 1, x }}>
            Discovery & Strategy
          </motion.h1>
          <motion.p className='text-lg md:text-2xl text-white/80 mt-6' style={{ opacity: 1, x }}>
            We uncover your goals, audience, and pain points to form a bulletproof plan.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}

// ─── Step 2: Design ────────────────────────────────
export function Design() {
  return (
    <div className='relative flex justify-center items-center h-screen w-full bg-white/20 backdrop-blur-2xl'>
      <Image
        src='/images/two.jpeg'
        fill
        alt="Design"
        style={{ objectFit: 'cover' }}
        className='absolute inset-0 !object-cover !w-full !h-full z-0'
        priority
      />
      <div className='text-center px-4 z-10'>
        <h1 className='text-4xl md:text-7xl font-bold text-white'>UI/UX Design</h1>
        <p className='text-lg md:text-2xl text-white/80 mt-10'>
          We turn strategy into stunning, user-centered design that drives engagement.
        </p>
      </div>
    </div>
  );
}

// ─── Step 3: Development ────────────────────────────────
export function Build() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <div ref={container} className='relative h-screen w-full overflow-hidden'>
      <motion.div style={{ y }} className='w-full h-full relative'>
        <Image
          src='/images/three.jpg'
          fill
          alt='Build'
          style={{ objectFit: 'cover' }}
          className='absolute inset-0 !object-cover !w-full !h-full z-0'
          priority
        />
        <div className='absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10'>
          <motion.h1 className='text-4xl md:text-7xl font-bold text-white' style={{ opacity: scrollYProgress }}>
            Full-Stack Development
          </motion.h1>
          <motion.p className='text-lg md:text-2xl text-white/80 mt-6' style={{ opacity: scrollYProgress }}>
            Clean, scalable code built with modern frameworks tailored to your goals.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}

// ─── Step 4: QA & Optimization ────────────────────────────────
export function Refine() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '150vh']);
  const x = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <div className='h-screen overflow-hidden w-full relative' ref={container}>
      <motion.div style={{ y }} className='w-full h-full relative'>
        <Image
          src='/images/four.jpg'
          fill
          alt='Refine'
          style={{ objectFit: 'cover' }}
          className='absolute inset-0 !object-cover !w-full !h-full z-0'
          priority
        />
        <div className='absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10 opacity-100'>
          <motion.h1 className='text-4xl md:text-7xl font-bold text-white' style={{ opacity: 1, x }}>
            QA & Optimization
          </motion.h1>
          <motion.p className='text-lg md:text-2xl text-white/80 mt-6' style={{ opacity: 1, x }}>
            We rigorously test and optimize for performance, accessibility, and SEO.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}

// ─── Step 5: Launch ────────────────────────────────
function ExtraSection({ title, description, image }: { title: string; description: string; image: string }) {
  return (
    <div className='relative flex justify-center items-center h-screen w-full bg-black'>
      <Image
        src={image}
        fill
        alt={title}
        style={{ objectFit: 'cover' }}
        className='absolute inset-0 !object-cover !w-full !h-full z-0'
        priority
      />
      <div className='text-center px-4 z-10'>
        <h1 className='text-4xl md:text-7xl font-bold text-white'>{title}</h1>
        <p className='text-lg md:text-2xl text-white/80 mt-10'>{description}</p>
      </div>
    </div>
  );
}
