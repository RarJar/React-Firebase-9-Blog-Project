import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../pages/Layouts/Layout";
import FileNotFound from "../pages/Errors/404";
import Login from "../pages/Auth/Login";
import View from "../pages/View";
import BlogForm from "../components/BlogForm";
import Register from "../pages/Auth/Register";

// import { useContext } from "react";
// import { authContext } from "../contexts/authContext";

// let { user } = useContext(authContext);
let isLogin = true;

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

export default router;
