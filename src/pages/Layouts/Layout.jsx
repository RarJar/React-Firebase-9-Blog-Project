// import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Home from "../Home";

export default function Layout() {
  return (
    <div>
      <Navbar />
      {/* <Outlet /> */}
      <Home />
      <Footer />
    </div>
  );
}
