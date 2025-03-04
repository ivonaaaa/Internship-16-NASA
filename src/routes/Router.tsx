import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/HomePage";
import APODPage from "../pages/AstronomyPictureOfTheDayPage";
/*
import MRPPage from "../pages/MarsRoverPhotosPage";
import NEOPage from "../pages/NearEarthObjectsPage";
import EIPage from "../pages/EarthImageryPage";
import DetailsPage from "../pages/DetailsPage";
import NotFoundPage from "../pages/404Page";
*/

const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/astronomy-picture-of-the-day" element={<APODPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
