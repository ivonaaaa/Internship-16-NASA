import { FC } from "react";
import { Button } from "@mui/material";
import "../styles/other/error.css";

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

export const ErrorFallback: FC<ErrorFallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <div>
      <img src="src/assets/images/alien.png" className="error-image"></img>
      <h2 className="error-title">Uh oh, something went wrong :/</h2>
      <p>Error: {error.message}</p>
      <Button
        onClick={resetErrorBoundary}
        variant="contained"
        sx={{
          borderRadius: "25px",
          mb: "-30px",
        }}
      >
        Try again
      </Button>
    </div>
  );
};
