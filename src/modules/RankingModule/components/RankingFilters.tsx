import { FormikProps } from "formik";
import { FC, Fragment } from "react";

import { useUniqueHQRegions, useUniqueIndustries } from "src/api/filters";

import { DEFAULT_FILTERS } from "../constants/Filters";

import { RankingFilterMinMax, RankingFilterSelect } from "./Filters";

interface Props {
  formik: FormikProps<typeof DEFAULT_FILTERS>;
}

export const RankingFilters: FC<Props> = ({ formik }) => {
  const industries = useUniqueIndustries();
  const hqRegions = useUniqueHQRegions();

  return (
    <Fragment>
      <RankingFilterMinMax
        formik={formik}
        formikKeys={{ min: "minRank", max: "maxRank" }}
        label="Rank"
        values={formik.values}
      />
      <RankingFilterSelect
        formik={formik}
        formikKey="industry"
        isLoading={industries.isLoading}
        label="Industry"
        options={industries.data}
      />
      <RankingFilterMinMax
        formik={formik}
        formikKeys={{ min: "minEmployee", max: "maxEmployee" }}
        label="Employee count"
        values={formik.values}
      />
      <RankingFilterSelect
        formik={formik}
        formikKey="hqRegion"
        isLoading={hqRegions.isLoading}
        label="HQ regions"
        options={hqRegions.data}
      />
    </Fragment>
  );
};
