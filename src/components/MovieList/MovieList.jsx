import { MoviesItem } from "../MoviesItem/MoviesItem";
import css from "./MovieList.module.css";

export const MovieList = ({ items }) => {
  return (
    <ul className={css.galery}>
      {items.map((item) => (
        <MoviesItem key={item.id} item={item} />
      ))}
    </ul>
  );
};
