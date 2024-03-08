import React from "react";
import PinIcon from "../../../../../assets/order-icons/pin.svg";
import PhoneIcon from "../../../../../assets/order-icons/phone1.svg";
import MailIcon from "../../../../../assets/order-icons/mail.svg";
import {
  AuthoriseDetail,
  AuthoriseVal,
  ComponentWrapper,
  MainHeading,
  PersonalDetailContent,
  PersonalDetails,
  SupplierDetails,
} from "./StyledSummary";
import { DeliveryDetails } from "../../../../../constants/summary/SummaryDetails";
import { Typography } from "@mui/material";

const DeliveryTo = () => {
  return (
    <ComponentWrapper>
      <MainHeading>DELIVERY TO</MainHeading>

      <SupplierDetails>
        {DeliveryDetails.map((item, index) => (
          <AuthoriseDetail key={item.name}>
            <Typography variant="body">{item.name}</Typography>
            <AuthoriseVal style={{ color: index === 1 ? "#FF451A" : "" }}>{item.val}</AuthoriseVal>
          </AuthoriseDetail>
        ))}
      </SupplierDetails>

      <PersonalDetails>
        <PersonalDetailContent>
          <img src={PinIcon} alt="Pin Icon" />
          Contour Avenue, 2133 LD
        </PersonalDetailContent>
        <PersonalDetailContent>
          <img src={PhoneIcon} alt="Phone Icon" />
          01304 248322
        </PersonalDetailContent>
        <PersonalDetailContent>
          <img src={MailIcon} alt="Mail Icon" />
          <span style={{ textDecoration: "underline" }}>po.office@marine.global</span>
        </PersonalDetailContent>
      </PersonalDetails>
    </ComponentWrapper>
  );
};

export default DeliveryTo;
