// components/layout/Topbar.tsx
import { Menu } from "lucide-react";

export default function Topbar({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="sticky top-0 z-50 w-full px-4 py-3 bg-gray-900/80 backdrop-blur-xl border-b border-gray-800 text-white flex items-center justify-between md:ml-64">
      {/* Left: Menu button + Title */}
      <div className="flex items-center gap-4">
        <button
          className="md:hidden p-2 rounded hover:bg-gray-800"
          onClick={onMenuClick}
        >
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-semibold tracking-tight">Admin Dashboard</h1>
      </div>

      {/* Right: Future Features (Avatar, Theme Toggle, etc.) */}
      <div className="flex items-center gap-4">
        {/* Placeholder for avatar or theme toggle */}
        <div className="w-8 h-8 rounded-full bg-gray-700" />
      </div>
    </header>
  );
}
