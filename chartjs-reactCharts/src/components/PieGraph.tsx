import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJs,
  Tooltip,
  Legend,
  ArcElement,
  plugins
} from "chart.js";
import { pieChartData } from "../assets/FakeData";

ChartJs.register(
  Tooltip,
  Legend,
  ArcElement,
  plugins
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
        text: "Pie Chart, representing Online time spending in a week"
      }
    }
  };

  return <Pie className="m-3" options={options} data={pieChartData} />;
}
