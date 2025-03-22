import type { Metadata } from "next";
import Projects from "../components/Projects";
import { motion } from "framer-motion";

export const metadata: Metadata = {
  title: "Portfolio | John Doe",
  description: "View my latest projects and work samples",
};

export default function Portfolio() {
  return (
    <main className="pt-16">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
              My Portfolio
            </h1>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Welcome to my project showcase. Here you'll find a collection of my best work,
              demonstrating my skills in web development, design, and problem-solving.
              Each project represents a unique challenge and solution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <Projects />

      {/* Footer Section */}
      <section className="py-12 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            Interested in working together? Feel free to check out more details about each project
            or <a href="/contact" className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 underline">contact me</a> to discuss your ideas.
          </p>
        </div>
      </section>
    </main>
  );
}
