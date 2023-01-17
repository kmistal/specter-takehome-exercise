import StarBorderOutlined from "@mui/icons-material/StarBorderOutlined";
import StarOutlined from "@mui/icons-material/StarOutlined";
import { FC } from "react";

import { useMarkCompanyFavourite, useMarkCompanyNotFavourite } from "src/api/companies";

interface Props {
  isFavourite: boolean;
  domain: string;
}

export const FavouriteMark: FC<Props> = ({ domain, isFavourite }) => {
  const markAsFavouriteHandler = useMarkCompanyFavourite(domain);
  const markAsNotFavouriteHandler = useMarkCompanyNotFavourite(domain);

  if (!isFavourite) {
    return (
      <StarBorderOutlined
        fontSize="large"
        sx={{ cursor: "pointer" }}
        onClick={() => {
          markAsFavouriteHandler.mutate();
        }}
      />
    );
  }

  return (
    <StarOutlined
      fontSize="large"
      sx={{ cursor: "pointer" }}
      onClick={() => {
        markAsNotFavouriteHandler.mutate();
      }}
    />
  );
};
