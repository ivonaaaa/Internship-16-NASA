import React from "react";
import "../../styles/pages-styles/MRP-page.css";

const rovers = ["Curiosity", "Opportunity", "Spirit"];
const cameras = ["FHAZ", "RHAZ", "MAST", "CHEMCAM", "NAVCAM"];

interface FiltersProps {
  setRover: (rover: string) => void;
  setCamera: (camera: string) => void;
}

const Filters: React.FC<FiltersProps> = ({ setRover, setCamera }) => {
  return (
    <div className="filter-container">
      <select onChange={(e) => setRover(e.target.value.toLowerCase())}>
        {rovers.map((rover) => (
          <option key={rover} value={rover.toLowerCase()}>
            {rover}
          </option>
        ))}
      </select>

      <select onChange={(e) => setCamera(e.target.value)}>
        <option value="">All Cameras</option>
        {cameras.map((camera) => (
          <option key={camera} value={camera}>
            {camera}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
