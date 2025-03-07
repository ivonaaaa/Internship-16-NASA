import { useState, useEffect } from "react";
import { fetchData } from "../../services/api";
import { NEOData } from "../../types/NEOData";

const useNEO = () => {
  const [neoData, setNeoData] = useState<NEOData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchNEO();
  }, []);

  const fetchNEO = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetchData<NEOData>("/neo/rest/v1/feed");
      setNeoData(response);
    } catch (err: unknown) {
      if (err instanceof Error) {
        if (err.message.includes("404")) {
          setError("No NEO data available.");
        } else if (err.message.includes("400")) {
          setError("Bad request. Please check the request parameters.");
        } else {
          setError("An unknown error occurred.");
        }
      }
    } finally {
      setLoading(false);
    }
  };
  return { neoData, loading, error };
};

export default useNEO;
