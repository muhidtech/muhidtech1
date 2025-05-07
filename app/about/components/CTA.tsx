"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function CallToAction() {
  return (
    <section className="relative py-20 px-6 md:px-20 bg-gradient-to-br from-cyan-800/30 to-black/70 backdrop-blur-md rounded-3xl overflow-hidden text-white mt-20 shadow-lg">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to elevate your digital presence?
        </h2>
        <p className="text-md md:text-lg text-gray-300 mb-8">
          Let’s build something extraordinary together — modern, fast, and optimized for results.
        </p>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/contact"
          className="inline-flex items-center gap-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300"
        >
          Start a Project <FaArrowRight />
        </motion.a>
      </motion.div>

      {/* Background Glow Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="w-72 h-72 bg-cyan-500 rounded-full blur-3xl opacity-30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </section>
  );
}
