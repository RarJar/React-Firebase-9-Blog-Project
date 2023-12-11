import { useNavigate } from "react-router-dom";

export default function Search() {
  let navigate = useNavigate();
  let searchBlog = (e) => {
    navigate("/?search=" + e.target.value);
  };

  return (
    <input
      type="search"
      className="border mb-3 flex justify-between dark:text-white w-full lg:w-[350px] bg-gray-100 dark:bg-darkCard items-center border-gray-300 rounded-md placeholder-current h-10 px-5 focus:outline-none"
      placeholder="Search blog"
      onChange={searchBlog}
    />
  );
}
