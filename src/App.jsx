import { Route, Routes } from "react-router-dom";

import "./App.css";

import { Navigation } from "./components/Navigation/Navigation";
import { MovieCast } from "./components/MovieCast/MovieCast";
import { MovieReviews } from "./components/MovieReviews/MovieReviews";
import { Trailer } from "./components/Trailer/Trailer";
import { Suspense, lazy } from "react";
import { Loader } from "./components/Loader/Loader";

const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);
// const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
// const MovieReviews = lazy(() =>
//   import("./components/MovieReviews/MovieReviews")
// );
// const Trailer = lazy(() => import("./components/Trailer/Trailer"));

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
            <Route path="trailer" element={<Trailer />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
