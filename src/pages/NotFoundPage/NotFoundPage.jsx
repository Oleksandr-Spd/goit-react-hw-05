import { NavLink } from "react-router-dom";
import css from "./NotFoudPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={css.pageContainer}>
      <NavLink className={css.backLink} to="/">
        Back to home
      </NavLink>
      <h1>Ooops</h1>
    </div>
  );
}
