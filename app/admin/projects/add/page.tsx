'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import {
  createProject,
  updateProject,
  fetchSingleProject,
} from '@/app/api/api';
import { Project } from '../Project';
import ProtectedRoute from '@/app/hooks/ProtectedRoute';
import Layout from '../../dashboard/components/layout/Layout';

export default function AddOrEditProjectPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get('id'); // This determines edit mode

  const isEditMode = !!id;

  const [loading, setLoading] = useState(false);
  const [project, setProject] = useState<Project>({
    title: '',
    description: '',
    technologies: '',
    github_link: '',
    live_link: '',
    image: null,
    featured: false,
    category: '',
    status: 'in_progress',
  });

  useEffect(() => {
    const loadProject = async () => {
      if (isEditMode && id) {
        setLoading(true);
        try {
          const data = await fetchSingleProject(id);
          setProject(data);
        } catch (err) {
          console.error(err);
          alert('Failed to load project');
          router.back();
        } finally {
          setLoading(false);
        }
      }
    };

    loadProject();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProject((prev) => ({ ...prev, [name]: value }));
  };

  const handleTechnologiesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setProject((prev) => ({
      ...prev,
      technologies: value,
      techStack: value.split(',').map((t) => t.trim()),
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProject((prev) => ({ ...prev, image: file }));
    }
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setProject((prev) => ({ ...prev, status: e.target.value as 'completed' | 'in_progress' }));
  };

  const handleFeaturedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProject((prev) => ({ ...prev, featured: e.target.checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (isEditMode && id) {
        await updateProject(id, project);
        alert('Project updated successfully!');
      } else {
        await createProject(project);
        alert('Project created successfully!');
      }
      router.push('/dashboard/projects');
    } catch (err) {
      console.error(err);
      alert('Failed to submit project');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProtectedRoute>
        <Layout>
            <main className="min-h-screen py-10 px-6 md:px-20">
            <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg border border-white/10">
                <h1 className="text-3xl font-bold mb-6 text-cyan-500">
                {isEditMode ? 'Edit Project' : 'Add New Project'}
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    name="title"
                    value={project.title}
                    onChange={handleChange}
                    placeholder="Project Title"
                    required
                    className="w-full p-3 rounded bg-black/30 border border-cyan-400 text-white"
                />

                <textarea
                    name="description"
                    value={project.description}
                    onChange={handleChange}
                    placeholder="Project Description"
                    required
                    className="w-full p-3 rounded bg-black/30 border border-cyan-400 text-white"
                />

                <input
                    name="technologies"
                    value={project.technologies}
                    onChange={handleTechnologiesChange}
                    placeholder="Technologies (comma separated)"
                    className="w-full p-3 rounded bg-black/30 border border-cyan-400 text-white"
                />

                <input
                    name="category"
                    value={project.category}
                    onChange={handleChange}
                    placeholder="Category"
                    className="w-full p-3 rounded bg-black/30 border border-cyan-400 text-white"
                />

                <input
                    name="github_link"
                    value={project.github_link || ''}
                    onChange={handleChange}
                    placeholder="GitHub Link"
                    className="w-full p-3 rounded bg-black/30 border border-cyan-400 text-white"
                />

                <input
                    name="live_link"
                    value={project.live_link || ''}
                    onChange={handleChange}
                    placeholder="Live Project Link"
                    className="w-full p-3 rounded bg-black/30 border border-cyan-400 text-white"
                />

                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full p-2 border border-cyan-400 text-white bg-black/30 rounded"
                />

                {project.image && (
                    <div className="mt-2">
                    <Image
                        src={
                        typeof project.image === 'string'
                            ? project.image
                            : URL.createObjectURL(project.image)
                        }
                        alt="Project Preview"
                        width={600}
                        height={300}
                        className="rounded-lg object-cover"
                    />
                    </div>
                )}

                <select
                    value={project.status}
                    onChange={handleStatusChange}
                    className="w-full p-3 bg-black/30 border border-cyan-400 text-white rounded"
                >
                    <option value="in_progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>

                <label className="flex items-center gap-2 text-white">
                    <input
                    type="checkbox"
                    checked={project.featured}
                    onChange={handleFeaturedChange}
                    className="accent-cyan-500"
                    />
                    Featured
                </label>

                <div className="flex justify-end space-x-3 pt-4">
                    <button
                    type="button"
                    onClick={() => router.back()}
                    className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
                    >
                    Cancel
                    </button>
                    <button
                    type="submit"
                    disabled={loading}
                    className="px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700"
                    >
                    {isEditMode ? 'Update Project' : 'Create Project'}
                    </button>
                </div>
                </form>
            </div>
            </main>
        </Layout>
    </ProtectedRoute>
  );
}
