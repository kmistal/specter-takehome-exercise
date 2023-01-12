import { Route, Routes } from "react-router-dom";

import { Typography } from "@mui/material";

import App from "./App";
import { RoutePaths } from "./constants/RoutePaths";
import { RankingView } from "./modules/RankingModule/views/RankingView";

export default function Router() {
  return (
    <Routes>
      <Route path={RoutePaths.ROOT} element={<App />}>
        <Route index element={<RankingView />} />
        <Route path={`${RoutePaths.COMPANY_DETAILS}/:domain`} element={<RankingView />} />
        <Route path="*" element={<Typography variant="h1" textAlign="center">404</Typography>} />
      </Route>
    </Routes>
  );
}
