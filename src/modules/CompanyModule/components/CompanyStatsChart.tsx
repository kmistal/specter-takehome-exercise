import { FC } from "react";
import { Chart } from "src/components";
import { Company } from "src/types";

import { Box, Typography } from "@mui/material";

import { CHART_CATEGORIES } from "../constants/ChartCategories";
import { getDataSeries } from "../services/ChartService";

interface Props {
  company: Company;
}

export const CompanyStatsChart: FC<Props> = ({ company }) => {
  const dataSeries = getDataSeries(company);

  return (
    <Box paddingY={2}>
      <Typography variant="h5" component="h2" gutterBottom>
        Six months growth across different channels
      </Typography>
      <Chart categories={CHART_CATEGORIES} series={dataSeries} />
    </Box>
  );
};
