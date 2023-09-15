import axios from "../../api/api";
import { useEffect, useState } from "react";
import { Box, Text, Grid, GridItem, useToast } from "@chakra-ui/react";
import OrdersCard from "../../components/POS/Orders/OrdersCard";
import { FcSurvey, FcInspection } from "react-icons/fc";
import UnavailableMessage from "../../components/Shared/UnavailableMessage";

export default function Orders() {
  const [dashboardDetails, setDashboardDetails] = useState(
    JSON.parse(localStorage.getItem("dashboard"))
  );
  const [completedOrders, setCompletedOrders] = useState([]);
  const toast = useToast();

  const postOrderDetails = async (order_id) => {
    // this data is needed for sales report
    const orderDetails = dashboardDetails.filter(
      (detail) => detail.order_id === order_id
    )[0];

    const elapsedTime = Math.round(
      (Date.now() - orderDetails.timestamp) / 1000
    );

    delete orderDetails.timestamp;

    orderDetails.time = elapsedTime;

    await axios.post("/sales", { orderDetails: orderDetails });

    if (dashboardDetails.length === 1) {
      localStorage.removeItem("dashboard");
    } else {
      localStorage.setItem(
        "dashboard",
        JSON.stringify(
          dashboardDetails.filter((detail) => detail.order_id !== order_id)
        )
      );
    }

    setDashboardDetails(JSON.parse(localStorage.getItem("dashboard")));

    getCompletedOrdersOfLast24Hours();

    return toast({
      title: "Order Completed!",
      status: "success",
      duration: 1000,
      isClosable: true,
    });
  };

  const getCompletedOrdersOfLast24Hours = async () => {
    const response = await axios.get("/completed-orders");
    setCompletedOrders(response.data.orders);
  };

  useEffect(() => {
    getCompletedOrdersOfLast24Hours();
  }, []);

  return (
    <Box display="flex" w="100vw" h="100vh">
      <Box
        w={{ base: "100vw", lg: "60vw", xl: "65vw" }}
        ml={{ lg: "17.5vw", xl: "15vw" }}
        padding={{
          base: "0 1rem",
          sm: "0 1.5rem",
          md: "0 1.75rem",
          lg: "1.5rem 2rem",
        }}
        minH="100vh"
      >
        <Box
          mt={{ base: "1.5rem", lg: "2.5rem" }}
          padding={{
            base: "0 1rem",
            sm: "0 1.5rem",
            md: "0 1.75rem",
            xl: "0 2rem",
          }}
          display="grid"
          rowGap=".5rem"
          w="100%"
        >
          <Text
            fontFamily="'Poppins', sans-serif"
            fontSize={{ base: "1rem", lg: "1.25rem" }}
            fontWeight="semibold"
            data-testid="orders-in-progress-header"
          >
            In Progress
          </Text>
          {dashboardDetails ? (
            <Grid
              w="100%"
              display="grid"
              templateColumns={{
                base: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                xl: "repeat(3, 1fr)",
              }}
              gap={6}
              paddingBottom="1.5rem"
              data-testid="current-orders"
            >
              {dashboardDetails.map((detail, i) => (
                <GridItem key={detail.order_id}>
                  <OrdersCard
                    index={i}
                    type={"queue"}
                    name={detail.customer_name}
                    orderId={detail.order_id}
                    paymentMethod={detail.payment_method}
                    orderPoint={detail.order_point}
                    destination={detail.destination}
                    totalPrice={detail.total_price}
                    totalQuantity={detail.total_quantity}
                    timestamp={detail.timestamp}
                    completeOrder={() => postOrderDetails(detail.order_id)}
                    id={detail.order_id}
                  />
                </GridItem>
              ))}
            </Grid>
          ) : (
            <UnavailableMessage
              logo={<FcSurvey size={36} />}
              message={"Orders queue is empty"}
            />
          )}
        </Box>
        <Box
          mt={{ base: "4rem", lg: "2.5rem" }}
          padding={{
            base: "0 1rem",
            sm: "0 1.5rem",
            md: "0 1.75rem",
            xl: "0 2rem",
          }}
          display="grid"
          rowGap=".5rem"
          w="100%"
        >
          <Text
            fontFamily="'Poppins', sans-serif"
            fontSize={{ base: "1rem", lg: "1.25rem" }}
            fontWeight="semibold"
          >
            Completed Orders
          </Text>
          {completedOrders.length > 0 ? (
            <Grid
              w="100%"
              display="grid"
              templateColumns={{
                base: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                xl: "repeat(3, 1fr)",
              }}
              gap={6}
              paddingBottom="1.5rem"
              data-testid="completed-orders"
            >
              {completedOrders.map((detail, i) => (
                <GridItem key={detail.order_id}>
                  <OrdersCard
                    index={i}
                    type={"completed"}
                    name={detail.customer_name}
                    orderId={detail.order_id}
                    paymentMethod={detail.payment_method}
                    orderPoint={detail.order_point}
                    destination={detail.destination}
                    totalPrice={detail.total_price}
                    totalQuantity={detail.total_quantity}
                    timestamp={detail.time}
                  />
                </GridItem>
              ))}
            </Grid>
          ) : (
            <UnavailableMessage
              logo={<FcInspection size={36} />}
              message={"No completed orders today"}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
}
