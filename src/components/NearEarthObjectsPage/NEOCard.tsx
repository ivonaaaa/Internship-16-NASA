import { Link } from "react-router-dom";
import React from "react";
import { NEO } from "../../types/NEOData";

interface NEOCardProps {
  neo: NEO;
}

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
