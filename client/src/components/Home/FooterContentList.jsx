import { Box, Heading, Text } from "@chakra-ui/react";

export default function FooterContentList({ content }) {
  const { heading, content_list } = content;
  return (
    <Box
      textAlign="center"
      display="grid"
      rowGap=".25rem"
      flexBasis={{ base: "33.33%", sm: "25%" }}
      h="fit-content"
    >
      <Heading
        fontSize={{ base: "xl", md: "2xl" }}
        fontFamily='"Cabin", sans-serif'
        mb=".5rem"
      >
        {heading}
      </Heading>
      {content_list.map((item, i) => (
        <Text
          key={i}
          fontSize={{ base: "xs", md: "sm" }}
          color="#595959"
          fontFamily='"Inter", sans-serif'
        >
          {item}
        </Text>
      ))}
    </Box>
  );
}
