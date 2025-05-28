'use client';
import { motion } from 'framer-motion';
import { FaLightbulb, FaHandshake, FaRocket } from 'react-icons/fa';

const values = [
  {
    title: 'Innovation',
    icon: FaLightbulb,
    description: 'We embrace new technologies and modern frameworks to craft cutting-edge solutions for our clients.',
  },
  {
    title: 'Trust & Transparency',
    icon: FaHandshake,
    description: 'We believe in honest communication, timely delivery, and transparent collaboration with every client.',
  },
  {
    title: 'Growth-Driven',
    icon: FaRocket,
    description: 'Our goal is to build fast, SEO-optimized, scalable products that help brands grow efficiently.',
  },
];

export default function Mission() {
  return (
    <section className="w-full py-20 px-5 md:px-20 bg-gradient-to-br from-[#0f172a] via-[#0f1a2f] to-[#020617] text-white">
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        viewport={{once: true}}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400">Our Mission & Core Values</h2>
        <p className="text-gray-300 mt-4 text-sm md:text-base max-w-xl mx-auto">
          At MuhidTech, our mission is to deliver fast, beautiful, and impactful digital experiences — guided by principles that put clients first.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {values.map((val, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.2 }}
            viewport={{once: true}}
            className="p-6 bg-white/10 border border-white/20 backdrop-blur-xl rounded-xl shadow-lg hover:shadow-xl"
          >
            <val.icon className="text-4xl text-cyan-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{val.title}</h3>
            <p className="text-gray-300 text-sm">{val.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
