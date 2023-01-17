import { Card as MuiCard, CardContent, Typography } from "@mui/material";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  title?: string;
  titlePrimary?: boolean;
  textCentered?: boolean;
  sx?: object;
}

const Title: FC<{ textCentered: boolean; titlePrimary: boolean; title?: string }> = ({
  textCentered,
  titlePrimary,
  title,
}) => {
  if (!title) {
    return null;
  }

  if (!titlePrimary) {
    return (
      <Typography
        textAlign={textCentered ? "center" : "left"}
        fontSize="14px"
        color="text.secondary"
        gutterBottom
      >
        {title}
      </Typography>
    );
  }

  return (
    <Typography
      textAlign={textCentered ? "center" : "left"}
      variant="h5"
      component="h2"
      gutterBottom
    >
      {title}
    </Typography>
  );
};

export const Card: FC<Props> = ({
  children,
  title,
  titlePrimary = false,
  textCentered = true,
  sx,
}) => {
  return (
    <MuiCard sx={sx}>
      <CardContent>
        <Title title={title} titlePrimary={titlePrimary} textCentered={textCentered} />
        <Typography textAlign={textCentered ? "center" : "left"} variant="h5" component="div">
          {children}
        </Typography>
      </CardContent>
    </MuiCard>
  );
};
