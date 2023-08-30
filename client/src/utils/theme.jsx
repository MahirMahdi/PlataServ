import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  xs: "480px",
  sm: "600px",
  md: "768px",
  lg: "1024px",
  xl: "1200px",
  "2xl": "1536px",
};

export const customTheme = extendTheme({ breakpoints });
