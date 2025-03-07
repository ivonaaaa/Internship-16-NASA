import { useEffect, useState } from "react";
import { fetchData } from "../../services/api";
import { MarsPhoto } from "../../types/MRPData";

const useMRPDetails = (id: string, rover: string) => {
  const [photo, setPhoto] = useState<MarsPhoto | null>(null);
  const [fetchingDirectly, setFetchingDirectly] = useState(false);
  const [directFetchError, setDirectFetchError] = useState<string | null>(null);

  useEffect(() => {
    if (id && rover) {
      fetchPhotoDirectly();
    }
  }, [id, rover]);

  const fetchPhotoDirectly = async () => {
    setFetchingDirectly(true);
    setDirectFetchError(null);

    try {
      const params = { sol: 1000 };
      const response = await fetchData<{ photos: MarsPhoto[] }>(
        `/mars-photos/api/v1/rovers/${rover}/photos`,
        params
      );
      const selectedPhoto = response.photos.find((p) => p.id === Number(id));

      if (selectedPhoto) setPhoto(selectedPhoto);
      else setPhoto(null);
    } catch (err) {
      setDirectFetchError("Failed to fetch photo details.");
    } finally {
      setFetchingDirectly(false);
    }
  };
  return { photo, fetchingDirectly, directFetchError };
};

export default useMRPDetails;
