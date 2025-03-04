import { forwardRef } from "react";
import { APODData } from "../../types/APODData";

interface APODCardProps {
  data: APODData;
}

const APODCard = forwardRef<HTMLDivElement, APODCardProps>(({ data }, ref) => {
  return (
    <div ref={ref}>
      <img src={data.url} alt={data.title} />
      <h3>{data.title}</h3>
      <p>{data.explanation}</p>
      <p>{data.date}</p>
    </div>
  );
});

export default APODCard;
