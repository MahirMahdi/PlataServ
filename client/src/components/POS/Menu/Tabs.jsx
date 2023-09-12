import { Box, Card, Text } from "@chakra-ui/react";

export default function Tabs({ handleClick, tab_state, categories }) {
  return (
    <Box
      w="100%"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      cursor="pointer"
      data-testid="menu-categories"
    >
      {categories.map((val, index) => (
        <Card
          direction="row"
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
          columnGap="1rem"
          _hover={{ bgColor: "#323130", color: "gray.100" }}
          padding="0 1rem"
          key={index}
          w="fit-content"
          h="2.5rem"
          onClick={() => handleClick(val.name)}
          id={tab_state === val.name ? `active` : ``}
          data-testid={`${val.name.toLowerCase()}-tab`}
        >
          <img src={val.image} alt={val.name} width="30px" height="30px" />
          <Text
            display={{ base: "none", sm: "block" }}
            fontFamily="'Roboto', sans-serif"
            fontSize=".9rem"
            fontWeight="light"
            textAlign="center"
          >
            {val.name}
          </Text>
        </Card>
      ))}
    </Box>
  );
}
