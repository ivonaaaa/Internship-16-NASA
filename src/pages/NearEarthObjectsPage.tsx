import React from "react";
import useNEO from "../hooks/useNEO";
import NEOCard from "../components/NearEarthObjectsPage/NEOCard";
import { CircularProgress } from "@mui/material";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import "../styles/NEO-page.css";

const NEOPage: React.FC = () => {
  const { neoData, loading, error } = useNEO();

  if (loading) return <CircularProgress />;
  if (error) return <p>{error}</p>;

  const chartData = neoData
    ? Object.keys(neoData.near_earth_objects).map((date) => ({
        date,
        objects: neoData.near_earth_objects[date].map((neo) => ({
          name: neo.name,
          missDistance: parseFloat(
            neo.close_approach_data[0].miss_distance.kilometers
          ),
        })),
      }))
    : [];

  return (
    <div className="neo-container">
      <h1>Near Earth Objects Tracker</h1>

      <ResponsiveContainer width="80%" height={500} className="graph-container">
        <LineChart data={chartData.flatMap((data) => data.objects)}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
            content={({ payload }) => {
              if (payload && payload.length > 0) {
                const { name, missDistance } = payload[0].payload;
                return (
                  <div className="custom-tooltip">
                    <h4>{name}</h4>
                    <p>Miss Distance: {missDistance} km</p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Legend />
          <Line type="monotone" dataKey="missDistance" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>

      <h1 className="secondary-headline">List of Near Earth Objects</h1>
      <div className="neo-gallery">
        {neoData &&
          neoData.near_earth_objects &&
          Object.keys(neoData.near_earth_objects).map((date) => (
            <div key={date}>
              <h3>{date}</h3>
              {neoData.near_earth_objects[date].map((neo) => (
                <NEOCard key={neo.id} neo={neo} />
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default NEOPage;
