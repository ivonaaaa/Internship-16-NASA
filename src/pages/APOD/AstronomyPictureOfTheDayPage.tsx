import React, { useState } from "react";
import useAPOD from "../../hooks/useAPOD";
import APODCard from "../../components/AstronomyPictureOfTheDayPage/APODCard";
import { CircularProgress, Button } from "@mui/material";
import { getLast20Days, handleFilter, loadMore } from "../../utils/APODHelpers";
import "../../styles/pages-styles/APOD-page.css";

const APOD: React.FC = () => {
  const { start: initialStart, end: initialEnd } = getLast20Days();
  const [startDate, setStartDate] = useState(initialStart);
  const [endDate, setEndDate] = useState(initialEnd);

  const {
    data: filteredImages,
    loading,
    fetchNewData,
    error,
  } = useAPOD(startDate, endDate);

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
          onClick={() => handleFilter(startDate, endDate, fetchNewData)}
          disabled={loading}
          sx={{
            borderRadius: "25px",
          }}
        >
          Filter
        </Button>
      </div>

      {error && <p className="error-message">Error: {error}</p>}

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
          onClick={() =>
            loadMore(startDate, setStartDate, fetchNewData, loading)
          }
        >
          Load More
        </Button>
      )}
    </div>
  );
};

export default APOD;
