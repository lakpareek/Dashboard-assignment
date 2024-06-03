import "../../App.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import React from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

function LineChart({ chartData }) {
  return (
    <div className="h-[21vw] w-[44.5vw]">
      <Line data={chartData} />
    </div>
  );
}

export default LineChart;
