import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../api/tmdb";
import { Movie } from "../../types/filmTypes";

const MovieDetails = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useQuery(["movieDetails", id], () =>
    fetchMovieDetails(id)
  );
  const movie = data?.data || [];
  console.log(movie);
  const getYear = (date: string) => {
    return new Date(date).getFullYear();
  };

  return (
    <>
      <div className="h-[400px] left-0 right-0 top-0 relative">
        <div className="overlay-film-backdrop"></div>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt="backdrop"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="poster">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt=""
              className="max-w-[250px] border border-border shadow-lg rounded-lg "
            />
          </div>

          <div className="about-movie flex ">
            <h1 className="text-secondary text-2xl font-medium">
              {movie.title}
            </h1>
            <h2 className="text-xl ml-2 text-secondary">
              {getYear(movie.release_date)}
            </h2>
          </div>

          <div>Something</div>
        </div>
      </div>

    </>
  );
};

export default MovieDetails;
