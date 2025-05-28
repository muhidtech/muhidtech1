"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/app/admin/projects/Project";
import { fetchProjects } from "@/app/api/api";


export default function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const categories = Array.from(
    new Set(projects.map(project => project.category))
  );

  
    useEffect(() => {
      const loadProjects = async () => {
        try {
          const data = await fetchProjects();
          setProjects(data);
        } catch (err) {
          setError(
            err && typeof err === "object" && "message" in err
              ? (err as { message: string }).message
              : "Failed to load projects"
          );
        } finally {
          setLoading(false);
        }
      };
  
      loadProjects();
    }, []);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-5 md:px-10 lg:px-20 text-white ">
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
                {project.image ? (
                  <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden">
                    <Image 
                    src={typeof project.image === "string" ? project.image : URL.createObjectURL(project.image)} 
                    alt={project.title} 
                    fill 
                    loading="eager"
                    decoding="async"
                    priority
                    className="object-cover" />
                  </div>
                ) : (
                  <div className="flex items-center justify-center w-full h-full bg-gray-800 text-gray-500">
                    No Image
                  </div>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {(project.technologies
                  ? project.technologies.split(",").map((tech) => tech.trim())
                  : []).map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-cyan-600/10 border border-cyan-400 text-cyan-300 px-2 py-1 rounded-full select-none"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.live_link && (
                  <div className="flex justify-center w-full mt-4">
                    <Link
                      href={project.live_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-cyan-500 text-white px-4 py-2 rounded-xl hover:bg-cyan-600 transition text-center"
                    >
                      Visit Project
                    </Link>
                  </div>
                )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
