import React from "react";
import {
  ChartContainer,
  ChartDetailContainer,
  ChartTitle,
  ComponentWrapper,
  CountDetails,
  MainHeading,
  SingleChart,
} from "./StyledSummary";
import { CostDetails } from "../../../../../constants/summary/SummaryDetails";
import { Box, Divider } from "@mui/material";
import SemiDonutChart from "../../../../../components/chart/SemiDonutChart";

const Cost = () => {
  return (
    <ComponentWrapper>
      <MainHeading>
        COST <CountDetails>USD</CountDetails>
      </MainHeading>

      <ChartContainer>
        <SingleChart>
          <ChartTitle>Goods / Service Balance</ChartTitle>
          <Divider />
          <SemiDonutChart chartData={CostDetails.goodsData} />
        </SingleChart>
        <SingleChart>
          <ChartTitle>Freight / Delivery Balance</ChartTitle>
          <Divider />
          <SemiDonutChart chartData={CostDetails.deliveryData} />
        </SingleChart>
      </ChartContainer>

      <ChartDetailContainer>
        <Box>
          <p>Total PO Amount</p>
          <p>Total Outstanding Amount</p>
        </Box>
        <Box sx={{ color: "#04487F", fontWeight: 600 }}>
          <p>41,21,263.00</p>
          <p>9,000.00</p>
        </Box>
      </ChartDetailContainer>
    </ComponentWrapper>
  );
};

export default Cost;
