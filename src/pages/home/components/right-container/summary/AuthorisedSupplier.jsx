import React from "react";
import {
  AuthoriseDetail,
  AuthoriseVal,
  ComponentWrapper,
  CountDetails,
  MainHeading,
  OtherDetails,
  PersonalDetailContent,
  PersonalDetails,
  RatingContainer,
  SupplierDetails,
} from "./StyledSummary";
import PinIcon from "../../../../../assets/order-icons/pin.svg";
import MailIcon from "../../../../../assets/order-icons/mail.svg";
import Phone1Icon from "../../../../../assets/order-icons/phone1.svg";
import Phone2Icon from "../../../../../assets/order-icons/phone2.svg";
import { AuthorisedData } from "../../../../../constants/summary/SummaryDetails";
import { Rating, Typography } from "@mui/material";

const AuthorisedSupplier = () => {
  return (
    <ComponentWrapper>
      <MainHeading>
        AUTHORIZED SUPPLIER
        <CountDetails style={{ color: "#455357" }}> Ref: PRJ001963SRIN</CountDetails>
      </MainHeading>

      <SupplierDetails>
        {AuthorisedData.map((item) => (
          <AuthoriseDetail key={item.name}>
            <Typography variant="body">{item.name}</Typography>
            <AuthoriseVal>{item.val}</AuthoriseVal>
          </AuthoriseDetail>
        ))}
      </SupplierDetails>

      <OtherDetails>
        <RatingContainer>
          Repairs (Riding Squads / Manpower)
          <Rating name="read-only" value={4} readOnly />
        </RatingContainer>

        <PersonalDetails>
          <PersonalDetailContent>
            <img src={PinIcon} alt="Pin Icon" />
            1st Floor, Skypark, 8 Elliot Place, G3 8EP, GBR
          </PersonalDetailContent>
          <PersonalDetailContent>
            <img src={Phone1Icon} alt="Phone1 Icon" />
            +44 (0) 141 305 1300
          </PersonalDetailContent>
          <PersonalDetailContent>
            <img src={Phone2Icon} alt="Phone2 Icon" />
            +44 (0) 141 305 1300
          </PersonalDetailContent>
          <PersonalDetailContent>
            <img src={MailIcon} alt="Mail Icon" />
            <span style={{textDecoration: "underline"}}>repairs@services.com</span>
          </PersonalDetailContent>
        </PersonalDetails>
      </OtherDetails>
    </ComponentWrapper>
  );
};

export default AuthorisedSupplier;
