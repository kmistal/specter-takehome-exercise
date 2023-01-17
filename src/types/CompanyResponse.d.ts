import { Company } from "./";

export interface CompaniesResponse {
  data: Company[];
  nextPageIndex: number | undefined;
}

export interface CompanyResponse {
  company: Company;
}
