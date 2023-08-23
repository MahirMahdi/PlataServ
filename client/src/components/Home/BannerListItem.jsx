import { Box, Text } from "@chakra-ui/react";

export default function BannerListItem({ item }) {
  const { name, icon, fontFamily } = item;
  return (
    <Box display="flex" alignItems="center">
      {icon}
      <Text
        fontFamily={fontFamily}
        fontSize={{ base: "16px", sm: "18px", lg: "20px" }}
        fontWeight="medium"
      >
        {name}
      </Text>
    </Box>
  );
}
