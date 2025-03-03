import { Link, useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import "../styles/navigation.css";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav>
      <ul>
        {[
          { path: "/", label: "Home" },
          { path: "/astronomy-picture-of-the-day", label: "APOD" },
          { path: "/mars-rover-photos", label: "Mars Rover" },
          { path: "/near-earth-objects", label: "NEO" },
          { path: "/earth-imagery", label: "Earth Imagery" },
        ].map(({ path, label }) => (
          <li key={path}>
            <Link to={path}>
              <Button
                variant="contained"
                sx={{
                  borderRadius: "20px",
                  bgcolor: location.pathname === path ? "#1976d2" : "#444",
                  transition: "transform 0.3s ease, background-color 0.3s ease",
                  "&:hover": {
                    bgcolor: location.pathname === path ? "#1565c0" : "#616161",
                    transform: "scale(1.1)",
                  },
                }}
              >
                {label}
              </Button>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
