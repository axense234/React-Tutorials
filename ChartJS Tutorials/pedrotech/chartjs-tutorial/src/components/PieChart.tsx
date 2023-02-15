// ChartJS
import { Pie } from "react-chartjs-2";
import { ChartData, PointElement } from "chart.js";
import { Chart as ChartJS } from "chart.js/auto";
import { PieChartProps } from "../charts";

ChartJS.register(PointElement);

const PieChart: React.FC<PieChartProps> = ({ chartData }) => {
  return <Pie data={chartData} />;
};

export default PieChart;
