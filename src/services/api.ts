import axios from "axios";

const api = axios.create({
  baseURL: "https://api.nasa.gov/",
  params: { api_key: import.meta.env.VITE_NASA_API_KEY },
});

export const fetchData = async <T>(
  endpoint: string,
  params = {}
): Promise<T> => {
  try {
    const response = await api.get(endpoint, { params });
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) throw new Error(error.message);
    throw new Error("An unknown error occurred.");
  }
};

export default api;
