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
  return (
    <>
      <div className="h-[400px] left-0 right-0 top-0 relative border border-bc">
        <div className="overlay-film-cover"></div>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt="backdrop"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto">
        <div className="absolute top-[40%] flex">
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt=""
            className="max-w-[250px] border border-bc rounded-lg "
          />
          <div className="about-movie ml-[100px]">
            <h1 className="text-secondary text-3xl font-medium">
              {movie.title}
            </h1>
            <h2>
              {}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
