import { Link, useLocation } from "react-router-dom";
import { Poster } from "../Poster/Poster";
import css from "./MoviesItem.module.css";

export const MoviesItem = ({ item }) => {
  const location = useLocation();
  return (
    <li key={item.id} className={css.galleryItem}>
      <Link to={`/movies/${item.id}`} state={location}>
        <Poster
          width="200px"
          height="300px"
          fileSize="w200"
          filePath={item.poster_path}
        />
      </Link>
      <p className={css.posterDescr}>
        {item.original_title} <br />
        {item.release_date.slice(0, 4)}
      </p>
    </li>
  );
};
