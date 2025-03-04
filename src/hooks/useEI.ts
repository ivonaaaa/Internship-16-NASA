import { useState, useEffect } from "react";
import axios from "axios";
import { EarthImage, UseEarthImageParams } from "../types/EIData";

const API_KEY = import.meta.env.VITE_NASA_API_KEY;

const useEarthImage = ({ latitude, longitude }: UseEarthImageParams) => {
  const [image, setImage] = useState<EarthImage | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setImage(null);
    setError(null);

    const shouldFetch = latitude && longitude;

    if (shouldFetch) {
      const fetchImage = async () => {
        setLoading(true);
        try {
          const url = `https://api.nasa.gov/planetary/earth/assets?lon=${longitude}&lat=${latitude}&dim=0.5&date=2022-01-01&api_key=${API_KEY}`;
          const response = await axios.get(url);
          const { url: imageUrl, date } = response.data;
          setImage({
            url: imageUrl,
            date,
            latitude,
            longitude,
          });
        } catch (err) {
          setError("Failed to fetch Earth imagery.");
        } finally {
          setLoading(false);
        }
      };
      fetchImage();
    } else setLoading(false);
  }, [latitude, longitude]);

  return { image, loading, error };
};

export default useEarthImage;
