import { Fragment } from "react/jsx-runtime";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import "../styles/other/layout.css";
import "../styles/App.css";

export const Layout = () => {
  return (
    <div className="layout-container">
      <Fragment>
        <Navigation />
        <div className="page-content">
          <Outlet />
        </div>
      </Fragment>
    </div>
  );
};
