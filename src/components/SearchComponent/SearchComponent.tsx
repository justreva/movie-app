import { PhotoIcon, UserIcon } from "@heroicons/react/24/solid";
import { Movie, Person } from "../../types/filmTypes";
import { getYear, isMovie, isPerson, useNavigator } from "../../utils/utils";

interface SearchComponentProps {
	data: Movie[] | Person[]
}
const SearchComponent = ({ data }: SearchComponentProps) => {
  const navigateToMovie = useNavigator();
  const movies = data.filter((movie) => isMovie(movie)) || [] as Movie[];
  const persons = data.filter((person) => isPerson(person)) || [] as Person[];

  return (
    <div>
      {movies.length > 0
        ? movies.map((movie) => (
            <li
              key={movie.id}
              onClick={() => navigateToMovie(movie)}
              className="border-b border-border p-2 flex space-x-3 hover:bg-border/20 duration-150 cursor-pointer"
            >
              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
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
                  <h1 className="text-2xl">{movie.name || movie.title}</h1>
                  <h1 className="text-xl text-description">{getYear(movie)}</h1>
                </div>
                <h1 className="capitalize mt-2 text-secondary/75 text-sm">
                  {movie.media_type}
                </h1>
                <h1 className="w-[500px] text-sm mt-2 text-description">
                  {movie.overview.slice(0, 300)}...
                </h1>
              </div>
            </li>
          ))
        : ""}
      {persons.length > 0
        ? persons.map((person) => (
            <li
              onClick={(event) => {
                event.stopPropagation();
                navigateToMovie(person);
              }}
              key={person.id}
              className="border-b border-t border-border p-2 flex space-x-3 hover:bg-border/20 duration-150 cursor-pointer"
            >
              {person.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/original/${person.profile_path}`}
                  className="w-[100px] h-[150px] border border-border rounded-lg"
                  alt=""
                />
              ) : (
                <div className="flex justify-center items-center w-[100px] h-[150px] border border-border rounded-lg animate-pulse">
                  <UserIcon className="size-16" />
                </div>
              )}

              <div className="block">
                <h1 className="text-2xl">{person.name}</h1>
                <h1 className="text-sm mt-1 text-description">
                  {person.known_for_department}
                </h1>
                <ul className="flex space-x-2 mt-3">
                  {person.known_for.map((movie) => (
                    <li
                      onClick={() => navigateToMovie(movie)}
                      key={movie.id}
                      className="text-xs border-description border p-1 rounded-lg shadow-lg hover:bg-zinc-700"
                    >
                      {movie.name || movie.title}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))
        : ""}
    </div>
  );
};

export default SearchComponent;
