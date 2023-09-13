import { Box, Heading, Text } from "@chakra-ui/react";

export default function HelpAndSupport() {
  return (
    <Box
      display="grid"
      placeItems="center"
      textAlign="center"
      height="100vh"
      margin="auto"
    >
      <Box>
        <Heading
          fontFamily='"Cabin", sans-serif'
          size="lg"
          data-testid="help-support-header"
        >
          Coming Soon...
        </Heading>
        <Text fontFamily='"Inter", sans-serif'>
          We're putting the finishing touches on our page and will have it ready
          for you shortly!
        </Text>
      </Box>
    </Box>
  );
}
