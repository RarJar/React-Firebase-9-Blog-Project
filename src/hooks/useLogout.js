import { signOut } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/index";

export default function useLogout() {
  let [loading, setLoading] = useState(false);

  let Logout = async () => {
    setLoading(true);
    let res = await signOut(auth);
    setLoading(false);
    return res.user;
  };

  return { loading, Logout };
}
