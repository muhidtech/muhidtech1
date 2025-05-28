"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  fetchProjects,
  createProject,
  updateProject,
  deleteProject,
} from "@/app/api/api";
import { Project } from "./Project";
import ProjectModal from "./components/ProjectModal";
import Layout from "../dashboard/components/layout/Layout";
import ProtectedRoute from "@/app/hooks/ProtectedRoute";



const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
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

  // Create, update, delete handlers remain the same
  const handleCreate = async (project: Project) => {
    try {
      const newProject = await createProject(project);
      setProjects((prev) => [...prev, newProject]);
    } catch {
      alert("Failed to create project");
    }
  };

  const handleUpdate = async (project: Project) => {
    if (!project.id) return;
    try {
      const updatedProject = await updateProject(String(project.id), project);
      setProjects((prev) =>
        prev.map((p) => (p.id === updatedProject.id ? updatedProject : p))
      );
    } catch {
      alert("Failed to update project");
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this project?")) return;
    try {
      await deleteProject(id);
      setProjects((prev) => prev.filter((p) => String(p.id) !== id));
    } catch {
      alert("Failed to delete project");
    }
  };

  const openCreateModal = () => {
    setCurrentProject(null);
    setModalOpen(true);
  };

  const openEditModal = (project: Project) => {
    setCurrentProject(project);
    setModalOpen(true);
  };

  const handleModalSubmit = (project: Project) => {
    if (currentProject) {
      handleUpdate({ ...currentProject, ...project });
    } else {
      handleCreate(project);
    }
  };

  return (
    <ProtectedRoute>
        <Layout>
          <section
            id="projects"
            className="min-h-screen ml-60 py-20 px-5 md:px-10 lg:px-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-600">
                Featured Projects
              </h2>
              <p className="text-gray-400 text-lg">
                Explore real-world projects showcasing our technical and creative
                capabilities.
              </p>
            </div>

            {/* Category filter pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              <button
                onClick={() => setActiveCategory("All")}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                  activeCategory === "All"
                    ? "bg-cyan-500 text-white"
                    : "border-cyan-500 text-cyan-400 hover:bg-cyan-600 hover:text-white"
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                    activeCategory === cat
                      ? "bg-cyan-500 text-white"
                      : "border-cyan-500 text-cyan-400 hover:bg-cyan-600 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
              <button
                onClick={openCreateModal}
                className="ml-3 px-4 py-2 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition"
              >
                + Add Project
              </button>
            </div>

            {loading && <p className="text-cyan-700 text-center">Loading projects...</p>}
            {error && <p className="text-red-600 text-center">Error: {error}</p>}

            {filteredProjects.length === 0 && !loading && (
              <p className="text-gray-500 text-center">No projects found in this category.</p>
            )}

            {/* Projects grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatePresence>
                {filteredProjects.map((project) => {
                  console.log(project.image); 
                  return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:scale-[1.02] transition overflow-hidden relative"
                  >
                    {/* Project Image */}
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

                    {/* Project Title */}
                    <h3 className="text-xl font-semibold mb-2 text-cyan-400">
                      {project.title}
                    </h3>

                    {/* Category */}
                    <p className="text-sm text-cyan-300 mb-2 font-medium">{project.category}</p>

                    {/* Description */}
                    <p className="text-gray-300 text-sm mb-3 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
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

                    {/* Visit Project Button */}
                    {project.live_link && (
                      <div className="flex justify-center w-full mb-4">
                        <Link
                          href={project.live_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-cyan-500 text-white px-4 py-2 rounded-xl hover:bg-cyan-600 transition w-full text-center"
                        >
                          Visit Project
                        </Link>
                      </div>
                    )}

                    {/* Edit & Delete Buttons */}
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <button
                        onClick={() => openEditModal(project)}
                        className="px-3 py-1 bg-cyan-500 hover:bg-cyan-600 text-white rounded-md text-sm"
                        aria-label={`Edit ${project.title}`}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(String(project.id))}
                        className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm"
                        aria-label={`Delete ${project.title}`}
                      >
                        Delete
                      </button>
                    </div>
                  </motion.div>
                )})}
              </AnimatePresence>
            </div>

            <ProjectModal
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
              onSubmit={handleModalSubmit}
              initialData={currentProject || undefined}
            />
          </section>
        </Layout>
    </ProtectedRoute>
  );
};

export default ProjectsPage;
