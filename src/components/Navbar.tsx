import * as React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex
      h="3.5rem"
      borderBottom="1px"
      borderColor="gray.200"
      justify="center"
      align="center"
    >
      <Flex>
        <Box as={RouterLink} to="/">
          <Image
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="Instagram logo"
            color="black"
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Navbar;
