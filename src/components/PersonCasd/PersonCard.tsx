import { Link } from "react-router-dom";
import { Person } from "../../types/filmTypes";

interface CastCardProps {
  person: Person;
}

const CastCard = ({ person }: CastCardProps) => {
  return (
    <div className="overflow-hidden border border-border rounded-lg shadow-lg w-[120px] h-[180px] hover:border-secondary  duration-150 relative group cursor-pointer">
      {person.profile_path ? (
        <img
          src={`https://image.tmdb.org/t/p/original/${person.profile_path}`}
          className="h-full w-full"
          alt=""
        />
      ) : (
        <div className="bg-border w-full h-full animate-pulse"></div>
      )}

      <Link to={`/person/${person.id}`} className="actions hidden absolute w-[90%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-2 rounded-lg bg-opacity-80 group-hover:block group-focus-within:block text-white space-y-1 my-auto bg-black text-center border hover:border hover:border-active ">
        <h1  className="text-base">
          {person.name}
        </h1>
        <h1 className="border-t border-secondary text-base">
          {person.character}
        </h1>
      </Link>
    </div>
  );
};

export default CastCard;
