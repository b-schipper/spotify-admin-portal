import LibraryListItem from "./LibraryListItem";


const LibraryOverview = () => {
  const playlists = [
    {
      playlist_id: 1,
      creator_id: 1,
      participant_id: 2,
    },
  ];

  return (
    <div>
      <h1 className="mt-8 text-sm text-black">Your Library</h1>
      {playlists.map(() => (
        <LibraryListItem />
      ))}
    </div>
  );
}

export default LibraryOverview;