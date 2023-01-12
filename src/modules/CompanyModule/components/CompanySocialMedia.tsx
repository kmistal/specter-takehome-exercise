import { FC } from "react";
import { Company } from "src/types";

import { Apple, Instagram, LinkedIn, Shop, Twitter } from "@mui/icons-material";
import { Link, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

interface Props {
  company: Company;
}

export const CompanySocialMedia: FC<Props> = ({ company }) => {
  return (
    <Grid container display="flex" justifyContent="flex-start" alignItems="baseline">
      <Typography variant="body2" style={{ fontWeight: 800 }}>
        Socials:
      </Typography>
      {company["iTunes - URL"] && (
        <Link href={company["iTunes - URL"]} target="_blank">
          <Apple fontSize="small" />
        </Link>
      )}
      {company["Twitter - URL"] && (
        <Link href={company["Twitter - URL"]} target="_blank">
          <Twitter fontSize="small" />
        </Link>
      )}
      {company["LinkedIn - URL"] && (
        <Link href={company["LinkedIn - URL"]} target="_blank">
          <LinkedIn fontSize="small" />
        </Link>
      )}
      {company["Instagram - URL"] && (
        <Link href={company["Instagram - URL"]} target="_blank">
          <Instagram fontSize="small" />
        </Link>
      )}
      {company["Google Play - URL"] && (
        <Link href={company["iTunes - URL"]} target="_blank">
          <Shop fontSize="small" />
        </Link>
      )}
    </Grid>
  );
};
