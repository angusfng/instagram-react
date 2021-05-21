import React from "react";
import {
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";

const Register = () => {
  return (
    <Flex>
      <Stack spacing={4}>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
        </FormControl>
      </Stack>
    </Flex>
  );
};

export default Register;
