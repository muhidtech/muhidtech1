// components/layout/Sidebar.tsx
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Home,
  FileText,
  Folder,
  BarChart2,
  Settings,
  X,
} from "lucide-react";
import clsx from "clsx";

const navItems = [
  { href: "/admin/dashboard", label: "Dashboard", icon: Home },
  { href: "/admin/blog", label: "Blogs", icon: FileText },
  { href: "/admin/projects", label: "Projects", icon: Folder },
  { href: "/admin/analytics", label: "Analytics", icon: BarChart2 },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  const renderNav = () => (
    <nav className="space-y-2">
      {navItems.map(({ href, label, icon: Icon }) => {
        const isActive = pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            className={clsx(
              "flex items-center gap-3 px-3 py-2 rounded-md transition-all",
              isActive
                ? "bg-cyan-600 text-white font-medium shadow"
                : "hover:bg-gray-700 hover:text-white text-gray-300"
            )}
          >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </Link>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* Desktop */}
      <aside className="fixed h-screen w-64 bg-gray-900 text-white z-20 p-4 hidden md:flex flex-col shadow-lg">
        <h2 className="text-2xl font-bold mb-8 tracking-tight">Admin</h2>
        {renderNav()}
      </aside>

      {/* Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={onClose}
        >
          <aside
            className="absolute left-0 top-0 h-full w-64 bg-gray-900 text-white p-4 flex flex-col shadow-2xl animate-slide-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold tracking-tight">Admin</h2>
              <button onClick={onClose} className="text-gray-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            {renderNav()}
          </aside>
        </div>
      )}
    </>
  );
}
