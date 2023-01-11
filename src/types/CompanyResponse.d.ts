import { Company } from "./";

export interface CompanyResponse {
  data: Company[];
  nextPageIndex: number | undefined;
}
