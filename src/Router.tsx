import { Typography } from "@mui/material";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import App from "./App";
import { RoutePaths } from "./constants/RoutePaths";
import { Loadable } from "./themes/components/Loadable";

const RankingView = Loadable(lazy(() => import("./modules/RankingModule/views/RankingView")));

export default function Router() {
  return (
    <Routes>
      <Route path={RoutePaths.ROOT} element={<App />}>
        <Route index element={<RankingView />} />
        <Route path={`${RoutePaths.COMPANY_DETAILS}/:domain`} element={<RankingView />} />
        <Route
          path="*"
          element={
            <Typography variant="h1" textAlign="center">
              404
            </Typography>
          }
        />
      </Route>
    </Routes>
  );
}
