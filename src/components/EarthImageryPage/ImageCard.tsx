import React from "react";
import { ImageCardPropsWithClick } from "../../types/ImageCardProps";
import "../../styles/other/withImageZoom.css";
import "../../styles/pages-styles/EI-page.css";

const ImageCard: React.FC<ImageCardPropsWithClick> = ({
  imageUrl,
  date,
  latitude,
  longitude,
  onImageClick,
}) => {
  return (
    <div className="image-card">
      <img
        src={imageUrl}
        alt={`Earth imagery from ${date}`}
        className="earth-image"
        onClick={() => onImageClick(imageUrl)}
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
