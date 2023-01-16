import { createContext, Dispatch, SetStateAction } from "react";

import { DEFAULT_FILTERS } from "../constants/Filters";

export const FiltersContext = createContext<Dispatch<SetStateAction<typeof DEFAULT_FILTERS>>>(
  null as unknown as Dispatch<SetStateAction<typeof DEFAULT_FILTERS>>
);
