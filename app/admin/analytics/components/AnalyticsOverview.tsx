// components/dashboard/AnalyticsOverview.tsx
"use client";

import { useEffect, useState } from "react";
import { fetchProjects, fetchPosts } from "@/app/api/api";
import TrafficChart from "./TrafficChart";
import PieChart from "./PieChart"; // Add this import


export default function AnalyticsOverview() {
  const [postCount, setPostCount] = useState(0);
  const [projectCount, setProjectCount] = useState(0);
  const [featuredPosts, setFeaturedPosts] = useState(0);
  const [featuredProjects, setFeaturedProjects] = useState(0);
  const [views, setViews] = useState(0); // mock or real from Vercel

  useEffect(() => {
  async function fetchData() {
    const posts = await fetchPosts();
    const projects = await fetchProjects();

    setPostCount(posts.length);
    setProjectCount(projects.length);
    setFeaturedPosts(posts.filter((p: { featured: boolean }) => p.featured).length);
    setFeaturedProjects(projects.filter((p: { featured: boolean }) => p.featured).length);

    // Fetch real page views from Vercel analytics API
    try {
      const res = await fetch("/api/traffic");
      const data = await res.json();

      if (data.events) {
        setViews(data.events.length);
      } else {
        setViews(0);
      }
    } catch {
      setViews(0);
    }
  }

  fetchData();
}, []);

  return (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
    <Card title="Total Blog Posts" value={postCount} />
    <Card title="Total Projects" value={projectCount} />
    <Card title="Featured Posts" value={featuredPosts} />
    <Card title="Featured Projects" value={featuredProjects} />
    <Card title="Page Views" value={views} />

    <div className="md:col-span-1 lg:col-span-1">
      <PieChart postCount={postCount} projectCount={projectCount} />
    </div>

    <div className="md:col-span-2 lg:col-span-2">
      <TrafficChart />
    </div>
  </div>
);
}

function Card({ title, value }: { title: string; value: number }) {
  return (
    <div className="bg-white dark:bg-gray-900 border border-cyan-400 dark:border-cyan-700 rounded-lg p-5 shadow-md">
      <h2 className="text-gray-700 dark:text-gray-300 text-lg font-medium">{title}</h2>
      <p className="text-2xl font-bold text-cyan-600 mt-2">{value}</p>
    </div>
  );
}
