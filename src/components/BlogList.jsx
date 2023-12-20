import { useLocation } from "react-router-dom";
import BlogCard from "./BlogCard";
import Loading from "./Loading";
import Search from "./Search";
import useFirestore from "../hooks/useFirestore";

export default function BlogList() {
  let location = useLocation();
  let params = new URLSearchParams(location.search);
  let search = params.get("search");

  let { getCollection } = useFirestore();
  let { loading, datas: blogs } = getCollection("blogs", search);

  return (
    <div className="max-w-screen-xl mx-auto text-center p-5 md:p-10">
      <Search />
      {!!blogs && (
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-7">
          {blogs.map((blog) => (
            <div key={blog.id}>
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      )}

      {blogs && !loading && !blogs.length && (
        <div className="text-red-500 text-center text-xl py-[200px]">
          No Result Found !
        </div>
      )}

      {!!loading && <Loading />}
    </div>
  );
}
