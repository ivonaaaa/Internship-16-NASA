import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "../constants/routes";
import Home from "../pages/HomePage";
import APODPage from "../pages/AstronomyPictureOfTheDayPage";
import MRPPage from "../pages/MarsRoverPhotosPage";
import NEOPage from "../pages/NearEarthObjectsPage";
import EIPage from "../pages/EarthImageryPage";
import DetailsPage from "../pages/DetailsPage";
import NotFoundPage from "../pages/404Page";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.APOD} element={<APODPage />} />
        <Route path={routes.MRP} element={<MRPPage />} />
        <Route path={routes.NEO} element={<NEOPage />} />
        <Route path={routes.EI} element={<EIPage />} />
        <Route path={routes.DETAILS} element={<DetailsPage />} />
        <Route path={routes.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
