import "../../App.css";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import React from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

function PieChart({ chartData, title }) {
  const options = {
    plugins: {
      title: {
        display: true,
        text: title,
        color: "#C5C5C5",
        font: {
          size: 16,
        },
      },
      legend: {
        labels: {
          color: "#C5C5C5",
        },
      },
    },
  };

  return (
    <div>
      <Doughnut data={chartData} options={options} />
    </div>
  );
}

export default PieChart;
