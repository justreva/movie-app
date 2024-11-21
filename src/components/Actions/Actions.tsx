import { HeartIcon, StarIcon } from "@heroicons/react/24/outline";
const Actions = () => {
  return (
    <div className="text-secondary flex items-center justify-center">
      <div className="flex mr-2  text-yellow-500">
        <StarIcon className="size-6 hover:fill-yellow-500 duration-150 cursor-pointer" />
        <StarIcon className="size-6 hover:fill-yellow-500 duration-150 cursor-pointer" />
        <StarIcon className="size-6 hover:fill-yellow-500 duration-150 cursor-pointer" />
        <StarIcon className="size-6 hover:fill-yellow-500 duration-150 cursor-pointer" />
        <StarIcon className="size-6 hover:fill-yellow-500 duration-150 cursor-pointer" />
      </div>

      <HeartIcon className="size-6 cursor-pointer text-active hover:fill-active duration-150" />
    </div>
  );
};

export default Actions;
