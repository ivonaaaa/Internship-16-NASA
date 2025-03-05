import { Link } from "react-router-dom";
import React from "react";
import { NEO } from "../../types/NEOData";

interface NEOCardProps {
  neo: NEO;
}

const NEOCard: React.FC<NEOCardProps> = ({ neo }) => {
  return (
    <Link to={`/details/neo/${neo.id}`} className="neo-card-link">
      <div className="neo-card">
        <h3>{neo.name}</h3>
        <div className="starting-point">
          <p>
            Close Approach Date:{" "}
            {neo.close_approach_data[0].close_approach_date}
          </p>
          <p> | </p>
          <p>
            Miss Distance: {neo.close_approach_data[0].miss_distance.kilometers}
            km
          </p>
          <p> | </p>
          <p>
            Velocity:{" "}
            {neo.close_approach_data[0].relative_velocity.kilometers_per_hour}
            km/h
          </p>
        </div>
      </div>
    </Link>
  );
};

export default NEOCard;
