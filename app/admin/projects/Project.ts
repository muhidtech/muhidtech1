export interface Project {
  id?: number;
  title: string;
  description: string;
  technologies: string;
  techStack?: string[];
  github_link?: string | null;
  live_link?: string | null;
  image?: File | string | null
  featured: boolean;
  category: string;
  status: "completed" | "in_progress";
  created_at?: string;
  owner?: number;
}
