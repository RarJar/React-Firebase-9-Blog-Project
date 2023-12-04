import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
// import Layout from "../pages/Layouts/Layout";
// import FileNotFound from "../pages/errors/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // children: [
    //   {
    //     path: "",
    //     element: <Home />,
    //   },
    //   {
    //     path: "*",
    //     element: <FileNotFound />,
    //   },
    // ],
  },
]);

export default router;
