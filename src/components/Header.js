// import useLocalStorage from "use-local-storage";
import "./Header.scss";
import moon from "../assets/icon-moon.svg";
import sun from "../assets/icon-sun.svg";

const Header = ({ theme, toggleTheme }) => {
  return (
    <div className="container">
      <header className="header">
        <h1>devfinder</h1>
        <div className="header__color-mode" id="theme" onClick={toggleTheme}>
          <p className="header__text" id="theme-name">
            {theme === "dark" ? "Light" : "Dark"}
          </p>
          <img
            className="header__icon"
            id="icon-mode"
            src={theme === "dark" ? sun : moon}
            alt="Change theme"
          />
        </div>
      </header>
    </div>
  );
};

export default Header;
