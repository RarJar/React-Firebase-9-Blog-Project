import { createContext, useReducer } from "react";

let ThemeContext = createContext();

let ThemeReducer = (state, action) => {
  if (state.theme === "dark") {
    return { ...state, theme: "light" };
  } else {
    return { ...state, theme: "dark" };
  }
};

let ThemeContextProvider = ({ children }) => {
  let [state, dispatch] = useReducer(ThemeReducer, { theme: "light" });

  let changeTheme = () => {
    dispatch({ type: "CHANGE_THEME", payload: "dark" });
  };

  return (
    <ThemeContext.Provider value={{ ...state, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
