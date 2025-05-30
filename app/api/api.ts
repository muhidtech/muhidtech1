// utils/api.ts

import { Project } from "../admin/projects/Project";

export interface BlogPost {
  id?: number;
  title: string;
  summary: string;
  category: string;
  date: string;
  slug: string;
  image?: File;
  featured?: boolean;
  author?: string;
  readTime?: string;
  tags?: string[];
  content: string;
  videoUrl?: string;
  created_at?: string;
}

const BASE_URL = 'https://muhidtech.onrender.com';

type LoginCredentials = {
  username: string;
  password: string;
};

type Tokens = {
  access: string;
  refresh: string;
};

// Save tokens to localStorage
const saveTokens = (tokens: Tokens) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("accessToken", tokens.access);
    localStorage.setItem("refreshToken", tokens.refresh);
  }
};

// Get access token
const getAccessToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem('accessToken');
  }
  return null;
}

// Helper for making authenticated requests
const authFetch = async (endpoint: string, options: RequestInit = {}) => {
  const token = getAccessToken();
  const headers: Record<string, string> = {
    ...(options.body instanceof FormData ? {} : { 'Content-Type': 'application/json' }),
    ...(options.headers as Record<string, string>),
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  const text = await response.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    throw new Error(`Unexpected response: ${text.slice(0, 100)}...`);
  }

  if (!response.ok) {
    console.error("API Error:", data);
    throw new Error(
      typeof data === 'object'
        ? JSON.stringify(data)
        : data.detail || 'Request failed'
    );
  }

  return data;
};

// Login request
export const login = async (credentials: LoginCredentials): Promise<void> => {
  const response = await fetch(`${BASE_URL}/api/auth/login/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.detail || 'Login failed');
  }

  const data: Tokens = await response.json();
  saveTokens(data);
};

// Get all blog posts (public)

export const fetchPosts = async () => {
  return authFetch('/api/blog/posts/', { method: 'GET' });
};
export const getPostBySlug = async (slug: string) => {
  return authFetch(`/api/blog/posts/${slug}/`, { method: 'GET' });
};
// Get all projects (public GET)
export const fetchProjects = async () => {
  return authFetch('/api/projects/', { method: 'GET' });
};

export const fetchSingleProject = async (id: string): Promise<Project> => {
  return authFetch(`/api/projects/${id}/`, { method: 'GET' });

}

// Create a project (auth required)
export const createProject = async (projectData: Project) => {
  const formData = new FormData();

  formData.append("title", projectData.title);
  formData.append("description", projectData.description);
  formData.append("technologies", projectData.technologies);
  formData.append("category", projectData.category);
  formData.append("status", projectData.status);
  formData.append("featured", String(projectData.featured));
  if (projectData.github_link) formData.append("github_link", projectData.github_link);
  if (projectData.live_link) formData.append("live_link", projectData.live_link);
  if (projectData.image instanceof File) {
    formData.append("image", projectData.image);
  }

  return authFetch("/api/projects/", {
    method: "POST",
    body: formData,
    headers: {}, // Don't set Content-Type manually
  });
};



// Update a project by ID (auth required)
export const updateProject = async (projectId: string, projectData: Project) => {
  const formData = new FormData();

  formData.append("title", projectData.title);
  formData.append("description", projectData.description);
  formData.append("technologies", projectData.technologies);
  formData.append("category", projectData.category);
  formData.append("status", projectData.status);
  formData.append("featured", String(projectData.featured));
  if (projectData.github_link) formData.append("github_link", projectData.github_link);
  if (projectData.live_link) formData.append("live_link", projectData.live_link);
  if (projectData.image instanceof File) {
    formData.append("image", projectData.image);
  }
  console.log("Submitting project payload:", formData);
  return authFetch(`/api/projects/${projectId}/`, {
    method: 'PATCH',
    body: formData,
  });
};

// Delete a project by ID (auth required)
export const deleteProject = async (projectId: string) => {
  return authFetch(`/api/projects/${projectId}/`, {
    method: 'DELETE',
  });
};

// Create a blog post (auth required)
export const createPost = async (postData: BlogPost) => {
  const formData = new FormData();

  formData.append("title", postData.title);
  formData.append("summary", postData.summary);
  formData.append("category", postData.category);
  formData.append("date", postData.date);
  formData.append("slug", postData.slug);
  formData.append("author", postData.author || "Anonymous");
  formData.append("readTime", postData.readTime || "1 min");
  formData.append("featured", String(postData.featured ?? false));
  formData.append("content", postData.content);
  if (postData.videoUrl) formData.append("videoUrl", postData.videoUrl);

  if (postData.tags && postData.tags.length > 0) {
    formData.append("tags", JSON.stringify(postData.tags));
  }

  if (postData.image instanceof File) {
    formData.append("image", postData.image);
  }

  return authFetch('/api/blog/posts/', {
    method: 'POST',
    body: formData,
    headers: {}, // IMPORTANT: Do NOT set Content-Type header when using FormData
  });
};

// Update a blog post by ID (auth required)
export const updatePost = async (postId: string, postData: BlogPost) => {
  const formData = new FormData();

  formData.append("title", postData.title);
  formData.append("summary", postData.summary);
  formData.append("category", postData.category);
  formData.append("date", postData.date);
  formData.append("slug", postData.slug);
  formData.append("author", postData.author || "Anonymous");
  formData.append("readTime", postData.readTime || "1 min");
  formData.append("featured", String(postData.featured ?? false));
  formData.append("content", postData.content);
  if (postData.videoUrl) formData.append("videoUrl", postData.videoUrl);

   if (postData.tags && postData.tags.length > 0) {
    formData.append("tags", JSON.stringify(postData.tags));
  }


  if (typeof File !== "undefined" && postData.image instanceof File) {
    formData.append("image", postData.image);
  }

  return authFetch(`/api/blog/posts/${postId}/`, {
    method: "PATCH",
    body: formData,
    headers: {}, // DO NOT set Content-Type manually when using FormData
  });
};

// Delete a blog post by ID (auth required)
export const deletePost = async (slug: string) => {
  return authFetch(`/api/blog/posts/${slug}/`, {
    method: 'DELETE',
  });
};


export async function fetchTrafficData() {
  try {
    const res = await fetch("https://muhidtech.onrender.com/api/traffic/");

    if (!res.ok) {
      throw new Error(`Failed to fetch traffic data: ${res.status}`);
    }

    const data = await res.json();

    if (!data.events) {
      throw new Error("Invalid response format: missing events");
    }

    return data.events; // an array of { timestamp: string } or similar
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching traffic data:", error.message);
    } else {
      console.error("Error fetching traffic data:", error);
    }
    return null;
  }
}


export async function getComments(slug: string) {
  const res = await fetch(`${BASE_URL}/api/blog/posts/${slug}/comments/`);
  if (!res.ok) throw new Error("Failed to fetch comments");
  return res.json();
}

// Post a comment to a blog post by slug
export async function postComment(slug: string, name: string, text: string) {
  const res = await fetch(`${BASE_URL}/api/blog/posts/${slug}/comments/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, text }),
  });

  if (!res.ok) throw new Error("Failed to post comment");
  return res.json();
}