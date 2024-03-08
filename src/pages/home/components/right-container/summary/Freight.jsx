import React from "react";
import { FreightDetails } from "../../../../../constants/summary/SummaryDetails";
import {
  AuthoriseDetail,
  AuthoriseVal,
  ComponentWrapper,
  MainHeading,
  SupplierDetails,
} from "./StyledSummary";
import { Typography } from "@mui/material";

const Freight = () => {
  return (
    <ComponentWrapper>
      <MainHeading>FREIGHT DETAILS</MainHeading>
      <SupplierDetails>
        {FreightDetails.map((item) => (
          <AuthoriseDetail key={item.name}>
            <Typography variant="body">{item.name}</Typography>
            <AuthoriseVal>{item.val}</AuthoriseVal>
          </AuthoriseDetail>
        ))}
      </SupplierDetails>
    </ComponentWrapper>
  );
};

export default Freight;
