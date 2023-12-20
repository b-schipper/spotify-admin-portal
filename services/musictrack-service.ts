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

export const uploadNewMusicTrack = async (
  axios: AxiosInstance,
  title: string,
  duration: number,
) => {
  try {
    const response = await axios.post(`/musictracks`, {
      title,
      duration,
    });
    return response.data;
  } catch (error: any) {
    console.error(error);
    return error.response.data;
  }
}

export const editExistingMusicTrack = async (
  axios: AxiosInstance,
  id: number,
  title: string,
  duration: number,
) => {
  try {
    const response = await axios.put(`/musictracks`, {
      id,
      title,
      duration,
    });
    return response.data;
  } catch (error: any) {
    console.error(error);
    return error.response.data;
  }
}

export const deleteExistingMusicTrack = async (
  axios: AxiosInstance,
  id: number,
) => {
  try {
    const response = await axios.delete(`/musictrack/${id}`)
    return response.data;
  } catch (error: any) {
    console.error(error);
    return error.response.data;
  }
}