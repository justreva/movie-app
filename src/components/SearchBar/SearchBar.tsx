import { IoSearchSharp } from "react-icons/io5";
const SearchBar = () => {
  return (
    <div className="flex items-center border-b-[1.5px] border-secondary p-1 ">
      <input
        type="text"
        className="bg-transparent outline-0 placeholder:text-description"
        placeholder="Search..."
      />
      <IoSearchSharp />
    </div>
  );
};

export default SearchBar;
