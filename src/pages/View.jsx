import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import useFirestore from "../hooks/useFirestore";
import moment from "moment";

export default function View() {
  let params = useParams();

  let { getDocument } = useFirestore();
  let { loading, data: blog } = getDocument("blogs", params);

  return (
    <div className="max-w-screen-lg mx-auto p-5 sm:p-10 md:p-16">
      {!!blog && (
        <div className="rounded overflow-hidden flex flex-col mx-auto">
          <a className="text-xl sm:text-4xl mb-5 font-semibold inline-block dark:text-white">
            {blog.title}
          </a>

          <img
            className="w-full"
            src="https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=625.0&amp;sharp=10&amp;w=1500"
            alt="Sunset in the mountains"
          />
          <div className="py-3 text-md font-regular text-gray-900 dark:text-white flex">
            <span className="mr-3 flex flex-row items-center">
              <span className="ml-1">
                {moment(blog?.created_at?.seconds * 1000).fromNow()}
              </span>
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
