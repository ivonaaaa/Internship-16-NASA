import React from "react";
import "../../styles/home-page.css";

const Headline: React.FC = () => {
  return (
    <div>
      <h1 className="headline-title">Explore NASA's Data</h1>
      <p className="headline-text">
        Welcome to a place where you can discover all kinds of stuff about
        space! Dive into amazing images coming right from NASA!
      </p>
    </div>
  );
};

export default Headline;
