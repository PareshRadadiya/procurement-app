import { Box, TableCell, TextField, Typography, styled, tableCellClasses } from "@mui/material";

// Start Comman styles
export const ComponentWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  borderRadius: "8px",
  background: "#EFF1F1",
  border: "1px solid #E8ECED",
  gap: "20px",
  padding: "16px",
});

export const MainHeading = styled(Typography)({
  fontWeight: "700",
  fontFamily: "Inter",
  fontSize: "13px",
  lineHeight: "17px",
  letterSpacing: "5%",
  display: "flex",
  gap: "8px",
  alignItems: "center",
});

export const CountDetails = styled(Box)({
  borderRadius: "50px",
  background: "#CDD6DB",
  padding: "2px 8px",
  fontSize: "11px",
  gap: "10px",
  justifyContent: "center",
  alignItems: "center",
});

export const SupplierDetails = styled(Box)({
  display: "flex",
  fontSize: "11px",
  lineHeight: "14px",
  fontWeight: "500",
  color: "#697E85",
  gap: "40px",
});

export const StyledTableCell = styled(TableCell)({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#E8ECED",
    color: "#000000DE",
    borderBottom: "1px solid #697E85",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 13,
  },
});
// End Comman styles

// Order Component Style
export const ItemNotFound = styled(Typography)({
  fontSize: "14px",
  fontStyle: "italic",
  lineHeight: "16px",
  color: "#697E85",
});

// Autorised Supplier Component Style
export const AuthoriseDetail = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "3px",
  fontSize: "12px",
});

export const AuthoriseVal = styled(Box)({
  color: "#020A08",
  fontWeight: 600,
});

export const OtherDetails = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});

export const RatingContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "2px",
  fontSize: "13px",
  color: "#04487F",
  fontWeight: 600,
});

export const PersonalDetails = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "6px",
});

export const PersonalDetailContent = styled(Box)({
  color: "#00704B",
  fontSize: "12px",
  display: "flex",
  flexDirection: "row",
  gap: "8px",
  fontWeight: "500",
  lineHeight: "16px",
  cursor: "pointer",
});

// Feedback Section Style
export const ItemContainer = styled(Box)({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: "10px",
});

export const ItemTitle = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "2px",
  fontSize: "13px",
  color: "#052E2B",
  fontWeight: "500",
});

export const CommentTitle = styled(Typography)({
  color: "#697E85",
  fontSize: "12px",
  marginBottom: "-15px",
});

export const CommentTextArea = styled(TextField)({
  "& .MuiInput-underline:after": {
    borderBottomColor: "white",
  },
  "& .MuiOutlinedInput-root": {
    fontSize: "12px",
    padding: "10px",
    "& fieldset": {
      border: "1px solid #CDD6DB",
    },
    "&:hover fieldset": {
      border: "1px solid #CDD6DB",
    },
    "&.Mui-focused fieldset": {
      border: "1px solid #CDD6DB",
    },
  },
});

export const IconWrapper = styled("span")({
  display: "flex",
  alignItems: "center",
  gap: "5px",
});

// Cost Component Style
export const ChartContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
});

export const SingleChart = styled(Box)({
  boxShadow: "box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(0, 0, 0, 0.1)",
  borderRadius: "6px",
  background: "#ffffff",
  width: "45%",
});

export const ChartTitle = styled(Typography)({
  color: "#020A08",
  fontSize: "14px",
  padding: "20px",
});

export const ChartDetailContainer = styled(Typography)({
  display: "flex",
  gap: "15px",
  fontSize: "14px",
  fontWeight: 500,
  color: "#020A08",
});
