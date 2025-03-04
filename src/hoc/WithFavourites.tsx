import React, { useState, useEffect } from "react";
import {
  saveFavoriteLocation,
  getFavoriteLocations,
} from "../utils/localStorage";

const withFavorites = (WrappedComponent: React.ComponentType<any>) => {
  return (props: any) => {
    const [favorites, setFavorites] = useState<{ lat: number; lng: number }[]>(
      []
    );

    useEffect(() => {
      setFavorites(getFavoriteLocations());
    }, []);

    const handleAddToFavorites = (location: { lat: number; lng: number }) => {
      saveFavoriteLocation(location);
      setFavorites(getFavoriteLocations());
    };

    return (
      <WrappedComponent
        {...props}
        favorites={favorites}
        onAddToFavorites={handleAddToFavorites}
      />
    );
  };
};

export default withFavorites;
