import { TableCell, TableRow } from "@mui/material";
import { FC, Fragment } from "react";
import { HeadlessTable } from "src/components";
import { Company } from "src/types";
import { RankingEntry } from "./RankingEntry";

interface Props {
  companies: Company[];
}

export const RankingList: FC<Props> = ({ companies }) => {
  const rows = companies.map((company) => (
    <TableRow key={company.Domain}>
      <TableCell component="th" scope="row" sx={{ borderBottom: "none" }}>
        <RankingEntry company={company} />
      </TableCell>
    </TableRow>
  ));

  return (
    <HeadlessTable>
      <Fragment>{rows}</Fragment>
    </HeadlessTable>
  );
};
