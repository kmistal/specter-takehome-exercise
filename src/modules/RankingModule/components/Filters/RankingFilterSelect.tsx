import { FormikProps } from "formik";
import { FC } from "react";
import { LoadingSuspense } from "src/components";

import { MenuItem, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import { DEFAULT_FILTERS } from "../../constants/Filters";

interface Props {
  label: string;
  isLoading: boolean;
  options: string[] | undefined;
  formikKey: keyof typeof DEFAULT_FILTERS;
  formik: FormikProps<typeof DEFAULT_FILTERS>;
}

export const RankingFilterSelect: FC<Props> = ({
  label,
  isLoading,
  options,
  formikKey,
  formik,
}) => {
  return (
    <div>
      <Typography variant="body1" fontWeight={800} paddingY={2}>
        {label}
      </Typography>
      <LoadingSuspense isLoading={isLoading}>
        <Grid container>
          <Grid xs={12}>
            <TextField
              id={formikKey}
              name={formikKey}
              select
              variant="outlined"
              defaultValue={DEFAULT_FILTERS[formikKey]}
              fullWidth={true}
              value={formik.values[formikKey]}
              onChange={formik.handleChange}
              error={formik.touched[formikKey] && Boolean(formik.errors[formikKey])}
              helperText={formik.touched[formikKey] && formik.errors[formikKey]}
            >
              <MenuItem value={DEFAULT_FILTERS[formikKey]}>Include all</MenuItem>
              {options &&
                options.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
            </TextField>
          </Grid>
        </Grid>
      </LoadingSuspense>
    </div>
  );
};
