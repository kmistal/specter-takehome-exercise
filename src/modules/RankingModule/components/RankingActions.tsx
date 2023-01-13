import { FC, Fragment, useState } from "react";
import { Dialog } from "src/components";

import { Button } from "@mui/material";

import { RankingFilters } from "./RankingFilters";

export const RankingActions: FC = () => {
  const [isFiltersDialogOpen, setIsFiltersDialogOpen] = useState(false);

  function handleOpen() {

    setIsFiltersDialogOpen(true);
  }

  function handleClose() {
    setIsFiltersDialogOpen(false);
  }

  return (
    <Fragment>
      <Dialog
        title="Filters"
        isOpen={isFiltersDialogOpen}
        handleClose={handleClose}
        handleSubmit={handleClose}
      >
        <RankingFilters />
      </Dialog>
      <Button onClick={handleOpen}>Filters</Button>
    </Fragment>
  );
};
