import React from "react";
import { Rating } from "@mui/material";
import {
  CommentArea,
  CommentTitle,
  ComponentWrapper,
  IconWrapper,
  ItemContainer,
  ItemTitle,
  MainHeading,
} from "./StyledSummary";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import BeenhereIcon from '@mui/icons-material/Beenhere';
import EcoIcon from '@mui/icons-material/PlaylistAddCheckCircle';

const RatingsAndFeedback = () => {
  return (
    <>
      <ComponentWrapper>
        <MainHeading>RATINGS & FEEDBACK</MainHeading>
        <ItemContainer>
          <ItemTitle>
            <IconWrapper>
              <LocalShippingIcon />
              Packaging Quality
            </IconWrapper>
            <Rating name="read-only" value={5} readOnly />
          </ItemTitle>
          <ItemTitle>
            <IconWrapper>
              <AssignmentIcon />
              Documentation
            </IconWrapper>
            <Rating name="read-only" value={4} readOnly />
          </ItemTitle>
          <ItemTitle>
            <IconWrapper>
              <AssignmentTurnedInIcon />
              Goods According to specification
            </IconWrapper>
            <Rating name="read-only" value={4} readOnly />
          </ItemTitle>
          <ItemTitle>
            <IconWrapper>
              <BeenhereIcon />
              Proper labelling of items
            </IconWrapper>
            <Rating name="read-only" value={5} readOnly />
          </ItemTitle>
          <ItemTitle>
            <IconWrapper>
              <EcoIcon />
              Respect of the environment
            </IconWrapper>
            <Rating name="read-only" value={4} readOnly />
          </ItemTitle>
        </ItemContainer>
      </ComponentWrapper>
      <CommentTitle>Comments</CommentTitle>
      <CommentArea>
        From ordered items we received on board only marked position on the list.
      </CommentArea>
    </>
  );
};

export default RatingsAndFeedback;
