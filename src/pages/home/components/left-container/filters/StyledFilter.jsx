import { Box, FormControl, TextField, Typography, styled } from "@mui/material";

export const MainContainer = styled(Box)({
  position: "sticky",
  top: "0px",
  background: "#ffffff",
  zIndex: 1,
});

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
  width: "47%",
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
  marginBottom: "-15px",
});

export const RightFilterContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  width: "47%",
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

export const SubFilter = styled(Box)({
  display: "flex",
  flexDirection: "row",
  gap: "10px",
});

export const StyledFormControl = styled(FormControl)({
  minWidth: 120,
  backgroundColor: "#E1DBD2",
  borderRadius: "25px",
  width: "75%",
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent",
      outline: "none",
      boxShadow: "none",
    },
  },
  "& .MuiOutlinedInput-input": {
    fontSize: "12px",
    fontFamily: "Inter",
    padding: "10px 14px",
  },
  "& .MuiSvgIcon-root": {
    color: "#00704B",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "transparent",
  },
});

export const StyledFiltersFormControl = styled(FormControl)({
  "& .MuiOutlinedInput-root": {
    color: "#020A08",
    fontWeight: 600,
    outline: "none",
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent",
      outline: "none",
      boxShadow: "none",
    },
  },
  "& .MuiOutlinedInput-input": {
    fontSize: "12px",
    fontFamily: "Inter",
    padding: "0px 14px",
    paddingLeft: "0px",
  },
  "& .MuiSvgIcon-root": {
    color: "#020A08",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "transparent",
  },
});

export const CustomFilterTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderRadius: 25,
    backgroundColor: "#E1DBD2",
    padding: "5px 20px",
    fontSize: "12px",
    "& fieldset": {
      border: "none",
    },
    "&:hover fieldset": {
      border: "none",
    },
    "&.Mui-focused fieldset": {
      border: "none",
    },
    "& .MuiSvgIcon-root": {
      color: "#00704B",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
  },
});
