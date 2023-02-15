// ChartJS
import { Line } from "react-chartjs-2";
import { ChartData, LineElement } from "chart.js";
import { Chart as ChartJS } from "chart.js/auto";
import { LineChartProps } from "../charts";

ChartJS.register(LineElement);

const LineChart: React.FC<LineChartProps> = ({ chartData }) => {
  return <Line data={chartData} />;
};

export default LineChart;
