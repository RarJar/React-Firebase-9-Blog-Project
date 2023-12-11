import { useLocation } from "react-router-dom";
import useDataFetch from "../hooks/useDataFetch";
import BlogCard from "./BlogCard";
import Loading from "./Loading";
import Search from "./Search";

export default function BlogList() {
  let location = useLocation();
  let params = new URLSearchParams(location.search);
  let search = params.get("search");
  let url = search
    ? `http://localhost:3001/blogs?q=${search}`
    : "http://localhost:3001/blogs";
  let { data: blogs, loading } = useDataFetch(url);

  return (
    <div className="max-w-screen-xl mx-auto text-center p-5 md:p-10">
      <Search />
      {!!blogs && (
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-7">
          {blogs.map((blog) => (
            <div key="index">
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      )}

      {blogs && !blogs.length && (
        <div className="text-red-500 text-center text-xl py-[200px]">
          No Result Found !
        </div>
      )}

      {!!loading && <Loading />}
    </div>
  );
}
