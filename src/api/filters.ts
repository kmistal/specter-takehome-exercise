import { useQuery } from "react-query";

import { Company } from "src/types";

import data from "../api/companies.json";

import { NO_HQ_REGION_KEY, NO_INDUSTRY_KEY } from "./constants";

async function getUniqueEntriesByParam(
  param: keyof Company,
  emptyKeyPlaceholder: string
): Promise<string[]> {
  const uniqueEntries: string[] = await new Promise((resolve) => {
    const companies = data as Company[];
    const entries = companies.map((company) => {
      if (company[param].length === 0) return emptyKeyPlaceholder;
      return company[param];
    });
    resolve([...new Set(entries)]);
  });
  return uniqueEntries;
}

export function useUniqueIndustries() {
  return useQuery(
    ["uniqueIndustries"],
    () => getUniqueEntriesByParam("Industry", NO_INDUSTRY_KEY),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );
}

export function useUniqueHQRegions() {
  return useQuery(
    ["uniqueHQRegions"],
    () => getUniqueEntriesByParam("HQ Region", NO_HQ_REGION_KEY),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );
}
