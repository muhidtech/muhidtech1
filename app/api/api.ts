// utils/api.ts

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
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string>),
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  // Try to parse JSON, but handle HTML error pages gracefully
  let data;
  const text = await response.text();
  try {
    data = JSON.parse(text);
  } catch {
    // If not JSON, return the raw text (likely an error page)
    throw new Error(`Unexpected response: ${text.slice(0, 100)}...`);
  }

  if (!response.ok) {
    throw new Error(data.detail || 'Request failed');
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

// Get all projects (public GET)
export const fetchProjects = async () => {
  return authFetch('/api/projects/', { method: 'GET' });
};

// Create a project (auth required)
export const createProject = async (projectData: any) => {
  return authFetch('/api/projects/', {
    method: 'POST',
    body: JSON.stringify(projectData),
  });
};

// Update a project by ID (auth required)
export const updateProject = async (projectId: string, projectData: any) => {
  return authFetch(`/api/projects/${projectId}/`, {
    method: 'PUT', // or 'PATCH' if partial update is preferred
    body: JSON.stringify(projectData),
  });
};

// Delete a project by ID (auth required)
export const deleteProject = async (projectId: string) => {
  return authFetch(`/api/projects/${projectId}/`, {
    method: 'DELETE',
  });
};

// Create a blog post (auth required)
export const createPost = async (postData: any) => {
  return authFetch('/api/blog/posts/', {
    method: 'POST',
    body: JSON.stringify(postData),
  });
};

// Update a blog post by ID (auth required)
export const updatePost = async (postId: string, postData: any) => {
  return authFetch(`/api/blog/posts/${postId}/`, {
    method: 'PUT', // or 'PATCH' if partial update is preferred
    body: JSON.stringify(postData),
  });
};

// Delete a blog post by ID (auth required)
export const deletePost = async (postId: string) => {
  return authFetch(`/api/blog/posts/${postId}/`, {
    method: 'DELETE',
  });
};
