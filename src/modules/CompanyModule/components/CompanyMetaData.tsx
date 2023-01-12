import { FC } from "react";
import { Company } from "src/types";

import { Link, Paper, Typography } from "@mui/material";

import { CompanySocialMedia } from "./CompanySocialMedia";

interface Props {
  company: Company;
}

export const CompanyMetaData: FC<Props> = ({ company }) => {
  return (
    <Paper variant="outlined" sx={{ padding: 2, marginY: 2}}>
      {company["HQ Region"] && (
        <Typography variant="body2">
          <span style={{ fontWeight: 800 }}>HQ Region: </span>
          {company["HQ Region"]}
        </Typography>
      )}
      {company["Industry"] && (
        <Typography variant="body2">
          <span style={{ fontWeight: 800 }}>Industry: </span>
          {company["Industry"]}
        </Typography>
      )}
      {company["Employee Count"] && (
        <Typography variant="body2">
          <span style={{ fontWeight: 800 }}>Employee Count: </span>
          {company["Employee Count"]}
        </Typography>
      )}
      {company["Founders"] && (
        <Typography variant="body2">
          <span style={{ fontWeight: 800 }}>Founders: </span>
          {company["Founders"]}
        </Typography>
      )}
      {company["Founded Date"] && (
        <Typography variant="body2">
          <span style={{ fontWeight: 800 }}>Founded Date: </span>
          {company["Founded Date"]}
        </Typography>
      )}
      {company["Acquired By"] && (
        <Typography variant="body2">
          <span style={{ fontWeight: 800 }}>Acquired By: </span>
          {company["Acquired By"]}
        </Typography>
      )}
      {company["Acquisition Date"] && (
        <Typography variant="body2">
          <span style={{ fontWeight: 800 }}>Acquisition Date: </span>
          {company["Acquisition Date"]}
        </Typography>
      )}
      {company["Website"] && (
        <Typography variant="body2">
          <span style={{ fontWeight: 800 }}>Website: </span>
          <Link href={company["Website"]} target="_blank">
            {company["Website"]}
          </Link>
        </Typography>
      )}
      <CompanySocialMedia company={company} />
    </Paper>
  );
};
