import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <img src="src/assets/alien.png" className="error-image"></img>
      <h1>Error 404: Not Found</h1>
      <p>The page you have tried to access does not exist.</p>
      <Link to="/">
        <Button
          variant="contained"
          sx={{
            borderRadius: "25px",
          }}
        >
          Go to HomePage
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
