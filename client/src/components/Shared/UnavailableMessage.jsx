import { Box, Text } from "@chakra-ui/react";

export default function UnavailableMessage({ logo, message }) {
  return (
    <Box
      display="flex"
      w="100%"
      h="10rem"
      alignItems="center"
      justifyContent="center"
      columnGap="1rem"
    >
      {logo}
      <Text fontFamily="'Poppins', sans-serif" fontSize="1.15rem">
        {message}
      </Text>
    </Box>
  );
}
