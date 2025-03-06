import { Link } from "react-router-dom";
import React from "react";
import { NEOCardProps } from "../../types/NEOData";

const NEOCard: React.FC<NEOCardProps> = ({ neo }) => {
  return (
    <Link to={`/details/neo/${neo.id}`} className="link">
      <div className="neo-card">
        <h3>{neo.name}</h3>
      </div>
    </Link>
  );
};

export default NEOCard;
