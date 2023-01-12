import { FC, Fragment, ReactNode } from "react";

import { Paper } from "@mui/material";

import { Header } from "./Header";

interface Props {
  title: string;
  actions?: ReactNode;
  children?: ReactNode;
}

export const View: FC<Props> = ({ title, actions, children }) => {
  return (
    <Fragment>
      <Header title={title} />
      {actions}
      <Paper elevation={0} sx={{ paddingY: 1, paddingX: 2, background: 'transparent'}}>
        {children}
      </Paper>
    </Fragment>
  );
};
