import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchFocus, setSearchFocus] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate()

  const onWindowClick = () => {
    setSearchFocus(false);
  };

  useEffect(() => {
    window.addEventListener("click", onWindowClick);

    return () => {
      window.removeEventListener("click", onWindowClick);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const enterQuery = (query: string) => {
    const changedQuery = query.replace(" ", "-");
    navigate(`/search/${changedQuery}`)
  }
  
  return (
    <div className={`flex items-center border-b group p-1 rounded-xs`}>
      <input
        onClick={(e) => {
          e.stopPropagation();
          setSearchFocus(true);
        }}
        onChange={handleInputChange}
        onKeyDown={(e) => {
          if(e.code === "Enter"){
            enterQuery(query)
            e.target.value = ""
          }
        }}
        type="text"
        className="bg-transparent outline-0 placeholder:text-description"
        placeholder="Search..."
      />
      <MagnifyingGlassIcon
        className={`${
          searchFocus ? "text-active size-5" : "text-secondary"
        } size-4 duration-200`}
      />
    </div>
  );
};

export default SearchBar;
