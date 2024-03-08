import { Box } from "@mui/material";
import Order from "./Order";
import { CustomItemCountChip, ItemCount, OrderDetailContent } from "./StyledOrder";
import OrderData from "../../../../../constants/order/OrderData";

const OrderDetail = () => {
  return (
    <Box>
      <ItemCount>
        ORDERS <CustomItemCountChip label={OrderData.length} size="small" />
      </ItemCount>
      <OrderDetailContent>
        {OrderData.map((item, index) => (
          <Order key={item.id} data={item} index={index} />
        ))}
      </OrderDetailContent>
    </Box>
  );
};

export default OrderDetail;
