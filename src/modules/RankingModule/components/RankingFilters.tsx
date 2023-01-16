import { FormikProps } from "formik";
import { FC } from "react";
import { useUniqueHQRegions, useUniqueIndustries } from "src/api/filters";
import { LoadingSuspense } from "src/components";

import { MenuItem, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import { DEFAULT_FILTERS } from "../constants/Filters";

interface Props {
  formik: FormikProps<typeof DEFAULT_FILTERS>;
}

export const RankingFilters: FC<Props> = ({ formik }) => {
  const industries = useUniqueIndustries();
  const hqRegions = useUniqueHQRegions();

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

      <Typography variant="body1" fontWeight={800} paddingY={2}>
        Industry
      </Typography>
      <LoadingSuspense isLoading={industries.isLoading}>
        <Grid container>
          <Grid xs={12}>
            <TextField
              id="industry"
              name="industry"
              select
              variant="outlined"
              defaultValue={DEFAULT_FILTERS.industry}
              fullWidth={true}
              value={formik.values.industry}
              onChange={formik.handleChange}
              error={formik.touched.industry && Boolean(formik.errors.industry)}
              helperText={formik.touched.industry && formik.errors.industry}
            >
              <MenuItem value={DEFAULT_FILTERS.industry}>All industries</MenuItem>
              {industries.data &&
                industries.data.map((industry) => (
                  <MenuItem key={industry} value={industry}>
                    {industry}
                  </MenuItem>
                ))}
            </TextField>
          </Grid>
        </Grid>
      </LoadingSuspense>

      <Typography variant="body1" fontWeight={800} paddingY={2}>
        Employee count
      </Typography>
      <Grid container spacing={2}>
        <Grid xs={6}>
          <TextField
            id="minEmployee"
            name="minEmployee"
            label="Minimal"
            type="number"
            variant="outlined"
            value={formik.values.minEmployee}
            onChange={formik.handleChange}
            error={formik.touched.minEmployee && Boolean(formik.errors.minEmployee)}
            helperText={formik.touched.minEmployee && formik.errors.minEmployee}
          />
        </Grid>
        <Grid xs={6}>
          <TextField
            id="maxEmployee"
            name="maxEmployee"
            label="Maximal"
            type="number"
            variant="outlined"
            value={formik.values.maxEmployee}
            onChange={formik.handleChange}
            error={formik.touched.maxEmployee && Boolean(formik.errors.maxEmployee)}
            helperText={formik.touched.maxEmployee && formik.errors.maxEmployee}
          />
        </Grid>
      </Grid>

      <Typography variant="body1" fontWeight={800} paddingY={2}>
        HQ regions
      </Typography>
      <LoadingSuspense isLoading={hqRegions.isLoading}>
        <Grid container>
          <Grid xs={12}>
            <TextField
              id="hqRegion"
              name="hqRegion"
              select
              variant="outlined"
              defaultValue={DEFAULT_FILTERS.hqRegion}
              fullWidth={true}
              value={formik.values.hqRegion}
              onChange={formik.handleChange}
              error={formik.touched.hqRegion && Boolean(formik.errors.hqRegion)}
              helperText={formik.touched.hqRegion && formik.errors.hqRegion}
            >
              <MenuItem value={DEFAULT_FILTERS.hqRegion}>All regions</MenuItem>
              {hqRegions.data &&
                hqRegions.data.map((hqRegion) => (
                  <MenuItem key={hqRegion} value={hqRegion}>
                    {hqRegion}
                  </MenuItem>
                ))}
            </TextField>
          </Grid>
        </Grid>
      </LoadingSuspense>
    </div>
  );
};
