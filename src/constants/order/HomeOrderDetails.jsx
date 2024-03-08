import EditDetails from "../../assets/order-icons/edit-details.svg";
import PrintDetails from "../../assets/order-icons/print-details.svg";
import DeliveryStatus from "../../assets/order-icons/delivery-status.svg";
import Report from "../../assets/order-icons/Report.svg";
import TouchIcon from "../../assets/order-icons/touch-icon.svg";

const HomeOrderdetails = [
  {
    id: 1,
    icon: EditDetails,
    name: "Edit Order Details",
  },
  {
    id: 2,
    icon: PrintDetails,
    name: "Print Order Details",
  },
  {
    id: 3,
    icon: DeliveryStatus,
    name: "Change Delivery Status",
  },
  {
    id: 4,
    icon: Report,
    name: "Reports",
  },
  {
    id: 5,
    icon: TouchIcon,
    name: "Actions",
  },
];

const OrderTabsName = [
  "Summary",
  "Order Lines",
  "Suppliers",
  "Analysis",
  "Freight Details",
  "Delivery",
  "Invoice",
  "Memos",
  "Notes & Attachments",
  "Budgets",
];

export { HomeOrderdetails, OrderTabsName };
