import * as React from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  Link,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import API from "../helpers/api";
import useAlert from "../helpers/useAlert";
import MyAlert from "../components/MyAlert";
import { StoreContext } from "../helpers/context";

const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [alertData, editAlert] = useAlert();

  // Handle login
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const payload = {
        username: username,
        password: password,
      };
      const json = await API.post("/auth/login", payload);
      console.log(json);
    } catch (error) {
      editAlert("error", true, error);
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
        mb="10rem"
      >
        <Heading as="h1" mb="1rem">
          Login
        </Heading>
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl id="login-username">
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormControl>
            <FormControl id="login-password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
          </Stack>
          <Flex mt="1rem" align="center">
            <Button type="submit" size="lg" colorScheme="blue">
              Login
            </Button>
            <Text ml="1rem">
              Don't have an account?{" "}
              <Link as={RouterLink} to="/register" color="blue.500">
                Register
              </Link>
            </Text>
          </Flex>
        </form>
        <MyAlert alertData={alertData} editAlert={editAlert} />
      </Box>
    </Flex>
  );
};

export default Login;
