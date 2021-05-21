import * as React from "react";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";

const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  // Handle login
  const handleSubmit = () => {
    return;
  };

  return (
    <Flex flex="1" justify="center" align="center" bg="#fafafa">
      <Box
        maxW="30rem"
        w="100%"
        border="1px"
        borderColor="gray.200"
        m="1rem"
        borderRadius="5px"
        bg="white"
        p="1rem"
      >
        <Heading as="h1" mb="1rem">
          Login
        </Heading>
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl id="login-username">
              <FormLabel>Username</FormLabel>
              <Input type="text" placeholder="Username" />
            </FormControl>
            <FormControl id="login-password">
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="Password" />
            </FormControl>
          </Stack>
          <Button type="submit" mt="1rem" size="lg" colorScheme="blue">
            Login
          </Button>
        </form>
        <Alert status="error" mt="1rem" borderRadius="5px" visibility="hidden">
          <AlertIcon />
          There was an error processing your request
        </Alert>
      </Box>
    </Flex>
  );
};

export default Login;
