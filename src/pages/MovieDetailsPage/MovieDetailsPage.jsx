import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import css from "./MovieDetailsPage.module.css";
import { getFilmsById } from "../../components/Api";
import { Suspense, useEffect, useRef, useState } from "react";
import { Poster } from "../../components/Poster/Poster";
import { MovieDescr } from "../../components/MovieDescr/MovieDescr";
import { DetailsNavigation } from "../../components/DetailsNavigation/DetailsNavigation";
import { Loader } from "../../components/Loader/Loader";
import { Error } from "../../components/Error/Error";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";

export default function MovieDetailsPage() {
  const location = useLocation();
  const backLinkRef = useRef(location.state);

  console.log(location);
  const { movieId } = useParams();
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        setError(false);
        const fetchedMovie = await getFilmsById(movieId);
        setFilm(fetchedMovie);
      } catch (error) {
        setError(true);
      } finally {
        clearTimeout(timeoutId);
        setLoading(false);
      }
    }
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2000);

    fetchData();
  }, [movieId]);

  return (
    <div className={css.detailsPageContainer}>
      <NavLink to={backLinkRef.current ?? "movies"} className={css.backLink}>
        <FontAwesomeIcon icon={faLeftLong} /> &nbsp; Back to Movies Page
      </NavLink>
      {error && <Error />}
      {loading && <Loader />}
      {film && (
        <div>
          <div className={css.filmBox}>
            <Poster
              key={film.id}
              width="500px"
              height="750px"
              fileSize="w500"
              filePath={film.poster_path}
            />
            <MovieDescr film={film} />
          </div>
          <DetailsNavigation />
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </div>
  );
}
// const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
// const MovieReviews = lazy(() =>
//   import("./components/MovieReviews/MovieReviews")
// );
// const Trailer = lazy(() => import("./components/Trailer/Trailer"));
