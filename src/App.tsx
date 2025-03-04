import React from "react";
import AppRouter from "./router/Router";
import { ThemeProvider } from "./contexts/theme-provider/ThemeProvider";
import "./App.css";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppRouter />;
    </ThemeProvider>
  );
};

export default App;
