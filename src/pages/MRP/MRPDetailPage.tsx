import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import useMarsPhotos from "../../hooks/useMRP";
import { MarsPhoto } from "../../types/MRPData";
import axios from "axios";

const API_KEY = import.meta.env.VITE_NASA_API_KEY;
const BASE_URL = "https://api.nasa.gov/mars-photos/api/v1/rovers";

const MRPDetailsPage = () => {
  const { id, rover, camera } = useParams<{
    id: string;
    rover: string;
    camera: string;
  }>();
  const { search } = useLocation();

  const [photo, setPhoto] = useState<MarsPhoto | null>(null);
  const [fetchingDirectly, setFetchingDirectly] = useState(false);
  const [directFetchError, setDirectFetchError] = useState<string | null>(null);

  const urlParams = new URLSearchParams(search);
  const page = Number(urlParams.get("page")) || 1;

  const { photos, loading, error } = useMarsPhotos({
    rover: rover || "curiosity",
    camera: camera || "",
    page: page,
  });

  useEffect(() => {
    if (!loading && photos.length > 0 && id) {
      const selectedPhoto = photos.find((p) => p.id === Number(id));
      if (selectedPhoto) setPhoto(selectedPhoto);
      else fetchPhotoDirectly();
    }
  }, [id, photos, loading]);

  const fetchPhotoDirectly = async () => {
    if (!id || !rover) return;

    setFetchingDirectly(true);
    setDirectFetchError(null);

    try {
      const url = `${BASE_URL}/${rover}/photos?sol=1000&api_key=${API_KEY}`;
      const response = await axios.get(url);
      const allPhotos = response.data.photos;
      const selectedPhoto = allPhotos.find((p: any) => p.id === Number(id));

      if (selectedPhoto) setPhoto(selectedPhoto);
      else setPhoto(null);
    } catch (err) {
      setDirectFetchError("Failed to fetch photo details.");
    } finally {
      setFetchingDirectly(false);
    }
  };

  if (loading || fetchingDirectly) return <div>Loading...</div>;
  if (error || directFetchError) return <div>{error || directFetchError}</div>;

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
        <p>No photo found with ID: {id}</p>
      )}

      <div className="detail-description">
        {photo ? (
          <>
            <p>
              <strong>Date Taken:</strong> {photo.earth_date}
            </p>
            <p>
              <strong>Camera:</strong> {photo.camera.full_name} (
              {photo.camera.name})
            </p>
            <p>
              <strong>Rover Info:</strong>
            </p>
            <ul>
              <li>
                <strong>Name:</strong> {photo.rover.name}
              </li>
              <li>
                <strong>Launch Date:</strong> {photo.rover.launch_date}
              </li>
              <li>
                <strong>Landing Date:</strong> {photo.rover.landing_date}
              </li>
              <li>
                <strong>Status:</strong> {photo.rover.status}
              </li>
            </ul>
          </>
        ) : (
          <p>Photo details not available.</p>
        )}
      </div>
    </div>
  );
};

export default MRPDetailsPage;
