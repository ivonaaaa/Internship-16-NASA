import React, { useState } from "react";
import MapComponent from "../components/EarthImageryPage/Map";
import ImageCard from "../components/EarthImageryPage/ImageCard";
import useEarthImage from "../hooks/useEI";
import withFavorites from "../hoc/WithFavourites";
//import "../styles/EI-page.css"; dodat cz styling

const MapPage: React.FC = ({ favorites, onAddToFavorites }: any) => {
  const [selectedLocation, setSelectedLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  const { image, loading, error } = useEarthImage({
    latitude: selectedLocation?.lat ?? 0,
    longitude: selectedLocation?.lng ?? 0,
  });

  const handleLocationSelect = (lat: number, lng: number) => {
    setSelectedLocation({ lat, lng });
  };

  return (
    <div className="map-page">
      <h1>Earth Imagery</h1>

      <MapComponent onLocationSelect={handleLocationSelect} />

      {selectedLocation && image && !loading && !error && (
        <div>
          <ImageCard
            imageUrl={image.url}
            date={image.date}
            latitude={image.latitude}
            longitude={image.longitude}
          />
          <button
            onClick={() => onAddToFavorites(selectedLocation)}
            className="add-to-favorites-btn"
          >
            Add to Favorites
          </button>
        </div>
      )}

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <h2>Favorite Locations</h2>
      <ul className="favorites-list">
        {favorites.map(
          (location: { lat: number; lng: number }, index: number) => (
            <li key={index}>
              {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default withFavorites(MapPage);
