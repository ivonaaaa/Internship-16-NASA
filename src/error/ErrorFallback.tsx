import { FC } from "react";
import { Button } from "@mui/material";
import { ErrorFallbackProps } from "../types/ErrorTypes";
import "../styles/other/error.css";

export const ErrorFallback: FC<ErrorFallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <div>
      <img
        src="src/assets/images/alien.webp"
        alt="animated alien"
        className="error-image"
      ></img>
      <h2 className="error-title">Uh oh, something went wrong :/</h2>
      <p className="error-message">Error: {error.message}</p>
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
