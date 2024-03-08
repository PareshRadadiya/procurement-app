import { Box, Card, CardContent, Chip, Typography, styled } from "@mui/material";

export const ItemCount = styled(Typography)({
  color: "#020A08",
  fontWeight: 600,
  fontSize: "13px",
  marginBottom: "10px",
});

export const CustomItemCountChip = styled(Chip)({
  color: "#020A08",
  background: "#D9D1C6",
  borderRadius: "100px",
});

export const OrderDetailContent = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

export const CustomCard = styled(Card)(({ index }) => ({
  backgroundColor: "#E8ECED",
  borderRadius: "8px",
  padding: "12px 16px",
  border: index === 0 ? "1px solid #052E2B" : "",
  cursor: "pointer",
}));

export const CardContentContainer = styled(CardContent)({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  padding: "0px !important",
});

export const LeftContainer = styled(Box)({
  textAlign: "start",
  display: "flex",
  flexDirection: "column",
  gap: "5px",
});

export const IdTitle = styled(Typography)({
  color: "#00704B",
  fontSize: "12px",
  fontWeight: 700,
  lineHeighte: "16px",
});

export const TitleContent = styled(Typography)({
  color: "##020A08",
  fontSize: "12px",
  fontWeight: 600,
  lineHeighte: "16px",
});

export const IconTextWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  color: "#04487F",
  background: "#80E7FF",
  padding: "6px 12px 6px 8px",
  borderRadius: "10px",
  width: "fit-content",
  marginTop: "5px",
});

export const IconWrapper = styled(Box)({
  display: "flex",
  gap: "8px",
});

export const CustomChip = styled(Chip)({
  color: "#ffffff",
  background: "#FF9F1D",
  borderRadius: "25px",
  height: "34px",
});

export const CustomContent = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  alignItems: "flex-end",
});

export const CustomChipText = styled(Typography)({
  color: "#697E85",
  fontSize: "12px",
  fontWeight: 500,
  lineHeighte: "16px",
});

export const DataTextWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  justifyContent: "space-between",
});
