import { Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { FC, Fragment, useState } from "react";
import { InfiniteData } from "react-query";
import { useParams } from "react-router";

import { useCompanies } from "src/api/companies";
import { LoadingSuspense, View } from "src/components";
import { CompanyDetailsView } from "src/modules/CompanyModule/views/CompanyDetailsView";
import { CompaniesResponse } from "src/types/CompanyResponse";

import { NoResults, RankingActions, RankingList } from "../components";
import { DEFAULT_FILTERS } from "../constants/Filters";
import { RANKING_PAGE_SIZE } from "../constants/Ranking";
import { FiltersContext } from "../context/FiltersContext";

export const RankingView: FC = () => {
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const { isLoading, isFetchingNextPage, hasNextPage, fetchNextPage, data } = useCompanies(
    RANKING_PAGE_SIZE,
    filters
  );
  const { domain } = useParams();

  return (
    <FiltersContext.Provider value={setFilters}>
      <View title="Ranking" actions={<RankingActions />}>
        <LoadingSuspense {...{ isLoading }}>
          <Grid container spacing={3}>
            <Grid xs>
              <Fragment>
                <RankingList companyInfiniteResponse={data as InfiniteData<CompaniesResponse>} />
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
              </Fragment>
            </Grid>
            <Fragment>
              {!domain || (
                <Grid xs={7}>
                  <CompanyDetailsView companyDomain={domain} />
                </Grid>
              )}
            </Fragment>
          </Grid>
        </LoadingSuspense>
      </View>
    </FiltersContext.Provider>
  );
};
