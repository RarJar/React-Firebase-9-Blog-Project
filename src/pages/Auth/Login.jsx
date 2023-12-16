import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  //   let [category, setCategory] = useState("");
  //   let [categories, setCategories] = useState([]);
  //   let navigate = useNavigate();

  //   let addCategory = () => {
  //     if (category && categories.includes(category)) {
  //       return;
  //     }
  //     setCategories((prev) => [category, ...prev]);
  //     setCategory("");
  //   };

  //   let removeCategory = (category) => {
  //     setCategories((prev) =>
  //       prev.filter((categories) => categories !== category)
  //     );
  //   };

  //   let handleSubmit = (e) => {
  //     e.preventDefault();

  //     let blog = {
  //       id: Math.floor(Math.random() * 1000),
  //       title,
  //       categories,
  //       description,
  //       created_at: serverTimestamp(),
  //     };

  //     let ref = collection(db, "blogs");
  //     addDoc(ref, blog);

  //     navigate("/");
  //   };

  return (
    <form className="max-w-xl mx-auto mt-16 flex w-full flex-col border rounded-lg bg-white dark:bg-darkCard p-8 mb-10">
      <h1 className="title-font mb-1 text-xl font-medium text-gray-900 dark:text-white">
        Login your account
      </h1>
      <div className="mb-4">
        <label className="text-sm leading-7 text-gray-600 dark:text-gray-200">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded border border-gray-300 bg-white dark:bg-darkSecondary py-1 px-3 text-base leading-8 text-gray-700 dark:text-white outline-none"
        />
      </div>
      <div className="mb-4">
        <label className="text-sm leading-7 text-gray-600 dark:text-gray-200">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 rounded border border-gray-300 bg-white dark:bg-darkSecondary py-1 px-3 text-base leading-8 text-gray-700 dark:text-white outline-none"
        ></input>
      </div>

      <button className="rounded border-0 bg-violet-600 py-2 px-6 text-lg text-white hover:bg-violet-700 focus:outline-none">
        Login
      </button>

      <p className="text-md text-center mt-3 font-light text-gray-500 dark:text-gray-400">
        Create new account{" "}
        <Link
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
          to="/register"
        >
          Register here
        </Link>
      </p>
    </form>
  );
}
