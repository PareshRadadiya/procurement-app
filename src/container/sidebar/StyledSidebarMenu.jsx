import { Box, styled } from "@mui/material";

export const MainDiv = styled(Box)({
  height: "fit-content",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  position: "absolute",
  background:
    "linear-gradient(\n    180deg,\n    rgba(5, 46, 43, 1) 0%,\n    rgba(5, 46, 43, 1) 47.4%,\n    #052E2B 100%\n  )",
  backdropFilter: "blur(16px)",
  whiteSpace: "nowrap",
  zIndex: "99",
  letterSpacing: "0",
  transition: "all 0.4s ease-in",
  boxSizing: "border-box",
});

export const LogoDiv = styled(Box)({
  width: "100%",
  display: "flex",
  alignItems: "center",
  padding: "1rem 1rem",
  marginBottom: "1rem",
  boxSizing: "border-box",
});

export const LogoTextDiv = styled(Box)({
  fontWeight: "600",
  fontSize: "23px",
  lineHeight: "29px",
  color: "#ffffff",
  marginLeft: "1rem",
});

export const IconPannelDiv = styled(Box)({
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
});

export const MenuItemWarper = styled(Box)({
  margin: "0 1rem 1rem",
  padding: "0.75rem",
  borderBottom: "1px solid #dee4ec",
  minHeight: "8rem",
  flexDirection: "column",
  "&:last-child": {
    border: "none",
  },
  "&.center": {
    padding: "0.75rem",
  },
});

export const MenuItemContainer = styled(Box)({
  display: "flex",
  width: "90%",
  gap: "0.75rem",
  padding: "0.5rem",
});

export const MenuItemContent = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "30px",
});
