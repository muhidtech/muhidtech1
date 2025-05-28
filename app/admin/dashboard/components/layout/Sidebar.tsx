// components/layout/Sidebar.tsx
import { Home, FileText, Folder, BarChart2, Settings } from "lucide-react";
import Link from "next/link";

const navItems = [
  { href: "admin/dashboard", label: "Dashboard", icon: Home },
  { href: "admin/blog", label: "Blogs", icon: FileText },
  { href: "admin/projects", label: "Projects", icon: Folder },
  { href: "admin/analytics", label: "Analytics", icon: BarChart2 },
  { href: "admin/settings", label: "Settings", icon: Settings },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Desktop */}
      <aside className="fixed h-screen w-64 bg-white/20 backdrop-blur-2xl text-white p-4 hidden md:block">
        <h2 className="text-2xl font-bold mb-8">Admin</h2>
        {/* navItems map */}
        <nav className="space-y-4">
        {navItems.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-700 transition"
          >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </Link>
        ))}
      </nav>
      </aside>

      {/* Mobile */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white/20 backdrop-blur-2xl bg-opacity-50 md:hidden" onClick={onClose}>
          <aside
            className="absolute left-0 top-0 w-64 h-full bg-gray-900 text-white p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-8">Admin</h2>
            {/* navItems map */}
            <nav className="space-y-4">
        {navItems.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-700 transition"
          >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </Link>
        ))}
      </nav>
          </aside>
        </div>
      )}
    </>
  );
}
