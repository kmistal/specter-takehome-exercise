import { ChartProps } from "src/components/Chart/Chart";
import { Company } from "src/types";

import { ChartDomains } from "../constants/ChartCategories";

export function getDataSeries(company: Company): ChartProps["series"] {
  const dataSeries = [] as ChartProps["series"];
  if (company["Employee Count"]) {
    const series = {
      name: ChartDomains.Employees.toString(),
      data: [
        company["Employees - Monthly Growth"],
        company["Employees - 2 Months Growth"],
        company["Employees - 3 Months Growth"],
        company["Employees - 4 Months Growth"],
        company["Employees - 5 Months Growth"],
        company["Employees - 6 Months Growth"],
      ],
    };
    dataSeries.push(series);
  }

  if (company["LinkedIn - Followers"]) {
    const series = {
      name: ChartDomains.LinkedIn.toString(),
      data: [
        company["LinkedIn - Monthly Followers Growth"],
        company["LinkedIn - 2 Months Followers Growth"],
        company["LinkedIn - 3 Months Followers Growth"],
        company["LinkedIn - 4 Months Followers Growth"],
        company["LinkedIn - 5 Months Followers Growth"],
        company["LinkedIn - 6 Months Followers Growth"],
      ],
    };
    dataSeries.push(series);
  }

  if (company["Twitter - Followers"]) {
    const series = {
      name: ChartDomains.Twitter.toString(),
      data: [
        company["Twitter - Monthly Followers Growth"],
        company["Twitter - 2 Months Followers Growth"],
        company["Twitter - 3 Months Followers Growth"],
        company["Twitter - 4 Months Followers Growth"],
        company["Twitter - 5 Months Followers Growth"],
        company["Twitter - 6 Months Followers Growth"],
      ],
    };
    dataSeries.push(series);
  }

  if (company["Instagram - Followers"]) {
    const series = {
      name: ChartDomains.Instagram.toString(),
      data: [
        company["Instagram - Monthly Followers Growth"],
        company["Instagram - 2 Months Followers Growth"],
        company["Instagram - 3 Months Followers Growth"],
        company["Instagram - 4 Months Followers Growth"],
        company["Instagram - 5 Months Followers Growth"],
        company["Instagram - 6 Months Followers Growth"],
      ],
    };
    dataSeries.push(series);
  }

  if (company["iTunes - Reviews"]) {
    const series = {
      name: ChartDomains.iTunes.toString(),
      data: [
        company["iTunes - Monthly Reviews Growth"],
        company["iTunes - 2 Months Reviews Growth"],
        company["iTunes - 3 Months Reviews Growth"],
        company["iTunes - 4 Months Reviews Growth"],
        company["iTunes - 5 Months Reviews Growth"],
        company["iTunes - 6 Months Reviews Growth"],
      ],
    };
    dataSeries.push(series);
  }

  if (company["Google Play - Reviews"]) {
    const series = {
      name: ChartDomains["Google Play"].toString(),
      data: [
        company["Google Play - Monthly Reviews Growth"],
        company["Google Play - 2 Months Reviews Growth"],
        company["Google Play - 3 Months Reviews Growth"],
        company["Google Play - 4 Months Reviews Growth"],
        company["Google Play - 5 Months Reviews Growth"],
        company["Google Play - 6 Months Reviews Growth"],
      ],
    };
    dataSeries.push(series);
  }

  return dataSeries;
}
