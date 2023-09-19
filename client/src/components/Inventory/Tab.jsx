import { Card, Circle, Text } from "@chakra-ui/react";

export default function Tab({ data, handleClick, tab_state }) {
  const { icon, name, color } = data;
  return (
    <Card
      w={{ base: "45vw", sm: "30vw", lg: "17.5vw", xl: "15vw" }}
      h={{ base: "2.5rem", sm: "3rem" }}
      variant="elevated"
      direction="row"
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      padding="0 1rem"
      columnGap="1rem"
      cursor="pointer"
      _hover={{ bgColor: "#323130", color: "gray.100" }}
      onClick={() => handleClick(name)}
      id={tab_state === name ? `active` : ``}
      data-testid={name}
    >
      <Circle
        size={{ base: "24px", sm: "30px" }}
        fontSize="inherit"
        bg={color}
        color="white"
      >
        {icon}
      </Circle>
      <Text fontSize={{ base: "1rem", sm: "1.1rem" }}>{name}</Text>
    </Card>
  );
}
