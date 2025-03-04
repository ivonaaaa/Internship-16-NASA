import { useState, useEffect } from "react";
import axios from "axios";
import { MarsPhoto } from "../types/MRPData";

const API_KEY = import.meta.env.VITE_NASA_API_KEY;
const BASE_URL = "https://api.nasa.gov/mars-photos/api/v1/rovers";

interface UseMarsPhotosParams {
  rover: string;
  camera?: string;
  page: number;
}

const useMarsPhotos = ({ rover, camera, page }: UseMarsPhotosParams) => {
  const [photos, setPhotos] = useState<MarsPhoto[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      setLoading(true);
      setError(null);
      try {
        let url = `${BASE_URL}/${rover}/photos?sol=1000&page=${page}&api_key=${API_KEY}`;
        if (camera) url += `&camera=${camera}`;

        const response = await axios.get(url);
        setPhotos(response.data.photos);
      } catch (err) {
        setError("Failed to fetch Mars photos.");
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, [rover, camera, page]);

  return { photos, loading, error };
};

export default useMarsPhotos;
