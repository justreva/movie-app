import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import {
  fetchMovieCast,
  fetchMovieDetails,
  fetchRecommendations,
} from "../../api/tmdb";
import Actions from "../../components/Actions/Actions";
import { Movie, Person } from "../../types/filmTypes";
import Loading from "../../components/Loading/Loading";
import CastSlider from "../../components/PersonSlider/PersonSlider";
import MovieSlider from "../../components/MovieSlider/MovieSlider";
import { getYear, ratingStyle } from "../../utils/utils";
import MoreInfo from "../../components/MoreInfo/MoreInfo";

const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();

  const movieDetailsQuery = useQuery(["movieDetails", id], () =>
    fetchMovieDetails(Number(id))
  );

  const movieCastQuery = useQuery(["movieCast", id], () =>
    fetchMovieCast(Number(id))
  );

  const recommendationQuery = useQuery(["movieRecommendation", id], () =>
    fetchRecommendations(Number(id))
  );

  const movie: Movie | undefined = movieDetailsQuery.data?.data;
  const person: Person[] | [] = movieCastQuery.data?.data.cast;
  const recommendationMovies: Movie[] | [] =
    recommendationQuery.data?.data.results;

 

  if (movieDetailsQuery.isLoading) return <Loading></Loading>;
  if (movieDetailsQuery.error) return;
  if (!movieDetailsQuery.data) return "Not found";
  return (
    <>
      <div className="h-[400px] left-0 right-0 top-0 relative">
        <div className="overlay-film-backdrop"></div>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt="backdrop"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mt-2">
        <div className="flex justify-between">
          <div className="poster">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
              alt=""
              className="max-w-[240px] border border-border shadow-lg rounded-lg "
            />
            <div className="mt-3">
              <Actions />
            </div>
          </div>

          <div className="about-movie w-[500px] text-pretty text-secondary">
            <div>
              <h1 className="text-3xl font-medium ">{movie?.title}</h1>
              <h2 className="mt-2">{getYear(movie.release_date)}</h2>
              <h2 className="text-lg italic mt-2 text-description">
                {movie?.tagline}
              </h2>
              <MoreInfo>{movie?.overview || ""}</MoreInfo>
              
            </div>
            <div className="mt-2">{person ? <CastSlider persons={person} /> : "Loading"}</div>
          </div>

          <div className="other-info">
            <div>{ratingStyle(Number(movie?.vote_average))}</div>

            <ul className="mt-[10px] space-y-2">
              {movie?.genres.map((genre) => (
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

        <div className="my-10">
          <h1 className="text-xl font-medium text-secondary border-b pb-1 mb-2">
            Recommendations
          </h1>
          {recommendationMovies ? <MovieSlider movies={recommendationMovies} /> : "Loading"}
          
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
