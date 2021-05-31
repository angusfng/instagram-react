import * as React from "react";
import { Text } from "@chakra-ui/react";
import { Switch, Route, useHistory } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { StoreContext } from "./helpers/context";

const Navigation = () => {
  const history = useHistory();
  const loggedIn = React.useContext(StoreContext).loggedIn[0];

  React.useEffect(() => {
    if (!loggedIn) {
      history.push("/login");
    }
  }, [loggedIn]);

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
    </Switch>
  );
};

export default Navigation;
