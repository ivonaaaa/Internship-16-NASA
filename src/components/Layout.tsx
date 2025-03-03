import React, { ReactNode } from "react";
import Navigation from "../components/Navigation";
import "../styles/layout.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout-container">
      <Navigation />
      <div className="page-content">{children}</div>
    </div>
  );
};

export default Layout;
