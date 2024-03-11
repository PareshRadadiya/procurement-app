import { Box, Typography, styled } from "@mui/material";

export const HeaderContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "21px 32px 21px 22px",
  height: "25px",
});

export const HeaderTitle = styled(Typography)({
  color: "#020A08",
  fontSize: "16px",
  fontWeight: 600,
  lineHeight: "20px",
});

export const RightHeaderContainer = styled(Box)({
  display: "flex",
  gap: "28px",
});

export const IconContainer = styled(Box)({
  display: "flex",
  gap: "20px",
});

export const UserDetails = styled(Box)({
  boxShadow: "0px 2px 6px 2px #00000026",
  borderRadius: "16px",
  display: "flex",
  padding: "4px 6px",
  gap: "8px",
  cursor: "pointer",
});

export const UserName = styled(Box)({
  color: "#020A08",
  fontSize: "12px",
  fontWeight: 600,
  lineHeight: "16px",
});
