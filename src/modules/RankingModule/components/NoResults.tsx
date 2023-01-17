import { Typography } from "@mui/material";
import { FC } from "react";

export const NoResults: FC = () => {
  return (
    <Typography variant="h1" component="body" textAlign="center">
      No results. Change your filters.
    </Typography>
  );
};
