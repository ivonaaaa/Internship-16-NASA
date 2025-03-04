import React from "react";
import Card from "../components/HomePage/HPCard";
import Headline from "../components/HomePage/Headline";
import { routes } from "../constants/routes";

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <Headline />
      <img src="src/assets/space-bg.jpg" className="bg-image"></img>
      <img src="src/assets/planet-1.png" className="planet-1"></img>
      <img src="src/assets/planet-2.png" className="planet-2"></img>
      <img src="src/assets/astronaut.png" className="astronaut"></img>

      <div className="home-content">
        <div className="intro">
          <h2>What can you find here?</h2>
          <p>
            This platform lets you discover breathtaking images, exciting space
            missions, and real-time data about celestial bodies. Whether you're
            fascinated by the cosmos, love stunning astronomy pictures, or want
            to track near-Earth objects, you've come to the right place! 🚀
          </p>
        </div>

        <div className="cards-container">
          <Card
            title="Astronomy Picture of the Day"
            link={routes.APOD}
            description="Want to see a stunning image of the day NASA chose today? Click here to witness the wonders of the universe!"
            style={{ backgroundColor: "#f2a7c7" }}
          />

          <Card
            title="Mars Rover Photos"
            link={routes.MRP}
            description="Ready to explore the Red Planet? Check out Mars through the eyes of NASA's rovers and get an up-close look at the Martian surface!"
            style={{ backgroundColor: "#efbb5b" }}
          />

          <Card
            title="Near Earth Objects"
            link={routes.NEO}
            description="Ever wondered what's lurking near Earth? Take a peek at the asteroids and near-Earth objects flying by our planet!"
            style={{ backgroundColor: "#f8f899" }}
          />

          <Card
            title="Earth Imagery"
            link={routes.EI}
            description="Curious about how Earth looks from space? See real-time images of our beautiful planet captured from above!"
            style={{ backgroundColor: "#b6e3ff" }}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
