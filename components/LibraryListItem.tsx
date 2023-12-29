import { Avatar, AvatarFallback } from "./ui/Avatar";

const LibraryListItem = () => {

  return (
    <button className="flex flex-row items-center space-x-2 rounded-lg p-1 transition-all duration-300 hover:bg-gray-400">
      <Avatar className="h-10 w-10">
        <AvatarFallback className="pointer-events-none bg-gradient-to-br from-purple-500 to-secondary-100 text-xl capitalize">
          🤍
        </AvatarFallback>
      </Avatar>
      <h1 className="text-sm text-white">
        Liked Songs
      </h1>
    </button>
  );
};

export default LibraryListItem;