import { FaSpinner } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="flex justify-center mt-[300px]">
      <FaSpinner className="animate-spin text-active" size={48}/ >
      <div className="text-secondary text-5xl">Loading</div>
    </div>
  );
};

export default Loading;
