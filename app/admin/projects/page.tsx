// pages/ProjectsPage.tsx
"use client"
import React, { useEffect, useState } from 'react';
import { fetchProjects, createProject, updateProject, deleteProject } from '@/app/api/api';
import { Project } from './Project';
import ProjectModal from './components/ProjectModal';
import Layout from '../dashboard/components/layout/Layout';

const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProjects();
        setProjects(data);
      } catch (err: any) {
        setError(err.message || 'Failed to load projects');
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  const handleCreate = async (project: Project) => {
    try {
      const newProject = await createProject(project);
      setProjects((prev) => [...prev, newProject]);
    } catch (err: any) {
      alert(err.message || 'Failed to create project');
    }
  };

  const handleUpdate = async (project: Project) => {
    if (!project.id) return;
    try {
      const updatedProject = await updateProject(project.id, project);
      setProjects((prev) =>
        prev.map((p) => (p.id === updatedProject.id ? updatedProject : p))
      );
    } catch (err: any) {
      alert(err.message || 'Failed to update project');
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this project?')) return;
    try {
      await deleteProject(id);
      setProjects((prev) => prev.filter((p) => p.id !== id));
    } catch (err: any) {
      alert(err.message || 'Failed to delete project');
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
    <>
        <Layout>
            <div className="min-h-screen ml-60 p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-cyan-600">Projects</h1>
                <button
                onClick={openCreateModal}
                className="px-4 py-2 bg-cyan-600 text-white rounded  cursor-pointer"
                >
                Add Project
                </button>
            </div>

            {loading && <p className="text-cyan-700">Loading projects...</p>}
            {error && <p className="text-red-600">Error: {error}</p>}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <div
                    key={project.id}
                    className="bg-white/30 dark:bg-gray-900/50 rounded-xl p-5 shadow-lg backdrop-blur-sm border border-cyan-600/40"
                >
                    <h2 className="text-xl font-semibold text-cyan-700 mb-2">{project.title}</h2>
                    <p className="text-gray-800 dark:text-gray-300 mb-2">{project.description}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Tech Stack: {project.techStack.join(', ')}
                    </p>
                    <a
                    href={project.live_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 hover:underline mb-4 inline-block"
                    >
                    Visit Project
                    </a>
                    <div className="flex justify-end space-x-3">
                    <button
                        onClick={() => openEditModal(project)}
                        className="px-3 py-1 bg-cyan-500 hover:bg-cyan-600 text-white rounded-md transition"
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => handleDelete(project.id!)}
                        className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-md transition"
                    >
                        Delete
                    </button>
                    </div>
                </div>
                ))}
            </div>

            <ProjectModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                onSubmit={handleModalSubmit}
                initialData={currentProject || undefined}
            />
            </div>
        </Layout>
    </>
  );
};

export default ProjectsPage;
