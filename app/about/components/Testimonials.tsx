'use client'

import React from "react";
import { motion } from "framer-motion";
import Rating from "./Rating";

const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Startup Founder",
      rating: 4.5,
      feedback:
        "MuhidTech delivered a beautiful, SEO-optimized site that helped us triple our organic traffic within a month!",
    },
    {
      name: "Daniel Lee",
      role: "Product Manager at eComBoost",
      rating: 5,
      feedback:
        "Incredible attention to detail. Their frontend and backend integration with Django was seamless.",
    },
    {
      name: "Amara Blake",
      role: "Marketing Director",
      rating: 4,
      feedback:
        "Super responsive team and top-tier performance! We were impressed by the modern UI and mobile optimization.",
    },
    {
      name: "Liam Chen",
      role: "CTO at FinTechNow",
      rating: 5,
      feedback:
        "The speed and quality of delivery from MuhidTech was unmatched. We had our MVP up in record time.",
    },
    {
      name: "Emily Rivera",
      role: "Creative Director",
      rating: 4.5,
      feedback:
        "Loved the animations and transitions — the site feels alive! They really captured our brand’s personality.",
    },
    {
      name: "Mohamed Salah",
      role: "Founder of EduGrow",
      rating: 5,
      feedback:
        "From wireframes to launch, MuhidTech was there every step. Communication was flawless and the result speaks for itself.",
    },
  ];
  

export default function Testimonials() {
  return (
    <div className="py-20 px-6 sm:px-10 lg:px-20 bg-gradient-to-b from-transparent to-black/10 backdrop-blur-xl">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          What Our Clients Say
        </h2>
        <p className="text-gray-300 text-base sm:text-lg">
          Real feedback from the people we’ve partnered with — highlighting our commitment to quality, trust, and excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/10 border border-white/20 text-white rounded-2xl p-6 backdrop-blur-xl shadow-lg hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="mb-3">
              <Rating rating={t.rating} />
            </div>
            <p className="text-sm sm:text-base leading-relaxed mb-4">{t.feedback}</p>
            <h4 className="font-semibold text-cyan-400">{t.name}</h4>
            <span className="text-xs text-gray-300">{t.role}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}