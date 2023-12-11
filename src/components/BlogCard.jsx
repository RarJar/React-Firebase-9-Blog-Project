import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  return (
    <div
      key={blog.id}
      className="!text-start h-[485px] shadow-md bg-white dark:bg-darkCard rounded-md flex flex-col justify-between leading-normal"
    >
      <img
        src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
        className="w-full mb-3 rounded-t-md"
      />
      <div className="p-4 pt-2">
        <div className="mb-6">
          <Link
            to={`/blog/${blog.id}`}
            className="text-gray-900 dark:text-white font-medium text-xl tracking-widest mb-2 hover:text-indigo-600 dark:hover:text-indigo-600 inline-block"
          >
            {blog.title}
          </Link>
          <div className="py-1 flex-wrap space-x-2">
            {blog.categories.map((category) => (
              <a
                key={category}
                href="#"
                className="bg-indigo-200 hover:bg-indigo-300 py-1 px-2 rounded-lg text-sm"
              >
                {category}
              </a>
            ))}
          </div>
          <p className="text-gray-700 dark:text-white text-md line-clamp-3 leading-6">
            {blog.description}
          </p>
        </div>
        <div className="flex items-center">
          <a href="#">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src="https://tailwindcss.com/img/jonathan.jpg"
              alt="Avatar of Jonathan Reinink"
            />
          </a>
          <div className="text-sm">
            <a
              href="#"
              className="text-gray-900 dark:text-white font-semibold leading-none"
            >
              Jonathan Reinink
            </a>
            <p className="text-gray-600 dark:text-white">Aug 18</p>
          </div>
        </div>
      </div>
    </div>
  );
}
