"use client";

import { useEffect, useState } from "react";
import type { ChartData, ChartOptions } from "chart.js";
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

import { fetchTrafficData } from "@/app/api/api";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

interface TrafficEvent {
  timestamp: string;
}

export default function TrafficChart() {
  const [chartData, setChartData] = useState<ChartData<"line"> | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTraffic = async () => {
      try {
        const events: TrafficEvent[] | null = await fetchTrafficData();

        if (!events) {
          setError("Failed to fetch traffic data");
          return;
        }

        // Aggregate page views by day
        const countsPerDay: Record<string, number> = {};

        events.forEach(({ timestamp }) => {
          // Format date as YYYY-MM-DD for consistent sorting and labeling
          const date = new Date(timestamp).toISOString().slice(0, 10);
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
              borderWidth: 2,
            },
          ],
        });
        setError(null);
      } catch (err) {
        setError("An unexpected error occurred");
        setChartData(null);
      }
    };

    loadTraffic();
  }, []);

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: { color: "#22d3ee" }, // cyan-400 color
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        ticks: { color: "#9ca3af" }, // gray-400
        grid: { color: "#37415122" }, // subtle grid line with transparency
        title: {
          display: true,
          text: "Date",
          color: "#9ca3af",
          font: { size: 14, weight: 600 },
        },
      },
      y: {
        beginAtZero: true,
        ticks: { color: "#9ca3af" },
        grid: { color: "#37415122" },
        title: {
          display: true,
          text: "Views",
          color: "#9ca3af",
          font: { size: 14, weight: 600 },
        },
      },
    },
    hover: {
      mode: "nearest",
      intersect: true,
    },
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-cyan-400 dark:border-cyan-700 shadow-md h-[350px] md:h-[400px]">
      <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">Traffic Overview</h3>

      {error && <p className="text-red-500 font-medium">{error}</p>}
      {!chartData && !error && <p className="text-gray-500 dark:text-gray-400">Loading...</p>}

      {chartData && <Line data={chartData} options={options} />}
    </div>
  );
}
