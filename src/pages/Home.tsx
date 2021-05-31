import * as React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import API from "../helpers/api";
import Card from "../components/Card";
import { FeedPost } from "../helpers/types";

const Home = () => {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    const getFeed = async () => {
      try {
        const json = await API.get("/user/feed");
        setPosts(json.posts);
        console.log(json);
      } catch (error) {
        console.error(error);
      }
    };
    getFeed();
  }, []);

  return (
    <Flex flexDirection="column" align="center" p="1rem" bg="#fafafa">
      {posts.map((p: FeedPost) => (
        <Card key={p.id} thumbnail={p.src} meta={p.meta} />
      ))}
    </Flex>
  );
};

export default Home;
