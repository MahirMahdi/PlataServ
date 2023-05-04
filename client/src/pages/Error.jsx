import { Box, Heading, Text } from "@chakra-ui/react";

export default function Error() {
  return (
    <Box
      display="grid"
      placeItems="center"
      textAlign="center"
      height="100vh"
      margin="auto"
    >
      <Box>
        <Heading fontFamily='"Cabin", sans-serif' size="lg">
          404 NOT FOUND
        </Heading>
        <Text fontFamily='"Inter", sans-serif'>
          Sorry, we were unable to find that page.
        </Text>
      </Box>
    </Box>
  );
}
