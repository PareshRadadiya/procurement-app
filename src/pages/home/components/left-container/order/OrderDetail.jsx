import { Box } from "@mui/material";
import Order from "./Order";
import { OrderDetailContent } from "./StyledOrder";
import OrderData from "../../../../../constants/order/OrderData";

const OrderDetail = () => {
  return (
    <Box>
      <OrderDetailContent>
        {OrderData.map((item, index) => (
          <Order key={item.id} data={item} index={index} />
        ))}
      </OrderDetailContent>
    </Box>
  );
};

export default OrderDetail;
