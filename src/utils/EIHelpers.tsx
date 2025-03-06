export const saveFavoriteLocation = (location: {
  lat: number;
  lng: number;
}) => {
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  favorites.push(location);
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

export const getFavoriteLocations = () => {
  return JSON.parse(localStorage.getItem("favorites") || "[]");
};
