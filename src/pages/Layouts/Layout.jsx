import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import LogoutModal from "../../components/LogoutModal";
import { useState } from "react";

export default function Layout() {
  let [openModal, setOpenModal] = useState(false);

  return (
    <div className="bg-gray-50 dark:bg-darkSecondary">
      <LogoutModal
        openModal={openModal}
        setOpenModal={setOpenModal}
      ></LogoutModal>

      <Navbar createOpenModal={() => setOpenModal(true)} />
      <Outlet />
      <Footer />
    </div>
  );
}
