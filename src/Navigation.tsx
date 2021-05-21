import * as React from "react";
import { Text } from "@chakra-ui/react";
import { Switch, Route, useHistory } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import { StoreContext } from "./helpers/context";
import Register from "./pages/Register";

const Navigation = () => {
  return (
    <Switch>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/">
        <Navbar />
        <Home />
      </Route>
      <Route exact path="/users">
        <Text>users</Text>
      </Route>
    </Switch>
  );
};

export default Navigation;
