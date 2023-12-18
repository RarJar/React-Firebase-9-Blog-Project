// import { useLocation } from "react-router-dom";
import BlogCard from "./BlogCard";
import Loading from "./Loading";
import Search from "./Search";
import { db } from "../firebase/index";
import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

export default function BlogList() {
  // let location = useLocation();
  // let params = new URLSearchParams(location.search);
  // let search = params.get("search");
  // let url = search
  //   ? `http://localhost:3001/blogs?q=${search}`
  //   : "http://localhost:3001/blogs";
  // let { data: blogs, loading } = useDataFetch(url);

  let [loading, setLoading] = useState(false);
  let [blogs, setBlogs] = useState([]);

  useEffect(function () {
    setLoading(true);
    let refs = collection(db, "blogs");
    let q = query(refs, orderBy("created_at", "desc"));
    onSnapshot(q, (docs) => {
      let blogs = [];
      docs.forEach((doc) => {
        let blog = { id: doc.id, ...doc.data() };
        blogs.push(blog);
        setBlogs(blogs);

        setLoading(false);
      });
    });
  }, []);

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

      {/* {blogs && !blogs.length && (
        <div className="text-red-500 text-center text-xl py-[200px]">
          No Result Found !
        </div>
      )} */}

      {!!loading && <Loading />}
    </div>
  );
}
