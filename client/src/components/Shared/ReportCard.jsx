import { Card, Text, Box } from "@chakra-ui/react";
import { IoMdAlert } from "react-icons/io";

export default function ReportCard({
  type,
  date,
  total_quantity,
  total_amount,
  transaction_type,
}) {
  const types = {
    purchases: "Purchase",
    wastes: "Waste",
    foodbank: "Donation",
    finance: "Transaction",
    sales: "Sale",
  };
  return (
    <Card
      data-testid={`recent-${type}-card`}
      w="100%"
      h="fit-content"
      bgColor="#323130"
      padding="1.25rem"
    >
      <Box display="flex" alignItems="center" columnGap="1rem" color="white">
        <IoMdAlert size={30} />
        <Text
          fontSize="1rem"
          fontFamily="'Poppins', sans-serif"
          fontWeight="semibold"
          data-testid="card-header"
        >
          Recent {types[type]}
        </Text>
      </Box>
      <Box mt="1.5rem" display="grid" rowGap="1rem" color="white">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          paddingRight="1rem"
        >
          <Text fontSize=".9rem" fontFamily="'Poppins', sans-serif">
            {type === "finance" ? "Transaction type" : "Total quantity"}
          </Text>
          <Text
            fontSize=".9rem"
            fontFamily="'Poppins', sans-serif"
            fontWeight="semibold"
          >
            {type === "finance" ? transaction_type : total_quantity}
          </Text>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          paddingRight="1rem"
        >
          <Text fontSize=".9rem" fontFamily="'Poppins', sans-serif">
            {type === "purchases" ? "Total cost" : "Total amount"}
          </Text>
          <Text
            fontSize=".9rem"
            fontFamily="'Poppins', sans-serif"
            fontWeight="semibold"
          >
            ${total_amount}
          </Text>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          paddingRight="1rem"
        >
          <Text fontSize=".9rem" fontFamily="'Poppins', sans-serif">
            Date
          </Text>
          <Text
            fontSize=".9rem"
            fontFamily="'Poppins', sans-serif"
            fontWeight="semibold"
          >
            {new Date(date).toDateString().slice(4)}
          </Text>
        </Box>
      </Box>
    </Card>
  );
}
