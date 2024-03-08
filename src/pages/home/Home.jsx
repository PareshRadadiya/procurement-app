import Filter from "./components/left-container/filters/Filters";
import Layout from "../../container/layout/Layout";
import {
  HeaderWrapper,
  HomeContainer,
  LeftContainer,
  RightContainer,
  SummaryDetailContainer,
} from "./StyledHome";
import OrderComponent from "./components/right-container/summary/OrderComponent";
import OrderDetails from "./components/right-container/order-details/OrderDetails";
import AuthorisedSupplier from "./components/right-container/summary/AuthorisedSupplier";
import Suppliers from "./components/right-container/summary/Suppliers";
import Invoices from "./components/right-container/summary/Invoices";
import Cost from "./components/right-container/summary/Cost";
import Freight from "./components/right-container/summary/Freight";
import DeliveryTo from "./components/right-container/summary/DeliveryTo";
import ReceivedAt from "./components/right-container/summary/ReceivedAt";
import RatingsAndFeedback from "./components/right-container/summary/RatingAndFeedback";
import OrderDetail from "./components/left-container/order/OrderDetail";

const Home = () => {
  return (
    <Layout>
      <HomeContainer>
        <LeftContainer>
          {/* Filter Component */}
          <Filter />
          <OrderDetail />
        </LeftContainer>

        <RightContainer>
          <HeaderWrapper>
            {/* Order details component */}
            <OrderDetails />
          </HeaderWrapper>

          {/* Summary Details */}
          <SummaryDetailContainer>
            {/* Components Section */}
            <OrderComponent />
            {/* Authorised Supplier Section*/}
            <AuthorisedSupplier />
            {/* Suppliers Section */}
            <Suppliers />
            {/* Cost Section */}
            <Cost />
            {/* Invoice Section */}
            <Invoices />
            {/* Freight Section */}
            <Freight />
            {/* Delivery To Section */}
            <DeliveryTo />
            {/* Received At Section */}
            <ReceivedAt />
            {/* Rating and Feedback At Section */}
            <RatingsAndFeedback />
          </SummaryDetailContainer>
        </RightContainer>
      </HomeContainer>
    </Layout>
  );
};

export default Home;
