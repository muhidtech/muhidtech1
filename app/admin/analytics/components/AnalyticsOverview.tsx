"use client";

import { useEffect, useState } from "react";
import { fetchProjects, fetchPosts, fetchTrafficData } from "@/app/api/api";
import TrafficChart from "./TrafficChart";
import PieChart from "./PieChart";
import { FaFileAlt, FaProjectDiagram, FaStar, FaEye } from "react-icons/fa";

export default function AnalyticsOverview() {
  const [postCount, setPostCount] = useState(0);
  const [projectCount, setProjectCount] = useState(0);
  const [featuredPosts, setFeaturedPosts] = useState(0);
  const [featuredProjects, setFeaturedProjects] = useState(0);
  const [views, setViews] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const posts = await fetchPosts();
      const projects = await fetchProjects();

      setPostCount(posts.length);
      setProjectCount(projects.length);
      setFeaturedPosts(posts.filter((p: { featured: boolean }) => p.featured).length);
      setFeaturedProjects(projects.filter((p: { featured: boolean }) => p.featured).length);

      const events = await fetchTrafficData();
      setViews(events ? events.length : 0);
    }

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <StatCard icon={<FaFileAlt />} title="Total Blog Posts" value={postCount} />
      <StatCard icon={<FaProjectDiagram />} title="Total Projects" value={projectCount} />
      <StatCard icon={<FaStar />} title="Featured Posts" value={featuredPosts} />
      <StatCard icon={<FaStar />} title="Featured Projects" value={featuredProjects} />
      <StatCard icon={<FaEye />} title="Page Views" value={views} />

      <div className="bg-white dark:bg-gray-900 p-5 rounded-lg border border-cyan-400 dark:border-cyan-700 shadow-md col-span-1 sm:col-span-2 lg:col-span-1 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">Content Distribution</h3>
        <PieChart postCount={postCount} projectCount={projectCount} />
      </div>

      <div className="bg-white dark:bg-gray-900 p-5 rounded-lg border border-cyan-400 dark:border-cyan-700 shadow-md col-span-1 sm:col-span-2 lg:col-span-2">
        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">Traffic Over Time</h3>
        <TrafficChart />
      </div>
    </div>
  );
}

function StatCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: number;
}) {
  return (
    <div className="flex items-center space-x-4 bg-white dark:bg-gray-900 border border-cyan-400 dark:border-cyan-700 rounded-lg p-5 shadow-md hover:shadow-cyan-500/40 transition-shadow duration-300">
      <div className="text-cyan-600 dark:text-cyan-400 text-3xl">{icon}</div>
      <div>
        <h2 className="text-gray-700 dark:text-gray-300 text-lg font-semibold">{title}</h2>
        <p className="text-3xl font-bold text-cyan-600 mt-1">{value.toLocaleString()}</p>
      </div>
    </div>
  );
}
