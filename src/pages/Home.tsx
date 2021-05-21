import * as React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { StoreContext } from "../helpers/context";

const Home = () => {
  return (
    <Flex>
      <Heading>Home</Heading>
    </Flex>
  );
};

export default Home;
