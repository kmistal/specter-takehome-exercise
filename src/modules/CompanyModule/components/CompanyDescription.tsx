import { FC } from "react";
import { Card } from "src/components";

import { Button, Typography } from "@mui/material";

interface Props {
  companyName: string;
  description: string;
  isMetaDataVisible: boolean;
  setIsMetaDataVisible: (isVisible: boolean) => void;
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
