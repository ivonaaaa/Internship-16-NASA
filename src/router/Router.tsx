import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "../constants/routes";
import { Layout } from "../pages/Layout";
import HomePage from "../pages/HomePage";
import APODPage from "../pages/AstronomyPictureOfTheDayPage";
import MRPPage from "../pages/MarsRoverPhotosPage";
import NEOPage from "../pages/NearEarthObjectsPage";
/*
import EIPage from "../pages/EarthImageryPage";
import DetailsPage from "../pages/DetailsPage";
import NotFoundPage from "../pages/404Page";
*/

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={routes.HOME} element={<HomePage />} />
          <Route path={routes.APOD} element={<APODPage />} />
          <Route path={routes.MRP} element={<MRPPage />} />
          <Route path={routes.NEO} element={<NEOPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
