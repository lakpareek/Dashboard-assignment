import "../../App.css";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import React from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart({ chartData }) {
  return (
    <div className="h-[21vw] w-[44.5vw]">
      <Bar data={chartData} />
    </div>
  );
}

export default BarChart;
