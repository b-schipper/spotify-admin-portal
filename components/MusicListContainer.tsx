"use client";
import { MusicTrack } from "@/types/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import MusicListItem from "./MusicListItem";

const MusicListContainer = ({ tracks }: { tracks: MusicTrack[] }) => {
  const [musicList, setMusicList] = useState<MusicTrack[]>(tracks);

  return (
    <div className="flex flex-wrap flex-row items-center mx-10">
      {
          musicList.map(track => (
            <MusicListItem track={track}/>
          ))
      }

      {/* <button className="flex flex-col items-center h-40 w-40 mx-10">
        <Image 
          src="/see-you-again.jpeg"
          alt="Direct Message Icon"
          width={160}
          height={160}
        />
      </button>
      <button className="flex flex-col items-center h-40 w-40 mx-10">
        <Image 
          src="/see-you-again.jpeg"
          alt="Direct Message Icon"
          width={160}
          height={160}
        />
      </button>
      <button className="flex flex-col items-center h-40 w-40 mx-10">
        <Image 
          src="/see-you-again.jpeg"
          alt="Direct Message Icon"
          width={160}
          height={160}
        />
        <h1>See You Again</h1>
        <span>Tyler, The Creator</span>
      </button> */}
    </div>
  );
};

export default MusicListContainer;
