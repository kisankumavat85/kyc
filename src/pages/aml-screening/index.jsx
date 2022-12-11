import { Box } from "@mui/material";
import React from "react";
import withLayout from "../../components/HOC/withLayout";
import PageContent from "../../components/PageContent";
import PageHeader from "../../components/PageHeader";

const AMLScreening = () => {
  return (
    <Box>
      <PageHeader />
      <PageContent />
    </Box>
  );
};

export default withLayout(AMLScreening);
