// types/Project.ts
export interface Project {
  id?: string; // Optional for new projects
  title: string;
  category: string;
  image: string;
  description: string;
  techStack: string[];
  live_url: string;
}
