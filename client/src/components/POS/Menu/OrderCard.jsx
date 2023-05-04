import { Card, Text, Box, Image } from "@chakra-ui/react";

export default function OrderCard({ product, handleAdd, handleRemove, count }) {
  const { name, price, image, discount_period } = product;
  const product_price = discount_period
    ? (price - price * 0.1).toFixed(2)
    : price;
  return (
    <Card direction="row" w="100%" justifyContent="space-between" h="5rem">
      <Image
        src={image}
        h="100%"
        width="30%"
        objectFit="cover"
        borderRadius="inherit"
      />
      <Box display="grid" w="70%" padding=".5rem" rowGap=".5rem">
        <Box
          pos="relative"
          top={0}
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Text
            w="70%"
            fontFamily="'Poppins', sans-serif"
            fontWeight="medium"
            fontSize="12px"
          >
            {name}
          </Text>
          <Box
            w="30%"
            fontFamily="'Poppins', sans-serif"
            fontWeight="medium"
            color="blue.300"
            fontSize=".75rem"
          >
            <sup style={{ fontWeight: "bold" }}>$</sup>
            {product_price}
          </Box>
        </Box>
        <Box
          w="45%"
          borderRadius="10px"
          h="1.15rem"
          bgColor="#f5f6f7"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          pos="relative"
          bottom={0}
        >
          <Box
            h="1.15rem"
            w="1.15rem"
            borderRadius="50%"
            bgColor="white"
            border="1px solid #EDF2F6"
            textAlign="center"
            cursor="pointer"
            _hover={{ bgColor: "#323130", color: "gray.100" }}
            onClick={handleRemove}
          >
            <Text mt="-.25rem">-</Text>
          </Box>
          <Text
            fontSize=".65rem"
            color="gray.500"
            fontFamily="'Poppins', sans-serif"
          >
            {count}
          </Text>
          <Box
            h="1.15rem"
            w="1.15rem"
            borderRadius="50%"
            bgColor="white"
            border="1px solid #EDF2F6"
            textAlign="center"
            cursor="pointer"
            _hover={{ bgColor: "#323130", color: "gray.100" }}
            onClick={handleAdd}
          >
            <Text mt="-.3rem">+</Text>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}
