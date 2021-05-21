import * as React from "react";

interface contextProps {
  children: React.ReactNode;
}

interface storeType {
  loggedIn: (boolean | React.Dispatch<React.SetStateAction<boolean>>)[];
}

export const StoreContext = React.createContext({} as storeType);

const Context = ({ children }: contextProps) => {
  const [loggedIn, setLoggedIn] = React.useState(
    localStorage.getItem("token") ? true : false
  );

  const store = {
    loggedIn: [loggedIn, setLoggedIn],
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default Context;
