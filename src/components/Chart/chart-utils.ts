import { Theme } from "@mui/material";

export function getChartOptions(theme: Theme, categories: string[]): ApexCharts.ApexOptions {
  const { secondary } = theme.palette.text;
  const line = theme.palette.divider;
  return {
    colors: [theme.palette.primary.main, theme.palette.primary.light],
    chart: {
      height: 450,
      type: "bar",
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
      labels: {
        style: {
          colors: [
            secondary,
            secondary,
            secondary,
            secondary,
            secondary,
            secondary,
            secondary,
            secondary,
            secondary,
            secondary,
            secondary,
            secondary,
          ],
        },
      },
      axisBorder: {
        show: true,
        color: line,
      },
      tickAmount: categories.length,
    },
    yaxis: {
      labels: {
        style: {
          colors: [secondary],
        },
      },
    },
    tooltip: {
      theme: "light",
    },
  };
}
