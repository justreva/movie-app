import "./Navbar.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="main-nav">
      <div className="main-nav__content">
        <Link to={"/"} className="main-nav__content-logo">
          <img src="/logo.svg" alt="logo" />
          <span>SVault</span>
        </Link>

        <ul className="main-nav__content-menu">
          <li className="main-nav__content-elem">
            <Link to="/movies">Movies</Link>
          </li>
          <li className="main-nav__content-elem">
            <Link to="/serials">Serials</Link>
          </li>
          <li className="main-nav__content-elem">
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>

        <SearchBar />
      </div>
    </nav>
  );
};

export default Navbar;
