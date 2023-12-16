import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase/index";

export default function Form() {
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [category, setCategory] = useState("");
  let [categories, setCategories] = useState([]);
  let navigate = useNavigate();

  let addCategory = () => {
    if (category && categories.includes(category)) {
      return;
    }
    setCategories((prev) => [category, ...prev]);
    setCategory("");
  };

  let removeCategory = (category) => {
    setCategories((prev) =>
      prev.filter((categories) => categories !== category)
    );
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    let blog = {
      title,
      categories,
      description,
      created_at: serverTimestamp(),
    };

    let ref = collection(db, "blogs");
    addDoc(ref, blog);

    navigate("/");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto mt-16 flex w-full flex-col border rounded-lg bg-white dark:bg-darkCard p-8 mb-10"
    >
      <h1 className="title-font mb-1 text-xl font-medium text-gray-900 dark:text-white">
        Blog Form
      </h1>
      <div className="mb-4">
        <label className="text-sm leading-7 text-gray-600 dark:text-gray-200">
          Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded border border-gray-300 bg-white dark:bg-darkSecondary py-1 px-3 text-base leading-8 text-gray-700 dark:text-white outline-none"
        />
      </div>
      <div className="mb-4">
        <label className="text-sm leading-7  text-gray-600 dark:text-gray-200">
          Category
        </label>
        <div className="flex">
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded border border-gray-300 bg-white dark:bg-darkSecondary py-1 px-3 text-base leading-8 text-gray-700 dark:text-white outline-none"
          />
          <button
            type="button"
            className=" py-1.5 px-3 ml-2 text-center bg-violet-700 border rounded-md text-white  hover:bg-violet-500 hover:text-gray-100 dark:text-gray-200 dark:bg-violet-700"
            onClick={addCategory}
          >
            Add
          </button>
        </div>
        <div className="py-1 flex-wrap mt-4 space-x-4 text-white">
          {categories.map((category) => (
            <button
              key={category}
              className="relative bg-violet-400 py-1 px-4 rounded"
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
        <label className="text-sm leading-7 text-gray-600 dark:text-gray-200">
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="h-32 w-full resize-none rounded dark:text-white border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none dark:bg-darkSecondary"
        ></textarea>
      </div>

      <button className="rounded border-0 bg-violet-600 py-2 px-6 text-lg text-white hover:bg-violet-700 focus:outline-none">
        Submit
      </button>

      {/* {!!loading && (
        <button className="rounded cursor-not-allowed border-0 bg-violet-600 py-2 px-6 text-lg text-white hover:bg-violet-700 focus:outline-none">
          <svg
            aria-hidden="true"
            role="status"
            className="inline w-4 h-4 me-3 text-white animate-spin"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="#E5E7EB"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentColor"
            />
          </svg>
          Loading ...
        </button>
      )} */}
    </form>
  );
}
