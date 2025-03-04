import React, { useState, useEffect } from "react";
import { fetchAPOD } from "../services/APODService";
import { APODData } from "../types/APODData";
import APODCard from "../components/AstronomyPictureOfTheDayPage/APODCard";
import { CircularProgress } from "@mui/material";

const APOD: React.FC = () => {
  const [images, setImages] = useState<APODData[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchInitialData = async () => {
      setLoading(true);
      try {
        const data = await fetchAPOD(20);
        setImages(data);
      } catch (error) {
        console.error("Failed to fetch APOD images:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchInitialData();
  }, []);

  const loadMore = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const moreData = await fetchAPOD(10);
      setImages((prev) => [...prev, ...moreData]);
    } catch (error) {
      console.error("Failed to load more APOD images:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Astronomy Picture of the Day</h1>
      <div>
        {images.map((image) => (
          <APODCard key={image.date} data={image} />
        ))}
      </div>
      {loading ? (
        <div>
          <CircularProgress size={30} />{" "}
          {/* ocu liii ode koristit ovaj mui ili nesto drugo */}
        </div>
      ) : (
        images.length < 50 && <button onClick={loadMore}>Load More</button>
      )}
    </div>
  );
};

export default APOD;
