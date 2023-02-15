// ChartJS
import { Bar } from "react-chartjs-2";
import { ChartData, BarElement } from "chart.js";
import { Chart as ChartJS } from "chart.js/auto";
import { BarChartProps } from "../charts";

ChartJS.register(BarElement);

const BarChart: React.FC<BarChartProps> = ({ chartData }) => {
  return <Bar data={chartData} />;
};

export default BarChart;
