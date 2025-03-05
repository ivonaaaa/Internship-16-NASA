import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAPOD from "../hooks/useAPOD";

const APODDetail = () => {
  const { date } = useParams<{ date: string }>();
  const { data, loading, error, fetchNewData } = useAPOD(
    date ?? "",
    date ?? ""
  );
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    if (date && !isDataFetched) {
      fetchNewData(date, date);
      setIsDataFetched(true);
    }
  }, [date, fetchNewData, isDataFetched]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  if (data.length === 0) {
    return <div>No data found for the selected date.</div>;
  }

  const apod = data[0];

  return (
    <div className="detail-container">
      <h1 className="detail-title">{apod?.title}</h1>
      <img src={apod?.url} alt={apod?.title} className="detail-image" />
      <p className="detail-description">{apod?.explanation}</p>
      <p>
        <strong>Date:</strong> {apod?.date}
      </p>
    </div>
  );
};

export default APODDetail;
