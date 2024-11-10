import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchPersonDetails } from "../../api/tmdb";
import { Person } from "../../types/filmTypes";
import { convertDate } from "../../utils/utils";

const PersonDetails = () => {
  const { id } = useParams<{ id: string }>();
  const personDetailsQuery = useQuery(["personDetais", id], () =>
    fetchPersonDetails(Number(id))
  );
  const person: Person | undefined = personDetailsQuery.data?.data;

  return (
    <div className="mt-20 container text-secondary flex items-start">
      <div className="flex items-end border-b border-secondary pb-2 w-[80%]">
        <h1 className="text-3xl">{person?.name}</h1>
        <h1 className="text-lg ml-5 text-description">
          {convertDate(person?.birthday, person?.deathday)}
        </h1>
      </div>

      <div className="pl-10 w-[20%]">
        <div className="w-[200px]">
          <img
            src={`https://image.tmdb.org/t/p/original/${person.profile_path}`}
            alt=""
            className="w-full"
          />
        </div>
				<h1 className="text-sm mt-3">{person?.biography}</h1>
      </div>
    </div>
  );
};

export default PersonDetails;
