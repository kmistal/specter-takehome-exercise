import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useCompanies } from "src/api/companies";
import { LoadingSuspense, View } from "src/components";
import { CompanyDetailsView } from "src/modules/CompanyModule/views/CompanyDetailsView";
import { Company } from "src/types";
import { CompanyResponse } from "src/types/CompanyResponse";

import { Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { InfiniteData } from "@tanstack/react-query";

import { NoResults, RankingActions, RankingList } from "../components";
import { DEFAULT_FILTERS } from "../constants/Filters";
import { RANKING_PAGE_SIZE } from "../constants/Ranking";
import { FiltersContext } from "../context/FiltersContext";

export const RankingView: FC = () => {
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const { isLoading, isFetchingNextPage, hasNextPage, fetchNextPage, refetch, data } = useCompanies(
    RANKING_PAGE_SIZE,
    filters
  );
  const company = useLocation().state as Company;

  useEffect(() => {
    refetch();
  }, [filters, refetch]);

  return (
    <FiltersContext.Provider value={setFilters}>
      <View title="Ranking" actions={<RankingActions />}>
        <LoadingSuspense {...{ isLoading }}>
          <Grid container spacing={3}>
            <Grid xs>
              <RankingList companyInfiniteResponse={data as InfiniteData<CompanyResponse>} />
              {Boolean(data?.pages[0].data.length) || <NoResults />}
              {hasNextPage && (
                <LoadingSuspense isLoading={isFetchingNextPage}>
                  <Grid container display="flex" justifyContent="center" alignItems="center">
                    <Button onClick={() => fetchNextPage({ cancelRefetch: true })}>
                      Load more
                    </Button>
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
    </FiltersContext.Provider>
  );
};
