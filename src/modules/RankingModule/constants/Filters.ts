import * as yup from "yup";

import { Filters } from "../types/Filters";

export const DEFAULT_FILTERS: Filters = {
    minRank: '',
    maxRank: ''
}

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