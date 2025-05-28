// components/layout/Topbar.tsx
import { Menu, Moon, Sun } from "lucide-react";

export default function Topbar({ onMenuClick }: { onMenuClick: () => void }) {

  return (
    <header className="sticky top-0 w-full bg-white/20 backdrop-blur-2xl dark:text-white border-b shadow-sm px-4 py-3 flex justify-between items-center z-50 md:ml-64">
      <div className="flex items-center gap-4">
        <button className="md:hidden" onClick={onMenuClick}>
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-semibold">Dashboard</h1>
      </div>
    </header>
  );
}
