import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { ThemeContextType } from "../../types/ThemeContext";

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("UseTheme must be used within a ThemeProvider!");
  }

  return context;
};
