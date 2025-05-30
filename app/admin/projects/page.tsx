'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  fetchProjects,
  deleteProject,
} from "@/app/api/api";
import { Project } from "./Project";
import Layout from "../dashboard/components/layout/Layout";
import ProtectedRoute from "@/app/hooks/ProtectedRoute";

const ProjectsPage: React.FC = () => {
  const router = useRouter();

  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

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

  const categories = Array.from(
    new Set(projects.map((p) => p.category).filter(Boolean))
  );

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this project?")) return;
    try {
      await deleteProject(id);
      setProjects((prev) => prev.filter((p) => String(p.id) !== id));
    } catch {
      alert("Failed to delete project");
    }
  };

  const redirectToAdd = () => {
    router.push('/admin/projects/add');
  };

  const redirectToEdit = (id: string | number) => {
    router.push(`/admin/projects/add?id=${id}`);
  };

  return (
    <ProtectedRoute>
      <Layout>
        <section className="min-h-screen py-20 px-6 md:px-12 lg:px-24 w-auto md:ml-60">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-cyan-600">
              Featured Projects
            </h1>
            <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
              Explore real-world solutions built with passion, innovation, and purpose.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["All", ...categories].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition duration-200 ${
                  activeCategory === cat
                    ? "bg-cyan-500 text-white"
                    : "border-cyan-500 text-cyan-400 hover:bg-cyan-600 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
            <button
              onClick={redirectToAdd}
              className="px-5 py-2 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition"
            >
              + Add Project
            </button>
          </div>

          {loading && (
            <p className="text-cyan-600 text-center animate-pulse">Loading projects...</p>
          )}
          {error && <p className="text-red-500 text-center">Error: {error}</p>}

          {!loading && filteredProjects.length === 0 && (
            <p className="text-gray-500 text-center">No projects found in this category.</p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl overflow-hidden shadow-lg relative hover:shadow-cyan-500/40 transition"
                >
                  <div className="absolute z-10 top-4 right-4 flex gap-2 opacity-100 transition">
                    <button
                      onClick={() => redirectToEdit(project.id!)}
                      className="bg-cyan-500 hover:bg-cyan-600 text-white text-xs px-3 py-1 rounded-md"
                      aria-label={`Edit ${project.title}`}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(String(project.id))}
                      className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1 rounded-md"
                      aria-label={`Delete ${project.title}`}
                    >
                      Delete
                    </button>
                  </div>

                  <div className="relative w-full h-52 bg-gray-900 rounded-t-3xl overflow-hidden">
                    {project.image ? (
                      <Image
                        src={
                          typeof project.image === "string"
                            ? project.image
                            : URL.createObjectURL(project.image)
                        }
                        alt={project.title}
                        fill
                        priority
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-600 text-sm font-semibold">
                        No Image Available
                      </div>
                    )}
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-2xl font-semibold text-cyan-400 truncate max-w-[70%]">
                        {project.title}
                      </h3>
                      <p className="text-sm text-cyan-300 whitespace-nowrap">
                        {project.category}
                      </p>
                    </div>

                    <p className="text-gray-300 text-sm line-clamp-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {(project.technologies || "")
                        .split(",")
                        .map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs px-3 py-1 rounded-full bg-cyan-600/20 text-cyan-300 border border-cyan-400"
                          >
                            {tech.trim()}
                          </span>
                        ))}
                    </div>

                    {project.live_link && (
                      <Link
                        href={project.live_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center w-full py-2 mt-4 rounded-xl bg-cyan-500 text-white hover:bg-cyan-600 transition"
                      >
                        Visit Project
                      </Link>
                    )}
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>
      </Layout>
    </ProtectedRoute>
  );
};

export default ProjectsPage;
