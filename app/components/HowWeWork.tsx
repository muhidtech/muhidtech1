'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const processSteps = [
  {
    title: 'Discovery & Strategy',
    description: 'We uncover your goals, audience, and pain points to form a bulletproof plan.',
    image: '/images/one.jpg',
  },
  {
    title: 'UI/UX Design',
    description: 'We turn strategy into stunning, user-centered design that drives engagement.',
    image: '/images/two.jpeg',
  },
  {
    title: 'Full-Stack Development',
    description: 'Clean, scalable code built with modern frameworks tailored to your goals.',
    image: '/images/three.jpg',
  },
  {
    title: 'QA & Optimization',
    description: 'We rigorously test and optimize for performance, accessibility, and SEO.',
    image: '/images/four.jpg',
  },
  {
    title: 'Launch & Scale',
    description: 'We deploy your product and help it grow with smart SEO and performance enhancements.',
    image: '/images/five.jpg',
  },
];

export default function HowWeWork() {
  return (
    <section className="w-ful text-white py-20 px-4">
      <div className="text-center max-w-4xl mx-auto mb-16">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {processSteps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-cyan-500/30 backdrop-blur-xl border border-white/10"
          >
            <div className="relative h-64 w-full">
              <Image
                src={step.image}
                alt={step.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-cyan-500">{step.title}</h3>
              <p className="text-gray-300 mt-4">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
