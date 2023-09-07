import {
  FormControl,
  FormErrorMessage,
  Input,
  Button,
  Box,
  Heading,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "../api/api";
import { useState } from "react";
import { FaCashRegister, FaUsersCog } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Auth() {
  const toast = useToast();
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const [authType, setAuthType] = useState("signup");
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const [signupUsername, setSignupUsername] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupConfirmPassword, setSignupConfirmPassword] = useState("");
  const [signupRole, setSignupRole] = useState([]);

  const [loginRole, setLoginRole] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");

  const roles = [
    {
      name: "Cashier",
      role: ["Cashier"],
      active: signupRole.length === 1 && signupRole[0] === "Cashier",
    },
    {
      name: "Manager",
      role: ["Manager"],
      active: signupRole.length === 1 && signupRole[0] === "Manager",
    },
    {
      name: "Both",
      role: ["Cashier", "Manager"],
      active: signupRole.length === 2 && signupRole[1] === "Manager",
    },
  ];

  const enableSignup =
    emailRegex.test(signupEmail) &&
    signupPassword &&
    signupUsername &&
    signupPassword &&
    signupConfirmPassword &&
    signupRole.length > 0 &&
    signupConfirmPassword === signupPassword;

  const enableLogin = emailRegex.test(loginEmail) && loginPassword && loginRole;

  const showToast = (type, message) => {
    return toast({
      title: message,
      status: type,
      duration: 1000,
      isClosable: true,
    });
  };

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
      showToast("success", response.data.message);
      setAuthType("login");
    } catch (error) {
      showToast("error", error.response.data.message ?? "Error");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/login",
        {
          email: loginEmail,
          password: loginPassword,
          role: [loginRole],
        },
        { withCredentials: true }
      );
      showToast("success", response.data.message);
      setUser({
        user: response.data.user,
        accessToken: response.data.accessToken,
      });
      navigate("/route-handler");
    } catch (error) {
      console.log(error);
      showToast("error", error.response.data.message ?? "Error");
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
        <Box w="100%" textAlign="left">
          <Heading
            size={{ base: "lg", md: "xl" }}
            fontFamily='"Cabin", sans-serif'
            data-testid="landing-page-header"
          >
            {authType === "signup" ? "Create an account" : "Welcome back"}
          </Heading>
          <Text
            fontSize={{ base: "sm", md: "md" }}
            fontFamily='"Inter", sans-serif'
          >
            {authType === "signup"
              ? "Sign up now and get started."
              : "Please select a role and enter your details to login."}
          </Text>
        </Box>
        {authType === "signup" && (
          <form
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
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
            <FormControl isInvalid={!emailRegex.test(signupEmail)}>
              <Input
                type="email"
                variant="flushed"
                onChange={(e) => setSignupEmail(e.target.value)}
                value={signupEmail}
                placeholder="Email"
              />
              <FormErrorMessage>Invalid email.</FormErrorMessage>
            </FormControl>
            <Input
              type="password"
              onChange={(e) => setSignupPassword(e.target.value)}
              value={signupPassword}
              placeholder="Password"
              variant="flushed"
            />
            <FormControl isInvalid={signupPassword !== signupConfirmPassword}>
              <Input
                type="password"
                onChange={(e) => setSignupConfirmPassword(e.target.value)}
                value={signupConfirmPassword}
                placeholder="Confirm Password"
                variant="flushed"
              />
              <FormErrorMessage>Password does not match</FormErrorMessage>
            </FormControl>
            <Text
              fontSize={{ base: "sm", md: "md" }}
              fontFamily='"Inter", sans-serif'
              alignSelf="flex-start"
              mt={4}
            >
              Please select a role
            </Text>
            <Box display="flex" alignItems="center" columnGap="1rem" w="100%">
              {roles.map((role) => (
                <Button
                  key={role.name}
                  bgColor={role.active ? "#dff4ce" : "#323130"}
                  color={role.active ? "#323130" : "white"}
                  fontFamily='"Inter", sans-serif'
                  fontSize="xs"
                  onClick={() => setSignupRole(role.role)}
                >
                  {role.name}
                </Button>
              ))}
            </Box>
          </form>
        )}
        {!loginRole && authType === "login" && (
          <Box w="100%" display="grid" rowGap="1rem">
            <Button
              onClick={() => setLoginRole("Cashier")}
              variant="outline"
              leftIcon={<FaCashRegister />}
              w="100%"
              bgColor="#323130"
              color="white"
            >
              Cashier
            </Button>
            <Button
              onClick={() => setLoginRole("Manager")}
              variant="outline"
              leftIcon={<FaUsersCog />}
              w="100%"
              bgColor="#323130"
              color="white"
            >
              Manager
            </Button>
          </Box>
        )}
        {loginRole && authType === "login" && (
          <form
            style={{
              width: "100%",
              display: "grid",
              placeItems: "center",
              rowGap: "1rem",
            }}
          >
            <FormControl isInvalid={!emailRegex.test(loginEmail)}>
              <Input
                type="email"
                variant="flushed"
                onChange={(e) => setLoginEmail(e.target.value)}
                value={loginEmail}
                placeholder="Email"
              />
              <FormErrorMessage>Invalid email.</FormErrorMessage>
            </FormControl>
            <Input
              type="password"
              onChange={(e) => setLoginPassword(e.target.value)}
              value={loginPassword}
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
              isDisabled={!enableSignup}
              onClick={handleSignup}
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
                onClick={() => setAuthType("login")}
              >
                Login
              </Text>
            </Box>
          </>
        )}
        {loginRole && authType === "login" && (
          <>
            <Button
              w="100%"
              mt={4}
              bgColor="#323130"
              color="white"
              type="submit"
              isDisabled={!enableLogin}
              onClick={handleLogin}
            >
              Login
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
                onClick={() => {
                  setAuthType("signup");
                  setLoginRole("");
                }}
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
