import React from "react";
import { Link } from "react-router-dom";
import { CardProps } from "../../types/HomeCardProps";

const Card: React.FC<CardProps> = ({ title, link, description, style }) => {
  return (
    <Link to={link} className="card-link">
      <div className="card" style={style}>
        <h3>{title}</h3>
        <div className="card-body">
          <p className="card-description">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
