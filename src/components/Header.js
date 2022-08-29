import useLocalStorage from "use-local-storage";
import "./Header.scss";
import moon from "../assets/icon-moon.svg";
// import sun from "../../assets/icon-sun.svg";

const Header = () => {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="container" data-theme={theme}>
      <header className="header">
        <h1>devfinder</h1>
        <div className="header__color-mode" id="theme" onClick={toggleTheme}>
          <p className="header__text" id="theme-name">
            Dark
          </p>
          <img
            className="header__icon"
            id="icon-mode"
            src={moon}
            alt="Change theme"
          />
        </div>
      </header>
    </div>
  );
};

export default Header;