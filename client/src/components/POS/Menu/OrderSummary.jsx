import { Box, Text } from "@chakra-ui/react";

export default function OrderSummaryCalculations({ type, value }) {
  return (
    <Box
      display="flex"
      w="100%"
      alignItems="center"
      justifyContent="space-between"
    >
      <Text
        fontFamily="'Roboto', sans-serif"
        fontWeight="light"
        fontSize={type === "Total" ? "1rem" : ".9rem"}
      >
        {type}
      </Text>
      <Text
        fontFamily="'Roboto', sans-serif"
        fontWeight="semibold"
        color="#323130"
        fontSize={type === "Total" ? ".9rem" : ".85rem"}
        data-testid={`${type.toLowerCase()}-value`}
        data-state={value ?? "0.00"}
      >
        ${value ?? "0.00"}
      </Text>
    </Box>
  );
}

const convertToSlug = (input) => {
  return input.toLowerCase().replace(/\s+/g, "-");
};
export function OrderSummaryOptions({ type, typeOptions, method, state }) {
  return (
    <>
      <Text
        fontFamily="'Roboto', sans-serif"
        fontSize=".75rem"
        fontWeight="600"
        data-testid={convertToSlug(type)}
        data-state={!state ? "" : convertToSlug(state)}
      >
        {type}
      </Text>
      <Box
        w="100%"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        {typeOptions?.map((option, i) => (
          <Box
            key={i}
            w="30%"
            h="1.75rem"
            color="gray.500"
            border=".5px solid gray.400"
            bgColor="white"
            display="grid"
            placeItems="center"
            borderRadius="15px"
            fontFamily="'Roboto', sans-serif"
            fontSize={{ xs: ".85rem", lg: ".75rem", xl: ".85rem" }}
            cursor="pointer"
            _hover={{ bgColor: "#323130", color: "gray.100" }}
            onClick={method}
            id={state === option ? `active` : ``}
            data-testid={convertToSlug(option)}
          >
            {option}
          </Box>
        ))}
      </Box>
    </>
  );
}
