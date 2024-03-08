import { Box, Typography } from "@mui/material";
import ProfileImage from "../../../../../assets/order-icons/profileImage.png";
import DescIcon from "../../../../../assets/desc.svg";
import {
  HeaderDetailBox,
  HeaderInfo,
  HeaderInfoTitle,
  HeaderOrder,
  HeaderOrderTitle,
  HeaderOrderValue,
  HeaderSubWrapper,
  HeaderTab,
  IconTextWrapper,
  ItemTabName,
  OrderAction,
  OrderDetailContainer,
  OrderDetailsContent,
  OrderTabs,
  StyledDetails,
  StyledName,
  TabName,
} from "./StyledOrderDetails";
import { HomeOrderdetails, OrderTabsName } from "../../../../../constants/order/HomeOrderDetails";

const OrderDetails = () => {
  return (
    <>
      <HeaderSubWrapper>
        {/* Order Information */}
        <HeaderInfo>
          <HeaderInfoTitle>
            <StyledName>
              <img src={ProfileImage} alt="user-image" />
              <Typography variant="body">4907 - 00019</Typography>
            </StyledName>
            <Box>HOTEL/TECH WORK SQUAD GFR</Box>
          </HeaderInfoTitle>
          <HeaderOrder>
            <StyledDetails>
              <HeaderOrderTitle>Date Requested</HeaderOrderTitle>
              <HeaderOrderValue>10 Jul 2019</HeaderOrderValue>
            </StyledDetails>
            <StyledDetails>
              <HeaderOrderTitle>Type</HeaderOrderTitle>
              <HeaderOrderValue>Services</HeaderOrderValue>
            </StyledDetails>
            <StyledDetails>
              <HeaderOrderTitle>Account Code</HeaderOrderTitle>
              <HeaderOrderValue>5830042 - HM PAX ACCOMODATION (LABOUR)</HeaderOrderValue>
            </StyledDetails>
          </HeaderOrder>
        </HeaderInfo>

        {/* Order Details */}
        <OrderDetailContainer>
          <OrderDetailsContent>
            <IconTextWrapper>
              <span>
                <img src={DescIcon} alt="icon not fount" />
              </span>
              <Typography variant="body2">Lorem Ipsum</Typography>
            </IconTextWrapper>
          </OrderDetailsContent>
          <OrderTabs>
            <TabName>Order Summary</TabName>
            <TabName>Order Progress</TabName>
          </OrderTabs>
        </OrderDetailContainer>
      </HeaderSubWrapper>

      {/* Order Actions */}
      <HeaderDetailBox>
        {HomeOrderdetails.map((item) => (
          <OrderAction key={item.id}>
            <img src={item.icon} alt={item.name} />
            {item.name}
          </OrderAction>
        ))}
      </HeaderDetailBox>

      {/* Order Tabs */}
      <HeaderTab>
        {OrderTabsName.map((item, index) => (
          <ItemTabName key={index} index={index}>
            {item}
          </ItemTabName>
        ))}
      </HeaderTab>
    </>
  );
};

export default OrderDetails;
