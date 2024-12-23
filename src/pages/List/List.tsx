import { useParams } from "react-router-dom";
import { fetchSearchQuery } from "../../api/tmdb";
import { useQuery } from "react-query";
import { useState } from "react";
import Loading from "../../components/Loading/Loading";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import { Movie, Person } from "../../types/filmTypes";

const List = () => {
  const { query } = useParams<{ query: string }>();

  const items = [
    { type: "multi", name: "All" },
    { type: "movie", name: "Movies" },
    { type: "tv", name: "Serials" },
    { type: "person", name: "Persons" },
  ];

  const [activeType, setActiveType] = useState(0);

  const resultSearchQuery = useQuery(
    ["resultSearch", query],
    () => fetchSearchQuery(String(query?.replace(" ", "%20"))),

    { keepPreviousData: true }
  );

  const resultSearch =
    resultSearchQuery.data?.data.results.filter(
      (item: Movie | Person)=> {
        if (activeType !== 0) {
          return item.media_type === items[activeType].type;
        }
        return true;
      }
    ) || [];

  return (
    <div className="container text-secondary mt-10 flex">
      <div className="w-[85%] block">
        <h1 className="border-b border-secondary pb-1">
          Showing matches for '{query?.replace("-", " ")}'
        </h1>

        <div className="mt-3">
          <ul className="">
            {resultSearchQuery.isLoading ? (
              <Loading></Loading>
            ) : (
              <SearchComponent data={resultSearch} />
            )}
          </ul>
        </div>
      </div>

      <div className="w-[15%] pl-10 block">
        <h1 className="border-b border-secondary pb-1">Show results for</h1>
        <ul className="mt-3 space-y-3">
          {items.map((item, index) => (
            <li
              key={index}
              onClick={() => setActiveType(index)}
              className={`${
                activeType == index ? "bg-border" : ""
              } hover:bg-border p-1 rounded-lg cursor-pointer duration-150`}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default List;
