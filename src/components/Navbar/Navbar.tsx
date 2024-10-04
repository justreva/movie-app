import "./Navbar.css";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
const Navbar = () => {
  return (
    <nav className="main-nav">
      <div className="main-nav__content">
        <Link to={"/"} className="main-nav__content-logo">
          <img src="../../../public/logo.svg" alt="logo" />
          <span>SVault</span>
        </Link>

        <ul className="main-nav__content-menu">
          <li className="main-nav__content-elem">
            <Link to="/films">Films</Link>
          </li>
          <li className="main-nav__content-elem">
            <Link to="/serials">Serials</Link>
          </li>
          <li className="main-nav__content-elem">
            <Link to="/lists">Lists</Link>
          </li>
        </ul>

        <div className="main-nav__content-auth">
					<Link to={"/auth"}>
					<CgProfile className="w-[50px] h-[50px] border-2 rounded-full border-red-900"/>
					</Link>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
