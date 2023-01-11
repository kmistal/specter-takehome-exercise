import MuiTable from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { FC } from "react";

interface Props {
  children: JSX.Element;
}

export const HeadlessTable: FC<Props> = ({ children }) => {
  return (
    <TableContainer component={Paper}>
      <MuiTable sx={{ minWidth: 650 }} aria-label="">
        <TableBody>{children}</TableBody>
      </MuiTable>
    </TableContainer>
  );
};
