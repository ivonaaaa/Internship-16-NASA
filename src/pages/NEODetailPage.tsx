import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useNEO from "../hooks/useNEO";
import { NEO } from "../types/NEOData";

const NEODetail = () => {
  const { id } = useParams<{ id: string }>();
  const { neoData, loading, error } = useNEO();
  const [neo, setNeo] = useState<NEO | null>(null);

  useEffect(() => {
    if (neoData) {
      const allNEOs = Object.values(neoData.near_earth_objects).flat();
      const foundNEO = allNEOs.find((n) => n.id === id);
      setNeo(foundNEO || null);
    }
  }, [neoData, id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!neo) return <div>No NEO data found.</div>;

  return (
    <div>
      <h1>{neo.name}</h1>
      <p>
        <strong>Close Approach Date:</strong>{" "}
        {neo.close_approach_data[0]?.close_approach_date || "Unknown"}
      </p>
      <p>
        <strong>Miss Distance:</strong>{" "}
        {neo.close_approach_data[0]?.miss_distance.kilometers || "Unknown"} km
      </p>
      <p>
        <strong>Velocity:</strong>{" "}
        {neo.close_approach_data[0]?.relative_velocity.kilometers_per_hour ||
          "Unknown"}{" "}
        km/h
      </p>
    </div>
  );
};

export default NEODetail;
