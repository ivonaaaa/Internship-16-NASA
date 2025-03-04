import React, { useState, useEffect } from "react";
import { fetchAPOD } from "../services/APODService";
import { APODData } from "../types/APODData";
import APODCard from "../components/AstronomyPictureOfTheDayPage/APODCard";
import { CircularProgress } from "@mui/material";
import { getLast20Days } from "../utils/getLast20Days";

const APOD: React.FC = () => {
  const [filteredImages, setFilteredImages] = useState<APODData[]>([]);
  const [loading, setLoading] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    const { start, end } = getLast20Days();
    setStartDate(start);
    setEndDate(end);
    fetchImages(start, end);
  }, []);

  const fetchImages = async (start: string, end: string) => {
    setLoading(true);
    try {
      const data = await fetchAPOD(start, end);
      const sortedData = data.sort((a, b) => b.date.localeCompare(a.date));
      setFilteredImages(sortedData);
    } catch (error) {
      console.error("Failed to fetch APOD images:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilter = async () => {
    if (!startDate || !endDate) return;

    setLoading(true);
    try {
      const data = await fetchAPOD(startDate, endDate);
      const sortedData = data.sort((a, b) => b.date.localeCompare(a.date));
      setFilteredImages(sortedData);
      setFilteredImages(sortedData);
    } catch (error) {
      console.error("Failed to fetch filtered APOD images:", error);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const newEndDate = new Date(startDate);
      newEndDate.setDate(newEndDate.getDate() - 1);

      const newStartDate = new Date(newEndDate);
      newStartDate.setDate(newStartDate.getDate() - 9);

      const moreData = await fetchAPOD(
        newStartDate.toISOString().split("T")[0],
        newEndDate.toISOString().split("T")[0]
      );
      setStartDate(newStartDate.toISOString().split("T")[0]);

      const sortedMoreData = moreData.sort((a, b) =>
        b.date.localeCompare(a.date)
      );
      setFilteredImages((prev) => [...prev, ...sortedMoreData]);
    } catch (error) {
      console.error("Failed to load more APOD images:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Astronomy Picture of the Day</h1>

      <div>
        <label>Start Date: </label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <label>End Date: </label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button onClick={handleFilter}>Filter</button>
      </div>

      <div>
        {loading ? (
          <div>
            <CircularProgress size={30} />
          </div>
        ) : (
          filteredImages.map((image) => (
            <APODCard key={image.date} data={image} />
          ))
        )}
      </div>

      {loading ? null : <button onClick={loadMore}>Load More</button>}
    </div>
  );
};

export default APOD;
