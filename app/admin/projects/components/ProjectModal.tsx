"use client";

import React, { useState, useEffect, ChangeEvent } from "react";
import { Project } from "../Project"; // Ensure this interface includes `category: string`
import Image from "next/image";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (project: Project) => void;
  initialData?: Project;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  initialData,
}) => {
  const [project, setProject] = useState<Project>({
    title: "",
    description: "",
    technologies: "",
    github_link: "",
    live_link: "",
    image: null,
    featured: false,
    category: "",
    status: "in_progress",
  });

  useEffect(() => {
    if (initialData) {
      setProject(initialData);
    }
  }, [initialData]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProject((prev: Project) => ({ ...prev, [name]: value }));
  };

  const handleTechnologiesChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setProject((prev: Project) => ({
      ...prev,
      technologies: value,
      techStack: value.split(",").map((t) => t.trim()),
    }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProject((prev: Project) => ({ ...prev, image: file }));
    }
  };

  const handleStatusChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as "completed" | "in_progress";
    setProject((prev: Project) => ({ ...prev, status: value }));
  };

  const handleFeaturedChange = (e: ChangeEvent<HTMLInputElement>) => {
    setProject((prev: Project) => ({ ...prev, featured: e.target.checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(project);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-white/20 backdrop-blur-2xl">
      <div className="bg-gray-800 rounded-lg text-white p-6 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4">
          {initialData ? "Edit Project" : "Add Project"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="title"
            value={project.title}
            onChange={handleChange}
            placeholder="Title"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {project.image && (
            <Image
              src={
                typeof project.image === "string"
                  ? project.image
                  : URL.createObjectURL(project.image)
              }
              width={100}
              height={70}
              alt="Preview"
              className="w-full h-48 object-cover rounded border"
            />
          )}

          <textarea
            name="description"
            value={project.description}
            onChange={handleChange}
            placeholder="Description"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />

          <input
            name="technologies"
            value={project.technologies}
            onChange={handleTechnologiesChange}
            placeholder="Technologies (comma separated)"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />

          <input
            name="category"
            value={project.category}
            onChange={handleChange}
            placeholder="Category"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />

          <input
            name="github_link"
            value={project.github_link || ""}
            onChange={handleChange}
            placeholder="GitHub Link"
            className="w-full p-2 border border-gray-300 rounded"
          />

          <input
            name="live_link"
            value={project.live_link || ""}
            onChange={handleChange}
            placeholder="Live Link"
            className="w-full p-2 border border-gray-300 rounded"
          />

          <select
            name="status"
            value={project.status}
            onChange={handleStatusChange}
            className="w-full p-2 border border-gray-300 bg-black/80  rounded"
          >
            <option value="in_progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={project.featured}
              onChange={handleFeaturedChange}
              className="accent-cyan-600"
            />
            <span className="text-gray-700 dark:text-gray-300">Featured</span>
          </label>

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-cyan-600 text-white rounded"
            >
              {initialData ? "Update" : "Create"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectModal;
