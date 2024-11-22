import { Episode } from "../../types/filmTypes";

interface EpisodeCardProps {
  episode: Episode;
}

export const EpisodeCard = ({ episode }: EpisodeCardProps) => {
  console.log(episode);
  return (
    <>
      <div className="w-[320px] h-[178px] overflow-hidden border z-[1] border-border rounded-lg hover:border-secondary duration-150 cursor-pointer shadow-lg relative ">
        {episode.still_path !== null ? (
          <img
            src={`https://image.tmdb.org/t/p/original/${episode.still_path}`}
            alt=""
            className="w-full"
          />
        ) : (
          <div className="w-[320px] bg-black h-[178px] flex justify-center items-center"> 
          <h1 className="text-secondary text-3xl">Soon</h1>
          </div>
        )}

        <div className="text-secondary absolute top-[80%] left-[84%] text-sm bg-primary/50 p-1 rounded-lg border border-secondary ">
          {episode.runtime}min
        </div>
      </div>
      <h1 className="text-secondary">Episode {episode.episode_number}</h1>
    </>
  );
};
