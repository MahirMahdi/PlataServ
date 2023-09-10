import { Box, Text, Image } from "@chakra-ui/react";

export default function Logo() {
  return (
    <Box
      w="80%"
      h="100%"
      display="flex"
      padding="0 1rem"
      alignItems="center"
      justifyContent="flex-start"
      columnGap=".35rem"
    >
      <Image
        src={`${import.meta.env.VITE_CDN_URL}/plataserv.png?`}
        cursor="pointer"
        alt="logo"
        w={{ base: "2.25rem", lg: "1.9rem", xl: "2.25rem" }}
        h={{ base: "2.25rem", lg: "1.9rem", xl: "2.25rem" }}
        data-testid="logo-image"
      />
      <Text
        cursor="pointer"
        fontSize={{ base: "1.35rem", lg: "1.15rem", xl: "1.35rem" }}
        color="#323130"
        fontFamily="'Poppins', sans-serif"
        data-testid="logo-title"
      >
        PlataServ
      </Text>
    </Box>
  );
}
