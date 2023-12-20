import axios from "axios";

const API_BASE_URL = 'http://localhost:8090/api/v1';

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/auth/login`,
      {
        email,
        password,
      },
      { withCredentials: true },
    );

    const accessToken = response.data.results.access_token;

    return accessToken;
  } catch (error: any) {
    console.error("Login failed:", error);
    throw error;
  }
};

export const registerUser = async (
  username: string,
  email: string,
  password: string,
) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/auth/register`,
      {
        username,
        email,
        password,
      },
      { withCredentials: true },
    );

    return response.data.results.access_token;
  } catch (error: any) {
    console.error("Register failed:", error);
    throw error;
  }
};

export const registerArtist = async (
  username: string,
  email: string,
  password: string,
) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/auth/register/artist`,
      {
        username,
        email,
        password,
      },
      { withCredentials: true },
    );

    return response.data.results.access_token;
  } catch (error: any) {
    console.error("Register failed:", error);
    throw error;
  }
};

export const logout = async () => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/auth/logout`,
      {},
      { withCredentials: true },
    );

    return response;
  } catch (error: any) {
    console.error("Logout failed:", error);
    throw error;
  }
};
