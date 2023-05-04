import { Box, CircularProgress } from "@chakra-ui/react";

export default function Loading() {
  return (
    <Box w="100vw" h="100vh" display="grid" placeItems="center">
      <CircularProgress color="#323130" isIndeterminate />
    </Box>
  );
}
