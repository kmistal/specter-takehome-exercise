import { Paper } from "@mui/material";
import { Container } from "@mui/system";
import { FC } from "react";
import { Header } from "./Header";

interface Props {
  title: string;
  children?: JSX.Element;
}

export const View: FC<Props> = ({ title, children }) => {
  return (
    <Container maxWidth="xl" sx={{ paddingY: 2 }}>
      <Header title={title} />
      <Paper elevation={2} sx={{ paddingY: 1, paddingX: 2 }}>
        {children}
      </Paper>
    </Container>
  );
};
