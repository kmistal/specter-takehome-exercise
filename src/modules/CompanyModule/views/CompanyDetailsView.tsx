import { Button, Typography, useTheme } from "@mui/material";
import { FC, useState } from "react";
import { useNavigate } from "react-router";

import { useCompany } from "src/api/companies";
import { View } from "src/components";
import { useWindowHeight } from "src/hooks/WindowHook";
import { FavouriteMark } from "src/modules/RankingModule/components/FavouriteMark";
import { Company } from "src/types";

import { CompanyDescription } from "../components/CompanyDescription";
import { CompanyMetaData } from "../components/CompanyMetaData";
import { CompanyQuickStats } from "../components/CompanyQuickStats";
import { CompanyStatsChart } from "../components/CompanyStatsChart";

interface Props {
  companyDomain: string;
  container: React.MutableRefObject<HTMLDivElement>;
}

const CompanyHeader: FC<{ company: Company }> = ({ company }) => {
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", alignItems: "end" }}>
      <Typography variant="h3" component="h1">
        {company["Company Name"]}
      </Typography>
      <FavouriteMark domain={company.Domain} isFavourite={Boolean(company["Is Favourite"])} />
      <Button
        onClick={() => {
          navigate("/");
        }}
      >
        Close
      </Button>
    </div>
  );
};

const CompanyDetailsView: FC<Props> = ({ companyDomain, container }) => {
  const { isLoading, data } = useCompany(companyDomain);
  const [isMetaDataVisible, setIsMetaDataVisible] = useState(false);
  const height = useWindowHeight();
  const theme = useTheme();

  if (isLoading || !data?.company) {
    return null;
  }

  const { company } = data;

  return (
    <div
      style={{
        top: theme.spacing(2),
        position: "fixed",
        width: container.current.offsetWidth,
        overflowY: "auto",
        height,
        paddingBottom: theme.spacing(6),
      }}
    >
      <View title={<CompanyHeader company={company} />}>
        <CompanyDescription
          companyName={company["Company Name"]}
          description={company.Description}
          isMetaDataVisible={isMetaDataVisible}
          setIsMetaDataVisible={setIsMetaDataVisible}
        />
        {isMetaDataVisible && <CompanyMetaData company={company} />}
        <CompanyQuickStats company={company} />
        <CompanyStatsChart company={company} />
      </View>
    </div>
  );
};

export default CompanyDetailsView;
