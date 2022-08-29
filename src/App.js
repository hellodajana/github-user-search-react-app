import React from "react";
import "./App.scss";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
