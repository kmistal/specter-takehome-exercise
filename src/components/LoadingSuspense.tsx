import { FC, Fragment } from "react";

import Grid from "@mui/material/Unstable_Grid2/Grid2";

interface Props {
  isLoading: boolean;
  children?: JSX.Element | JSX.Element[];
  fallback?: JSX.Element;
}

export const LoadingSuspense: FC<Props> = ({ isLoading, children, fallback }) => {
  if (!isLoading) {
    return <Fragment>{children}</Fragment>;
  }

  return (
    <Grid container display="flex" justifyContent="center" alignItems="center">
      {fallback || <p>Loading...</p>}
    </Grid>
  );
};
