import { FC } from "react";

import { Typography } from "@mui/material";

interface Props {
  title: string;
}

export const Header: FC<Props> = ({ title }) => (
  <Typography variant="h3" component="h1" gutterBottom>
    {title}
  </Typography>
);
