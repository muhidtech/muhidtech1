"use client";

import React, { useState, useEffect, ChangeEvent } from 'react';
import { Project } from '../Project';
import Image from 'next/image';

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
  initialData
}) => {
  const [project, setProject] = useState<Project>({
    title: '',
    category: '',
    image: '',
    description: '',
    techStack: [],
    live_url: '',
  });

  useEffect(() => {
    if (initialData) {
      setProject(initialData);
    }
  }, [initialData]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProject((prev) => ({ ...prev, [name]: value }));
  };

  const handleTechStackChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setProject((prev) => ({
      ...prev,
      techStack: value.split(',').map((tech) => tech.trim()),
    }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProject((prev) => ({ ...prev, image: imageUrl }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(project);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/20 backdrop-blur-2xl">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4">
          {initialData ? 'Edit Project' : 'Add Project'}
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
            name="category"
            value={project.category}
            onChange={handleChange}
            placeholder="Category"
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
              src={project.image}
              fill
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
            name="techStack"
            value={project.techStack.join(', ')}
            onChange={handleTechStackChange}
            placeholder="Tech Stack (comma separated)"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            name="live_url"
            value={project.live_url}
            onChange={handleChange}
            placeholder="Live URL"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
          <div className="flex justify-end space-x-2">
            <button type="button" onClick={onClose} className="px-4 py-2 border-1 border-gray-300 rounded cursor-pointer">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-cyan-600 text-white rounded cursor-pointer">
              {initialData ? 'Update' : 'Create'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectModal;
