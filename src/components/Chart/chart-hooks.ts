import { Theme } from "@mui/material";

export function useChartOptions(theme: Theme, categories: string[]): ApexCharts.ApexOptions {
  const line = theme.palette.divider;
  return {
    colors: [
      theme.palette.primary.main,
      theme.palette.primary.light,
      theme.palette.primary.dark,
      theme.palette.secondary.main,
      theme.palette.secondary.light,
      theme.palette.secondary.dark,
    ],

    chart: {
      height: 450,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 4,
    },

    fill: {
      opacity: 1,
      type: "gradient",
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
