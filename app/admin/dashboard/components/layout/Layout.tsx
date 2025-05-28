"use client"
// components/layout/Layout.tsx
import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import BackgroundAnimation from "@/app/components/BackgroundAnimation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen ">
      <BackgroundAnimation />
      <div className="">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      </div>
      <div className="">
        <Topbar onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}
