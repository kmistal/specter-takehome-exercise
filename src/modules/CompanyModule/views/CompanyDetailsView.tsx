import { Button, Typography } from "@mui/material";
import { FC, useState } from "react";
import { useNavigate } from "react-router";

import { useCompany } from "src/api/companies";
import { View } from "src/components";
import { FavouriteMark } from "src/modules/RankingModule/components/FavouriteMark";
import { Company } from "src/types";

import { CompanyDescription } from "../components/CompanyDescription";
import { CompanyMetaData } from "../components/CompanyMetaData";
import { CompanyQuickStats } from "../components/CompanyQuickStats";
import { CompanyStatsChart } from "../components/CompanyStatsChart";

interface Props {
  companyDomain: string;
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

const CompanyDetailsView: FC<Props> = ({ companyDomain }) => {
  const { isLoading, data } = useCompany(companyDomain);
  const [isMetaDataVisible, setIsMetaDataVisible] = useState(false);

  if (isLoading || !data?.company) {
    return null;
  }

  const { company } = data;

  return (
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
  );
};

export default CompanyDetailsView;
