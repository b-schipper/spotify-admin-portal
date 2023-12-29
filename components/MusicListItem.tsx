"use client";
import { MusicTrack } from "@/types/types";
import Image from "next/image";

const MusicListItem = ({track}: {track: MusicTrack}) => {

  return (
    <button key={track.id} className="flex flex-col items-center h-40 w-40 mx-10">
      <Image 
        src="/see-you-again.jpeg"
        alt="Direct Message Icon"
        width={160}
        height={160}
      />
      <h1>{track.title}</h1>
      <span>{track.artistName}</span>
    </button>
  )
}

export default MusicListItem;