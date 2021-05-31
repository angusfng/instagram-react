import * as React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import API from "../helpers/api";

interface CardProps {
  meta: {
    author: string;
    description_text: string;
    published: string;
    likes: number[];
  };
  thumbnail: string;
}

const Card = (props: CardProps) => {
  // const [src, setSrc] = React.useState("");
  // React.useEffect(() => {
  //   try {
  //     const getPost = async () => {
  //       const json = await API.get(`/post/?id=${props.id}`);
  //       setSrc(json.src);
  //     };
  //     getPost();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }, []);

  return (
    <Box
      maxW="600px"
      w="100%"
      border="1px"
      borderColor="gray.200"
      m="1rem"
      bg="white"
      borderRadius="5px"
    >
      <Flex h="4rem" align="center">
        <Text ml="1rem" fontWeight="bold">
          {props.meta.author}
        </Text>
      </Flex>
      <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" />
    </Box>
  );
};

export default Card;
