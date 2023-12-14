import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../pages/Layouts/Layout";
import FileNotFound from "../pages/Errors/404";
import Login from "../pages/Auth/Login";
import View from "../pages/View";
import BlogForm from "../components/BlogForm";
import Register from "../pages/Auth/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/blog/:id",
        element: <View />,
      },
      {
        path: "/form",
        element: <BlogForm />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "*",
        element: <FileNotFound />,
      },
    ],
  },
]);

export default router;
