import { FC } from "react";
import { Card } from "src/components";
import { Company } from "src/types";

import Grid from "@mui/material/Unstable_Grid2/Grid2";

interface Props {
  company: Company;
}

export const CompanyQuickStats: FC<Props> = ({ company }) => {
  return (
    <Grid
      container
      display="flex"
      justifyContent="center"
      alignItems="center"
      paddingY={2}
      spacing={2}
    >
      <Grid width={200}>
        <Card title="Rank">{company["Rank"]}</Card>
      </Grid>
      {company["Employee Count"] && (
        <Grid width={200}>
          <Card title="Employee Count">{company["Employee Count"]}</Card>
        </Grid>
      )}
      {company["Web Visits"] && (
        <Grid width={200}>
          <Card title="Web Visits">{company["Web Visits"]}</Card>
        </Grid>
      )}
      {company["Alexa Rank"] && (
        <Grid width={200}>
          <Card title="Alexa Rank">{company["Alexa Rank"]}</Card>
        </Grid>
      )}
      {company["LinkedIn - Followers"] && (
        <Grid width={200}>
          <Card title="LinkedIn - Followers">{company["LinkedIn - Followers"]}</Card>
        </Grid>
      )}
      {company["Twitter - Followers"] && (
        <Grid width={200}>
          <Card title="Twitter - Followers">{company["Twitter - Followers"]}</Card>
        </Grid>
      )}
      {company["Instagram - Followers"] && (
        <Grid width={200}>
          <Card title="Instagram - Followers">{company["Instagram - Followers"]}</Card>
        </Grid>
      )}
      {company["iTunes - Rating"] && (
        <Grid width={200}>
          <Card title="iTunes - Rating">{company["iTunes - Rating"]}</Card>
        </Grid>
      )}
      {company["Google Play - Rating"] && (
        <Grid width={200}>
          <Card title="Google Play - Rating">{company["Google Play - Rating"]}</Card>
        </Grid>
      )}
    </Grid>
  );
};
