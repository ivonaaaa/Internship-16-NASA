import React, { useState } from "react";
import useAPOD from "../../hooks/useAPOD";
import APODCard from "../../components/AstronomyPictureOfTheDayPage/APODCard";
import { CircularProgress, Button } from "@mui/material";
import { getLast20Days } from "../../utils/GetLast20Days";
import "../../styles/pages-styles/APOD-page.css";

const APOD: React.FC = () => {
  const { start: initialStart, end: initialEnd } = getLast20Days();
  const [startDate, setStartDate] = useState(initialStart);
  const [endDate, setEndDate] = useState(initialEnd);

  const {
    data: filteredImages,
    loading,
    fetchNewData,
  } = useAPOD(startDate, endDate);

  const handleFilter = () => {
    if (!startDate || !endDate) return;
    fetchNewData(startDate, endDate);
  };

  const loadMore = () => {
    if (loading) return;

    const newEndDate = new Date(startDate);
    newEndDate.setDate(newEndDate.getDate() - 1);

    const newStartDate = new Date(newEndDate);
    newStartDate.setDate(newStartDate.getDate() - 9);

    setStartDate(newStartDate.toISOString().split("T")[0]);
    fetchNewData(
      newStartDate.toISOString().split("T")[0],
      newEndDate.toISOString().split("T")[0],
      true
    );
  };

  return (
    <div className="apod-container">
      <h1>Astronomy Picture of the Day</h1>

      <div className="filter-container">
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
        <Button
          variant="contained"
          onClick={handleFilter}
          disabled={loading}
          sx={{
            borderRadius: "25px",
          }}
        >
          Filter
        </Button>
      </div>

      <div className="gallery">
        {loading ? (
          <div className="loading-container">
            <CircularProgress size={30} />
          </div>
        ) : (
          filteredImages.map((image) => (
            <APODCard key={image.date} data={image} />
          ))
        )}
      </div>

      {loading ? null : (
        <Button
          variant="contained"
          sx={{
            borderRadius: "20px",
            marginBottom: "50px",
          }}
          onClick={loadMore}
        >
          Load More
        </Button>
      )}
    </div>
  );
};

export default APOD;
