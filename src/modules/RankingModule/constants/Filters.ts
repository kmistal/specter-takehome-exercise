import * as yup from "yup";

export const DEFAULT_FILTERS = {
  minRank: "",
  maxRank: "",
  industry: "all",
  minEmployee: "",
  maxEmployee: "",
  hqRegion: "all",
};

export const VALIDATION_SCHEMA = yup.object({
  minRank: yup.number().positive("Minimal ranking must by greater than 0").notRequired(),
  maxRank: yup
    .number()
    .positive("Minimal ranking must by greater than 0")
    .when(["minRank"], (minRank, schema) => {
      return schema.min(minRank || 0);
    })
    .notRequired(),
  minEmployee: yup.number().min(0).notRequired(),
  maxEmployee: yup
    .number()
    .positive("Maximal number of employees must by greater than 0")
    .when(["minEmployee"], (minEmployee, schema) => {
      return schema.min(minEmployee || 0);
    })
    .notRequired(),
});
