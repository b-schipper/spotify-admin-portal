import { AxiosInstance } from "axios";

export const getAllExistingMusicTracks = async (
  axios: AxiosInstance
) => {
  try {
    const response = await axios.get(`/musictracks`);
    return response.data;
  } catch (error: any) {
    console.error(error);
    return error.response.data;
  }
}

export const getRequestedMusicTrack = async (
  axios: AxiosInstance,
  id: number
) => {
  try {
    const response = await axios.get(`/musictracks/${id}`);
    return response.data;
  } catch (error: any) {
    console.error(error);
    return error.response.data;
  }
}

export const likeMusicTrack = async (
  axios: AxiosInstance,
  id: number
) => {
  try {
    const response = await axios.post(`/musictracks/${id}/like`)
    return response.data;
  } catch (error: any) {
    console.error(error);
    return error.response.data;
  }
}

export const getMusicTracksLikedByUser = async (
  axios: AxiosInstance,
) => {
  try {
    const response = await axios.post(`/musictracks/liked`)
    return response.data;
  } catch (error: any) {
    console.error(error);
    return error.response.data;
  }
}
