import { nanoid } from "nanoid";
import css from "./MovieDescr.module.css";

export const MovieDescr = ({ film }) => {
  return (
    <div className={css.aboutFilm}>
      <h1 className={css.filmTitle}>
        {film.original_title} (
        {film.release_date && film.release_date.slice(0, 4)})
      </h1>
      <p className={css.filmTagline}>{film.tagline}</p>

      <ul className={css.descrList}>
        <li className={css.descrItem}>
          <h2 className={css.subtitle}>User Srore:</h2>
          <p className={css.subtitleDescr}>{film.vote_average}</p>
        </li>
        <li className={css.descrItem}>
          <h2 className={css.subtitle}>Geners:</h2>
          <p className={css.subtitleDescr}>
            {film.genres &&
              film.genres.map((genre, index) => (
                <span key={`${nanoid()}/${genre.id}`}>
                  {genre.name}
                  {index < film.genres.length - 1 && ", "}
                </span>
              ))}
          </p>
        </li>
        <li className={css.descrItem}>
          <h2 className={css.subtitle}>Country:</h2>
          <p className={css.subtitleDescr}>
            {film.production_countries &&
              film.production_countries.map((production_countrie, index) => (
                <span key={`${nanoid()}/${production_countrie.id}`}>
                  {production_countrie.name}
                  {index < film.production_countries.length - 1 && ", "}
                </span>
              ))}
          </p>
        </li>
        <li className={css.descrItem}>
          <h2 className={css.subtitle}>Overview:</h2>
          <p className={css.subtitleDescr}>{film.overview}</p>
        </li>
      </ul>
    </div>
  );
};
