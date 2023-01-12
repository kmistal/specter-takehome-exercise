import { FC } from "react";
import { Card, Chart } from "src/components";
import { Company } from "src/types";

import { CHART_CATEGORIES } from "../constants/ChartCategories";
import { getDataSeries } from "../services/ChartService";

interface Props {
  company: Company;
}

export const CompanyStatsChart: FC<Props> = ({ company }) => {
  const dataSeries = getDataSeries(company);

  return (
    <Card title="Six months growth across different channels" titlePrimary={true} textCentered={false}>
      <Chart categories={CHART_CATEGORIES} series={dataSeries} />
    </Card>
  );
};
