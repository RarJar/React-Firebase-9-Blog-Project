import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router/index";
import "./App.css";
import { ThemeContextProvider } from "./contexts/themeContext";
import { AuthContextProvider } from "./contexts/authContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  </AuthContextProvider>
);
