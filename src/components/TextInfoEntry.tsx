import { SvgIconTypeMap, Typography } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { FC } from "react";

interface Props {
  children: string | number;
  Icon?: OverridableComponent<SvgIconTypeMap<object, "svg">> & {
    muiName: string;
  };
}

export const TextInfoEntry: FC<Props> = ({ children, Icon }) => {
  if (!children) {
    return null;
  }

  return (
    <Grid container display="flex" alignItems="center" paddingBottom={1}>
      {Icon && <Icon fontSize="small" />}
      <Typography variant="body2" paddingLeft={1}>
        {children}
      </Typography>
    </Grid>
  );
};
