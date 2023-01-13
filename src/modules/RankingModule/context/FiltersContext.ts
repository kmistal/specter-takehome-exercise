import { createContext, Dispatch, SetStateAction } from "react";

import { Filters } from "../types/Filters";

export const FiltersContext = createContext<Dispatch<SetStateAction<Filters>>>(null as unknown as Dispatch<SetStateAction<Filters>>);