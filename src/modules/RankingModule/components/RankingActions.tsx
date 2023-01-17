import { Button } from "@mui/material";
import { useFormik } from "formik";
import { FC, Fragment, useContext, useState } from "react";

import { Dialog } from "src/components";

import { DEFAULT_FILTERS, VALIDATION_SCHEMA } from "../constants/Filters";
import { FiltersContext } from "../context/FiltersContext";

import { RankingFilters } from "./RankingFilters";

export const RankingActions: FC = () => {
  const [isFiltersDialogOpen, setIsFiltersDialogOpen] = useState(false);
  const setFilters = useContext(FiltersContext);
  const formik = useFormik<typeof DEFAULT_FILTERS>({
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
