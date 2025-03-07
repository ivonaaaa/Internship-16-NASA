import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import useMRPDetails from "../../hooks/MRP/useMRPDetails";

const MRPDetailsPage = () => {
  const { id, rover } = useParams<{
    id: string;
    rover: string;
    camera: string;
  }>();

  const { photo, fetchingDirectly, directFetchError } = useMRPDetails(
    id ?? "",
    rover ?? "curiosity"
  );

  if (fetchingDirectly) return <CircularProgress size={50} />;
  if (directFetchError) return <div>{directFetchError}</div>;

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
