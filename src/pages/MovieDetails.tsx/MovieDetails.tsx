import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../api/tmdb";
import Actions from "../../components/Actions/Actions";
import { Movie } from "../../types/filmTypes";
import Loading from "../../components/Loading/Loading";

const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading } = useQuery(["movieDetails", id], () =>
    fetchMovieDetails(Number(id))
  );
  const movie = data?.data || [];
  console.log(data);

  const getYear = (date: string) => {
    return new Date(date).getFullYear();
  };

  if (isLoading) return <Loading></Loading>;
  if (error) return;
  if(!data) return "Not found";
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

      <div className="container mx-auto mt-2">
        <div className="flex items-start">
          <div className="poster">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt=""
              className="max-w-[240px] border border-border shadow-lg rounded-lg "
            />
            <div className="mt-3">
              <Actions />
            </div>
          </div>

          <div className="about-movie w-[500px] ml-[50px]">
            <h1 className="text-secondary text-3xl font-medium">
              {movie.title}
            </h1>
            <h2 className="text-lg italic mt-[10px] text-description">
              {movie.tagline}
            </h2>
            <h2 className="text-base mt-[10px] text-secondary">
              {movie.overview}
            </h2>
          </div>

          <div className="other-info"></div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
