import React from "react";
import "./App.scss";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Theme from "./components/Theme";
import GlobalStyles from "./components/GlobalStyles";

function App() {
  const [theme, toggleTheme] = Theme();
  return (
    <div className="App">
      <GlobalStyles data-theme={theme} />
      <div className="container">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
