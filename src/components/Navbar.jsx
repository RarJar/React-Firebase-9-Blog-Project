import { Link } from "react-router-dom";
import "../assets/css/index.css";
import useTheme from "../hooks/useTheme";
import { useContext, useEffect } from "react";
import { authContext } from "../contexts/authContext";

export default function Navbar({ createOpenModal }) {
  let { theme, changeTheme } = useTheme();
  let { user } = useContext(authContext);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <nav className="sticky top-0 p-4 z-10 flex justify-between items-center bg-white dark:bg-darkPrimary border-b-2">
      <Link className="text-3xl font-bold text-primary dark:text-white" to="/">
        Library Store
      </Link>
      <div className="flex space-x-1 items-center">
        <label
          htmlFor="dark-toggle"
          className="flex items-center cursor-pointer mr-1"
        >
          <div className="relative">
            <input
              type="checkbox"
              name="dark-mode"
              id="dark-toggle"
              className="checkbox hidden"
              onClick={changeTheme}
            ></input>
            <div className="block border-[1px] dark:border-white border-gray-900 w-14 h-8 rounded-full"></div>
            <div className="dot absolute left-1 top-1 dark:bg-white bg-gray-800 w-6 h-6 rounded-full transition"></div>
          </div>
        </label>

        {!!user && (
          <Link to="/profile">
            <img
              className="w-10 h-10 rounded-full border border-black cursor-pointer"
              src={
                user?.photoURL
                  ? user?.photoURL
                  : `https://cdn.vectorstock.com/i/preview-1x/17/61/male-avatar-profile-picture-vector-10211761.jpg`
              }
            ></img>
          </Link>
        )}

        {!!user && (
          <Link to="/form">
            <button className="py-1.5 px-3 m-1 text-center bg-violet-700 rounded-md text-white  hover:bg-violet-500 dark:bg-violet-700 hidden lg:block cursor-pointer">
              Create Blog
            </button>
          </Link>
        )}
        <div>
          {!user && (
            <Link
              to="/login"
              className=" py-1.5 px-3 m-1 text-center bg-gray-100 border border-gray-300 rounded-md text-black  hover:bg-gray-100 dark:text-gray-300 dark:bg-gray-600 hidden lg:inline-block"
            >
              Login
            </Link>
          )}
          {!!user && (
            <button
              onClick={() => createOpenModal()}
              className="py-1.5 px-3 m-1 text-center text-white rounded-md bg-red-600 hidden lg:inline-block "
            >
              Logout
            </button>
          )}
        </div>
        <button
          className="navbar-burger lg:hidden flex items-center text-primary dark:text-gray-100 p-1"
          id="navbar_burger"
        >
          <svg
            className="block h-6 w-6 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}
