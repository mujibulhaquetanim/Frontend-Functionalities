import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJs,
  Tooltip,
  Legend,
  ArcElement
} from "chart.js";
import { pieChartData } from "../assets/FakeData";

ChartJs.register(
  Tooltip,
  Legend,
  ArcElement
);

export default function LineGraph() {
  const options = {};
  return <Pie className="m-3" options={options} data={pieChartData} />;
}
