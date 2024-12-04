import { useNavigate, useParams } from "react-router-dom";
import { fetchSearchQuery } from "../../api/tmdb";
import { useQuery } from "react-query";
import { Movie, Person } from "../../types/filmTypes";
import { getYear, useNavigator } from "../../utils/utils";
import { UserIcon, PhotoIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Loading from "../../components/Loading/Loading";

const List = () => {
  const { query } = useParams<{ query: string }>();
  const navigateToMovie = useNavigator();
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

  const resultSearch: Movie[] | Person[] =
    resultSearchQuery.data?.data.results.filter((item: Movie) => {
      if (!(activeType == 0)) {
        return item.media_type == items[activeType].type;
      }
      return item;
    });

  return (
    <div className="container text-secondary mt-10 flex">
      <div className="w-[85%] block">
        <h1 className="border-b border-secondary pb-1">
          Showing matches for '{query?.replace("-", " ")}'
        </h1>

        <div className="mt-3">
          <ul className="space-y-3">
            {resultSearchQuery.isLoading ? (
              <Loading></Loading>
            ) : (
              resultSearch.map((item, index) => {
                if (item.media_type === "tv" || item.media_type === "movie") {
                  return (
                    <li
                      key={index}
                      onClick={() => navigateToMovie(item)}
                      className="border-b border-t border-border p-2 flex space-x-3 hover:bg-border/20 duration-150 cursor-pointer"
                    >
                      {item?.poster_path ? (
                        <img
                          src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`}
                          className="w-[150px] h-[225px] border border-border rounded-lg"
                          alt=""
                        />
                      ) : (
                        <div className="w-[150px] h-[225px] border border-border flex justify-center items-center rounded-lg animate-pulse">
                          <PhotoIcon className="size-20" />
                        </div>
                      )}

                      <div>
                        <div className="flex items-end  space-x-3">
                          <h1 className="text-2xl">
                            {item.name || item.title}
                          </h1>
                          <h1 className="text-xl text-description">
                            {getYear(item)}
                          </h1>
                        </div>
                        <h1 className="capitalize mt-2 text-secondary/75 text-sm">
                          {item.media_type}
                        </h1>
                        <h1 className="w-[500px] text-sm mt-2 text-description">
                          {item.overview.slice(0, 300)}...
                        </h1>
                      </div>
                    </li>
                  );
                }
                if (item.media_type === "person") {
                  return (
                    <li
                      onClick={(event) => {
                        event.stopPropagation();
                        console.log(item)
                        navigateToMovie(item);
                      }}
                      key={index}
                      className="border-b border-t border-border p-2 flex space-x-3 hover:bg-border/20 duration-150 cursor-pointer"
                    >
                      {item.profile_path ? (
                        <img
                          src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
                          className="w-[100px] h-[150px] border border-border rounded-lg"
                          alt=""
                        />
                      ) : (
                        <div className="flex justify-center items-center w-[100px] h-[150px] border border-border rounded-lg animate-pulse">
                          <UserIcon className="size-16" />
                        </div>
                      )}

                      <div className="block">
                        <h1 className="text-2xl">{item.name}</h1>
                        <h1 className="text-sm mt-1 text-description">
                          {item.known_for_department}
                        </h1>
                        <ul className="flex space-x-2 mt-3">
                          {item.known_for.map((movie, index) => (
                            <li
                              onClick={() => navigateToMovie(movie)}
                              key={index}
                              className="text-xs border-description border p-1 rounded-lg shadow-lg hover:bg-zinc-700"
                            >
                              {movie.name || movie.title}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  );
                }
                return null;
              })
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
