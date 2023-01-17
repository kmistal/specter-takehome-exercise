import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { TextInfoEntry } from "src/components";
import { RoutePaths } from "src/constants/RoutePaths";
import { Company } from "src/types";

import {
    ApartmentOutlined, HailOutlined, HandshakeOutlined, LocationOnOutlined
} from "@mui/icons-material";
import { Divider, Paper, styled, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const PaperWithHover = styled(Paper)`
  & {
    cursor: pointer;
  }
  &:hover {
    box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%),
      0px 1px 8px 0px rgb(0 0 0 / 12%);
  }
`;

interface Props {
  company: Company;
}

export const RankingEntry: FC<Props> = ({ company }) => {
  const navigate = useNavigate();

  return (
    <PaperWithHover
      onClick={() => {
        navigate(`/${RoutePaths.COMPANY_DETAILS}/${company.Domain}/`);
      }}
    >
      <Grid container spacing={2}>
        <Grid xs={1} display="flex" justifyContent="center" alignItems="center">
          <Typography variant="body1" fontWeight={800}>
            {company.Rank}
          </Typography>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid xs={10}>
          <Typography variant="body1" paddingRight={1}>
            {company["Company Name"]}
          </Typography>
          <TextInfoEntry Icon={LocationOnOutlined}>{company["HQ Region"]}</TextInfoEntry>
          <TextInfoEntry Icon={ApartmentOutlined}>{company["Industry"]}</TextInfoEntry>
          <TextInfoEntry Icon={HailOutlined}>{company["Employee Count"]}</TextInfoEntry>
          <TextInfoEntry Icon={HandshakeOutlined}>{company["Founders"]}</TextInfoEntry>
        </Grid>
      </Grid>
    </PaperWithHover>
  );
};
