import { useState, useEffect } from "react";
import { fetchData } from "../../services/api";
import { MarsPhoto, UseMarsPhotosParams } from "../../types/MRPData";

const useMarsPhotos = ({ rover, camera, page }: UseMarsPhotosParams) => {
  const [photos, setPhotos] = useState<MarsPhoto[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPhotos();
  }, [rover, camera, page]);

  const fetchPhotos = async () => {
    setLoading(true);
    setError(null);
    try {
      const params: Record<string, any> = { sol: 1000, page };
      if (camera) params.camera = camera;
      const response = await fetchData<{ photos: MarsPhoto[] }>(
        `/mars-photos/api/v1/rovers/${rover}/photos`,
        params
      );

      setPhotos(response.photos);
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
      else setError("An unknown error occurred.");
    } finally {
      setLoading(false);
    }
  };
  return { photos, loading, error };
};

export default useMarsPhotos;
