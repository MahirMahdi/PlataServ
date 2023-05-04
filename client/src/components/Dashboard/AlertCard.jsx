import { Box, Card, Text, List, ListItem, Button } from "@chakra-ui/react";
import { IoMdAlert } from "react-icons/io";

export default function AlertCard({
  type,
  item,
  donateFoodBank,
  applyDiscount,
  alertDate,
  preview,
}) {
  const diff_in_ms = new Date(alertDate).getTime() - new Date().getTime();
  const diff_in_days = Math.floor(diff_in_ms / 86400000);

  const expiry = {
    message:
      diff_in_days > 1
        ? `Expiring in ${diff_in_days} days!`
        : diff_in_days === 1
        ? "Expiring in a day!"
        : "Expiring in less than a day!",
    button1: {
      name: "Apply Discount",
      method: applyDiscount,
    },
    button2: {
      name: "Donate Food Bank",
      method: donateFoodBank,
    },
  };

  const count = {
    message: "New Supplies needed!",
    button1: {
      name: "Preview PAR",
      method: preview,
    },
    button2: {
      name: "Custom Order",
      method: preview,
    },
  };

  return (
    <Card
      w="100%"
      h="12.5rem"
      variant="elevated"
      padding=".75rem"
      display="grid"
    >
      <Box display="flex" alignItems="center" columnGap=".75rem">
        <IoMdAlert size={24} />
        <Text
          fontSize=".95rem"
          color="#323130"
          fontFamily="'Poppins', sans-serif"
          fontWeight="semibold"
        >
          {type === "expiry" ? expiry.message : count.message}
        </Text>
      </Box>
      <Box mt=".75rem">
        <List spacing={4}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            fontFamily="'Poppins', sans-serif"
          >
            <ListItem fontSize=".9rem">Name</ListItem>
            <ListItem fontWeight="bold" fontSize=".85rem">
              {item.name}
            </ListItem>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            fontFamily="'Poppins', sans-serif"
          >
            <ListItem fontSize=".9rem">Remaining</ListItem>
            <ListItem fontWeight="bold" fontSize=".85rem">
              {item.total_units}
            </ListItem>
          </Box>
        </List>
      </Box>
      {type === "expiry" ? (
        <Box display="flex" alignItems="center" columnGap="1rem">
          <Button
            onClick={expiry.button1.method}
            fontWeight="light"
            fontFamily="'Roboto', sans-serif"
            color="white"
            bgColor="#323130"
            borderRadius="4px"
            mt="1rem"
          >
            {expiry.button1.name}
          </Button>
          <Button
            onClick={expiry.button2.method}
            fontWeight="normal"
            fontFamily="'Roboto', sans-serif"
            bgColor="#dff4ce"
            borderRadius="4px"
            mt="1rem"
          >
            {expiry.button2.name}
          </Button>
        </Box>
      ) : (
        <Box display="flex" alignItems="center" columnGap="1rem">
          <Button
            onClick={count.button1.method}
            fontWeight="light"
            fontFamily="'Roboto', sans-serif"
            color="white"
            bgColor="#323130"
            borderRadius="4px"
            mt="1rem"
          >
            {count.button1.name}
          </Button>
          <Button
            onClick={count.button2.method}
            fontWeight="normal"
            fontFamily="'Roboto', sans-serif"
            bgColor="#dff4ce"
            borderRadius="4px"
            mt="1rem"
          >
            {count.button2.name}
          </Button>
        </Box>
      )}
    </Card>
  );
}
