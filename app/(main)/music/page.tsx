"use client";
import { MusicTrack } from "@/types/types";
import MusicListContainer from "@/components/MusicListContainer";
import NewMusicTrackForm from "@/components/NewMusicTrackForm";
import { getAllExistingMusicTracks, likeMusicTrack } from "@/services/musictrack-service";
import { axiosInstance } from "@/services/axios-service";
import { useEffect, useState } from "react";

const Music = () => {
  const [musicList, setMusicList] = useState<MusicTrack[]>([]);
  const [role, setRole] = useState("ROLE_USER");

  const instance = axiosInstance();

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role != null) {
      setRole(role);
    }
  });

  const fetchData = async () => {
    try {
      const data = await getAllExistingMusicTracks(instance);
      setMusicList(data as MusicTrack[]);
      console.log(musicList);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div className="flex flex-row items-center mx-10">
      <button onClick={fetchData}>Reload music</button>
      <div className="flex flex-row items-center">
       { musicList.length >= 1 && <MusicListContainer tracks={musicList} /> }
      </div>
      <div className="flex flex-col items-center">
      { role === "ROLE_ARTIST" && <NewMusicTrackForm /> }
      </div>
    </div>
  );
}

export default Music;
