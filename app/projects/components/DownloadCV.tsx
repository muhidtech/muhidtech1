"use client";

import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

export default function DownloadCV() {
  return (
    <section className="w-full py-20 px-6 flex items-center justify-center ">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-2xl shadow-lg max-w-xl w-full text-center"
      >
        <h2 className="text-3xl font-bold text-white mb-4">Download My Portfolio</h2>
        <p className="text-gray-300 text-sm mb-6">
          Want a closer look at what I can do? Grab the full portfolio or CV and let’s talk about your next project.
        </p>
        <a
          href="/muhidtech-cv.pdf"
          download
          className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition duration-300"
        >
          <FiDownload className="text-lg" />
          Download PDF
        </a>
      </motion.div>
    </section>
  );
}
