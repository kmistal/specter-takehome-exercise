import { FC, Fragment } from "react";

import MuiTable from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";

interface Props {
  children: JSX.Element;
}

export const HeadlessTable: FC<Props> = ({ children }) => {
  return (
    <Fragment>
      <TableContainer>
        <MuiTable sx={{ minWidth: 650 }} aria-label="">
          <TableBody>{children}</TableBody>
        </MuiTable>
      </TableContainer>
    </Fragment>
  );
};
