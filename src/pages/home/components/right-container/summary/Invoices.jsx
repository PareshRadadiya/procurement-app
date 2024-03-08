import AttachFileIcon from "@mui/icons-material/AttachFile";
import { Paper, Table, TableBody, TableContainer, TableHead, TableRow } from "@mui/material";
import { ComponentWrapper, CountDetails, MainHeading, StyledTableCell } from "./StyledSummary";
import { InvoiceDetails } from "../../../../../constants/summary/SummaryDetails";

const Invoices = () => {
  return (
    <ComponentWrapper>
      <MainHeading>
        INVOICES
        <CountDetails>{InvoiceDetails.length}</CountDetails>
      </MainHeading>

      <TableContainer component={Paper}>
        <Table sx={{ border: "1px solid #CDD6DB" }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Attachment</StyledTableCell>
              <StyledTableCell align="left">Status</StyledTableCell>
              <StyledTableCell align="left">Reference</StyledTableCell>
              <StyledTableCell align="left">Amount</StyledTableCell>
              <StyledTableCell align="left">Currency</StyledTableCell>
              <StyledTableCell align="left">Invoice Date</StyledTableCell>
              <StyledTableCell align="left">Paid Date</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {InvoiceDetails.map((invoice) => (
              <TableRow key={invoice.id}>
                <StyledTableCell component="th" scope="row">
                  <AttachFileIcon style={{ color: "#00704B" }} />
                </StyledTableCell>
                <StyledTableCell align="left" style={{ color: "#008A25" }}>
                  {invoice.status}
                </StyledTableCell>
                <StyledTableCell align="left">{invoice.reference}</StyledTableCell>
                <StyledTableCell align="left">{invoice.amount}</StyledTableCell>
                <StyledTableCell align="left">{invoice.currency}</StyledTableCell>
                <StyledTableCell align="left">{invoice.invoice_date}</StyledTableCell>
                <StyledTableCell align="left">{invoice.paid_date}</StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ComponentWrapper>
  );
};

export default Invoices;
