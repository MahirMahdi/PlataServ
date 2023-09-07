import { Box, Image, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function FeatureCard({
  feature,
  align,
  authFunction,
  buttonIcon,
  featureTestId,
  linkTestId,
}) {
  const { icon, headline, tagline, image, buttonName } = feature;
  return (
    <Box
      display={{ base: "grid", lg: "flex" }}
      flexDirection={align === "reverse" && "row-reverse"}
      alignItems="center"
      justifyContent="space-between"
      rowGap="2rem"
      w="100%"
      data-testid={featureTestId}
    >
      <Box
        w={{ base: "100%", lg: "50%" }}
        display="grid"
        placeItems={{
          base: "start",
          lg: align === "reverse" ? "end" : "start",
        }}
        rowGap=".5rem"
      >
        <Box
          w="2.5rem"
          h="2.5rem"
          borderRadius="50%"
          display="grid"
          placeItems="center"
          bgColor="#323130"
        >
          {icon}
        </Box>
        <Heading
          size={{ base: "md", lg: "lg" }}
          fontFamily='"Cabin", sans-serif'
          textAlign="start"
        >
          {headline}
        </Heading>
        <Text
          w={{ base: "70%", lg: "60%" }}
          fontSize={{ base: "xs", md: "sm" }}
          fontFamily='"Inter", sans-serif'
          textAlign="start"
        >
          {tagline}
        </Text>
        {buttonName && (
          <Link to="/route-handler">
            <Button
              rightIcon={buttonIcon}
              variant="link"
              colorScheme="purple"
              onClick={authFunction}
              data-testid={linkTestId}
            >
              {buttonName}
            </Button>
          </Link>
        )}
      </Box>
      <img
        src={`${import.meta.env.VITE_CDN_URL}/tr:ar-2-1,w-0.3/${image}`}
        alt="hero-image"
        width="640"
        height="480"
        style={{ borderRadius: "5px", border: "1px solid #e8e8e8" }}
      />
    </Box>
  );
}
