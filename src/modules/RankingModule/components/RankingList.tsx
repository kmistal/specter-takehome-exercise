import { TableCell, TableRow } from "@mui/material";
import { FC, Fragment } from "react";
import { InfiniteData } from "react-query";

import { HeadlessTable } from "src/components";
import { CompaniesResponse } from "src/types/CompanyResponse";

import { RankingEntry } from "./RankingEntry";

interface Props {
  companyInfiniteResponse: InfiniteData<CompaniesResponse>;
}

export const RankingList: FC<Props> = ({ companyInfiniteResponse }) => {
  const rows = companyInfiniteResponse.pages.map((companyResponse) =>
    companyResponse.data.map((company) => (
      <TableRow key={company.Domain}>
        <TableCell component="th" scope="row" sx={{ borderBottom: "none" }}>
          <RankingEntry company={company} />
        </TableCell>
      </TableRow>
    ))
  );

  return (
    <Fragment>
      <HeadlessTable>
        <Fragment>{rows}</Fragment>
      </HeadlessTable>
    </Fragment>
  );
};
