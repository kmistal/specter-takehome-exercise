import { FC, useState } from "react";
import { useCompanies } from "src/api/companies";
import { LoadingSuspense, View } from "src/components";
import { Company } from "src/types";

import { CompanyDescription } from "../components/CompanyDescription";
import { CompanyMetaData } from "../components/CompanyMetaData";
import { CompanyQuickStats } from "../components/CompanyQuickStats";
import { CompanyStatsChart } from "../components/CompanyStatsChart";

interface Props {
  // TODO: add company when routing is available
}

export const CompanyDetailsView: FC<Props> = () => {
  const { isLoading, data } = useCompanies(1);
  const company = data?.pages[0].data[0] as Company;
  const [isMetaDataVisible, setIsMetaDataVisible] = useState(false);

  if (isLoading) return null;
  return (
    <LoadingSuspense isLoading={isLoading && !Boolean(company)}>
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
    </LoadingSuspense>
  );
};
