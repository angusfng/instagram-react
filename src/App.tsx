import * as React from "react";
import { Flex } from "@chakra-ui/react";
import Navigation from "./Navigation";
import Context from "./helpers/context";

const App = () => {
  return (
    <Flex flexDirection="column" minHeight="100vh" color="gray.700">
      <Context>
        <Navigation />
      </Context>
    </Flex>
  );
};

export default App;
