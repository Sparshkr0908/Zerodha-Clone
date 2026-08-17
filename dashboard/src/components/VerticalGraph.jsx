import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "./VerticalGraph.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,

  plugins: {
    legend: {
      position: "top",
    },

    title: {
      display: true,
      text: "Holdings",
    },
  },
};

export function VerticalGraph({ data }) {
  return (
    <div className="vertical-graph">
      <Bar options={options} data={data} />
    </div>
  );
}