import { Line } from "react-chartjs-2";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { linearChartData } from "../assets/FakeData";

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineGraph() {
  const options = {
    responsive: true, 
    plugins: {
      legend: {
        position: "top" as const
      },
      title: {
        display: true,
        text: "Line Graph, representing Foot steps comparison between Mujib & Emma"
      }
    }
  };
  return <Line className="m-3" options={options} data={linearChartData} />;
}
