import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import { createContext } from "react";

const ThemeContext = createContext("light");
function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <div className="App" id={theme}>
        <div className="container">
          <Header theme={theme} toggleTheme={toggleTheme} />
          <SearchBar />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
