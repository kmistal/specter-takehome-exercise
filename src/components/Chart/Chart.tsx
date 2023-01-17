import { useTheme } from "@mui/material/styles";
import { FC } from "react";
import ReactApexChart from "react-apexcharts";

import { useChartOptions } from "./chart-hooks";

export interface ChartProps {
  series: { name: string; data: number[] }[];
  categories: string[];
}

export const Chart: FC<ChartProps> = ({ series, categories }) => {
  const theme = useTheme();
  const areaChartOptions = useChartOptions(theme, categories);

  return <ReactApexChart options={areaChartOptions} series={series} type="area" />;
};
