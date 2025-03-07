import React, { useState } from "react";
import MapComponent from "../../components/EarthImageryPage/Map";
import ImageCard from "../../components/EarthImageryPage/ImageCard";
import useEarthImage from "../../hooks/EI/useEI";
import withFavorites from "../../hoc/WithFavourites";
import withImageZoom from "../../hoc/WithImageZoom";
import { CircularProgress, Button } from "@mui/material";
import "../../styles/pages-styles/EI-page.css";

const MapPage: React.FC = ({ favorites, onAddToFavorites }: any) => {
  const [selectedLocation, setSelectedLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const { image, loading, error } = useEarthImage({
    latitude: selectedLocation?.lat ?? 0,
    longitude: selectedLocation?.lng ?? 0,
  });
  const [zoomedImageUrl, setZoomedImageUrl] = useState<string | null>(null);
  const handleLocationSelect = (lat: number, lng: number) => {
    setSelectedLocation({ lat, lng });
  };
  const handleImageClick = (imageUrl: string) => {
    setZoomedImageUrl(imageUrl);
  };
  const handleCloseZoom = () => {
    setZoomedImageUrl(null);
  };

  return (
    <div className="map-page">
      <h1>Earth Imagery</h1>

      <MapComponent onLocationSelect={handleLocationSelect} />

      <h4>
        Note that images may appear slightly blurry or dark due to weather
        complications.
        <br />
        Click on image for better view.
      </h4>

      {selectedLocation && image && !loading && !error && (
        <div>
          <ImageCard
            imageUrl={image.url}
            date={image.date}
            latitude={image.latitude}
            longitude={image.longitude}
            onImageClick={handleImageClick}
          />
          <Button
            onClick={() => onAddToFavorites(selectedLocation)}
            variant="contained"
            disabled={loading}
            sx={{
              borderRadius: "25px",
              mb: "30px",
            }}
          >
            Add to Favorites
          </Button>
        </div>
      )}

      {loading && <CircularProgress size={50} />}
      {error && <p>{error}</p>}

      <h2>Coordinates of Favorite Locations:</h2>
      {favorites.length === 0 ? (
        <p>No favorites available at the moment. Try more locations!</p>
      ) : (
        <ul className="favorites-list">
          {favorites.map(
            (location: { lat: number; lng: number }, index: number) => (
              <li key={index} className="favorite-item">
                {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
              </li>
            )
          )}
        </ul>
      )}

      {zoomedImageUrl && (
        <div className="zoomed-image-overlay">
          <div className="zoomed-image-container">
            <img src={zoomedImageUrl} alt="Zoomed" className="zoomed-image" />
            <Button
              variant="contained"
              sx={{
                borderRadius: "25px",
                position: "absolute",
                top: "70px",
                left: "64%",
              }}
              onClick={handleCloseZoom}
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default withFavorites(withImageZoom(MapPage));
