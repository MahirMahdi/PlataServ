import { extendTheme } from "@chakra-ui/react";

const textStyles = {
  h1: {
    fontFamily: "",
    fontSize: ["48px", "72px"],
    fontWeight: "bold",
    lineHeight: "110%",
    letterSpacing: "-2%",
  },
  h2: {
    fontSize: ["36px", "48px"],
    fontWeight: "semibold",
    lineHeight: "110%",
    letterSpacing: "-1%",
  },
  body: {
    fontFamily: '"Poppins", sans-serif',
    fontSize: ["48px", "72px"],
    fontWeight: "bold",
    lineHeight: "110%",
    letterSpacing: "-2%",
  },
};

// 2. Update the breakpoints as key-value pairs
const breakpoints = {
  xs: "480px",
  sm: "600px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  "2xl": "1536px",
};

// 3. Extend the theme
export const customTheme = extendTheme({ breakpoints });
