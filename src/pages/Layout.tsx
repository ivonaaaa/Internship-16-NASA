import { Fragment } from "react/jsx-runtime";
import { Outlet, useLocation } from "react-router-dom";
import { routes } from "../constants/routes";
import { motion, AnimatePresence } from "framer-motion";
import { transition } from "../constants/PageTransition";
import Navigation from "../components/Navigation";
import "../styles/other/layout.css";
import "../styles/App.css";

export const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === routes.HOME;
  const isSidePage = !Object.values(routes).includes(location.pathname);

  return (
    <div className="layout-container">
      <Navigation />
      <Fragment>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={isHomePage || isSidePage ? undefined : "initial"}
            animate={isHomePage || isSidePage ? undefined : "animate"}
            exit={isHomePage || isSidePage ? undefined : "exit"}
            variants={isHomePage || isSidePage ? {} : transition}
            className="page-content"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </Fragment>
    </div>
  );
};
