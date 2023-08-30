import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  SimpleGrid,
  Heading,
  Text,
} from "@chakra-ui/react";
import axios from "../api/api";
import { useState } from "react";

export default function Auth() {
  const [authType, setAuthType] = useState("signup");
  const [signupUsername, setSignupUsername] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupConfirmPassword, setSignupConfirmPassword] = useState("");
  const [signupRole, setSignupRole] = useState([]);

  const [signinRole, setSigninRole] = useState("");
  const [signinPassword, setSigninPassword] = useState("");
  const [signinEmail, setSigninEmail] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/signup",
        {
          username: signupUsername,
          email: signupEmail,
          password: signupPassword,
          role: signupRole,
        },
        { withCredentials: true }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/signup",
        {
          username: signupUsername,
          password: signupPassword,
          email: signupEmail,
          role: ["cashier"],
        },
        { withCredentials: true }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      w="100%vw"
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      as="main"
    >
      <Box
        w={{ base: "100%", md: "75%", lg: "50%", xl: "50%" }}
        h="100%"
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        rowGap="1.5rem"
        paddingX={{ base: "1.5rem", md: "2.5rem", xl: "4.5rem" }}
      >
        <Box>
          <Heading
            size={{ base: "lg", md: "xl" }}
            fontFamily='"Cabin", sans-serif'
            data-testid="landing-page-header"
          >
            {authType === "signup" ? "Create an account" : "Welcome back"}
          </Heading>
          <Text
            fontSize={{ base: "xs", md: "md" }}
            fontFamily='"Inter", sans-serif'
          >
            {authType === "signup"
              ? "Sign up now and get started."
              : "Please select a role and enter your details."}
          </Text>
        </Box>
        {authType === "signup" && (
          <form
            onSubmit={handleSignup}
            style={{
              width: "100%",
              display: "grid",
              placeItems: "center",
              rowGap: "1rem",
            }}
          >
            <Input
              type="text"
              variant="flushed"
              onChange={(e) => setSignupUsername(e.target.value)}
              value={signupUsername}
              placeholder="Username"
            />
            <Input
              type="email"
              variant="flushed"
              onChange={(e) => setSignupEmail(e.target.value)}
              value={signupEmail}
              placeholder="Email"
            />
            <Input
              type="password"
              onChange={(e) => setSignupPassword(e.target.value)}
              value={signupPassword}
              placeholder="Password"
              variant="flushed"
            />
            <Input
              type="password"
              onChange={(e) => setSignupPassword(e.target.value)}
              value={signupPassword}
              placeholder="Confirm Password"
              variant="flushed"
            />
          </form>
        )}
        {authType === "signin" && (
          <form
            onSubmit={handleSignup}
            style={{
              width: "100%",
              display: "grid",
              placeItems: "center",
              rowGap: "1rem",
            }}
          >
            <Input
              type="email"
              variant="flushed"
              onChange={(e) => setSignupEmail(e.target.value)}
              value={signupEmail}
              placeholder="Email"
            />
            <Input
              type="password"
              onChange={(e) => setSignupPassword(e.target.value)}
              value={signupPassword}
              placeholder="Password"
              variant="flushed"
            />
          </form>
        )}
        {authType === "signup" && (
          <>
            <Button
              w="100%"
              mt={4}
              bgColor="#323130"
              color="white"
              type="submit"
            >
              Signup
            </Button>
            <Box display="flex" alignItems="center" columnGap=".25rem">
              <Text
                fontSize={{ base: "xs", md: "md" }}
                fontFamily='"Inter", sans-serif'
              >
                Already have an account?
              </Text>
              <Text
                fontSize={{ base: "xs", md: "md" }}
                fontFamily='"Inter", sans-serif'
                fontWeight="600"
                color="#3182CE"
                cursor="pointer"
                _hover={{ opacity: ".45" }}
                onClick={() => setAuthType("signin")}
              >
                Signin
              </Text>
            </Box>
          </>
        )}
        {authType === "signin" && (
          <>
            <Button
              w="100%"
              mt={4}
              bgColor="#323130"
              color="white"
              type="submit"
            >
              Signin
            </Button>
            <Box display="flex" alignItems="center" columnGap=".25rem">
              <Text
                fontSize={{ base: "xs", md: "md" }}
                fontFamily='"Inter", sans-serif'
              >
                Don't have an account?
              </Text>
              <Text
                fontSize={{ base: "xs", md: "md" }}
                fontFamily='"Inter", sans-serif'
                fontWeight="600"
                color="#3182CE"
                cursor="pointer"
                _hover={{ opacity: ".45" }}
                onClick={() => setAuthType("signup")}
              >
                Signup
              </Text>
            </Box>
          </>
        )}
      </Box>
      <Box
        display={{ base: "none", lg: "grid" }}
        placeItems="center"
        w="100%"
        h="100%"
        bgColor="#dff4ce"
      >
        <img
          src={`${import.meta.env.VITE_CDN_URL}/tr:ar-2.36-1,w-0.3/mockup.png`}
          alt="mockup"
          width="640"
          height="270"
          style={{ borderRadius: "5px", border: "1px solid #e8e8e8" }}
        />
      </Box>
    </Box>
  );
}
