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
        backgroundColor: ["rgba(14, 165, 233, 0.8)", "rgba(6, 182, 212, 0.8)"],
        borderColor: ["rgba(14, 165, 233, 1)", "rgba(6, 182, 212, 1)"],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Pie data={data} />
    </div>
  );
}
