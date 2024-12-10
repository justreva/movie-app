import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import {
  fetchMovieCast,
  fetchMovieDetails,
  fetchRecommendations,
  fetchSeasonsDetails,
} from "../../api/tmdb";
import Actions from "../../components/Actions/Actions";
import { MediaType, Movie, Person, Episode } from "../../types/filmTypes";
import Loading from "../../components/Loading/Loading";
import CastSlider from "../../components/PersonSlider/PersonSlider";
import MovieSlider from "../../components/MovieSlider/MovieSlider";
import { getYear, ratingStyle } from "../../utils/utils";
import MoreInfo from "../../components/MoreInfo/MoreInfo";
import { useEffect, useState } from "react";
import EpisodeSlider from "../../components/EpisodeSlider/EpisodeSlider";
import { PhotoIcon } from "@heroicons/react/24/solid";

interface MovieDetailsProps {
  mediaType: MediaType;
}

const MovieDetails = (props: MovieDetailsProps) => {
  const { id } = useParams<{ id: string }>();

  const movieDetailsQuery = useQuery(["movieDetails", id], () =>
    fetchMovieDetails(props.mediaType, Number(id))
  );

  const movieCastQuery = useQuery(["movieCast", id], () =>
    fetchMovieCast(props.mediaType, Number(id))
  );

  const recommendationQuery = useQuery(["movieRecommendation", id], () =>
    fetchRecommendations(props.mediaType, Number(id))
  );

  const movie: Movie = movieDetailsQuery.data?.data;
  const persons: Person[] | undefined = movieCastQuery.data?.data.cast;
  const [activeSeason, setActiveSeason] = useState<number | null>(null);

  useEffect(() => {
    if (movie?.seasons?.length) {
      setActiveSeason(movie.seasons[0].season_number);
    }
  }, [movie]);

  const handleClick = (index: number) => {
    setActiveSeason(index);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const seasonDetails: Episode[] | [] =
    props.mediaType === "tv"
      ? useQuery(["seasonsDetails", id, activeSeason], () =>
          fetchSeasonsDetails(Number(id), Number(activeSeason))
        ).data?.data.episodes || []
      : [];

  const recommendationMovies: Movie[] | [] =
    recommendationQuery.data?.data.results || [];

  if (movieDetailsQuery.isLoading) return <Loading></Loading>;
  if (movieDetailsQuery.error) return;
  if (!movieDetailsQuery.data) return "Not found";
  return (
    <>
      <div className="h-[450px] left-0 right-0 top-0 relative">
        <div className="overlay-film-backdrop"></div>
        {movie?.backdrop_path ? (
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt="backdrop"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-border flex justify-center ">
            <div className="flex items-center animate-pulse">
              <img src="/logo.svg" alt="" className="w-[100px]" />
              <h1 className="text-2xl font-bold text-secondary">SVault</h1>
            </div>
          </div>
        )}
      </div>

      <div className="container mt-2">
        <div className="flex justify-between">
          <div className="poster">
            {movie?.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt=""
                className="w-[240px] h-[360px] border border-border shadow-lg rounded-lg"
              />
            ) : (
              <div className="w-[240px] h-[360px] border border-border shadow-lg rounded-lg flex justify-center items-center">
                <PhotoIcon className="size-44 text-secondary animate-pulse" />
              </div>
            )}

            <div className="mt-3">
            {movie ? <Actions movie={movie} /> : null}
            </div>
          </div>

          <div className="about-movie w-[500px] text-pretty text-secondary">
            <div>
              <h1 className="text-3xl font-medium ">
                {movie?.title || movie?.name}
              </h1>
              <h2 className="mt-2">
                {getYear(movie)} ({movie?.status})
              </h2>
              <h2 className="text-lg italic mt-2 text-description">
                {movie?.tagline}
              </h2>
              <MoreInfo>{movie?.overview || ""}</MoreInfo>
            </div>
            <div className="mt-2">
              {movieCastQuery.isLoading ? (
                <Loading></Loading>
              ) : (
                <CastSlider persons={persons} />
              )}
            </div>
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
        {movie?.seasons ? (
          <div className="mt-10">
            <ul className="flex space-x-5 pb-1 text-xl font-medium border-b border-secondary text-description">
              {movie.seasons.map((season) => (
                <li
                  key={season.id}
                  className={`${
                    activeSeason === season.season_number
                      ? "text-secondary"
                      : ""
                  } hover:text-secondary cursor-pointer delay-50`}
                  onClick={() => handleClick(season.season_number)}
                >
                  {season.name}
                </li>
              ))}
            </ul>
            <div className="mt-2 flex">
              <EpisodeSlider season={seasonDetails} />
            </div>
          </div>
        ) : (
          ""
        )}

        <div className="my-10">
          {recommendationMovies.length > 0 ? (
            <div>
              <h1 className="text-xl font-medium text-secondary border-b pb-1 mb-2">
                Recommendations
              </h1>

              <MovieSlider movies={recommendationMovies} />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
