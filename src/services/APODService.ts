import axios from "axios";
import { APODData } from "../types/APODData";

const API_KEY = import.meta.env.VITE_NASA_API_KEY;
const BASE_URL = "https://api.nasa.gov/planetary/apod";

export const fetchAPOD = async (count: number): Promise<APODData[]> => {
  try {
    const url = `${BASE_URL}?api_key=${API_KEY}&count=${count}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching APOD data:", error);
    return [];
  }
};
