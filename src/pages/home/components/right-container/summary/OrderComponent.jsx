import React from "react";
import { ComponentWrapper, CountDetails, ItemNotFound, MainHeading } from "./StyledSummary";

const OrderComponent = () => {
  return (
    <ComponentWrapper>
      <MainHeading>
        COMPONENTS
        <CountDetails>0</CountDetails>
      </MainHeading>
      <ItemNotFound>No Items Found</ItemNotFound>
    </ComponentWrapper>
  );
};

export default OrderComponent;
