import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchMoviesWithPerson, fetchPersonDetails } from "../../api/tmdb";
import { Movie, Person } from "../../types/filmTypes";
import { convertDate } from "../../utils/utils";
import MoreInfo from "../../components/MoreInfo/MoreInfo";
import { GiConsoleController } from "react-icons/gi";
import Loading from "../../components/Loading/Loading";
import MovieCard from "../../components/MovieCard/MovieCard";

const PersonDetails = () => {
  const { id } = useParams<{ id: string }>();
  const personDetailsQuery = useQuery(["personDetais", id], () =>
    fetchPersonDetails(Number(id))
  );
  const moviesWithPersonQuery = useQuery(["moviesWithPerson", id], () =>
    fetchMoviesWithPerson(Number(id))
  );
  const person: Person | undefined = personDetailsQuery.data?.data;
  const movies = moviesWithPersonQuery.data?.data.cast
  console.log(movies)
  if (personDetailsQuery.isLoading) <Loading></Loading>;
  else
    return (
      <div className="mt-20 container text-secondary flex items-start">
        <div className="w-[80%]">
          <div className=" border-b border-secondary flex items-end pb-2 ">
          <h1 className="text-3xl">{person?.name}</h1>
          <h1 className="text-lg ml-5 text-description">
            {convertDate(person?.birthday, person?.deathday)}
          </h1>
          </div>

          <div className="mt-4 grid grid-cols-5 gap-3">
            {movies.map((movie) => 
            <MovieCard movie={movie}/>
            )}
          </div>
        </div>

        <div className="pl-10 w-[20%]">
          <div className="border border-border rounded-lg overflow-hidden shadow-lg mb-2">
            <img
              src={`https://image.tmdb.org/t/p/original/${person?.profile_path}`}
              alt=""
              className="w-full"
            />
          </div>

          <MoreInfo maxCharacterCount={200}>{person?.biography || ""}</MoreInfo>
        </div>
      </div>
    );
};
export default PersonDetails;
