import axios from "axios";

const api = axios.create({
  baseURL: "https://api.nasa.gov/",
  params: { api_key: import.meta.env.VITE_NASA_API_KEY },
});

export default api;
