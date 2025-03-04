import React from "react";
import { ImageCardProps } from "../../types/ImageCardProps";

const ImageCard: React.FC<ImageCardProps> = ({
  imageUrl,
  date,
  latitude,
  longitude,
}) => {
  return (
    <div className="image-card">
      <img
        src={imageUrl}
        alt={`Earth imagery from ${date}`}
        className="earth-image"
      />
      <div className="image-details">
        <p>Date: {new Date(date).toLocaleDateString()}</p>
        <p>Latitude: {latitude.toFixed(4)}</p>
        <p>Longitude: {longitude.toFixed(4)}</p>
      </div>
    </div>
  );
};

export default ImageCard;
