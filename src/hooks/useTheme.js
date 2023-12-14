import { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";

export default function useTheme() {
  let context = useContext(ThemeContext);
  return context;
}
