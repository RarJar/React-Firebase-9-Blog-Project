import { createContext } from "react";

let authContext = createContext();

let AuthContextProvider = ({ children }) => {
  return (
    <authContext.Provider value={{ user: "lee" }}>
      {children}
    </authContext.Provider>
  );
};

export { authContext, AuthContextProvider };
