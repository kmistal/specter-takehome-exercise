import { Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { FC, Fragment, lazy, useRef, useState } from "react";
import { InfiniteData } from "react-query";
import { useParams } from "react-router";

import { useCompanies } from "src/api/companies";
import { LoadingSuspense, View } from "src/components";
import { Loadable } from "src/themes/components/Loadable";
import { CompaniesResponse } from "src/types/CompanyResponse";

import { NoResults, RankingActions, RankingList } from "../components";
import { DEFAULT_FILTERS } from "../constants/Filters";
import { RANKING_PAGE_SIZE } from "../constants/Ranking";
import { FiltersContext } from "../context/FiltersContext";

const CompanyDetailsView = Loadable(
  lazy(() => import("src/modules/CompanyModule/views/CompanyDetailsView"))
);

const RankingView: FC = () => {
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const { isLoading, isFetchingNextPage, hasNextPage, fetchNextPage, data } = useCompanies(
    RANKING_PAGE_SIZE,
    filters
  );
  const { domain } = useParams();
  const CompanyDetailsContainerRef = useRef(null);

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
              <Grid xs={domain ? 7 : 0} ref={CompanyDetailsContainerRef}>
                <CompanyDetailsView companyDomain={domain} container={CompanyDetailsContainerRef} />
              </Grid>
            </Fragment>
          </Grid>
        </LoadingSuspense>
      </View>
    </FiltersContext.Provider>
  );
};

export default RankingView;
