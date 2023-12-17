import { createContext, useEffect, useReducer } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/index";
let authContext = createContext();

let authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
};

let AuthContextProvider = ({ children }) => {
  let [state, dispatch] = useReducer(authReducer, { user: null });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({ type: "LOGIN", payload: user });
      } else {
        dispatch({ type: "LOGOUT" });
      }
    });
  }, []);

  return <authContext.Provider value={state}>{children}</authContext.Provider>;
};

export { authContext, AuthContextProvider };
