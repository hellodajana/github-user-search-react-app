import React from "react";
import "./Header.scss";
import Moon from "../../assets/icon-moon.svg";

const Header = () => {
  return (
    <header className="header">
      <h1>devfinder</h1>
      <div className="header__color-mode" id="theme">
        <p className="header__text" id="theme-name">
          Dark
        </p>
        <img
          className="header__icon"
          id="icon-mode"
          src={Moon}
          alt="Change theme"
        />
      </div>
    </header>
  );
};

export default Header;
