"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Example project data (would normally come from JSON)
const projectsData = [
  {
    id: 1,
    title: "NovaCart - eCommerce Landing Page",
    category: "Landing Page",
    image: "/projects/novacart.png",
    description: "A blazing fast, conversion-focused eCommerce landing page.",
    techStack: ["Next.js", "TailwindCSS", "Framer Motion", "Typescript", "SEO"],
    url: "https://novacarts.netlify.app/"
  },
  {
    id: 2,
    title: "MuhidTech - Portfolio",
    category: "Portfolio",
    image: "/projects/muhidtech.png",
    description: "A sleek portfolio site to showcase creative work and case studies.",
    techStack: ["Next.js", "TailwindCSS", "Typescript", "Framer Motion", "SEO"],
    url: "https://muhidtech.vercel.app"
  },
  {
    id: 3,
    title: "eCompany - Company Portfolio Website",
    category: "Portfolio",
    image: "/projects/ecompany.png",
    description: "A modern company portfolio website with a focus on user experience.",
    techStack: ["Next.js", "TailwindCSS", "Typescript", "SEO"],
    url: "https://ecompanys.netlify.app/"
  },
  {
    id: 4,
    title: "TaxPal - A clone Website",
    category: "Website",
    image: "/projects/TaxPal.png",
    description: "A clone website for TaxPal, showcasing a clean and modern design.",
    techStack: ["React.js", "TailwindCSS", "JavaScript"],
    url: "https://ecompanys.netlify.app/"
  },
  
  {
    id: 5,
    title: "EcoHaven - A fully functional eCommerce website",
    category: "eCommerce",
    image: "/projects/ecoHaven.png",
    description: "A fully functional eCommerce website with a focus on sustainability.",
    techStack: ["Next.js", "TailwindCSS", "Framer Motion", "Typescript", "Django", "Sqlite"],
    url: "https://ecohaven.vercel.app/"
  },
  {
    id: 6,
    title: "Insure - Landing Page",
    category: "Landing Page",
    image: "/projects/insure.png",
    description: "A landing page for an insurance company, designed to convert visitors into leads.",
    techStack: ["Next.js", "TailwindCSS", "Framer Motion", "Typescript"],
    url: "https://insure-landing-pagesa.netlify.app/"
  },

  

];

const categories = Array.from(
  new Set(projectsData.map(project => project.category))
);

export default function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-5 md:px-10 lg:px-20 ">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
        <p className="text-gray-400 text-lg">
          Explore real-world projects showcasing our technical and creative capabilities.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        <button
          onClick={() => setActiveCategory("All")}
          className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
            activeCategory === "All" ? "bg-cyan-500 text-white" : "border-cyan-500 text-cyan-400 hover:bg-cyan-600 hover:text-white"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
              activeCategory === cat ? "bg-cyan-500 text-white" : "border-cyan-500 text-cyan-400 hover:bg-cyan-600 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.4 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:scale-[1.02] transition overflow-hidden"
            >
              <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden">
                <Image src={project.image} alt={project.title} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-cyan-600/10 border border-cyan-400 text-cyan-300 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
