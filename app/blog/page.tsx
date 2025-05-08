"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Page() { // Renamed to "Page"
  const route = useRouter();
  const text = "Go Back";

  return (
    <div className="relative flex flex-col items-center justify-center h-screen w-full">
      <h1 className="flex flex-col items-center justify-center text-center">
        <span className="text-4xl font-bold text-gray-200">Coming Soon</span>
        <br />
        <span className="text-lg text-gray-300">This page is under construction</span>
        <br />
      </h1>

      <button
        onClick={() => route.back()}
        className="cursor-pointer top-20 left-1/2 py-3 px-3 bg-cyan-500 rounded-lg"
      >
        {text}
      </button>
    </div>
  );
}