
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

const Navbar = () => {
  const items = ["Movies", "Serials", "Profile"];

  return (
    <nav className="text-secondary bg-primary flex justify-center py-4 border-b border-border">
      <div className="container flex justify-between items-center">
        <Link to={"/"} className="">
          <Logo />
        </Link>

        <ul className="flex space-x-8 text-lg font-normal">
          {items.map((item) => (
            <li className="hover:text-active transition ease-in-out delay-[0.4]">
              <Link to={`/${item}`}>item</Link>
            </li>
          ))}
        </ul>

        <SearchBar />
      </div>
    </nav>
  );
};

export default Navbar;
