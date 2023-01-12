import { Theme } from "@mui/material";

export function useChartOptions(theme: Theme, categories: string[]): ApexCharts.ApexOptions {
  const line = theme.palette.divider;
  return {
    colors: [theme.palette.primary.main, theme.palette.primary.light],
    chart: {
      height: 450,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    grid: {
      strokeDashArray: 0,
      borderColor: line,
    },
    xaxis: {
      categories,
      axisBorder: {
        show: true,
        color: line,
      },
      tickAmount: categories.length,
    },
    tooltip: {
      theme: "light",
    },
  };
}
