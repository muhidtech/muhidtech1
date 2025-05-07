"use client"
import React from "react";
import ParallaxSection from "./ParallaxSection";
import { motion } from 'framer-motion';



const workSteps = [
  {
    title: "Research & Planning",
    description: "We analyze your business needs and craft a solid plan for execution.",
    image: "/images/one.jpg",
  },
  {
    title: "Design & Prototyping",
    description: "Our team creates sleek, user-focused designs and interactive wireframes.",
    image: "/images/two.jpg",
  },
  {
    title: "Development",
    description: "Using modern frameworks, we bring your idea to life with clean code.",
    image: "/images/three.jpg",
  },
  {
    title: "Testing & Optimization",
    description: "We test and refine every detail for performance, responsiveness, and SEO.",
    image: "/images/four.jpg",
  },
  {
    title: "Launch & SEO Growth",
    description: "We launch your site and continue supporting growth with strong SEO strategies.",
    image: "/images/five.jpg",
  },
];

export default function HowWeWork() {
    return (
      <div className="px-5 pb-30">
        {/* Intro Section */}
        <div className="text-center py-20 md:px-6 max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-bold text-cyan-500 mb-4"
          >
            How We Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-lg"
          >
            Our development process is focused on performance, design, and SEO — built to scale and convert.
          </motion.p>
        </div>
  
        {/* Parallax Sections */}
        <div className="w-full sm:px-10 lg:px-20 rounded-3xl overflow-hidden">
            {workSteps.map((step, index) => (
                <ParallaxSection key={index} {...step} />
            ))}
        </div>
  
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-600 via-cyan-500 to-cyan-600 py-20 text-center rounded-3xl mt-10 px-6 mx-auto">
          <motion.h3
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-4xl font-bold mb-4 text-white"
          >
            Ready to Start Your Project?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/90 text-lg mb-6"
          >
            Let’s build something powerful and scalable together. Contact us today to get started.
          </motion.p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-black text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Let's Talk
          </motion.a>
        </div>
      </div>
    );
  }
