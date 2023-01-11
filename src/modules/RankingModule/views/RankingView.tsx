import { FC } from "react";
import { View } from "src/components";
import { RankingActions } from "../components";

export const RankingView: FC = () => {
  return (
    <View title="Ranking" actions={<RankingActions />}>
        <p>placeholder</p>
    </View>
  );
};
