import { NavLink } from "react-router-dom";
import css from "./DetailsNavigation.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const DetailsNavigation = () => {
  return (
    <nav className={css.nav}>
      <ul className={css.navList}>
        <li className={css.navItem}>
          <NavLink className={buildLinkClass} to="cast">
            Cast
          </NavLink>
        </li>
        <li className={css.navItem}>
          <NavLink className={buildLinkClass} to="reviews">
            Reviews
          </NavLink>
        </li>
        <li className={css.navItem}>
          <NavLink className={buildLinkClass} to="trailer">
            Treiler
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
