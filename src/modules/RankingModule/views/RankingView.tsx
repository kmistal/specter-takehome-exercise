import { FC } from "react";
import { useCompanies } from "src/api/companies";
import { View } from "src/components";
import { Company } from "src/types";
import { RankingActions, RankingList } from "../components";

export const RankingView: FC = () => {
  const { isLoading, data } = useCompanies();

  return (
    <View title="Ranking" actions={<RankingActions />}>
      {!isLoading ? <RankingList companies={data as Company[]} /> : <p>Loading</p>}
    </View>
  );
};
