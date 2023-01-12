import { FC } from "react";

import { SvgIconTypeMap, Typography } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

interface Props {
  detail: string | number | undefined;
  Icon: OverridableComponent<SvgIconTypeMap<object, "svg">> & {
    muiName: string;
  };
}

export const RankingEntryDetail: FC<Props> = ({ detail, Icon }) => {
  if (!detail) {
    return null;
  }

  return (
    <Grid container display="flex" alignItems="center" paddingBottom={1}>
      <Icon fontSize="small"/>
      <Typography variant="body2" paddingLeft={1}>{detail}</Typography>
    </Grid>
  );
};
