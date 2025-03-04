import { useState, useEffect } from "react";
import axios from "axios";
import { NEOData } from "../types/NEOData";

const API_KEY = import.meta.env.VITE_NASA_API_KEY;
const BASE_URL = "https://api.nasa.gov/neo/rest/v1/feed";

const useNEO = () => {
  const [neoData, setNeoData] = useState<NEOData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNEO = async () => {
      setLoading(true);
      setError(null);

      try {
        const url = `${BASE_URL}?api_key=${API_KEY}`;
        const response = await axios.get(url);
        setNeoData(response.data);
      } catch (err) {
        setError("Failed to fetch NEO data.");
      } finally {
        setLoading(false);
      }
    };

    fetchNEO();
  }, []);

  return { neoData, loading, error };
};

export default useNEO;
