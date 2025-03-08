import { Box, Heading, Text } from "@chakra-ui/react";

export default function Unauthorized() {
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
          403 FORBIDDEN
        </Heading>
        <Text fontFamily='"Inter", sans-serif'>
          Sorry, you're not authorized to go to this page.
        </Text>
        <a href="/">
          <Text textDecoration={"underline"} fontFamily='"Inter", sans-serif'>
            Go back to the home page
          </Text>
        </a>
      </Box>
    </Box>
  );
}
