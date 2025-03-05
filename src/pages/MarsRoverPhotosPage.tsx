import React, { useState } from "react";
import useMarsPhotos from "../hooks/useMRP";
import PhotoCard from "../components/MarsRoverPhotosPage/MRPCard";
import Filters from "../components/MarsRoverPhotosPage/Filters";
import { Button, CircularProgress } from "@mui/material";
import "../styles/MRP-page.css";

const MRPPage: React.FC = () => {
  const [rover, setRover] = useState("curiosity");
  const [camera, setCamera] = useState("");
  const [page, setPage] = useState(1);
  const { photos, loading, error } = useMarsPhotos({ rover, camera, page });

  return (
    <div className="mars-container">
      <h1>Mars Rover Photos</h1>

      <Filters setRover={setRover} setCamera={setCamera} />

      {loading && <CircularProgress />}
      {error && <p>{error}</p>}

      <div className="gallery">
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>

      <div className="pagination">
        <Button
          variant="contained"
          onClick={() => setPage((prev) => Math.max(1, prev - 1))}
          disabled={page === 1}
        >
          Previous
        </Button>
        <Button variant="contained" onClick={() => setPage((prev) => prev + 1)}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default MRPPage;
