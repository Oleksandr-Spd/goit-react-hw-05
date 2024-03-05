import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const Navigation = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <ul className={css.navList}>
          <li className={css.navItem}>
            <NavLink to="/" className={buildLinkClass}>
              Home <FontAwesomeIcon icon={faHouse} />
            </NavLink>
          </li>
          <li className={css.navItem}>
            <NavLink to="/movies" className={buildLinkClass}>
              Movies <FontAwesomeIcon icon={faPlayCircle} />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
