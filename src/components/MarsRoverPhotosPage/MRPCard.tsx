import { Link } from "react-router-dom";
import React from "react";
import { PhotoCardProps } from "../../types/MRPData";
import "../../styles/pages-styles/MRP-page.css";

const PhotoCard: React.FC<PhotoCardProps> = ({ photo }) => {
  return (
    <Link
      to={`/details/mars/${photo.rover.name.toLowerCase()}/${photo.id}`}
      className="link"
    >
      <div className="mars-card">
        <img src={photo.img_src} alt={photo.rover.name} />
        <h3 className="mars-card-title">{photo.rover.name} Rover</h3>
        <p>Camera: {photo.camera.full_name}</p>
        <p className="mars-card-date">{photo.earth_date}</p>
      </div>
    </Link>
  );
};

export default PhotoCard;
