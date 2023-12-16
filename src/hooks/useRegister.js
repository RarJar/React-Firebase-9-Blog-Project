import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/index";

export default function useRegister() {
  let [error, setError] = useState(null);
  let [loading, setLoading] = useState(false);

  let Register = async (email, password) => {
    try {
      setLoading(true);
      let res = await createUserWithEmailAndPassword(auth, email, password);
      setLoading(false);
      return res.user;
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return { loading, error, Register };
}
