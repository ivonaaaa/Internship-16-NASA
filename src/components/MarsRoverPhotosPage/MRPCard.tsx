import React from "react";
import { MarsPhoto } from "../../types/MRPData";
import "../../styles/MRP-page.css";

interface PhotoCardProps {
  photo: MarsPhoto;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ photo }) => {
  return (
    <div className="mars-card">
      <img src={photo.img_src} alt={photo.rover.name} />
      <h3 className="mars-card-title">{photo.rover.name} Rover</h3>
      <p>Camera: {photo.camera.full_name}</p>
      <p className="mars-card-date">{photo.earth_date}</p>
    </div>
  );
};

export default PhotoCard;
