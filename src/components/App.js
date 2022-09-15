import { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Loader } from "./Loader/Loader";
import { SharedLayout } from "./SharedLayout/SharedLayout";
// import { Cast } from "../pages/Cast/Cast";
// import { Reviews } from "../pages/Reviews";
// import { Home } from "../pages/Home";
// import { Movies } from "../pages/Movies";
// import { MovieDetails } from "../pages/MovieDetails";


const Home = lazy(() => import("../pages/Home"));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('../pages/Cast/Cast'));
const Reviews = lazy(() => import('../pages/Reviews'));

export const App = () => {
  
  return (
    <>
      <SharedLayout />
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />}></Route>
        </Routes>
      </Suspense>
    </>
  );
};