import { Button } from "@chakra-ui/react";

export const LandingPageButton = ({
  name,
  testid,
  type,
  section,
  navigate,
}) => {
  const scrollToSection = (sectionName) => {
    document.querySelector(sectionName).scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <Button
      bgColor={type === "primary" ? "#323130" : "#dff4ce"}
      color={type === "primary" ? "white" : "#323130"}
      borderRadius="5px"
      fontFamily='"Inter", sans-serif'
      fontSize="xs"
      fontWeight={type === "primary" ? "normal" : "600"}
      onClick={section ? () => scrollToSection(section) : navigate}
      data-testid={testid}
    >
      {name}
    </Button>
  );
};
