"use client";
import { fetchTrafficData } from "@/app/api/api";
import { useEffect, useState } from "react";
import type { ChartData } from "chart.js";
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



export default function TrafficChart() {
  const [chartData, setChartData] = useState<ChartData<"line"> | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
  const loadTraffic = async () => {
    const events = await fetchTrafficData();

    if (!events) {
      setError("Failed to fetch traffic data");
      return;
    }

    const countsPerDay: Record<string, number> = {};

    events.forEach((event: { timestamp: string }) => {
      const date = new Date(event.timestamp).toLocaleDateString();
      countsPerDay[date] = (countsPerDay[date] || 0) + 1;
    });

    const sortedDates = Object.keys(countsPerDay).sort(
      (a, b) => new Date(a).getTime() - new Date(b).getTime()
    );
    const values = sortedDates.map((date) => countsPerDay[date]);

    setChartData({
      labels: sortedDates,
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

  loadTraffic();
}, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: { color: "#38bdf8" },
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
      {error && <p className="text-red-500">{error}</p>}
      {!chartData && !error && <p>Loading...</p>}
      {chartData && <Line data={chartData} options={options} />}
    </div>
  );
}
