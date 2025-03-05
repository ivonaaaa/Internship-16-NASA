import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useMarsPhotos from "../hooks/useMRP";
import { MarsPhoto } from "../types/MRPData";

const MRPDetailsPage = () => {
  const { id, rover } = useParams<{ id: string; rover: string }>();
  const [photo, setPhoto] = useState<MarsPhoto | null>(null);
  const { photos, loading, error } = useMarsPhotos({
    rover: rover || "curiosity",
    page: 1,
  });

  useEffect(() => {
    if (photos.length > 0) {
      const selectedPhoto = photos.find((p) => p.id === Number(id));
      setPhoto(selectedPhoto || photos[0] || null);
    }
  }, [id, photos]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="detail-container">
      <h1 className="detail-title">Photo from {photo?.rover.name ?? rover}</h1>

      {photo?.img_src ? (
        <img
          src={photo.img_src}
          alt={`Mars Rover ${photo.rover.name}`}
          className="detail-image"
        />
      ) : (
        <p>No photo found.</p>
      )}

      <div className="detail-description">
        <p>
          <strong>Date Taken:</strong> {photo?.earth_date ?? "N/A"}
        </p>
        <p>
          <strong>Camera:</strong> {photo?.camera.full_name ?? "N/A"} (
          {photo?.camera.name ?? "N/A"})
        </p>
        <p>
          <strong>Rover Info:</strong>
        </p>
        <ul>
          <li>
            <strong>Name:</strong> {photo?.rover.name ?? rover}
          </li>
          <li>
            <strong>Launch Date:</strong> {photo?.rover.launch_date ?? "N/A"}
          </li>
          <li>
            <strong>Landing Date:</strong> {photo?.rover.landing_date ?? "N/A"}
          </li>
          <li>
            <strong>Status:</strong> {photo?.rover.status ?? "N/A"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MRPDetailsPage;
