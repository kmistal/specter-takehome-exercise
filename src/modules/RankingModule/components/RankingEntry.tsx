import { FC, useState } from "react";
import { TextInfoEntry } from "src/components";
import { Company } from "src/types";

import {
    ApartmentOutlined, HailOutlined, HandshakeOutlined, LocationOnOutlined
} from "@mui/icons-material";
import { Divider, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

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
      sx={{ cursor: "pointer" }}
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
          <TextInfoEntry Icon={LocationOnOutlined}>{company["HQ Region"]}</TextInfoEntry>
          <TextInfoEntry Icon={ApartmentOutlined}>{company["Industry"]}</TextInfoEntry>
          <TextInfoEntry Icon={HailOutlined}>{company["Employee Count"]}</TextInfoEntry>
          <TextInfoEntry Icon={HandshakeOutlined}>{company["Founders"]}</TextInfoEntry>
        </Grid>
      </Grid>
    </Paper>
  );
};
