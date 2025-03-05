import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "../constants/routes";
import { Layout } from "../pages/Layout";
import HomePage from "../pages/HomePage/HomePage";
import APODPage from "../pages/APOD/AstronomyPictureOfTheDayPage";
import MRPPage from "../pages/MRP/MarsRoverPhotosPage";
import NEOPage from "../pages/NEO/NearEarthObjectsPage";
import EIPage from "../pages/EI/EarthImageryPage";
import APODDetail from "../pages/APOD/APODDetailPage";
import MarsRoverDetail from "../pages/MRP/MRPDetailPage";
import NEODetail from "../pages/NEO/NEODetailPage";
import NotFound from "../pages/404Page";
import ErrorBoundary from "../components/ErrorBoundary";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          <Route element={<Layout />}>
            <Route path={routes.HOME} element={<HomePage />} />
            <Route path={routes.APOD} element={<APODPage />} />
            <Route path={routes.MRP} element={<MRPPage />} />
            <Route path={routes.NEO} element={<NEOPage />} />
            <Route path={routes.EI} element={<EIPage />} />
            <Route path="/details/apod/:date" element={<APODDetail />} />
            <Route
              path="/details/mars/:rover/:id"
              element={<MarsRoverDetail />}
            />
            <Route path="/details/neo/:id" element={<NEODetail />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default AppRouter;
