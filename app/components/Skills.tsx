"use client";

import React from "react";
import {
  CodeBracketIcon,
  CommandLineIcon,
  CubeIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  PaintBrushIcon,
  RectangleGroupIcon,
  WindowIcon,
} from "@heroicons/react/24/outline";

interface Skill {
  name: string;
  icon: React.ReactNode;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    {
      name: "HTML",
      icon: <DocumentTextIcon className="h-10 w-10 text-orange-500" />,
    },
    {
      name: "CSS",
      icon: <PaintBrushIcon className="h-10 w-10 text-blue-500" />,
    },
    {
      name: "JavaScript",
      icon: <CodeBracketIcon className="h-10 w-10 text-yellow-500" />,
    },
    {
      name: "ReactJS",
      icon: <GlobeAltIcon className="h-10 w-10 text-blue-400" />,
    },
    {
      name: "Next.js",
      icon: <WindowIcon className="h-10 w-10 text-black dark:text-white" />,
    },
    {
      name: "TypeScript",
      icon: <CodeBracketIcon className="h-10 w-10 text-blue-600" />,
    },
    {
      name: "TailwindCSS",
      icon: <RectangleGroupIcon className="h-10 w-10 text-teal-500" />,
    },
    {
      name: "SEO",
      icon: <CubeIcon className="h-10 w-10 text-green-500" />,
    },
  ];

  return (
    <section id="skills" className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="mb-3">{skill.icon}</div>
              <h3 className="text-lg font-medium">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;