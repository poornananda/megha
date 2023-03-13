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
  labels: ["Engine1", "Engine2", "Engine3", "Engine4", "Engine5", "Engine6", "Engine7"],
  datasets: [
    {
      label: "My First Dataset",
      data: [65, 30, 80,-15, 36, -25, 90],
      backgroundColor: "#ED3728",
      borderColor: "#a9a9a6",
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
        color: "white",
      },
    },
    y: {
      ticks: {
        color: "white",
      },
    },
  },
};

const BarChart = () => (
  <Bar style={{ width: "100%" }} data={data} options={options} />
);

export default BarChart;
