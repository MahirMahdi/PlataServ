import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import axios from "../api/api";
import { useState } from "react";

export default function Login() {
  const [signupUsername, setSignupUsername] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupEmail, setSignupEmail] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "/signup",
      {
        username: signupUsername,
        password: signupPassword,
        email: signupEmail,
      },
      { withCredentials: true }
    );

    console.log(response);
  };
  return (
    <form onSubmit={handleSignup}>
      <FormControl isRequired>
        <FormLabel>Username</FormLabel>
        <Input
          type="text"
          onChange={(e) => setSignupUsername(e.target.value)}
          value={signupUsername}
          placeholder="Username"
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          onChange={(e) => setSignupEmail(e.target.value)}
          value={signupEmail}
          placeholder="Email"
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          onChange={(e) => setSignupPassword(e.target.value)}
          value={signupPassword}
          placeholder="Password"
        />
      </FormControl>
      <Button mt={4} colorScheme="teal" type="submit">
        Submit
      </Button>
    </form>
  );
}
