import { FC, Fragment, ReactNode } from "react";

import { Paper } from "@mui/material";

import { Header } from "./Header";

interface Props {
  title: string;
  actions?: ReactNode;
  children?: JSX.Element;
}

export const View: FC<Props> = ({ title, actions, children }) => {
  return (
    <Fragment>
      <Header title={title} />
      {actions}
      <Paper elevation={2} sx={{ paddingY: 1, paddingX: 2 }}>
        {children}
      </Paper>
    </Fragment>
  );
};
