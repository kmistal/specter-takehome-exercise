import { FC, useState } from "react";
import { View } from "src/components";
import { Company } from "src/types";

import { CompanyDescription } from "../components/CompanyDescription";
import { CompanyMetaData } from "../components/CompanyMetaData";
import { CompanyQuickStats } from "../components/CompanyQuickStats";
import { CompanyStatsChart } from "../components/CompanyStatsChart";

interface Props {
  company: Company;
}

export const CompanyDetailsView: FC<Props> = ({company}) => {
  const [isMetaDataVisible, setIsMetaDataVisible] = useState(false);

  return (
    <View title={company["Company Name"]}>
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
