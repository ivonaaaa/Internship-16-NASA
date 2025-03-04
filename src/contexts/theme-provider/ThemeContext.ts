import { createContext } from "react";
import { ThemeContextType } from "../../types/ThemeContext";

export const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: true,
  toggleTheme: () => {},
});
