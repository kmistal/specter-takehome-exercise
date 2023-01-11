import { Company } from "src/types";
import { CompanyResponse } from "src/types/CompanyResponse";

import { useInfiniteQuery } from "@tanstack/react-query";

import data from "../api/companies.json";

async function getPagedCompanies(pageSize: number, { pageParam = 0 }): Promise<CompanyResponse> {
  const pagedCompanies = await new Promise<CompanyResponse>((resolve) => {
    const startIndex = pageParam * pageSize;
    const endIndex = startIndex + pageSize;
    const companies = data as Company[];
    const pagedCompanies = companies.slice(startIndex, endIndex);
    const totalPages = Math.ceil(companies.length / pageSize);
    const nextPageIndex = pageParam + 1 < totalPages ? pageParam + 1 : undefined;

    resolve({
      nextPageIndex,
      data: pagedCompanies,
    });
  });

  return pagedCompanies;
}

export function useCompanies(pageSize: number) {
  return useInfiniteQuery(["companyData"], (params) => getPagedCompanies(pageSize, params), {
    getNextPageParam: (lastPage) => lastPage.nextPageIndex,
    keepPreviousData: true,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 20,
    cacheTime: 1000 * 60 * 10,
  });
}
