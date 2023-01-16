import * as yup from "yup";

export const DEFAULT_FILTERS = {
  minRank: "",
  maxRank: "",
  industry: "all",
};

export const VALIDATION_SCHEMA = yup.object({
  minRank: yup.number().positive("Minimal ranking must by greater than 0").notRequired(),
  maxRank: yup
    .number()
    .positive("Minimal ranking must by greater than 0")
    .when(["minRank"], (minRank, schema) => {
      return schema.min(minRank);
    })
    .notRequired(),
});
