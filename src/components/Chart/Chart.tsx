import { FC } from "react";
import ReactApexChart from "react-apexcharts";

import { useTheme } from "@mui/material/styles";

import { getChartOptions } from "./chart-utils";

export interface ChartProps {
  series: { name: string; data: number[] }[];
  categories: string[];
}

export const Chart: FC<ChartProps> = ({ series, categories }) => {
  const theme = useTheme();
  const areaChartOptions = getChartOptions(theme, categories);

  return <ReactApexChart options={areaChartOptions} series={series} type="bar" height={450} />;
};
