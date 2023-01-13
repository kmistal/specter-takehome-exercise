import { useFormik } from "formik";
import { FC, Fragment, useContext, useState } from "react";
import { Dialog } from "src/components";

import { Button } from "@mui/material";

import { DEFAULT_FILTERS, VALIDATION_SCHEMA } from "../constants/Filters";
import { FiltersContext } from "../context/FiltersContext";
import { Filters } from "../types/Filters";
import { RankingFilters } from "./RankingFilters";

export const RankingActions: FC = () => {
  const [isFiltersDialogOpen, setIsFiltersDialogOpen] = useState(false);
  const setFilters = useContext(FiltersContext);
  const formik = useFormik<Filters>({
    initialValues: DEFAULT_FILTERS,
    validationSchema: VALIDATION_SCHEMA,
    onSubmit: (values) => {
      setFilters(values);
      handleClose();
    },
  });

  function handleOpen() {
    setIsFiltersDialogOpen(true);
  }

  function handleClose() {
    setIsFiltersDialogOpen(false);
  }

  function handleSubmit() {
    formik.submitForm();
  }

  return (
    <Fragment>
      <form onSubmit={formik.handleSubmit}>
        <Dialog
          title="Filters"
          isOpen={isFiltersDialogOpen}
          handleClose={handleClose}
          handleSubmit={handleSubmit}
        >
          <RankingFilters formik={formik} />
        </Dialog>
      </form>
      <Button onClick={handleOpen}>Filters</Button>
    </Fragment>
  );
};
