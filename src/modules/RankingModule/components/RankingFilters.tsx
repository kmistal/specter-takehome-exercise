import { FormikProps } from "formik";
import { FC } from "react";

import { TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import { Filters } from "../types/Filters";

interface Props {
  formik: FormikProps<Filters>;
}

export const RankingFilters: FC<Props> = ({ formik }) => {
  return (
    <div>
      <Typography variant="body1" fontWeight={800} gutterBottom>
        Rank
      </Typography>
      <Grid container spacing={2}>
        <Grid xs={6}>
          <TextField
            id="minRank"
            name="minRank"
            label="Minimal"
            type="number"
            variant="outlined"
            value={formik.values.minRank}
            onChange={formik.handleChange}
            error={formik.touched.minRank && Boolean(formik.errors.minRank)}
            helperText={formik.touched.minRank && formik.errors.minRank}
          />
        </Grid>
        <Grid xs={6}>
          <TextField
            id="maxRank"
            name="maxRank"
            label="Maximal"
            type="number"
            variant="outlined"
            value={formik.values.maxRank}
            onChange={formik.handleChange}
            error={formik.touched.maxRank && Boolean(formik.errors.maxRank)}
            helperText={formik.touched.maxRank && formik.errors.maxRank}
          />
        </Grid>
      </Grid>
    </div>
  );
};
