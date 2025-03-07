import { useState, useEffect } from "react";
import api from "../../services/api";
import { APODData } from "../../types/APODData";

const useAPOD = (startDate: string, endDate: string) => {
  const [data, setData] = useState<APODData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchNewData = async (start: string, end: string) => {
    setLoading(true);
    setError(null);

    try {
      const url = `/planetary/apod?api_key=${
        import.meta.env.VITE_NASA_API_KEY
      }&start_date=${start}&end_date=${end}`;
      const response = await api.get(url);
      const sortedData = response.data.sort((a: APODData, b: APODData) =>
        b.date.localeCompare(a.date)
      );
      setData(sortedData);
    } catch (err: any) {
      const errorMessage =
        err.response?.status === 400
          ? "Bad request. Please check the request parameters."
          : "Failed to fetch APOD data!";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (startDate && endDate) {
      fetchNewData(startDate, endDate);
    }
  }, []);

  return { data, loading, error, fetchNewData };
};

export default useAPOD;
