import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

export default function Header({ theme, onToggleTheme }) {
  return (
    <header>
      <h1>Country Dashboard</h1>
      <div className="header-right">
        <div className="hidden md:block">Built with REST Countries API</div>
        <button className="theme-toggle" onClick={onToggleTheme}>
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </header>
  );
}
