import { Box, styled } from "@mui/material";

export const MainDiv = styled(Box)({
  minWidth: "900px",
  display: "flex",
  height: "100%",
  width: "100%",
  position: "fixed",
});

export const ChildDiv = styled(Box)({
  boxSizing: "border-box",
  width: "100%",
  height: "100%",
  overflow: "hidden",
  marginLeft: "5rem",
  overflowX: "hidden",
});
