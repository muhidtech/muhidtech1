import { fetchProjects, fetchPosts } from "@/app/api/api";
import Layout from "../components/layout/Layout";

type Project = {
  id: string;
  title: string;
  status: string;
};

type Blog = {
  id: string;
  title: string;
  date: string;
};

export default async function DashboardPage() {
  const [projects, blogs]: [Project[], Blog[]] = await Promise.all([fetchProjects(), fetchPosts()]);

  const stats = [
    { label: "Projects", value: projects.length },
    { label: "Blogs", value: blogs.length },
  ];

  const recentBlogs = blogs
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  const recentProjects = projects.slice(-5).reverse();

  return (
    <Layout>
      <div className="max-w-7xl w-auto md:ml-60 px-4 sm:px-6 lg:px-8 py-6 space-y-10">
        {/* Welcome */}
        <h2 className="text-3xl font-bold text-white">Welcome back 👋</h2>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map(({ label, value }) => (
            <div
              key={label}
              className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-6 shadow-md text-center transition hover:scale-[1.02]"
            >
              <div className="text-5xl font-bold text-white">{value}</div>
              <div className="mt-2 text-gray-300 text-lg">{label}</div>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Blogs */}
          <section className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-6 shadow-md max-h-[400px] overflow-y-auto">
            <h3 className="text-xl font-semibold text-white mb-4">Recent Blogs</h3>
            <ul className="space-y-3">
              {recentBlogs.map((blog: Blog) => (
                <li
                  key={blog.id}
                  className="flex justify-between items-center text-white/90 hover:bg-white/10 p-2 rounded-md transition"
                >
                  <span className="truncate max-w-[65%] sm:max-w-[75%]">{blog.title}</span>
                  <span className="text-xs text-gray-400">{blog.date}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Projects */}
          <section className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-6 shadow-md max-h-[400px] overflow-y-auto">
            <h3 className="text-xl font-semibold text-white mb-4">Recent Projects</h3>
            <ul className="space-y-3">
              {recentProjects.map((project: Project) => (
                <li
                  key={project.id}
                  className="flex justify-between items-center text-white/90 hover:bg-white/10 p-2 rounded-md transition"
                >
                  <span className="truncate max-w-[65%] sm:max-w-[75%]">{project.title}</span>
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium whitespace-nowrap ${
                      project.status === "Completed"
                        ? "bg-green-500/20 text-green-300"
                        : "bg-yellow-500/20 text-yellow-300"
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
