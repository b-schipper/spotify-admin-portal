import { AxiosInstance } from "axios";

export const getApplicationMetrics = async (
  axios: AxiosInstance
) => {
  try {
    const response = await axios.get(`/portal`);
    return response.data;
  } catch (error: any) {
    console.error(error);
    return error.response.data;
  }
}
