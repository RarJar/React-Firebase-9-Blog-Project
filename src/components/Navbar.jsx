import { Link } from "react-router-dom";
import "../assets/css/index.css";
import useTheme from "../hooks/useTheme";
import { useEffect } from "react";

export default function Navbar() {
  let { theme, changeTheme } = useTheme();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div>
      <nav className="relative p-4 flex justify-between items-center bg-white dark:bg-darkPrimary border-b-2">
        <Link
          className="text-3xl font-bold text-primary dark:text-white"
          to="/"
        >
          Library Store
        </Link>
        <div className="flex">
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

          <Link to="/form">
            <button className=" py-1.5 px-3 m-1 text-center bg-violet-700 border rounded-md text-white  hover:bg-violet-500 hover:text-gray-100 dark:text-gray-200 dark:bg-violet-700 hidden lg:block">
              Create Blog
            </button>
          </Link>

          <div>
            <span
              className="hidden"
              id="util_data"
              data="{{ json_encode($util_data) }}"
            ></span>
            <Link
              to="/login"
              className=" py-1.5 px-3 m-1 text-center bg-gray-100 border border-gray-300 rounded-md text-black  hover:bg-gray-100 dark:text-gray-300 dark:bg-gray-600 hidden lg:inline-block "
              href="https://tailwindflex.com/login"
            >
              Login
            </Link>
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
    </div>
  );
}
