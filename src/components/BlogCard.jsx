import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  return (
    <div
      key={blog.id}
      className="border-r !text-start border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal"
    >
      <img
        src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
        className="w-full mb-3"
      />
      <div className="p-4 pt-2">
        <div className="mb-8">
          <Link
            to={`/blog/${blog.id}`}
            className="text-gray-900 font-medium text-xl tracking-widest mb-2 hover:text-indigo-600 inline-block"
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
          <p className="text-gray-700 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
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
              className="text-gray-900 font-semibold leading-none hover:text-indigo-600"
            >
              Jonathan Reinink
            </a>
            <p className="text-gray-600">Aug 18</p>
          </div>
        </div>
      </div>
    </div>
  );
}
