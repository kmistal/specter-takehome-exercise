import { FC } from "react";

import { Typography } from "@mui/material";

export const NoResults: FC = () => {
  return (
    <Typography variant="h1" component="body" textAlign="center">
      No results. Change your filters.
    </Typography>
  );
};
