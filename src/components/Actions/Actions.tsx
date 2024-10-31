import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
const Actions = () => {
  return (
    <div className="text-secondary flex items-center justify-center">
      <div className="flex mr-2">
        <FaStar size={20} />
        <FaStar size={20} />
        <FaStar size={20} />
        <FaStar size={20} />
        <FaStar size={20} />
      </div>
      <FaHeart size={20} className="hover:text-active" />
    </div>
  );
};

export default Actions;
