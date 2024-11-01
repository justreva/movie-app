import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchMovieCast, fetchMovieDetails } from "../../api/tmdb";
import Actions from "../../components/Actions/Actions";
import { Movie, Cast } from "../../types/filmTypes";
import Loading from "../../components/Loading/Loading";
import CastCard from "../../components/CastCard/CastCard";
import CastSlider from "../../components/CastSlider/CastSlider";

const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();
  const movieDetailsQuery = useQuery(["movieDetails", id], () =>
    fetchMovieDetails(Number(id))
  );

  const movieCastQuery = useQuery(["movieCast", id], () =>
    fetchMovieCast(Number(id))
  );

  const movie: Movie | undefined = movieDetailsQuery.data?.data;
  const cast: Cast[] | [] = movieCastQuery.data?.data.cast;
  console.log(movieCastQuery.data);

  const getYear = (date: string) => {
    return new Date(date).getFullYear();
  };

  const ratingStyle = (vote_average: number) => {
    const rating = vote_average.toFixed(1);
    if (Number(rating) >= 7)
      return (
        <span className="text-2xl text-secondary bg-green-700 py-1 px-2 rounded-lg font-medium">
          {rating}
        </span>
      );
    if (Number(rating) < 7 && Number(rating) >= 6)
      return (
        <span className="text-2xl text-secondary bg-orange-500 py-1 px-2 rounded-lg font-medium">
          {rating}
        </span>
      );
    if (Number(rating) < 6)
      return (
        <span className="text-2xl text-secondary bg-red-500 py-1 px-2 rounded-lg font-medium">
          {rating}
        </span>
      );
    else return "0";
  };

  if (movieDetailsQuery.isLoading) return <Loading></Loading>;
  if (movieDetailsQuery.error) return;
  if (!movieDetailsQuery.data) return "Not found";
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
        <div className="flex justify-evenly">
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

          <div className="about-movie  w-[500px]">
            <h1 className="text-secondary text-3xl font-medium ">
              {movie.title}
            </h1>
            <h2 className="text-lg italic mt-[10px] text-description">
              {movie.tagline}
            </h2>
            <h2 className="text-base mt-[10px] text-secondary">
              {movie.overview}
            </h2>
            
              <CastSlider casts={cast} />
           
          </div>

          <div className="other-info">
            <div>{ratingStyle(Number(movie.vote_average))}</div>

            <ul className="mt-[10px] space-y-1">
              {movie.genres.map((genre) => (
                <li
                  className="text-secondary text-center py-1 px-2 rounded-lg border border-border shadow-lg"
                  key={genre.id}
                >
                  {genre.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
