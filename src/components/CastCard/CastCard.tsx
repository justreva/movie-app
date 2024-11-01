import { Cast } from "../../types/filmTypes";

interface CastCardProps {
  cast: Cast;
}

const CastCard = ({ cast }: CastCardProps) => {
  return (
    <div className="overflow-hidden border border-border rounded-lg shadow-lg w-[120px] h-[180px] mt-5 hover:border-secondary duration-150 relative group cursor-pointer">
      {cast.profile_path ? (
        <img
          src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}
          className=""
          alt=""
        />
      ) : (
        <div className="bg-description w-full h-full animate-pulse"></div>
      )}

      <div
        className="actions hidden absolute space-x-2 bg-primary p-1 rounded-lg bg-opacity-80 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover:block group-focus-within:block text-secondary 
		h-full w-full space-y-1 "
      >
        <h1 className="text-nowrap text-center text-sm">{cast.name}</h1>
        <h1 className="border-t border-secondary text-wrap text-center text-sm">
          {cast.character}
        </h1>
      </div>
    </div>
  );
};

export default CastCard;
