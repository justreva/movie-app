import "./Navbar.css";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoSearchSharp } from "react-icons/io5";
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
            <Link to="/lists">Lists</Link>
          </li>
          <li className="main-nav__content-search">
            <IoSearchSharp />
          </li>
        </ul>
        <div className="main-nav__content-auth">
          <Link to="/auth">Auth</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
