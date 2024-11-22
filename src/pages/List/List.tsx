import { useParams } from "react-router-dom";
import { fetchSearchQuery } from "../../api/tmdb";
import { useQuery } from "react-query";
import { Movie, Person } from "../../types/filmTypes";
import { getYear } from "../../utils/utils";
import { UserIcon } from "@heroicons/react/24/solid";

const List = () => {
  const { query } = useParams<{ query: string }>();

  const resultSearchQuery = useQuery(["resultSearch", query], () =>
    fetchSearchQuery(String(query?.replace(" ", "%20")))
  );
  const resultSearch: Movie[] | Person[] =
    resultSearchQuery.data?.data.results || [];
  console.log(resultSearch);
  return (
    <div className="container text-secondary mt-10 flex">
      <div className="w-[85%] block">
        <h1 className="border-b border-secondary pb-1">
          Showing matches for '{query}'
        </h1>

        <div className="mt-3">
          <ul className="space-y-3">
            {resultSearch.map((item) => {
              if (item.media_type === "tv" || item.media_type === "movie") {
                return (
                  <li className="border-b border-border pb-2 flex space-x-3 hover:bg-border/20 duration-150 cursor-pointer">
                    <img
                      src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`}
                      className="w-[150px] border border-border rounded-lg"
                      alt=""
                    />
                    <div>
                      <div className="flex items-end  space-x-3">
                        <h1 className="text-2xl">{item.name || item.title}</h1>
                        <h1 className="text-xl text-description">
                          {getYear(item)}
                        </h1>
                      </div>
                      <h1 className="w-[500px] text-sm mt-3 text-description">
                        {item.overview.slice(0, 300)}...
                      </h1>
                    </div>
                  </li>
                );
              }
              if (item.media_type === "person") {
                return (
                  <li className="border-b pb-2 border-border flex space-x-3 hover:bg-border/20 duration-150 cursor-pointer">
                    {item.profile_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
                        className="w-[100px] border border-border rounded-lg"
                        alt=""
                      />
                    ) : (
                      <div>
                        <UserIcon className="size-16" />
                      </div>
                    )}

                    <div className="block">
                      <h1 className="text-2xl">{item.name}</h1>
                      <h1 className="text-sm mt-1 text-description">
                        {item.known_for_department}
                      </h1>
                      <ul className="flex space-x-2 mt-3">
                        {item.known_for.map((movie) => (
                          <li className="text-xs border-description border p-1 rounded-lg shadow-lg hover:bg-zinc-700">{movie.name || movie.title}</li>
                        ))}
                      </ul>
                    </div>
                  </li>
                );
              }
              return null;
            })}
          </ul>
        </div>
      </div>

      <div className="w-[15%] pl-10 block">
        <h1 className="border-b border-secondary pb-1">Show results for</h1>
        <ul className="mt-3 space-y-3">
          <li className="hover:bg-border p-1 rounded-lg cursor-pointer duration-150">
            All
          </li>
          <li className="hover:bg-border p-1 rounded-lg cursor-pointer duration-150">
            Movies
          </li>
          <li className="hover:bg-border p-1 rounded-lg cursor-pointer duration-150">
            Serials
          </li>
          <li className="hover:bg-border p-1 rounded-lg cursor-pointer duration-150">
            Persons
          </li>
        </ul>
      </div>
    </div>
  );
};

export default List;
