'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxSectionProps {
  image: string;
  title: string;
  description: string;
}

export default function ParallaxSection({ image, title, description }: ParallaxSectionProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);

  return (
    <section ref={ref} className="relative h-[80vh] overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})`, y }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h2>
        <p className="max-w-2xl text-md sm:text-lg opacity-90">{description}</p>
      </div>
    </section>
  );
}
