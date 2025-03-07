import { useState, useEffect } from "react";
import { fetchData } from "../../services/api";
import { EarthImage, UseEarthImageParams } from "../../types/EIData";

const useEarthImage = ({ latitude, longitude }: UseEarthImageParams) => {
  const [image, setImage] = useState<EarthImage | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (latitude && longitude) fetchImage();
    else {
      setImage(null);
      setLoading(false);
    }
  }, [latitude, longitude]);

  const fetchImage = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetchData<{ url: string; date: string }>(
        "/planetary/earth/assets",
        {
          lon: longitude,
          lat: latitude,
          dim: 0.5,
          date: "2022-01-01",
        }
      );
      setImage({ url: response.url, date: response.date, latitude, longitude });
    } catch (err: unknown) {
      if (err instanceof Error) {
        if (err.message.includes("404"))
          setError("No data available for this location. Try a different one.");
        else if (err.message.includes("400"))
          setError("Bad request. Please check the data you sent.");
        else setError("An unknown error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };
  return { image, loading, error };
};

export default useEarthImage;
