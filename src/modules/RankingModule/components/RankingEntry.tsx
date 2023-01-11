import { Divider, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { FC, useState } from "react";
import { Company } from "src/types";

interface Props {
  company: Company;
}

export const RankingEntry: FC<Props> = ({ company }) => {
  const [elevation, setElevation] = useState(1);
  return (
    <Paper
      elevation={elevation}
      onMouseOver={() => setElevation(3)}
      onMouseOut={() => setElevation(1)}
      sx={{cursor: 'pointer'}}
    >
      <Grid container spacing={2}>
        <Grid xs={1} display="flex" justifyContent="center" alignItems="center">
          <Typography variant="body1" fontWeight={800}>
            {company.Rank}
          </Typography>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid xs={10}>
          <Typography variant="body1">{company["Company Name"]}</Typography>
          <Typography variant="body2">{company["HQ Region"]}</Typography>
          <Typography variant="body2">{company["Industry"]}</Typography>
          <Typography variant="body2">{company["Employee Count"]}</Typography>
          <Typography variant="body2">{company["Founders"]}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};
