"use client";

import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

type VercelEvent = {
  timestamp: string;
};

export default function TrafficChart() {
    const [chartData, setChartData] = useState<{
        labels: string[];
        datasets: {
            label: string;
            data: number[];
            fill: boolean;
            borderColor: string;
            backgroundColor: string;
            tension: number;
            pointRadius: number;
            pointBackgroundColor: string;
        }[];
    } | null>(null);
  useEffect(() => {
    const fetchTraffic = async () => {
      const res = await fetch("/api/traffic");
      const data = await res.json();

      if (data.error) return;

      const countsPerDay: Record<string, number> = {};

      data.events.forEach((event: VercelEvent) => {
        const date = new Date(event.timestamp).toLocaleDateString();
        countsPerDay[date] = (countsPerDay[date] || 0) + 1;
      });

      const labels = Object.keys(countsPerDay);
      const values = Object.values(countsPerDay);

      setChartData({
        labels,
        datasets: [
          {
            label: "Page Views",
            data: values,
            fill: false,
            borderColor: "rgba(6, 182, 212, 1)",
            backgroundColor: "rgba(6, 182, 212, 0.5)",
            tension: 0.4,
            pointRadius: 4,
            pointBackgroundColor: "rgba(6, 182, 212, 1)",
          },
        ],
      });
    };

    fetchTraffic();
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: { color: "#38bdf8" }, // Tailwind cyan-400
      },
    },
    scales: {
      x: {
        ticks: { color: "#ccc" },
      },
      y: {
        beginAtZero: true,
        ticks: { color: "#ccc" },
      },
    },
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-5 rounded-lg border border-cyan-400 dark:border-cyan-700 shadow-md">
      <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">
        Traffic Overview
      </h3>
      {chartData ? <Line data={chartData} options={options} /> : <p>Loading...</p>}
    </div>
  );
}
