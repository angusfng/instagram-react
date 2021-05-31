import * as React from "react";
import { Box, Button, Flex, Image } from "@chakra-ui/react";
import { Link as RouterLink, useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };

  return (
    <Flex
      h="3.5rem"
      borderBottom="1px"
      borderColor="gray.200"
      align="center"
      justify="center"
    >
      <Box as={RouterLink} to="/">
        <Image
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Instagram logo"
          color="black"
        />
      </Box>
      <Button ml="1rem" onClick={handleLogout}>
        Logout
      </Button>
    </Flex>
  );
};

export default Navbar;
