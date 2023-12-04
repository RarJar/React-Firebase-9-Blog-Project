import useDataFetch from "../hooks/useDataFetch";
import BlogCard from "./BlogCard";
import Loading from "./Loading";

export default function BlogList() {
  let url = "http://localhost:3001/blogs";
  let { data: blogs, loading } = useDataFetch(url);

  return (
    <div className="max-w-screen-xl mx-auto text-center p-5 sm:p-10 md:p-16">
      {!!blogs && (
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-7">
          {blogs.map((blog) => (
            <div key="index">
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      )}

      {!!loading && <Loading />}
    </div>
  );
}
