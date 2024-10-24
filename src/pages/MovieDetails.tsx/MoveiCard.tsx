import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../api/tmdb";
import { Movie } from "../../types/filmTypes";
import "./MovieDetails.css"

const MovieDetails = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useQuery(["movieDetails", id], () =>
    fetchMovieDetails(id)
  );
  const movie = data?.data || [];
console.log(movie)
  return (
    <div className="movieDetails">
      <div className="backdrop flex justify-center " >
        <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="" className="backdrop_img h-[500px] w-[900px]" />
      </div>
      <h3>{movie.title}</h3>
    </div>
  );
};

export default MovieDetails;
