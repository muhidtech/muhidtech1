"use client";

import React, { useState } from "react";
import { motion } from 'framer-motion'
import Link from "next/link";


const faqs = [
  {
    question: "What services does MuhidTech offer?",
    answer:
      "We offer custom web development, eCommerce platforms, SEO services, and responsive UI/UX design using modern stacks like React, Next.js, and Django.",
  },
  {
    question: "How does the project process work?",
    answer:
      "Once you contact us, we discuss your needs, plan the timeline, then execute in agile sprints with regular updates and reviews.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We work with startups, small businesses, tech firms, and entrepreneurs across various industries including retail, health, and tech.",
  },
  {
    question: "Do you provide SEO optimization?",
    answer:
      "Yes, all our websites are built with technical SEO in mind including fast load times, accessibility, and clean semantic HTML.",
  },
  {
    question: "Can you redesign my existing site?",
    answer:
      "Absolutely. We can modernize your existing website to make it faster, responsive, and more visually appealing.",
  },
  {
    question: "Do you offer maintenance packages?",
    answer:
      "Yes, we provide ongoing support and maintenance plans to ensure your site stays secure and up-to-date.",
  },
  {
    question: "Will my website work on all devices?",
    answer:
      "Yes, we ensure full responsiveness across mobile, tablet, and desktop using mobile-first TailwindCSS practices.",
  },
  {
    question: "How much does a typical project cost?",
    answer:
      "It depends on the scope and features, but we offer flexible packages for different project sizes and budgets.",
  },
];

export default function FaqSection() {
  const [search, setSearch] = useState("");

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="w-full px-6 py-20 pb-30 flex flex-col items-center">
      <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="w-full max-w-6xl backdrop-blur-2xl bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-10 shadow-lg">
        <motion.h2 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="text-3xl sm:text-4xl font-bold text-center mb-8 text-cyan-400">
          Frequently Asked Questions
        </motion.h2>

        {/* Search Input */}
        <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="mb-10 flex justify-center">
          <input
            type="text"
            placeholder="Search FAQs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
          />
        </motion.div>

        {/* FAQs Grid */}
        <div className="grid gap-8 sm:grid-cols-2">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
                key={idx}
                className="p-5 rounded-xl bg-white/10 border border-white/20 hover:border-cyan-500 transition shadow-md"
              >
                <h3 className="text-lg font-semibold text-cyan-300 mb-3">
                  {faq.question}
                </h3>
                <p className="text-sm text-gray-200">{faq.answer}</p>
              </motion.div>
            ))
          ) : (
            <p className="text-gray-400 col-span-full text-center">
              No results found.
            </p>
          )}

        </div>
        <div className="flex text-center w-full">
        <p className="text-gray-400 w-full text-center mt-5">
            If you have more questions, feel free to{" "}
            <Link href="/contact" className="text-cyan-400 underline">
            contact us
            </Link>
            .
        </p>
        </div>
      </motion.div>
    </section>
  );
}
