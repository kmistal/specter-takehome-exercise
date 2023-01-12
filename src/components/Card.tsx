import { FC, ReactNode } from "react";

import { Card as MuiCard, CardContent, Typography } from "@mui/material";

interface Props {
  title: string;
  children: ReactNode;
}

export const Card: FC<Props> = ({title, children}) => {
  return (
    <MuiCard>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Typography textAlign="center" variant="h5" component="div">
            {children}
        </Typography>
      </CardContent>
    </MuiCard>
  );
};
