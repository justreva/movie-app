import { BsGithub } from "react-icons/bs";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-[40px] border-t border-border shadow-lg p-6  text-secondary">
      <div className="container flex justify-between items-center">
				<Link to={"/"}>
        <Logo />
				</Link>

				<a href="https://github.com/justreva">
				<BsGithub className="size-8 hover:text-active duration-150 cursor-pointer" />
				</a>
				
				
        
      </div>
    </div>
  );
};

export default Footer;
