import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useRegister from "../../hooks/useRegister";

export default function Register() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();

  let { loading, error, Register } = useRegister();

  let handleSubmit = async (e) => {
    e.preventDefault();
    let user = await Register(email, password);
    console.log(user);
    navigate("/");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto mt-16 flex w-full flex-col border rounded-lg bg-white dark:bg-darkCard p-8 mb-10"
    >
      <h1 className="title-font mb-1 text-xl font-medium text-gray-900 dark:text-white">
        Create New account
      </h1>
      <div className="mb-4">
        <label className="text-sm leading-7 text-gray-600 dark:text-gray-200">
          Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded border border-gray-300 bg-white dark:bg-darkSecondary py-1 px-3 text-base leading-8 text-gray-700 dark:text-white outline-none"
        />
      </div>
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
        {error && <p className="text-red-500">{error}</p>}
      </div>

      <button
        type="submit"
        className="rounded border-0 bg-violet-600 py-2 px-6 text-lg text-white hover:bg-violet-700 focus:outline-none"
      >
        Register
      </button>

      <p className="text-md text-center mt-3 font-light text-gray-500 dark:text-gray-400">
        Already have an account?{" "}
        <Link
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
          to="/login"
        >
          Register here
        </Link>
      </p>
    </form>
  );
}
