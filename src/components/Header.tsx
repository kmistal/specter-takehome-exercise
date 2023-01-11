import { Typography } from "@mui/material";
import { FC } from "react";

interface Props {
  title: string;
}

export const Header: FC<Props> = ({ title }) => (
  <Typography variant="h2" component="h1" gutterBottom>
    {title}
  </Typography>
);
