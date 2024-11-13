import { useState } from "react";
import { IoIosClose } from "react-icons/io";
interface MoreInfoProps {
  children: string;
  maxCharacterCount?: number;
}

const MoreInfo = ({
  children = "",
  maxCharacterCount = 200,
}: MoreInfoProps) => {
  const [isMore, setIsMore] = useState(false);

  const textToShow = isMore
    ? children
    : `${children.slice(0, maxCharacterCount)}`;

  const toggleMore = () => {
    setIsMore((prevstate) => !prevstate);
  };

  return (
    <div>
      <p className="text-base">
        {textToShow}
        <button onClick={toggleMore} className="hover:text-active">
          {isMore ? <IoIosClose size={22}/> : "..."}
        </button>
      </p>
    </div>
  );
};

export default MoreInfo;