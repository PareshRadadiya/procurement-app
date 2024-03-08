import { Box, FormControl, Typography, styled } from "@mui/material";

export const FilterContainer = styled(Box)({
  background: "#F2EEEB",
  borderRadius: "16px",
  padding: "20px",
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "25px",
});

export const LeftFilterContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

export const StyledFiters = styled(FormControl)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  gap: "20px",
});

export const FilterLabel = styled(Typography)({
  color: "#697E85",
  fontSize: "11px",
  fontWeight: 400,
  lineHeight: "14px",
});

export const RightFilterContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

export const ButtonContainer = styled(Box)({
  display: "flex",
  gap: "16px",
  justifyContent: "flex-end",
});

export const StyledButton = styled("span")({
  color: "#020A08",
  fontSize: "13px",
  fontWeight: 600,
  lineHeight: "20px",
  borderBottom: "1px solid #020A08",
  cursor: "pointer",
});

export const FilterSearch = styled(Box)({
  display: "flex",
  flexDirection: "row",
  background: "#E1DBD2",
  gap: "4px",
  borderRadius: "28px",
  padding: "14px",
  justifyContent: "space-between",
  alignItems: "center",
  minWidth: "125px",
});

export const FilterLabels = styled(Box)({
  fontSize: "12px",
  fontWeight: "400",
  lineHeight: "16px",
});

export const SingleFilterContainer = styled("span")({
  display: "flex",
  gap: "5px",
});

export const SubFilter = styled(Box)({
  display: "flex",
  flexDirection: "row",
  gap: "10px",
});
