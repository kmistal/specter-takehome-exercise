import { Paper } from "@mui/material";
import { FC, ReactNode } from "react";

import { Header } from "./Header";

interface Props {
  title: ReactNode;
  actions?: ReactNode;
  children?: ReactNode;
}

export const View: FC<Props> = ({ title, actions, children }) => {
  return (
    <div>
      <Header title={title} />
      {actions}
      <Paper elevation={0} sx={{ paddingY: 1, background: "transparent" }}>
        {children}
      </Paper>
    </div>
  );
};
