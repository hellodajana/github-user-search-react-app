import { useState } from "react";

const Theme = () => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  return [theme, toggleTheme];
};

export default Theme;
