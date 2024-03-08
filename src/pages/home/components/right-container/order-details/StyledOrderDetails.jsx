import { Box, Typography, styled } from "@mui/material";

export const HeaderSubWrapper = styled(Box)({
  display: "flex",
  borderRadius: "16px 16px 0px 0px",
  justifyContent: "space-between",
  background: "#E8ECED",
  padding: "24px 20px 24px 20px",
});

export const HeaderInfo = styled(Box)({
  gap: "12px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
});

export const HeaderInfoTitle = styled(Box)({
  gap: "12px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: "600",
  fontSize: "14px",
  lineHeight: "17px",
});

export const StyledName = styled(Box)({
  display: "flex",
  flexDirection: "row",
  gap: "8px",
  alignItems: "center",
});

export const HeaderOrder = styled(Box)({
  gap: "28px",
  display: "flex",
  flexDirection: "row",
});

export const HeaderOrderTitle = styled(Typography)({
  fontSize: "12px",
  fontWeight: "500",
  lineHeight: "14px",
  letterSpacing: "0em",
  textAlign: "left",
  color: "#697E85",
  fontFamily: "Inter",
});

export const HeaderOrderValue = styled(Typography)({
  fontSize: "12px",
  fontWeight: "600",
  lineHeight: "16px",
  letterSpacing: "0em",
  fontFamily: "Inter",
  color: "#020A08",
});

export const StyledDetails = styled(Box)({
  gap: "2px",
});

export const OrderDetailContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const OrderDetailsContent = styled(Box)({
  display: "flex",
  justifyContent: "end",
});

export const IconTextWrapper = styled(Box)({
  display: "flex",
  color: "#04487F",
  background: "#80E7FF",
  padding: "6px 12px 6px 8px",
  borderRadius: "10px",
  width: "fit-content",
  marginTop: "5px",
  gap: "8px",
});

export const OrderTabs = styled(Box)({
  display: "flex",
  flexDirection: "row",
  gap: "20px",
});

export const TabName = styled(Box)({
  fontWeight: "600",
  fontSize: "12px",
  lineHeight: "18px",
  color: "#00704B",
  textDecoration: "underline",
  cursor: "pointer",
});

export const HeaderDetailBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  gap: "32px",
  padding: "8px 20px 8px 20px",
  borderBottom: "1px solid #CDD6DB",
  borderTop: "1px solid #CDD6DB",
});

export const OrderAction = styled(Box)({
  color: "#00704B",
  display: "flex",
  fontSize: "12px",
  flexDirection: "row",
  alignItems: "center",
  gap: "8px",
  cursor: "pointer",
});

export const HeaderTab = styled(Box)({
  display: "flex",
  flexDirection: "row",
  gap: "24px",
  borderBottom: "1px solid #CDD6DB",
  padding: "0px 20px 0px 20px",
  marginTop: "20px",
});

export const ItemTabName = styled(Box)(({ index }) => ({
  fontSize: "12px",
  lineHeight: "16px",
  fontWeight: index === 0 ? 600 : 500,
  color: index === 0 ? "#052E2B" : "#697E85",
  padding: "8px 0px 8px 0px",
  borderBottom: index === 0 ? "2px solid #052E2B" : "",
  cursor: "pointer",
}));
