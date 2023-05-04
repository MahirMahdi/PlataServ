import { Box, Card, CardBody, Text, GridItem, Image } from "@chakra-ui/react";

export default function MenuCard({ product, addProductToOrder }) {
  const { image, price, name, discount_period } = product;

  return (
    <GridItem>
      <Card
        w={{ base: 150, xl: 175 }}
        h={150}
        variant="unstyled"
        onClick={addProductToOrder}
        cursor="pointer"
        display="grid"
        rowGap=".5rem"
      >
        {discount_period && (
          <Box
            w={{ base: "40%", lg: "30%" }}
            h="1.5rem"
            bgColor="green"
            fontSize=".75rem"
            zIndex={1}
            pos="absolute"
            textAlign="center"
            borderTopLeftRadius="inherit"
            color="white"
          >
            10% OFF
          </Box>
        )}
        <Image
          src={image}
          alt={name}
          height="100px"
          width="150px"
          borderRadius="inherit"
        />
        <CardBody h={50}>
          <Box display="grid" rowGap=".25rem">
            <Text
              fontFamily="'Poppins', sans-serif"
              color="#595959"
              fontSize={{ base: ".75rem", lg: ".85rem" }}
            >
              {name}
            </Text>
            {discount_period ? (
              <Box
                fontFamily="'Lato', sans-serif"
                fontSize={{ base: ".8rem", lg: ".95rem" }}
              >
                <sup style={{ fontWeight: "bold" }}>$</sup>
                {(price - price * 0.1).toFixed(2)}
                <strike style={{ fontSize: ".75rem" }}>${price}</strike>
              </Box>
            ) : (
              <Box
                fontFamily="'Roboto', sans-serif"
                fontWeight="bold"
                fontSize={{ base: ".8rem", lg: ".9rem" }}
              >
                <sup style={{ fontWeight: "bold" }}>$</sup>
                {price}
              </Box>
            )}
          </Box>
        </CardBody>
      </Card>
    </GridItem>
  );
}
