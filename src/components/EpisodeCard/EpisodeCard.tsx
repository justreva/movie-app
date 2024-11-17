import { Episode } from "../../types/filmTypes";

interface EpisodeCardProps {
  episode: Episode;
}

export const EpisodeCard = ({episode}: EpisodeCardProps) => {
  console.log(episode);
  return (
    <div className="w-[320px] overflow-hidden border z-[1] border-border rounded-lg hover:border-secondary duration-150 cursor-pointer shadow-lg relative ">
      {episode.still_path !== null ? (
        <img
          src={`https://image.tmdb.org/t/p/original/${episode.still_path}`}
          alt=""
        />
      ) : (
        <div className="w-[320px] bg-black h-[178px]"> </div>
      )}

      <div className="text-secondary bg-black/50 w-full h-full text-9xl absolute top-0 left-0">
        <h1 className="absolute top-[15%] left-[40%]">
          {episode.episode_number}
        </h1>
      </div>
      <div className="text-secondary absolute top-[80%] left-[84%] text-sm bg-primary/50 p-1 rounded-lg border border-secondary ">
        {episode.runtime}min
      </div>
    </div>
  );
};
