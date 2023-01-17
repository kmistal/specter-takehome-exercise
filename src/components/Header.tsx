import { Typography } from "@mui/material";
import { FC, Fragment, ReactNode } from "react";

interface Props {
  title: ReactNode;
}

export const Header: FC<Props> = ({ title }) => {
  if (typeof title !== "string") {
    return <Fragment>{title}</Fragment>;
  }

  return (
    <Typography variant="h3" component="h1" gutterBottom>
      {title}
    </Typography>
  );
};
