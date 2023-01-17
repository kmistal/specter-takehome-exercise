import { TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { FormikProps } from "formik";
import { FC } from "react";

import { DEFAULT_FILTERS } from "../../constants/Filters";

interface Props {
  label: string;
  values: FormikProps<typeof DEFAULT_FILTERS>["values"];
  formikKeys: {
    min: keyof typeof DEFAULT_FILTERS;
    max: keyof typeof DEFAULT_FILTERS;
  };
  formik: FormikProps<typeof DEFAULT_FILTERS>;
}

export const RankingFilterMinMax: FC<Props> = ({ label, values, formikKeys, formik }) => {
  return (
    <div>
      <Typography variant="body1" fontWeight={800} paddingY={2}>
        {label}
      </Typography>
      <Grid container spacing={2}>
        <Grid xs={6}>
          <TextField
            id={formikKeys.min}
            name={formikKeys.min}
            label="Minimal"
            type="number"
            variant="outlined"
            value={values[formikKeys.min]}
            onChange={formik.handleChange}
            error={formik.touched[formikKeys.min] && Boolean(formik.errors[formikKeys.min])}
            helperText={formik.touched[formikKeys.min] && formik.errors[formikKeys.min]}
          />
        </Grid>
        <Grid xs={6}>
          <TextField
            id={formikKeys.max}
            name={formikKeys.max}
            label="Maximal"
            type="number"
            variant="outlined"
            value={values[formikKeys.max]}
            onChange={formik.handleChange}
            error={formik.touched[formikKeys.max] && Boolean(formik.errors[formikKeys.max])}
            helperText={formik.touched[formikKeys.max] && formik.errors[formikKeys.max]}
          />
        </Grid>
      </Grid>
    </div>
  );
};
