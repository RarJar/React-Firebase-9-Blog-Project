import { useState } from "react";

export default function Form() {
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [category, setCategory] = useState("");
  let [categories, setCategories] = useState([]);

  let addCategory = () => {
    setCategories((prev) => [category, ...prev]);
    setCategory("");
  };

  let removeCategory = (category) => {
    setCategories((prev) =>
      prev.filter((categories) => categories !== category)
    );
  };

  return (
    <div className="max-w-xl mx-auto mt-16 flex w-full flex-col border rounded-lg bg-white p-8">
      <h1 className="title-font mb-1 text-xl font-medium text-gray-900">
        Blog Form
      </h1>
      <div className="mb-4">
        <label className="text-sm leading-7 text-gray-600">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
        />
      </div>
      <div className="mb-4">
        <label className="text-sm leading-7 text-gray-600">Category</label>
        <div className="flex">
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
          <button
            className=" py-1.5 px-3 ml-2 text-center bg-violet-700 border rounded-md text-white  hover:bg-violet-500 hover:text-gray-100 dark:text-gray-200 dark:bg-violet-700 hidden lg:block"
            onClick={addCategory}
          >
            Add
          </button>
        </div>
        <div className="py-1 flex-wrap mt-4 space-x-4 text-white">
          {categories.map((category) => (
            <button
              key={category}
              className="relative bg-sky-500 hover:bg-sky-700 duration-300 py-1 px-4 rounded"
            >
              {category}
              <span
                className="absolute bg-gray-500 w-6 h-6 flex justify-center items-center text-xs rounded-full -top-3 -right-3"
                onClick={() => removeCategory(category)}
              >
                X
              </span>
            </button>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <label className="text-sm leading-7 text-gray-600">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
        ></textarea>
      </div>
      <button className="rounded border-0 bg-violet-600 py-2 px-6 text-lg text-white hover:bg-violet-700 focus:outline-none">
        Submit
      </button>
    </div>
  );
}
