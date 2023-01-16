import { Company } from "src/types";

import { useQuery } from "@tanstack/react-query";

import data from "../api/companies.json";

async function getUniqueIndustries(): Promise<string[]> {
  const uniqueIndustries: string[] = await new Promise((resolve) => {
    const companies = data as Company[];
    const industries = companies.map(({Industry}) => {
      if (Industry.length === 0) return "No industry";
      return Industry;
    });
    resolve([...new Set(industries)]);
  });
  return uniqueIndustries;
}

export function useUniqueIndustries() {
  return useQuery(["uniqueIndustries"], getUniqueIndustries, {
    keepPreviousData: true,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
}
