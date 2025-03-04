import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";

interface MapComponentProps {
  onLocationSelect: (lat: number, lng: number) => void;
}

const MapComponent: React.FC<MapComponentProps> = ({ onLocationSelect }) => {
  const [markerPosition, setMarkerPosition] = useState<[number, number] | null>(
    null
  );

  const LocationFinder = () => {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setMarkerPosition([lat, lng]);
        onLocationSelect(lat, lng);
      },
    });

    return null;
  };

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={3}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {markerPosition && (
        <Marker
          position={markerPosition}
          icon={L.icon({ iconUrl: "/marker-icon.png" })}
        >
          <Popup>
            Latitude: {markerPosition[0]} <br /> Longitude: {markerPosition[1]}
          </Popup>
        </Marker>
      )}
      <LocationFinder />
    </MapContainer>
  );
};

export default MapComponent;
