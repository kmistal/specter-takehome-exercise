import { Container } from "@mui/system";
import { FC } from "react";

import { Card } from "src/components";
import { Company } from "src/types";

interface Props {
  company: Company;
}

export const CompanyQuickStats: FC<Props> = ({ company }) => {
  return (
    <div style={{ overflowX: "auto" }}>
      <Container sx={{ display: "flex", paddingY: 2, gap: 2, paddingX: "0 !important" }}>
        <Card sx={{ minWidth: 200 }} title="Rank">
          {company["Rank"]}
        </Card>

        {company["Employee Count"] && (
          <Card sx={{ minWidth: 200 }} title="Employee Count">
            {company["Employee Count"]}
          </Card>
        )}
        {company["Web Visits"] && (
          <Card sx={{ minWidth: 200 }} title="Web Visits">
            {company["Web Visits"]}
          </Card>
        )}
        {company["Alexa Rank"] && (
          <Card sx={{ minWidth: 200 }} title="Alexa Rank">
            {company["Alexa Rank"]}
          </Card>
        )}
        {company["LinkedIn - Followers"] && (
          <Card sx={{ minWidth: 200 }} title="LinkedIn - Followers">
            {company["LinkedIn - Followers"]}
          </Card>
        )}
        {company["Twitter - Followers"] && (
          <Card sx={{ minWidth: 200 }} title="Twitter - Followers">
            {company["Twitter - Followers"]}
          </Card>
        )}
        {company["Instagram - Followers"] && (
          <Card sx={{ minWidth: 200 }} title="Instagram - Followers">
            {company["Instagram - Followers"]}
          </Card>
        )}
        {company["iTunes - Rating"] && (
          <Card sx={{ minWidth: 200 }} title="iTunes - Rating">
            {company["iTunes - Rating"]}
          </Card>
        )}
        {company["Google Play - Rating"] && (
          <Card sx={{ minWidth: 200 }} title="Google Play - Rating">
            {company["Google Play - Rating"]}
          </Card>
        )}
      </Container>
    </div>
  );
};
