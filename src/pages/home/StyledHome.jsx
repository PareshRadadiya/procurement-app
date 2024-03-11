import { Box, styled } from "@mui/material";

export const HomeContainer = styled(Box)({
  display: "flex",
  width: "100%",
  gap: "16px",
  fontFamily: "Inter",
  height: "calc(100% - 80px)",
});

export const LeftContainer = styled(Box)({
  width: "30%",
  marginLeft: "1rem",
  height: "100%",
  overflow: "auto",
  "&&::-webkit-scrollbar": {
    display: "none",
  },
  // For other browsers like Firefox
  scrollbarWidth: "none",
});

export const RightContainer = styled(Box)({
  width: "70%",
  top: "64px",
  marginRight: "32px",
  right: "32px",
  borderRadius: "16px",
  boxShadow: "0px 1px 8px 0px #0000001F",
  background: "#F5F5F5",
  overflow: "auto",
  height: "100%",
  "&&::-webkit-scrollbar": {
    display: "none",
  },
  // For other browsers like Firefox
  scrollbarWidth: "none",
});

export const HeaderWrapper = styled(Box)({
  position: "sticky",
  top: 0,
  zIndex: 1,
  background: "#F5F5F5",
});

export const SummaryDetailContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  margin: "20px 16px 20px 12px",
});
