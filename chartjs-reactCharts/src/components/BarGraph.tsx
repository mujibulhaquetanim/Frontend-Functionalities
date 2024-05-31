import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { barChartData } from "../assets/FakeData";

ChartJs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarGraph() {
  const options = {
    responsive: true, 
    plugins: {
      legend: {
        position: "top" as const
      },
      title: {
        display: true,
        text: "Bar Chart, representing Living Expense Comparison between BD & USA"
      }
    }
  };
  return <Bar className="m-3" options={options} data={barChartData} />;
}
