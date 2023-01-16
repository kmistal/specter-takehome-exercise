import { DEFAULT_FILTERS } from "src/modules/RankingModule/constants/Filters";
import { Company } from "src/types";
import { CompanyResponse } from "src/types/CompanyResponse";

import { useInfiniteQuery } from "@tanstack/react-query";

import data from "../api/companies.json";
import { NO_INDUSTRY_KEY } from "./constants";

function getCompaniesFilteredByMinMax(
  companies: Company[],
  min: number,
  max: number,
  param: keyof Company
) {
  return companies.filter(
    (company) => company[param] >= min && company[param] <= max
  );
}

function getFilteredCompanies(companies: Company[], filters: typeof DEFAULT_FILTERS): Company[] {
  let filteredCompanies = companies;
  const { maxRank, minRank, industry, maxEmployee, minEmployee } = filters;
  if (maxRank || minRank) {
    filteredCompanies = getCompaniesFilteredByMinMax(
      filteredCompanies,
      Number(minRank || 0),
      Number(maxRank || Number.POSITIVE_INFINITY),
      "Rank"
    );
  }

  if (industry !== DEFAULT_FILTERS.industry) {
    filteredCompanies = filteredCompanies.filter(({ Industry }) => {
      if (industry === NO_INDUSTRY_KEY) {
        return Industry === "";
      }
      return Industry === industry;
    });
  }

  if (maxEmployee || minEmployee) {
    filteredCompanies = getCompaniesFilteredByMinMax(
      filteredCompanies,
      Number(minEmployee || 0),
      Number(maxEmployee || Number.POSITIVE_INFINITY),
      "Employee Count"
    );
  }

  return filteredCompanies;
}

async function getCompanies(
  pageSize: number,
  filters: typeof DEFAULT_FILTERS,
  { pageParam = 0 }
): Promise<CompanyResponse> {
  const pagedCompanies = await new Promise<CompanyResponse>((resolve) => {
    const filteredCompanies = getFilteredCompanies(data as Company[], filters);
    const startIndex = pageParam * pageSize;
    const endIndex = startIndex + pageSize;
    const pagedCompanies = filteredCompanies.slice(startIndex, endIndex);
    const totalPages = Math.ceil(filteredCompanies.length / pageSize);
    const nextPageIndex = pageParam + 1 < totalPages ? pageParam + 1 : undefined;

    resolve({
      nextPageIndex,
      data: pagedCompanies,
    });
  });

  return pagedCompanies;
}

export function useCompanies(pageSize: number, filters: typeof DEFAULT_FILTERS) {
  return useInfiniteQuery(["companyData"], (params) => getCompanies(pageSize, filters, params), {
    getNextPageParam: (lastPage) => lastPage.nextPageIndex,
    keepPreviousData: true,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
}
