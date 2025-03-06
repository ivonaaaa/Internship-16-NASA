import { Link, useLocation } from "react-router-dom";
import { Button, Switch, FormControlLabel } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../contexts/theme-provider/ThemeContext";
import "../styles/other/navigation.css";

const Navigation = () => {
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={`navigation ${isDarkMode ? "dark" : "light"}`}>
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
        <li>
          <FormControlLabel
            label="Theme"
            htmlFor="theme-switch"
            control={
              <Switch
                id="theme-switch"
                checked={!isDarkMode}
                onChange={toggleTheme}
                color="primary"
                sx={{
                  "& .MuiSwitch-switchBase.Mui-checked": {
                    color: "#1976d2",
                  },
                  "& .MuiSwitch-track": {
                    backgroundColor: isDarkMode ? "#1976d2" : "#6345l6",
                  },
                }}
              />
            }
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
