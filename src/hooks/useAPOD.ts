import { useState, useEffect } from "react";
import axios from "axios";
import { APODData } from "../types/APODData";

const API_KEY = import.meta.env.VITE_NASA_API_KEY;
const BASE_URL = "https://api.nasa.gov/planetary/apod";

const useAPOD = (initialStartDate: string, initialEndDate: string) => {
  const [data, setData] = useState<APODData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchNewData(initialStartDate, initialEndDate);
  }, [initialStartDate, initialEndDate]);

  const fetchNewData = async (
    start: string,
    end: string,
    append: boolean = false
  ) => {
    setLoading(true);
    setError(null);

    try {
      const url = `${BASE_URL}?api_key=${API_KEY}&start_date=${start}&end_date=${end}`;
      const response = await axios.get(url);
      const sortedData = response.data.sort((a: APODData, b: APODData) =>
        b.date.localeCompare(a.date)
      );

      setData((prev) => (append ? [...prev, ...sortedData] : sortedData));
    } catch (err) {
      setError("Failed to fetch APOD data!");
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchNewData };
};

export default useAPOD;
