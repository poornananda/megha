import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
} from "chart.js";

Chart.register(CategoryScale, LinearScale, BarController, BarElement);

const data = {
  labels: ["Engine1", "Engine2", "Engine3", "Engine4", "Engine5", "Engine6", "Engine7", "Engine8"],
  datasets: [
    {
      label: "My First Dataset",
      data: [46, 18, 100,-15, 56, -25, 40, 75],
      backgroundColor: "#1e64a5",
      borderColor: "#1e64a5",
      borderWidth: 1,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
    },
    background: {
      backgroundColor: false,
    },
  },
  scales: {
    x: {
      ticks: {
        color: "black",
      },
    },
    y: {
      ticks: {
        color: "black",
      },
    },
  },
};

const BarChart = () => (
  <Bar style={{ width: "100%" }} data={data} options={options} />
);

export default BarChart;
