import * as React from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import MyAlert from "../components/MyAlert";
import useAlert from "../helpers/useAlert";

const Register = () => {
  const [name, setName] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  // Alert
  const [alertData, editAlert] = useAlert();

  // Handle login
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      editAlert("error", true, "Passwords do not match");
      return;
    }
    setUsername("");
    setPassword("");
  };

  return (
    <Flex flex="1" bg="#fafafa" justify="center" align="center">
      <Box
        maxW="30rem"
        w="100%"
        border="1px"
        borderColor="gray.200"
        m="1rem"
        borderRadius="5px"
        bg="white"
        p="1rem"
        h="fit-content"
      >
        <Heading as="h1" mb="1rem">
          Register
        </Heading>
        <form onSubmit={(e) => handleSubmit(e)}>
          <Stack spacing={4}>
            <FormControl id="register-name">
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl id="register-username">
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormControl>
            <FormControl id="register-password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <FormControl id="register-confirm-password">
              <FormLabel>Confirm Password</FormLabel>
              <Input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </FormControl>
            <FormControl id="register-email">
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
          </Stack>
          <Flex mt="1rem" w="100%" align="center">
            <Button type="submit" size="lg" colorScheme="blue">
              Register
            </Button>
            <Text ml="1rem">
              Already have an account?{" "}
              <Link as={RouterLink} to="/login" color="blue.500">
                Login
              </Link>
            </Text>
          </Flex>
        </form>
        <MyAlert alertData={alertData} editAlert={editAlert} />
      </Box>
    </Flex>
  );
};

export default Register;
