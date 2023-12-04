import { useParams } from "react-router-dom";
import useDataFetch from "../hooks/useDataFetch";
import Loading from "../components/Loading";

export default function View() {
  let params = useParams();
  let url = "http://localhost:3001/blogs/";
  let { data: blog, loading } = useDataFetch(url + params.id);

  return (
    <div className="max-w-screen-lg mx-auto p-5 sm:p-10 md:p-16">
      {!!blog && (
        <div className="mb-10 rounded overflow-hidden flex flex-col mx-auto">
          <a
            href="#"
            className="text-xl sm:text-4xl font-semibold inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-2"
          >
            {blog.title}
          </a>

          <div className="relative">
            <a href="#">
              <img
                className="w-full"
                src="https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=625.0&amp;sharp=10&amp;w=1500"
                alt="Sunset in the mountains"
              />
            </a>
          </div>
          <div className="py-3 text-md font-regular text-gray-900 flex">
            <span className="mr-3 flex flex-row items-center">
              <span className="ml-1">6 mins ago</span>
            </span>
            <a
              href="#"
              className="flex flex-row items-center hover:text-indigo-600"
            >
              <svg
                className="text-indigo-600"
                fill="currentColor"
                height="16px"
                aria-hidden="true"
                role="img"
                focusable="false"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                ></path>
                <path d="M0 0h24v24H0z" fill="none"></path>
              </svg>
              <span className="ml-1">AliSher Azimi</span>
            </a>
          </div>
          <p className="text-gray-700 py-3 text-base leading-8">
            {blog.description}
          </p>
          <hr />
        </div>
      )}

      {!!loading && <Loading />}
    </div>
  );
}
