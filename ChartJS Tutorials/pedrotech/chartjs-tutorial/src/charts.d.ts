export type LineChartDataType = ChartData<
  "line",
  (number | [number, number] | null)[],
  unknown
>;

export interface LineChartProps {
  chartData: LineChartDataType;
}

export type PieChartDataType = ChartData<
  "pie",
  (number | [number, number] | null)[],
  unknown
>;

export interface PieChartProps {
  chartData: PieChartDataType;
}

export type BarChartDataType = ChartData<
  "bar",
  (number | [number, number] | null)[],
  unknown
>;

export interface BarChartProps {
  chartData: BarChartDataType;
}
