import React from "react";
import Phone1Icon from "../../../../../assets/order-icons/phone1.svg";
import Phone2Icon from "../../../../../assets/order-icons/phone2.svg";
import MailIcon from "../../../../../assets/order-icons/mail.svg";
import PinIcon from "../../../../../assets/order-icons/pin.svg";
import {
  AuthoriseDetail,
  AuthoriseVal,
  ComponentWrapper,
  MainHeading,
  PersonalDetailContent,
  PersonalDetails,
  SupplierDetails,
} from "./StyledSummary";
import { ReceiverDetails } from "../../../../../constants/summary/SummaryDetails";
import { Typography } from "@mui/material";

const ReceivedAt = () => {
  return (
    <ComponentWrapper>
      <MainHeading>RECEIVED AT</MainHeading>

      <SupplierDetails>
        {ReceiverDetails.map((item, index) => (
          <AuthoriseDetail key={item.name}>
            <Typography variant="body">{item.name}</Typography>
            <AuthoriseVal>{item.val}</AuthoriseVal>
          </AuthoriseDetail>
        ))}
      </SupplierDetails>

      <PersonalDetails>
        <PersonalDetailContent>
          <img src={PinIcon} alt="Pin Icon" />
          Dover CT17 9DQ, USA
        </PersonalDetailContent>
        <PersonalDetailContent>
          <img src={Phone1Icon} alt="Phone1 Icon" />
          01304 248322
        </PersonalDetailContent>
        <PersonalDetailContent>
          <img src={Phone2Icon} alt="Phone2 Icon" />
          01304 248322
        </PersonalDetailContent>
        <PersonalDetailContent>
          <img src={MailIcon} alt="Mail Icon" />
          <span style={{ textDecoration: "underline" }}> marine@george.com</span>
        </PersonalDetailContent>
      </PersonalDetails>
    </ComponentWrapper>
  );
};

export default ReceivedAt;
