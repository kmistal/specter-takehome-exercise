import { Paper } from "@mui/material";
import { Container } from "@mui/system";
import { FC, ReactNode } from "react";
import { Header } from "./Header";

interface Props {
  title: string;
  actions?: ReactNode;
  children?: JSX.Element;
}

export const View: FC<Props> = ({ title, actions, children }) => {
  return (
    <Container maxWidth="xl" sx={{ paddingY: 2 }}>
      <Header title={title} />
      {actions}
      <Paper elevation={2} sx={{ paddingY: 1, paddingX: 2 }}>
        {children}
      </Paper>
    </Container>
  );
};
