import { FC } from "react";
import { useLocation } from "react-router-dom";
import { useCompanies } from "src/api/companies";
import { LoadingSuspense, View } from "src/components";
import { CompanyDetailsView } from "src/modules/CompanyModule/views/CompanyDetailsView";
import { Company } from "src/types";
import { CompanyResponse } from "src/types/CompanyResponse";

import { Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { InfiniteData } from "@tanstack/react-query";

import { RankingActions, RankingList } from "../components";
import { RANKING_PAGE_SIZE } from "../constants/Ranking";

export const RankingView: FC = () => {
  const { isLoading, isFetchingNextPage, hasNextPage, fetchNextPage, data } =
    useCompanies(RANKING_PAGE_SIZE);
  const company = useLocation().state as Company;
  return (
    <View title="Ranking" actions={<RankingActions />}>
      <LoadingSuspense {...{ isLoading }}>
        <Grid container spacing={3}>
          <Grid xs>
            <RankingList companyInfiniteResponse={data as InfiniteData<CompanyResponse>} />
            {hasNextPage && (
              <LoadingSuspense isLoading={isFetchingNextPage}>
                <Grid container display="flex" justifyContent="center" alignItems="center">
                  <Button onClick={() => fetchNextPage({ cancelRefetch: true })}>Load more</Button>
                </Grid>
              </LoadingSuspense>
            )}
          </Grid>
          {company && (
            <Grid xs={7}>
              <CompanyDetailsView company={company} />
            </Grid>
          )}
        </Grid>
      </LoadingSuspense>
    </View>
  );
};
