import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/index";

export default function useLogin() {
  let [error, setError] = useState(null);
  let [loading, setLoading] = useState(false);

  let Login = async (email, password) => {
    try {
      setLoading(true);
      let res = await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      return res.user;
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return { loading, error, Login };
}
