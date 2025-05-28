// app/dashboard/page.tsx
import { fetchProjects, fetchPosts } from "@/app/api/api";
import Layout from "../components/layout/Layout";

export default async function DashboardPage() {
  const [projects, blogs] = await Promise.all([fetchProjects(), fetchPosts()]);

  const stats = [
    { label: "Projects", value: projects.length },
    { label: "Blogs", value: blogs.length },
  ];

  const recentBlogs = blogs
    .sort(
      (a: { id: string; title: string; date: string }, b: { id: string; title: string; date: string }) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    )
    .slice(0, 5);

  const recentProjects = projects.slice(-5).reverse();

  return (
    <Layout>
      <div className="ml-60 space-y-6 px-4 sm:px-6 lg:px-8 py-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold">Welcome back!</h2>

        {/* Stats cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {stats.map(({ label, value }) => (
            <div
              key={label}
              className="bg-white/20 backdrop-blur-2xl rounded-lg shadow p-6 flex flex-col items-center"
            >
              <span className="text-4xl font-bold">{value}</span>
              <span className="mt-2 text-gray-600 dark:text-gray-300">{label}</span>
            </div>
          ))}
        </div>

        {/* Recent activity */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Recent Blogs */}
          <section className="bg-white/20 backdrop-blur-2xl rounded-lg shadow p-6 max-h-[400px] overflow-y-auto">
            <h3 className="text-xl font-semibold mb-4">Recent Blogs</h3>
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {recentBlogs.map((blog: { id: string; title: string; date: string }) => (
                <li key={blog.id} className="py-2 flex justify-between">
                  <span className="truncate max-w-[70%] sm:max-w-[80%]">{blog.title}</span>
                  <time className="text-gray-500 dark:text-gray-400 whitespace-nowrap">{blog.date}</time>
                </li>
              ))}
            </ul>
          </section>

          {/* Recent Projects */}
          <section className="bg-white/20 backdrop-blur-2xl rounded-lg shadow p-6 max-h-[400px] overflow-y-auto">
            <h3 className="text-xl font-semibold mb-4">Recent Projects</h3>
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {recentProjects.map((project: { id: string; title: string; status: string }) => (
                <li key={project.id} className="py-2 flex justify-between items-center">
                  <span className="truncate max-w-[70%] sm:max-w-[80%]">{project.title}</span>
                  <span
                    className={`px-2 py-1 rounded text-sm whitespace-nowrap ${
                      project.status === "Completed"
                        ? "bg-green-200 text-green-800"
                        : "bg-yellow-200 text-yellow-800"
                    }`}
                  >
                    {project.status}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </Layout>
  );
}
