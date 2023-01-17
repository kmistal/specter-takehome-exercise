import { Button, Typography } from "@mui/material";
import { FC } from "react";

import { Card } from "src/components";

interface Props {
  companyName: string;
  description: string;
  isMetaDataVisible: boolean;
  setIsMetaDataVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CompanyDescription: FC<Props> = ({
  companyName,
  description,
  isMetaDataVisible,
  setIsMetaDataVisible,
}) => {
  return (
    <Card title={`About ${companyName}`} titlePrimary={true} textCentered={false}>
      <Typography variant="body1">{description}</Typography>
      <Button onClick={() => setIsMetaDataVisible(!isMetaDataVisible)} sx={{ margin: "-8px" }}>
        {!isMetaDataVisible ? "Show more info" : "Hide more info"}
      </Button>
    </Card>
  );
};
