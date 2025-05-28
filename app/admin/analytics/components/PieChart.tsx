// components/dashboard/PieChart.tsx
"use client";

import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  postCount: number;
  projectCount: number;
}

export default function PieChart({ postCount, projectCount }: PieChartProps) {
  const data = {
    labels: ["Blog Posts", "Projects"],
    datasets: [
      {
        data: [postCount, projectCount],
        backgroundColor: ["rgba(59, 130, 246, 0.7)", "rgba(6, 182, 212, 0.7)"],
        borderColor: ["rgba(59, 130, 246, 1)", "rgba(6, 182, 212, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-5 rounded-lg border border-cyan-400 dark:border-cyan-700 shadow-md">
      <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">
        Content Distribution
      </h3>
      <Pie data={data} />
    </div>
  );
}
