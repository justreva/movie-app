import { Cast } from "../../types/filmTypes";

interface CastCardProps {
  cast: Cast;
}

const CastCard = ({ cast }: CastCardProps) => {
  return (
    <div className="overflow-hidden border border-border rounded-lg shadow-lg w-[120px] h-[180px] hover:border-secondary  duration-150 relative group cursor-pointer">
      {cast.profile_path ? (
       
          <img
            src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}
            className="h-full w-full"
            alt=""
          />
        
      ) : (
        <div className="bg-border w-full h-full animate-pulse"></div>
      )}

      <div className="actions hidden absolute w-[90%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-2 rounded-lg bg-opacity-80 group-hover:block group-focus-within:block text-white space-y-1 my-auto bg-black">
        <h1 className="text-center text-base">{cast.name}</h1>
        <h1 className="border-t border-secondary text-center text-base">
          {cast.character}
        </h1>
      </div>
    </div>
  );
};

export default CastCard;
