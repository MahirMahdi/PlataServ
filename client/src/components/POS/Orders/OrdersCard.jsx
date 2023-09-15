import {
  Card,
  Box,
  CircularProgress,
  CircularProgressLabel,
  Text,
  Button,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { SiCircle } from "react-icons/si";
import { RiCheckboxCircleLine } from "react-icons/ri";

export default function OrdersCard({
  id,
  type,
  name,
  orderId,
  totalPrice,
  paymentMethod,
  orderPoint,
  destination,
  totalQuantity,
  timestamp,
  completeOrder,
  index,
}) {
  const dashboardDetails = [
    {
      contentName: "Items",
      contentValue: `x${totalQuantity}`,
    },
    {
      contentName: "Payment Method",
      contentValue: paymentMethod,
    },
    {
      contentName: "Order Point",
      contentValue: orderPoint,
    },
    {
      contentName: "Total Price",
      contentValue: `$${totalPrice}`,
    },
  ];

  const timer = (startTime, id) => {
    if (startTime && id) {
      setInterval(() => {
        const elapsedTimeSeconds = Math.floor((Date.now() - startTime) / 1000);
        const minutes = Math.floor(elapsedTimeSeconds / 60);
        const seconds = elapsedTimeSeconds % 60;
        const timeString = `${minutes.toString().padStart(2, "0")}:${seconds
          .toString()
          .padStart(2, "0")}`;

        const element = document.getElementById(id);

        if (element) {
          element.innerText = timeString;
        }
      }, 1000);
    }
  };

  const timeFormat = (startTime) => {
    const minutes = Math.floor(startTime / 60);
    const seconds = startTime % 60;
    const timeString = `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;

    return timeString;
  };

  return (
    <Card
      w={{ sm: "16.75rem", md: "19.5rem", lg: "22.5rem" }}
      variant="elevated"
      padding=".75rem"
      data-testid={`${type}-${index}`}
    >
      <Box
        w="100%"
        h="4.5rem"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box display="flex" alignItems="center" columnGap="1rem">
          {type === "queue" ? (
            <CircularProgress
              size="3.5rem"
              thickness="15px"
              color="blue.100"
              isIndeterminate
              data-testid={`circular-progress-queue-${index}`}
            >
              <CircularProgressLabel
                fontFamily="'Poppins', sans-serif"
                fontSize=".8rem"
                id={id}
              >
                {timer(timestamp, id)}
              </CircularProgressLabel>
            </CircularProgress>
          ) : (
            <CircularProgress
              size="3.5rem"
              thickness="10px"
              color="#dff4ce"
              value={100}
              data-testid={`circular-progress-completed-${index}`}
            >
              <CircularProgressLabel
                fontFamily="'Poppins', sans-serif"
                fontSize=".8rem"
                id={id}
              >
                {timeFormat(timestamp)}
              </CircularProgressLabel>
            </CircularProgress>
          )}
          <Box>
            <Text
              fontSize=".95rem"
              color="#323130"
              fontFamily="'Poppins', sans-serif"
              fontWeight="semibold"
              data-testid={`customer-name-${type}-${index}`}
            >
              {name}
            </Text>
            <Text
              fontSize=".8rem"
              fontFamily="'Poppins', sans-serif"
              color="#595959"
              data-testid={`order-id-${type}-${index}`}
            >
              #{orderId}
            </Text>
          </Box>
        </Box>
        <Text
          fontSize=".8rem"
          fontFamily="'Poppins', sans-serif"
          color="red.600"
          data-testid={`destination-${type}-${index}`}
        >
          {destination}
        </Text>
      </Box>
      <Box>
        <List spacing={4} data-testid="details-list">
          {dashboardDetails?.map((detail) => (
            <Box
              key={detail.contentName}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              fontFamily="'Poppins', sans-serif"
            >
              <ListItem fontSize=".9rem">
                <ListIcon
                  as={type === "queue" ? SiCircle : RiCheckboxCircleLine}
                  color={type === "queue" ? "blue.100" : "#dff4ce"}
                />
                {detail.contentName}
              </ListItem>
              <ListItem fontWeight="bold" fontSize=".85rem">
                {detail.contentValue}
              </ListItem>
            </Box>
          ))}
        </List>
        {type === "queue" && (
          <Button
            onClick={completeOrder}
            fontWeight="light"
            fontFamily="'Roboto', sans-serif"
            color="white"
            bgColor="#323130"
            borderRadius="4px"
            mt="1rem"
            data-testid="done-button"
          >
            Done
          </Button>
        )}
      </Box>
    </Card>
  );
}
