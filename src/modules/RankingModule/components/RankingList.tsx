import { FC, Fragment } from "react";
import { HeadlessTable } from "src/components";
import { CompanyResponse } from "src/types/CompanyResponse";

import { TableCell, TableRow } from "@mui/material";
import { InfiniteData } from "@tanstack/react-query";

import { RankingEntry } from "./RankingEntry";

interface Props {
  companyInfiniteResponse: InfiniteData<CompanyResponse>;
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
