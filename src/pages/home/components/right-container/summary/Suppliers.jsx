import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ComponentWrapper, CountDetails, MainHeading, StyledTableCell } from "./StyledSummary";
import { SupplierDetails } from "../../../../../constants/summary/SummaryDetails";
import ProfileImage from "../../../../../assets/order-icons/profileImage.png";

const Suppliers = () => {
  return (
    <ComponentWrapper>
      <MainHeading>
        SUPPLIERS
        <CountDetails>2</CountDetails>
      </MainHeading>

      <TableContainer component={Paper}>
        <Table aria-label="customized table" sx={{ border: "1px solid #CDD6DB" }}>
          <TableHead>
            <TableRow>
              <StyledTableCell>Status</StyledTableCell>
              <StyledTableCell align="left">Supplier Name</StyledTableCell>
              <StyledTableCell align="left">Goods</StyledTableCell>
              <StyledTableCell align="left">Freight</StyledTableCell>
              <StyledTableCell align="left">Total</StyledTableCell>
              <StyledTableCell align="left">Cur</StyledTableCell>
              <StyledTableCell align="left">Base&nbsp;(USD)</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {SupplierDetails.map((data) => (
              <TableRow key={data.id}>
                <StyledTableCell>
                  <img src={ProfileImage} alt="user-image" />
                </StyledTableCell>
                <StyledTableCell align="left">{data.name}</StyledTableCell>
                <StyledTableCell align="left">{data.goods}</StyledTableCell>
                <StyledTableCell align="left">{data.freight}</StyledTableCell>
                <StyledTableCell align="left">{data.total}</StyledTableCell>
                <StyledTableCell align="left">{data.cur}</StyledTableCell>
                <StyledTableCell align="left">{data.base}</StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ComponentWrapper>
  );
};

export default Suppliers;
