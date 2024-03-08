import { Box, styled } from "@mui/material";

export const MenuItem = styled(Box)({
  padding: "0.4rem",
  display: "flex",
  gap: "0.75rem",
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "17px",
  color: "#798ea3",
  alignItems: "center",
  position: "relative",
  overflow: "hidden",
  "&:hover": {
    cursor: "pointer",
    background: "#00504B",
    color: "#ffffff",
    borderRadius: "20px",
  },
  "&.active": {
    background: "#052E2B",
    color: "#ffffff",
    borderRadius: "20px",
  },
  "&.closedActive": {
    marginLeft: "-6px",
    overflow: "hidden",
    padding: 0,
    gap: 0,
    marginRight: "-12px",
  },
});

export const ImageWarper = styled("img")({
  display: "flex",
});
