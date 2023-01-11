import { FC } from "react";
import { View } from "src/components";
import { RankingActions, RankingList } from "../components";

export const RankingView: FC = () => {
  return (
    <View title="Ranking" actions={<RankingActions />}>
      <RankingList />
    </View>
  );
};
