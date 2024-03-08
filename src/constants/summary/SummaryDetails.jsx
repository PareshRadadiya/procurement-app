const AuthorisedData = [
  {
    name: "Date Authorized",
    val: "12 Jul 2019",
  },
  {
    name: "Authorized By",
    val: "Jim Darren",
  },
  {
    name: "Invoice Chased Date",
    val: "-",
  },
  {
    name: "PO Chased Date",
    val: "-",
  },
  {
    name: "PO Confirmed Date",
    val: "-",
  },
  {
    name: "PO Ref No.",
    val: "-",
  },
];

const SupplierDetails = [
  {
    id: 1,
    status: "TQ",
    name: "Engineering Co. Ltd",
    goods: 3459.7,
    freight: 0.0,
    total: 3459.7,
    cur: "EUR",
    base: 3811.92,
  },
  {
    id: 1,
    status: "TQ",
    name: "Fintec Co. Ltd - SPARES",
    goods: 4370.6,
    freight: 0.0,
    total: 4370.6,
    cur: "USD",
    base: 4370.6,
  },
];

const InvoiceDetails = [
  {
    id: 1,
    status: "Invoice Paid",
    reference: "PJIN002271-SRIN",
    amount: "34,445.00",
    currency: "USD",
    invoice_date: "23 Sep 2019",
    paid_date: "30 Jun 2020",
  },
  {
    id: 2,
    status: "Invoice Paid",
    reference: "PJIN002156-SRIN",
    amount: "31,320.00",
    currency: "USD",
    invoice_date: "12 Aug 2019",
    paid_date: "30 Jun 2020",
  },
];

const FreightDetails = [
  { name: "No. of Peices", val: "0" },
  { name: "Weight (in Kg)", val: "0" },
  { name: "Total CBM", val: "0" },
  { name: "Freight Order", val: "-" },
  { name: "Transport Mode", val: "-" },
  { name: "AWB/Reference No.", val: "-" },
];

const DeliveryDetails = [
  { name: "Ordered Date", val: "10 May 2023" },
  { name: "Expected", val: "02 June 2023" },
  { name: "Port", val: "-" },
  { name: "Ex Work Days", val: "15" },
];

const ReceiverDetails = [
  { name: "Ordered Date", val: "12 Jul 2019" },
  { name: "Received On", val: "14 Aug 2019" },
  { name: "Port", val: "Dover" },
];

const CostDetails = {
  goodsData: {
    series: [35252.0, 4000.0],
    labels: ["Amount", "Outstanding"],
    colors: ["#006874", "#41D9ED"],
  },
  deliveryData: {
    series: [5960.0, 5000.0],
    labels: ["Amount", "Outstanding"],
    colors: ["#006E1C", "#6CDE6E"],
  },
};

export {
  AuthorisedData,
  SupplierDetails,
  InvoiceDetails,
  FreightDetails,
  DeliveryDetails,
  ReceiverDetails,
  CostDetails,
};
