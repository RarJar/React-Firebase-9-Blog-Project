import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../pages/Layouts/Layout";
import FileNotFound from "../pages/Errors/404";
import Login from "../pages/Auth/Login";
import View from "../pages/View";
import BlogForm from "../components/BlogForm";
import Register from "../pages/Auth/Register";
import { RouterProvider } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../contexts/authContext";

export default function index() {
  let { user } = useContext(authContext);
  let isLogin = Boolean(user);

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
          element: isLogin ? <BlogForm /> : <Navigate to="/" />,
        },
        {
          path: "/login",
          element: !isLogin ? <Login /> : <Navigate to="/" />,
        },
        {
          path: "/register",
          element: !isLogin ? <Register /> : <Navigate to="/" />,
        },
        {
          path: "*",
          element: <FileNotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
