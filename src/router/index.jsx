import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../pages/Layouts/Layout";
import FileNotFound from "../pages/errors/404";
import View from "../pages/View";
import Form from "../components/Form";

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
        element: <Form />,
      },
      {
        path: "*",
        element: <FileNotFound />,
      },
    ],
  },
]);

export default router;
