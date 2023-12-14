import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { useEffect, useState } from "react";
import { db } from "../firebase/index";
import { doc, onSnapshot } from "firebase/firestore";

export default function View() {
  let params = useParams();
  let [loading, setLoading] = useState(false);
  let [blog, setBlog] = useState(null);

  useEffect(() => {
    setLoading(true);
    let ref = doc(db, "blogs", params.id);
    onSnapshot(ref, (doc) => {
      let blog = { id: doc.id, ...doc.data() };
      setBlog(blog);
      setLoading(false);
    });
  }, [params.id]);

  return (
    <div className="max-w-screen-lg mx-auto p-5 sm:p-10 md:p-16">
      {!!blog && (
        <div className="mb-10 rounded overflow-hidden flex flex-col mx-auto">
          <a className="text-xl sm:text-4xl font-semibold inline-block dark:text-white mb-2">
            {blog.title}
          </a>

          <img
            className="w-full"
            src="https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=625.0&amp;sharp=10&amp;w=1500"
            alt="Sunset in the mountains"
          />
          <div className="py-3 text-md font-regular text-gray-900 dark:text-white flex">
            <span className="mr-3 flex flex-row items-center">
              <span className="ml-1">6 mins ago</span>
            </span>
          </div>
          <p className="text-gray-700  dark:text-white py-3 text-base leading-8">
            {blog.description}
          </p>
          <hr />
        </div>
      )}

      {!!loading && <Loading />}
    </div>
  );
}
