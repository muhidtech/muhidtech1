'use client'
import { motion } from 'framer-motion'
import { FaBolt, FaUserFriends, FaSearch, FaMagic } from 'react-icons/fa'

const features = [
  {
    icon: <FaBolt className="text-3xl text-cyan-500" />,
    title: 'Speed & Performance',
    description:
      'We build lightning-fast, optimized websites with SEO in mind—delivering not just beauty, but results.',
  },
  {
    icon: <FaMagic className="text-3xl text-cyan-500" />,
    title: 'Creative Innovation',
    description:
      'We combine aesthetics with strategy, ensuring each product feels modern, memorable, and user-first.',
  },
  {
    icon: <FaUserFriends className="text-3xl text-cyan-500" />,
    title: 'Client-Centric Approach',
    description:
      'Your vision drives us. We listen deeply and collaborate to bring your brand’s goals to life.',
  },
  {
    icon: <FaSearch className="text-3xl text-cyan-500" />,
    title: 'SEO at the Core',
    description:
      'From structure to copy, we ensure your site is fully optimized to climb search rankings.',
  },
]

export default function WhatMakesUsDifferent() {
  return (
    <section className="relative w-full py-24 px-6 sm:px-12 lg:px-20">
      {/* Glass Background Layer */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-xl z-0" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="relative z-10 max-w-6xl mx-auto text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-cyan-400">What Makes Us Different</h2>
        <p className="mt-4 text-gray-300 text-lg max-w-3xl mx-auto">
          At MuhidTech, we're not just developers—we’re digital partners focused on excellence, efficiency, and growth.
        </p>
      </motion.div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 + index * 0.1, ease: 'easeInOut' }}
            className="bg-white/10 backdrop-blur-xl p-8 rounded-xl border border-white/10 shadow-lg hover:shadow-cyan-500/30 transition duration-300 group"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-cyan-400 transition">
              {feature.title}
            </h3>
            <p className="text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
