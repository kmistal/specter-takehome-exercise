import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from "react-query";
import { DEFAULT_FILTERS } from "src/modules/RankingModule/constants/Filters";
import { Company } from "src/types";
import { CompaniesResponse, CompanyResponse } from "src/types/CompanyResponse";

import data from "../api/companies.json";
import { NO_HQ_REGION_KEY, NO_INDUSTRY_KEY, QUERY_KEYS } from "./constants";

function getCompaniesFilteredByMinMax(
  companies: Company[],
  min: number,
  max: number,
  param: keyof Company
) {
  if (!(max || min)) {
    return companies;
  }

  return companies.filter((company) => company[param] >= min && company[param] <= max);
}

function getCompaniesFilteredByString(
  companies: Company[],
  filterQuery: string,
  param: keyof Company,
  emptyParamKey: string
) {
  if (filterQuery === "all") {
    return companies;
  }

  return companies.filter((company) => {
    if (filterQuery === emptyParamKey) {
      return company[param].length === 0;
    }
    return company[param] === filterQuery;
  });
}

function getFilteredCompanies(companies: Company[], filters: typeof DEFAULT_FILTERS): Company[] {
  let filteredCompanies = companies;
  const { maxRank, minRank, industry, maxEmployee, minEmployee, hqRegion } = filters;

  filteredCompanies = getCompaniesFilteredByMinMax(
    filteredCompanies,
    Number(minRank || 0),
    Number(maxRank || Number.POSITIVE_INFINITY),
    "Rank"
  );
  filteredCompanies = getCompaniesFilteredByString(
    filteredCompanies,
    industry,
    "Industry",
    NO_INDUSTRY_KEY
  );
  filteredCompanies = getCompaniesFilteredByMinMax(
    filteredCompanies,
    Number(minEmployee || 0),
    Number(maxEmployee || Number.POSITIVE_INFINITY),
    "Employee Count"
  );
  filteredCompanies = getCompaniesFilteredByString(
    filteredCompanies,
    hqRegion,
    "HQ Region",
    NO_HQ_REGION_KEY
  );

  return filteredCompanies;
}

async function getCompanies(
  pageSize: number,
  filters: typeof DEFAULT_FILTERS,
  { pageParam = 0 }
): Promise<CompaniesResponse> {
  return new Promise<CompaniesResponse>((resolve) => {
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
}

async function getCompany(domain: string): Promise<CompanyResponse> {
  return new Promise<CompanyResponse>((resolve, reject) => {
    const company = (data as Company[]).find((company) => company.Domain === domain);
    if (!company) {
      reject("Company not found");
    }
    resolve({
      company: company as Company,
    });
  });
}

export async function setIsCompanyFavourite(domain: string, isFavourite: boolean): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    const company = (data as Company[]).find((company) => company.Domain === domain);
    if (!company) {
      reject();
    }
    (company as Company)["Is Favourite"] = isFavourite;
    resolve();
  });
}

export function useCompanies(pageSize: number, filters: typeof DEFAULT_FILTERS) {
  return useInfiniteQuery(
    [QUERY_KEYS.COMPANIES_DATA, pageSize, filters],
    (params) => getCompanies(pageSize, filters, params),
    {
      getNextPageParam: (lastPage) => lastPage.nextPageIndex,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );
}

export function useCompany(domain: string) {
  return useQuery([QUERY_KEYS.COMPANY_DATA, domain], () => getCompany(domain), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
}

export function useMarkCompanyFavourite(domain: string) {
  const queryClient = useQueryClient();
  return useMutation(["markCompanyFavourite"], () => setIsCompanyFavourite(domain, true), {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.COMPANIES_DATA] });
    },
  });
}

export function useMarkCompanyNotFavourite(domain: string) {
  const queryClient = useQueryClient();
  return useMutation(["markCompanyNotFavourite"], () => setIsCompanyFavourite(domain, false), {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.COMPANIES_DATA] });
    },
  });
}
