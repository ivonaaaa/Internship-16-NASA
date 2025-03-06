import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <img
        src="src/assets/images/space2-bg.webp"
        className="error-background"
      ></img>
      <img
        src="src/assets/images/alien.webp"
        alt="animated alien"
        className="error-image"
      ></img>
      <h1 className="error-title">Oops! Got lost in space?</h1>
      <p className="error-message">
        The page you have tried to access does not exist.
      </p>
      <Link to="/">
        <Button
          variant="contained"
          sx={{
            borderRadius: "25px",
            mt: "5px",
          }}
        >
          Go to HomePage
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
