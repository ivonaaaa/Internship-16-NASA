import { Link } from "react-router-dom";
import { forwardRef } from "react";
import { APODCardProps } from "../../types/APODData";
import "../../styles/pages-styles/APOD-page.css";
import "../../styles/pages-styles/details-page.css";

const APODCard = forwardRef<HTMLDivElement, APODCardProps>(({ data }, ref) => {
  return (
    <Link to={`/details/apod/${data.date}`} className="link">
      <div ref={ref} className="apod-card">
        <img src={data.url} alt={data.title} />
        <div className="apod-card-content">
          <h3 className="apod-card-title">{data.title}</h3>
          <p className="apod-card-explanation">{data.explanation}</p>
          <p className="apod-card-date">{data.date}</p>
        </div>
      </div>
    </Link>
  );
});

export default APODCard;
